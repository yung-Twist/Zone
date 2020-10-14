module.exports = {
    base:'/Zone/', 
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
        theme:['z16', 'shizuku', 'wanko'],
        // 导航栏链接
        nav: [
            { 
                text: '前端', 
                icon:'reco-api',
                items:[
                    {
                        text:'Vue',
                        link:'/article/Vue/'
                    }
                ]
            }
        ],
        lastUpdated: '最后更新时间',
        // GitHub
        repo: 'yung-Twist',
        repoLabel: 'GitHub',
        // 博客配置
        blogConfig: {
            category: {
              location: 2,     // 在导航栏菜单中所占的位置，默认2
              text: 'Category' // 默认文案 “分类”
            },
            tag: {
              location: 3,     // 在导航栏菜单中所占的位置，默认3
              text: 'Tag'      // 默认文案 “标签”
            }
        },
        subSidebar: 'auto',
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
            clean: false,
            modelStyle: {
              left: "60px",
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
        ]
    ]
}