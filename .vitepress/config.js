import demoBlockPlugin from '../index'
export default {
    srcDir: "./",
    lang: 'zh-CN',
    title: 'VitePress',    // 标题
    description: 'Just playing around.',    // 描述
    markdown: {
        config: (md) => {
            md.use(demoBlockPlugin)
        }
    }
}