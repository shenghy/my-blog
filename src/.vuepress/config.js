// .vuepress/config.js

module.exports = {
    // 网站 Title
    title: '技术胖-胜洪宇关注web前端技术-前端免费视频第一博客',
  
    // 网站描述
    description: '技术胖-胜洪宇关注web前端技术-前端免费视频第一博客',
  
    // 网站语言
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
  
    // 使用的主题
    theme: 'meteorlxy',
  
    // 主题配置
    themeConfig: {
      // 主题语言，参考下方 [主题语言] 章节
      lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
  
      // 个人信息（没有或不想设置的，删掉对应字段即可）
      personalInfo: {
        // 昵称
        nickname: '技术胖',
  
        // 个人简介
        description: '光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。',
  
        // 电子邮箱
        email: 'web0432@126.com',
  
        // 所在地
        location: '中国-濮阳',
  
        // 组织
        // organization: 'Xi\'an Jiao Tong University',
  
        // 头像
        // 设置为外部链接
        avatar: 'http://blogimages.jspang.com/blogtouxiang1.jpg',
        // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
        // avatar: '/img/avatar.jpg',
        
  
        // 社交平台帐号信息
        sns: {
          // Github 帐号和链接
          github: {
            account: 'shenghy',
            link: 'https://github.com/shenghy',
          },
  
          // Facebook 帐号和链接
          // facebook: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://www.facebook.com/meteorlxy.cn',
          // },
  
          // LinkedIn 帐号和链接
          // linkedin: {
          //   account: 'meteorlxy',
          //   link: 'http://www.linkedin.com/in/meteorlxy',
          // },
  
          // Twitter 帐号和链接
          // twitter: {
          //   account: 'meteorlxy_cn',
          //   link: 'https://twitter.com/meteorlxy_cn',
          // },
  
          // 新浪微博 帐号和链接
          // weibo: {
          //   account: '@焦炭君_Meteor',
          //   link: 'https://weibo.com/u/2039655434',
          // },
  
          // 知乎 帐号和链接
          // zhihu: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://www.zhihu.com/people/meteorlxy.cn',
          // },
  
          // 豆瓣 帐号和链接
          // douban: {
          //   account: '159342708',
          //   link: 'https://www.douban.com/people/159342708',
          // },
  
          // Reddit 帐号和链接
          // reddit: {
          //   account: 'meteorlxy',
          //   link: 'https://www.reddit.com/user/meteorlxy',
          // },
  
          // Medium 帐号和链接
          // medium: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://medium.com/@meteorlxy.cn',
          // },
  
          // Instagram 帐号和链接
          // instagram: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://www.instagram.com/meteorlxy.cn',
          // },
  
          // GitLab 帐号和链接
          // gitlab: {
          //   account: 'meteorlxy',
          //   link: 'https://gitlab.com/meteorlxy',
          // },
  
          // Bitbucket 帐号和链接
          // bitbucket: {
          //   account: 'meteorlxy',
          //   link: 'https://bitbucket.org/meteorlxy',
          // },
  
          // Docker Hub 帐号和链接
          // docker: {
          //   account: 'meteorlxy',
          //   link: 'https://hub.docker.com/u/meteorlxy',
          // },
        },
      },
  
      // 上方 header 的相关设置
      header: {
        // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
        background: {
          // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
          // url: '/assets/img/bg.jpg',
  
          // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
          useGeo: true,
        },
  
        // 是否在 header 显示标题
        showTitle: true,
      },
  
      // 是否显示文章的最近更新时间
      lastUpdated: true,
  
      // 顶部导航栏内容
      nav: [
        { text: '首页', link: '/', exact: true },
        { text: '文章', link: '/posts/', exact: false },
        { text: '生活', link: '/posts/2016/01/01/vlog.html'},
      ],
      // 评论配置，参考下方 [页面评论] 章节
      comments: {
        owner: 'shenghy',
        repo: 'my-blog',
        clientId: '9a678bc8e26647f7768e',
        clientSecret: '8f66e320aab28596f6182a4b6fe04f40958a0829',
        autoCreateIssue: process.env.NODE_ENV !== 'development',
      },
    },
  }