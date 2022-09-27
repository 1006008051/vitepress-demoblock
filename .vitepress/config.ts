import demoBlock from '../demoBlock/index';
export default {
    srcDir: "./",
    lang: 'zh-CN',
    title: 'vitepress-demoblock',    // 标题
    description: '基于vitepress最新版的组件库代码示例插件',    // 描述
    lastUpdated: true, // 上次更新时间
    markdown: {
        headers: {
            level: [0, 0]
        },
        config: (md) => {
            md.use(demoBlock)
        }
    },
    themeConfig: {
        // 顶部导航
        nav: [
            { text: '开发指南', link: '/docs/guide/quickstart' },
            { text: '组件演示', link: '/docs/guide/11' },
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
            '/docs/guide/': [
                {
                    text: '开发指南',
                    items: [
                        {
                            text: '设计',
                            link: '/docs/guide/devise'
                        },
                        {
                            text: '快速上手',
                            link: '/docs/guide/quickstart'
                        },
                        {
                            text: '定制主题',
                            link: '/docs/guide/customize-theme'
                        },
                        {
                            text: '更新日志',
                            link: '/docs/guide/changelog'
                        },
                    ]
                },
                {
                    text: '组件演示',
                    items: [
                        {
                            text: '安装',
                            link: '/docs/guide/installation'
                        },
                    ]
                }
            ]
        },
        // 社交信息栏
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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