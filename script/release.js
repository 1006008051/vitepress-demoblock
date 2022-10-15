import { execSync } from "child_process";
import { readFileSync, writeFileSync, copyFileSync } from "fs";
import path from 'path';
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pkg = readFileSync("./package.json");
let pkgJSON = JSON.parse(pkg);
let version = pkgJSON.version;
// 获取发版的下一个版本
function getNextVersion() {
    let versionArr = version.split(".");
    for (let i = versionArr.length - 1; i > 0; i--) {
        let iVersion = Number(versionArr[i]);
        if (iVersion > 99 && i != 0) continue;
        versionArr[i] = iVersion + 1; break;
    }
    return versionArr.join(".")
};

// 复制并写入package.json
function writePackage() {
    let releasePkg = Object.assign(pkgJSON, {
        private: false,
        version: getNextVersion()
    });
    writeFileSync(path.resolve(__dirname, "package.json"), JSON.stringify(releasePkg));
};
writePackage();

// 复制 demo.vue, d.ts
copyFileSync(path.resolve(__dirname, "../README.md"), path.resolve(__dirname, "README.md"));
copyFileSync(path.resolve(__dirname, "../src/demoblock/demo.vue"), path.resolve(__dirname, "demo.vue"));
copyFileSync(path.resolve(__dirname, "../src/demoblock/index.d.ts"), path.resolve(__dirname, "index.d.ts"));
copyFileSync(path.resolve(__dirname, "../script/src/demoblock/index.js"), path.resolve(__dirname, "index.js"));

// npm publish
execSync(`cd ./script && npm publish`);
