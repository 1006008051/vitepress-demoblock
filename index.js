
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getHighlighter } from 'shiki';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 同步定义shiki的codeToHtml
const { codeToHtml } = await getHighlighter({
    theme: 'material-palenight'
});

// demo组件的根路径
const demoComponentsPath = path.resolve(__dirname, 'demo.vue');

/**
 * 同一项目下的两个绝对路径转为相对路径（path2相对于path1）
 * @return {string} 转后的相对路径，
 */
const getRelativePath = (path1 = "", path2 = "") => {
    const path1Arr = path1.split('\\');
    const path2Arr = path2.split('\\');
    const path1ArrLen = path1Arr.length;
    let relativePath = '';
    for (let i = 0; i < path1ArrLen; i++) {
        if (path2Arr[i] != path1Arr[i]) {
            if (path1ArrLen - i > 1) {
                relativePath += new Array(path1ArrLen - i).join('../');
            } else {
                relativePath = './';
            }
            relativePath += path2Arr.splice(i).join('/');
            break;
        }
    }
    return relativePath;
};

/**
 * @name getDemoLableAttr
 * @desc 获取demo标签里的属性
 * @param {string} demo demo的标签字符串
 * @param {string} attr 需要获取的attr
 * @return {string} 返回获取到的demo标签属性，如src
 */
const getDemoLableAttr = (demo = "", attr = "") => {
    let reg = new RegExp(`<demo[^>]+${attr}=['"]([^'"]+)['"]`);
    let match = demo.match(reg);
    if (match && match.length >= 1) {
        return match[1]
    }
    return "";
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
            const demoSrc = getDemoLableAttr(demo, 'src'); //demo src
            const demoLang = getDemoLableAttr(demo, 'lang') || 'vue'; //demo lang
            const demoDesc = getDemoLableAttr(demo, 'desc'); //demo desc
            const demoPath = path.resolve(docPath, '../', demoSrc);//demo md的绝对路径
            const existSrc = demoSrc && fs.existsSync(demoPath); // 判断 src 是否存在且正确
            if (existSrc) {
                const demoRelativePath = getRelativePath(demoComponentsPath, demoPath);// 获取demo的相对路径
                let codeStr = fs.readFileSync(demoPath).toString();//demo中间字符串
                let htmlStr = codeToHtml(codeStr, { lang: demoLang });//demo的html字符串
                let descStr = md.renderInline(demoDesc) || "";//demo的desc字符串
                let demoStr = demo.replace(
                    '>',
                    ` codeStr="${encodeURIComponent(
                        codeStr
                    )}" htmlStr="${encodeURIComponent(htmlStr)}" description="${encodeURIComponent(descStr)}" codePath="${demoRelativePath}">`
                );
                result = result.replace(demo, demoStr);
            }
        });
        return result
    }
}   
