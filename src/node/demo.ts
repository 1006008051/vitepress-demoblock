import fs from 'fs'
import path from 'path'
import { highlight } from './markdown/plugins/highlight'

export const demoPlugin = (html: string, md: any) => {
  let tagsObj: any = {
    script: [],
    components: []
  }
  const reg = /<demo[\s\S]*?>([\s\S]*?)<\/demo>/
  const reg_g = eval(`${reg}g`)
  const allDemo = html.match(reg_g)

  allDemo?.forEach((demo: any, index: number) => {
    console.log(demo)
    const src = (demo.match(/<demo[^>]+src=("|')(\S+)('|")/) || [])[2]
    const language =
      (demo.match(/<demo[^>]+language=("|')(\S+)('|")/) || [])[2] ?? 'vue'
    let codeStr = demo.match(reg)[1]
    let demoMiddle = '' //demo中间字符串
    // 如果src不存在取slot内容为codeStr
    if (!src) {
      codeStr = encodeURIComponent(highlight(codeStr, 'vue'))
      demoMiddle = demo.replace(/<demo/, `<demo htmlStr="${codeStr}"`)
    } else {
      const { realPath, urlPath, importMap } = md
      const absolutePath = path
        .resolve(realPath ?? urlPath, '../', src)
        .split(path.sep)
        .join('/')

      if (!fs.existsSync(absolutePath)) {
        const warningMsg = `${absolutePath} 文件不存在!`
        console.warn(`[vitepress]: ${warningMsg}`)
        demoMiddle = `<demo><p>${warningMsg}</p></demo>`
      } else {
        codeStr = fs.readFileSync(absolutePath).toString()
        let htmlStr = encodeURIComponent(highlight(codeStr, language))
        let componentName = `demo${index}`
        demoMiddle = demo.replace(
          '>',
          ` componentName="${componentName}" htmlStr="${htmlStr}" codeStr="${encodeURIComponent(
            codeStr
          )}" ${
            importMap
              ? `importMap="${encodeURIComponent(JSON.stringify(importMap))}"`
              : ''
          } >
                <${componentName}></${componentName}>
                `
        )
        tagsObj.script.unshift(
          `import ${componentName} from '${absolutePath}' \n`
        )
        tagsObj.components.push(componentName)
      }
    }
    html = html.replace(demo, demoMiddle)
  })
  return {
    html,
    tagsObj
  }
}
