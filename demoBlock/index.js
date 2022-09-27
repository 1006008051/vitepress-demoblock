
import fs from 'fs';
import path from 'path';
import { getHighlighter } from 'shiki';

const { codeToHtml } = await getHighlighter({
    theme: 'material-palenight',
    lineNumbers: true
});

const demoComponentsPath = path.resolve(__dirname, './demo.vue');

/**
 * 同一项目下的两个绝对路径转为相对路径（path2相对于path1）
 * @return {string} 转后的相对路径，
 */
const getRelativePath = (path1 = '', path2 = '') => {
    const path1Arr = path1.split('\\');
    const path2Arr = path2.split('\\');
    const path1ArrLen = path1Arr.length;
    let relativePath = '';
    for (let i = 0; i < path1ArrLen - 1; i++) {
        if (path2Arr[i] != path1Arr[i]) {
            if (path1ArrLen - i > 1) {
                relativePath += new Array(path1ArrLen - i).join("../");
            }
            relativePath += path2Arr.splice(i).join('/');
            break;
        }
    }
    return relativePath;
};

export default (md) => {
    const render = md.render;
    md.render = (...args) => {
        let docPath = args[1].path; // 文档路径
        let result = render.call(md, ...args); // md转之后的text
        const demoReg = /<demo[\s\S]*?>([\s\S]*?)<\/demo>/; // 匹配demo标签
        const demoReg_g = new RegExp(demoReg, 'g');
        const demoLabels = result.match(demoReg_g);// 获取所有的demo标签
        demoLabels?.forEach(async (demo) => {
            const demoSrc = (demo.match(/<demo[^>]+src=['"]([^'"]+)['"]/) || [])[1]; //demo src
            const demoLang = (demo.match(/<demo[^>]+lang=['"]([^'"]+)['"]/) || [])[1] || 'vue'; //demo lang
            const demoDesc = (demo.match(/<demo[^>]+desc=['"]([^'"]+)['"]/) || [])[1]; //demo desc
            const demoPath = path.resolve(docPath, '../', demoSrc);//demo的绝对路径
            const demoRelativePath = getRelativePath(demoComponentsPath, demoPath);            // 获取demo的相对路径
            let demoStr = ''; //demo中间字符串
            if (!demoSrc || !fs.existsSync(demoPath)) {
                demoStr = "src不存在, 请检查配置!"
            } else {
                let codeStr = fs.readFileSync(demoPath).toString();
                let htmlStr = codeToHtml(codeStr, { lang: demoLang });

                let descStr = demoDesc ? md.renderInline(demoDesc) : "";
                demoStr = demo.replace(
                    '>',
                    ` codeStr="${encodeURIComponent(
                        codeStr
                    )}" htmlStr="${encodeURIComponent(htmlStr)}" description="${encodeURIComponent(descStr)}" codePath="${demoRelativePath}">`
                );
            }
            result = result.replace(demo, demoStr);
        });
        return result
    }
}   
