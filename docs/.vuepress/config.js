module.exports = {
    // base:'/Zone/', // 绑定自己的域名不需要 base ,使用 yung-Twist.github.io/zone 需要配置base
    title: 'Zone', // 顶部标题
    description: '闲人小事', // 网站描述
    theme: 'reco', // 引用主题
    markdown: {
        lineNumbers:false // 是否在每个代码块的左侧显示行号。
    },
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }] //优化移动端
    ],
    // 主题配置
    themeConfig: {
        logo: '/logo.jpg',
        type: 'blog',
        authorAvatar: '/avatar.gif',
        // 导航栏链接
        nav: [
            { 
                text: '前端', 
                icon:'reco-api',
                items:[
                    {
                        text:'Vue',
                        link:'/article/Vue/'
                    },
                    {
                        text:'JS',
                        link:'/article/JS/'
                    },
                    {
                      text:'canvas',
                      link:'/article/canvas/'
                    },
                    {
                      text:'CSS',
                      link:'/article/CSS/'
                    }
                ]
            }
        ],
        sidebar: {
          '/article/Vue/':[
            '',
            'mock'
          ],
          '/article/CSS/':[
            '',
            'trapezoid'
          ],
          // '/views/sidebargroup/': [
          //   {
          //     title: '基础',
          //     collapsable: true,
          //     children: [
          //       '',
          //       'bar1'
          //     ]
          //   },
          //   {
          //      title: 'Group 1',   // 必要的
          //      path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          //      collapsable: false, // 可选的, 默认值是 true,
          //      sidebarDepth: 1,    // 可选的, 默认值是 1
          //      children: [
          //          '/'
          //      ]
          //   },
          // ]
        },
        displayAllHeaders: true,
        lastUpdated: '最后更新时间',
        // GitHub
        repo: 'yung-Twist',
        repoLabel: 'GitHub',
        // editLinks: true,
        // editLinkText: '编辑此页',
        // 博客配置
        blogConfig: {
            category: {
              location: 2,     // 在导航栏菜单中所占的位置，默认2
              text: '分类' // 默认文案 “分类”
            },
            tag: {
              location: 3,     // 在导航栏菜单中所占的位置，默认3
              text: 'Tag'      // 默认文案 “标签”
            }
        },
        // 评论配置
        vssueConfig:{
          showComment: false,
          platform: 'github',
          owner: 'yung-Twist',
          repo: 'Zone',
          clientId: '52350cffe80fd73e8a86',
          clientSecret: 'f60060dcd555ad86b82a9f4b4b1056e8823d9050',
          // autoCreateIssue:true
        }
    },
    
    plugins: [
        [
          // 看板娘插件
          "@vuepress-reco/vuepress-plugin-kan-ban-niang",
          {
            theme: ['haru2', 'z16', 'haru1', 'izumi', 'shizuku', 'wanko', 'miku'],
            // 隐藏所有按钮
            clean: true, 
            modelStyle: {
              left: "20px",
              bottom: "0px",
              opacity: "0.9",
              zIndex: 99999
            },
            messages:{
              welcome: '欢迎来到Zone,一个闲人的碎碎念。',
              home: '心里的花，我想要带你回家。',
              theme: '好吧，希望你能喜欢我的其他小伙伴。',
              close: '关闭看板娘',
              info:'想知道关于我的更多信息吗？'
            },
            btnStyle:{
              left: '20px',
              bottom: '40px',
            },
            messageStyle:{
              left: '40px',
              bottom: '240px',
            }
          }
        ],
        // 复制代码
        ['vuepress-plugin-code-copy', {
          successText: '复制成功'
        }]
    ]
}