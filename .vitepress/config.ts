import demoblock from '../';
export default {
    srcDir: "./",
    outDir: './docs',
    base: '/vitepress-demoblock',
    lang: 'zh-CN',
    title: 'vitepress-demoblock',    // 标题
    description: '基于vitepress最新版的组件库代码示例插件',    // 描述
    lastUpdated: true, // 上次更新时间
    markdown: {
        headers: {
            level: [0, 0]
        },
        config: (md) => {
            md.use(demoblock)
        }
    },
    themeConfig: {
        // 顶部导航
        nav: [
            { text: '开发指南', link: '/demo/guide/quickstart' },
            { text: '组件演示', link: '/demo/md/button' },
            {
                text: '相关链接', items: [
                    {
                        text: "vitepress", link: "https://vitepress.vuejs.org/"
                    },
                    {
                        text: "vue", link: "https://cn.vuejs.org/"
                    },
                    {
                        text: "vite", link: "https://cn.vitejs.dev/"
                    }
                ]
            },
        ],
        sidebar: {
            '/demo/': [
                {
                    text: '开发指南',
                    items: [
                        {
                            text: '简介',
                            link: '/demo/guide/devise'
                        },
                        {
                            text: '快速上手',
                            link: '/demo/guide/quickstart'
                        },
                        {
                            text: '定制主题',
                            link: '/demo/guide/theme'
                        },
                        {
                            text: '更新日志',
                            link: '/demo/guide/changelog'
                        },
                    ]
                },
                {
                    text: '组件演示',
                    items: [
                        {
                            text: 'Button 按钮',
                            link: '/demo/md/button'
                        },
                        {
                            text: 'Layout 布局',
                            link: '/demo/md/layout'
                        },
                        {
                            text: 'Scrollbar 滚动条',
                            link: '/demo/md/scrollbar'
                        },
                        {
                            text: 'Rate 评分',
                            link: '/demo/md/rate'
                        },
                        {
                            text: 'Avatar 头像',
                            link: '/demo/md/avatar'
                        },
                        {
                            text: 'Input 输入框',
                            link: '/demo/md/input'
                        },
                    ]
                }
            ]
        },
        // 社交信息栏
        socialLinks: [
            { icon: 'github', link: 'https://github.com/1006008051/vitepress-demoblock' }
        ],
        // 底部信息栏
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Wang Yongcun'
        },
        // 广告栏
        carbonAds: {
            code: 'CEBDT27Y',
            placement: 'vuejsorg'
        }
    }
}