import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getHighlighter } from 'shiki';
const { resolve } = path;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let codeToHtml = null;
(async () => {
    let res = await getHighlighter({
        theme: 'material-palenight'
    });
    codeToHtml = res.codeToHtml;
})();
const demoComponentsPath = resolve(__dirname, 'demo.vue');
const getRelativePath = (path1 = "", path2 = "") => {
    const path1Arr = path1.split('\\');
    const path2Arr = path2.split('\\');
    const path1ArrLen = path1Arr.length;
    let relativePath = '';
    for (let i = 0; i < path1ArrLen; i++) {
        if (path2Arr[i] != path1Arr[i]) {
            if (path1ArrLen - i > 1) {
                relativePath += new Array(path1ArrLen - i).join('../');
            }
            else {
                relativePath = './';
            }
            relativePath += path2Arr.splice(i).join('/');
            break;
        }
    }
    return relativePath;
};
const getDemoLableAttr = (demo = "", attr = "") => {
    let reg = new RegExp(`<demo[^>]+${attr}=['"]([^'"]+)['"]`);
    let match = demo.match(reg);
    if (match && match.length >= 1) {
        return match[1];
    }
    return "";
};
export default (md) => {
    const render = md.render;
    md.render = (...args) => {
        let docPath = args[1].path;
        let result = render.call(md, ...args);
        const demoReg = /<demo[\s\S]*?>([\s\S]*?)<\/demo>/;
        const demoReg_g = new RegExp(demoReg, 'g');
        const demoLabels = result.match(demoReg_g);
        demoLabels?.forEach(async (demo) => {
            const demoSrc = getDemoLableAttr(demo, 'src');
            const demoLang = getDemoLableAttr(demo, 'lang') || 'vue';
            const demoDesc = getDemoLableAttr(demo, 'desc');
            const demoPath = resolve(docPath, '../', demoSrc);
            const existSrc = demoSrc && fs.existsSync(demoPath);
            if (existSrc) {
                const demoRelativePath = getRelativePath(demoComponentsPath, demoPath);
                let codeStr = fs.readFileSync(demoPath).toString();
                let htmlStr = codeToHtml(codeStr, { lang: demoLang });
                let descStr = md.renderInline(demoDesc) || "";
                let demoStr = demo.replace('>', ` codeStr="${encodeURIComponent(codeStr)}" htmlStr="${encodeURIComponent(htmlStr)}" description="${encodeURIComponent(descStr)}" codePath="${demoRelativePath}">`);
                result = result.replace(demo, demoStr);
            }
        });
        return result;
    };
};
