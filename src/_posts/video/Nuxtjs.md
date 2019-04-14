---
category: 视频教程
tags:
  - Vue
date: 2018-02-26
title: Nuxt.js免费视频教程 开启SSR渲染 ( 共10集)
vssue-title: nuxtjs
---

Nuxt.js简单的说是Vue.js的通用框架，最常用的就是用来作SSR（服务器端渲染）。再直白点说，就是Vue.js原来是开发SPA（单页应用）的，但是随着技术的普及，很多人想用Vue开发多页应用，并在服务端完成渲染。这时候就出现了Nuxt.js这个框架，她简化了SSR的开发难度。还可以直接用命令把我们制作的vue项目生成为静态html。



<!-- more -->

## 第00节：课程介绍

Nuxt.js简单的说是Vue.js的通用框架，最常用的就是用来作SSR（服务器端渲染）。再直白点说，就是Vue.js原来是开发SPA（单页应用）的，但是随着技术的普及，很多人想用Vue开发多页应用，并在服务端完成渲染。这时候就出现了Nuxt.js这个框架，她简化了SSR的开发难度。还可以直接用命令把我们制作的vue项目生成为静态html。
<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=o0559lkvhky&tiny=0&auto=0" allowfullscreen></iframe>

**那服务器端渲染到底有什么好处那？**

最主要的原因时SPA（单页应用）不利于搜索引擎的SEO操作。比如你作一个新闻网站，流量的一个主要来源是通过百度、谷歌、bing这些搜索引擎，但是它们对SPA的抓取并不好，特别是百度根本没法抓取到SPA的内容页面，所以我们必须把我们的应用在服务端渲染成适合搜索引擎抓取的页面，再下载到客户端。那Nuxt.js适合作新闻、博客、电影、咨询这样的需要搜索引擎提供流量的项目。如果你要作移动端的项目，就没必要使用这个框架了。（其实Nuxt.js个人觉的是一个解决方案）

如果你是一个Vuer（vue程序员），那不会这个框架，说明你的技能没有全部点亮，那每天用十多分钟，跟着技术胖把这个技能点亮吧。

**什么是SSR？**

SSR，即服务器渲染，就是在服务器端将对Vue页面进行渲染生成html文件，将html页面传递给浏览器。

SSR两个优点：

- SEO 不同于SPA的HTML只有一个无实际内容的HTML和一个app.js，SSR生成的HTML是有内容的，这让搜索引擎能够索引到页面内容。
- 更快内容到达时间 传统的SPA应用是将bundle.js从服务器获取，然后在客户端解析并挂载到dom。而SSR直接将HTML字符串传递给浏览器。大大加快了首屏加载时间。

Nuxt.js的官方网站是这样介绍的：
>Nuxt.js 是一个基于 Vue.js 的通用应用框架。
通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。

Nuxt.js是特点（优点）：

- 基于 Vue.js
- 自动代码分层
- 服务端渲染
- 强大的路由功能，支持异步数据
- 静态文件服务
- ES6/ES7 语法支持
- 打包和压缩 JS 和 CSS
- HTML头部标签管理
- 本地开发支持热加载
- 集成ESLint
- 支持各种样式预处理器： SASS、LESS、 Stylus等等

**课程说明:**

课程采用文章+视频的形式，你可以先看视频，文章作为你的学习记录，在敲代码或复习时使用。

视频每周更新二到三集（我并不是全职讲师，还是一线敲代码的程序员，只能回家后进行录制）。

本课程全部免费观看，博客也没有任何广告，如果你觉的对你有帮助，希望右侧扫码打赏，以维持小站的生计。

**学习所需知识:**

熟悉这些知识：HTML+CSS、JavaScript、Vue的基础知识。

如果你已经做过一两个Vue项目那就再好不过了，没有也不用气馁，我会照顾新的小伙伴，放慢编码速度，多作代码解释的。

## 第01节：Nuxt环境搭建和Hello World

如果你搜到了这门课程，对SSR一定不陌生，在课程介绍里已经简单讲过SSR，我就直接开始说使用Nuxt.js这个框架。这节我们就来安装开发环境和作一个最简单的Hello World出来。

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=w05611590b2&tiny=0&auto=0" allowfullscreen></iframe>

**nuxt.js安装**

在使用npm前你需要安装Node到系统中，如果你还不会安装Node，那就不要学这节课了，而是从技术胖的Vue基础课程开始学起吧，等基础都学会了再来学这个也不迟。

1.用npm来安装vue-cli这个框架，如果你已经安装过了，可以省略这步。

```
npm install vue-cli -g
```
这个根据你的网络环境不同，安装的速度不仅相同，如果你的网络环境实在不好，可以考虑使用cnpm来进行安装。（在实际开发中我会尽量避免使用cnpm来进行安装，因为会出现一些未知的错误。）

安装完成后可以使用vue -V 来测试是否安装成功。（注意：这里要使用大写的V，小写无效）。

2.使用vue安装 nuxt

安装好vue-cli后，就可以使用init命令来初始化Nuxt.js项目。

```
vue init nuxt/starter
```

这时候他会在github上下载模版，然后会询问你项目的名称叫什么，作者什么的，这些完全可以根据自己的爱好填写。

3.使用npm install安装依赖包

```
npm install
```

这个过程是要等一会的，如果你这个过程安装失败，也不要慌张，你可以直接诶删除项目中的node_modules文件夹后，重新npm install进行安装。

4.使用npm run dev 启动服务

```
npm run dev
```
5.在浏览器输入 localhost:3000,可以看到结果。

**Hello World**

学程序国际惯例的第一节都是来个Hello World ，我们先来体验一下。

在项目根目录下找到/pages/index.vue文件，让后把项目名称改写成Hello World。框架支持热更新，所以你不用刷新就自动更新了。

（具体操作步骤看视频吧，我就不截图给大家了）

总结：这节课的内容很简单，但是要注意自己的网络环境，安装失败不要气馁，删除node_modules重新进行安装。快动手跟着技术胖做一做吧，不作你是学不会的。

## 第02节：Nuxt目录结构详讲

上节课我们已经顺利安装好了开发环境，这节课我们就详细讲解下每个文件夹和文件的用途，并把状态文件作一个详细介绍。



<iframe frameborder="0"  width="100% "src="https://v.qq.com/txp/iframe/player.html?vid=a0565u5t8qz" allowFullScreen="true"></iframe>

**目录结构：**

Nuxt自动生产了项目目录，我们先来一个一个介绍一下。

```
|-- .nuxt                            // Nuxt自动生成，临时的用于编辑的文件，build
|-- assets                           // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
|-- components                       // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
|-- layouts                          // 布局目录，用于组织应用的布局组件，不可更改。
|-- middleware                       // 用于存放中间件
|-- pages                            // 用于存放写的页面，我们主要的工作区域
|-- plugins                          // 用于存放JavaScript插件的地方
|-- static                           // 用于存放静态资源文件，比如图片
|-- store                            // 用于组织应用的Vuex 状态管理。
|-- .editorconfig                    // 开发工具格式配置
|-- .eslintrc.js                     // ESLint的配置文件，用于检查代码格式
|-- .gitignore                       // 配置git不上传的文件
|-- nuxt.config.json                 // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package.json                     // npm包管理配置文件
```
**主要文件介绍：**

这部分内容我就在视频中讲解了，不作过多的笔记介绍，小伙伴可以看视频学习。


## 第03节：Nuxt常用配置项

已经了解Nuxt生成项目的目录结构后，其实就可以愉快的玩耍了，但是感觉还是收到了很多约束，比如开发时的IP地址和端口（localhost:3000）和公用的CSS，这节课我们就学习一些Nuxt的常用配置，让我们开发的更自由。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=x060068iux8" allowFullScreen="true"></iframe>



**配置IP和端口：**

开发中经常会遇到端口被占用或者指定IP的情况。我们需要在根目录下的package.json里对config项进行配置。比如现在我们想把IP配置成127.0.0.1，端口设置1818。

/package.json

```
"config":{
    "nuxt":{
      "host":"127.0.0.1",
      "port":"1818"
    }
  },
```
配置好后，我们在终端中输入npm run dev，然后你会看到服务地址改为了127.0.0.1:1818.

**配置全局CSS**

在开发多页项目时，都会定义一个全局的CSS来初始化我们的页面渲染，比如把padding和margin设置成0，网上也有非常出名的开源css文件normailze.css。要定义这些配置，需要在nuxt.config.js里进行操作。

比如现在我们要把页面字体设置为红色，就可以在assets/css/normailze.css文件，然后把字体设置为红色。

/assets/css/normailze.css

```
html{
    color:red;
}
```
/nuxt.config.js

```
  css:['~assets/css/normailze.css'],
```

设置好后，在终端输入npm run dev 。然后你会发现字体已经变成了红色。

配置webpack的loader

在nuxt.config.js里是可以对webpack的基本配置进行覆盖的，比如现在我们要配置一个url-loader来进行小图片的64位打包。就可以在nuxt.config.js的build选项里进行配置。

```
build: {
 
    loaders:[
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        loader:"url-loader",
        query:{
          limit:10000,
          name:'img/[name].[hash].[ext]'
        }
      }
    ],
 
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
```
如果你这个部分看不明白，说明你对webpack还不是很了解，你需要学习一下webpack的课程，技术胖有一套非常好的webpack教程，希望对你有帮助《webpack3.x版 成神之路》共26集。

总结：这节课主要讲了日常开发中最常用的Nuxt.js配置，难度可能是你要对webpack有所掌握，希望小伙伴都能动手做一做这些配置，有问题可以在文章留言区给技术胖留言哦。



## 第04节：Nuxt的路由配置和参数传递

学习前端框架都要学习路由机制，因为路由可以体现我们的业务逻辑，把模块串联起来，让程序焕发光彩。那简单的说路由就是我们的跳转机制，也可以简单理解成链接跳转。Nuxt.js的路由并不复杂，它给我们进行了封装，让我们节省了很多配置环节。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j0602vdn9i3&tiny=0&auto=0" allowfullscreen></iframe>

**简单路由Demo**

我们现在根目录的pages文件下新建两个文件夹，about和news（模仿关于我们和新闻的功能模块，如果此处不清楚请看视频）。

在about文件夹下新建index.vue文件，并写入下面的代码：

```
<template>
  <div>
      <h2>About Index page</h2>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
  </div>
</template>
```
在news文件夹下新建index.vue文件，并写入下面的代码：
```
<template>
  <div>
      <h2>News Index page</h2>
       <ul>
        <li><a href="/">Home</a></li>
      </ul>
  </div>
</template>
```
修改原来的pages文件夹下的index.vue，删除没用的代码，写入下面链接代码：

```
<template>
  <div>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/about">ABOUT</a></li>
      <li><a href="/news">NEWS</a></li>
    </ul>
  </div>
</template>
 
<script>
 
export default {
  components: {
   
  }
}
</script>
 
<style>
 
</style>
```
这个小例子作完，你会发现这一切太简单了，因为Nuxt.js都为我们作好了，不用写任何配置代码。

**`<nuxt-link>`标签**

虽然上面的例子跳转已经成功，但是Nuxt.js并不推荐这种`<a>`标签的作法，它为我们准备了`<nuxt-link>`标签（vue中叫组件）。我们先把首页的`<a>`标签替换成`<nuxt-link>`。

```
<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news'}">NEWS</nuxt-link></li>
    </ul>
  </div>
</template>
 
<script>
 
export default {
  components: {
   
  }
}
</script>
 
<style>
 
</style>
```
我们再次预览页面，也是可以进行正常跳转的，在实际开发中尽量使用<nuxt-link>标签的方法跳转路由。

**params传递参数**

路由经常需要传递参数，我们可以简单的使用params来进行传递参数，我们现在向新闻页面（news）传递个参数，然后在新闻页面进行简单的接收。

我们先修改pages下的Index.vue文件，给新闻的跳转加上params参数，传递3306ID。

```
<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">NEWS</nuxt-link></li>
    </ul>
  </div>
</template>
 
<script>
 
export default {
  components: {
   
  }
}
</script>
 
<style>
 
</style>
```
在news文件夹下的index.vue里用$route.params.newsId进行接收，代码如下。
```
<template>
  <div>
      <h2>News Index page</h2>
      <p>NewsID:{{$route.params.newsId}}</p>
       <ul>
        <li><a href="/">Home</a></li>
      </ul>
  </div>
</template>
```

总结：这节简单讲解了一下路由，如果你以前Vue的基础很好，其实学完这节已经可以做出一些赏心悦目的小Demo出来了，那让我们发挥我们的想象力，作个小Demo练手一下把。

## 第05节：Nuxt的动态路由和参数校验

简单的路由已经弄清楚了，这节看一下动态路由，其实动态路由就是带参数的路由。比如我们现在新闻模块下面有很多新闻详细页，这时候就需要动态路由的帮助了。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=f0603qztmiy&tiny=0&auto=0" allowfullscreen></iframe>

**新闻详细页面：**
我在news文件夹下面新建了_id.vue的文件，以下画线为前缀的Vue文件就是动态路由，然后在文件里边有 $route.params.id来接收参数。

/pages/news/_id.vue

```
<template>
  <div>
      <h2>News-Content [{{$route.params.id}}]</h2>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
  </div>
</template>
```
修改新闻首页路由

我们在/pages/news/index.vue进行修改，增加两个详细页的路由News-1和News-2。
```
<template>
  <div>
      <h2>News Index page</h2>
      <p>NewsID:{{$route.params.newsId}}</p>
       <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/news/123">News-1</a></li>
        <li><a href="/news/456">News-2</a></li>
      </ul>
  </div>
</template>
```
代码写好后，打开npm run dev 进行查看，我们已经进入了新闻详细页，并在详细页中取得了传递过来的新闻ID。

**动态参数校验**

进入一个页面，对参数传递的正确性校验是必须的，Nuxt.js也贴心的为我们准备了校验方法validate( )。

/pages/news/_id.vue

```
export default {
 
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
 
}
```

我们使用了validate方法，并把params传递进去，然后用正则进行了校验，如果正则返回了true正常进入页面，如果返回false进入404页面。

**总结：**这节课主要讲解了Nuxt的动态路由，说了动态路由的写法和校验参数功能，希望小伙伴可以进行练习。只有练习才能发现问题，才能学会。技术胖真心希望你能学会这门技术。

## 第06节：Nuxt的路由动画效果

路由的动画效果，也叫作页面的更换效果。Nuxt.js提供两种方法为路由提供动画效果，一种是全局的，一种是针对单独页面制作。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=z06040qphkn&tiny=0&auto=0" allowfullscreen></iframe>

**全局路由动画**

全局动画默认使用page来进行设置，例如现在我们为每个页面都设置一个进入和退出时的渐隐渐现的效果。我们可以先在根目录的assets/css下建立一个main.css文件。

/assets/css/main.css(没有请自行建立)

```
.page-enter-active, .page-leave-active {
    transition: opacity 2s;
}
.page-enter, .page-leave-active {
    opacity: 0;
}
```
然后在nuxt.config.js里加入一个全局的css文件就可以了。
```
css:['assets/css/main.css'],
```
这时候在页面切换的时候就会有2秒钟的动画切换效果了，但是你会发现一些页面是没有效果的，这是因为你没有是`<nuxt-link>`组件来制作跳转链接。你需要进行更改。

比如我们上节课作的动态路由新闻页，你就需要改成下面的链接。

```
<li><nuxt-link :to="{name:'news-id',params:{id:123}}">News-1</nuxt-link></li>
```
改过之后你就会看到动画效果了。

**单独设置页面动效**

想给一个页面单独设置特殊的效果时，我们只要在css里改变默认的page，然后在页面组件的配置中加入transition字段即可。例如，我们想给about页面加入一个字体放大然后缩小的效果，其他页面没有这个效果。

在全局样式assets/main.css 中添加以下内容。
```
.test-enter-active, .test-leave-active {
    transition: all 2s;
    font-size:12px;
    
}
.test-enter, .test-leave-active {
    opacity: 0;
    font-size:40px;
}
```
然后在about/index.vue组件中设置
```
export default {
  transition:'test'
}
```
这时候就有了页面的切换独特动效了。



## 第07节：Nuxt的默认模版和默认布局


在开发应用时，经常会用到一些公用的元素，比如网页的标题是一样的，每个页面都是一模一样的标题。这时候我们有两种方法，第一种方法是作一个公用的组件出来，第二种方法是修改默认模版。这两种方法各有利弊，比如公用组件更加灵活，但是每次都需要自己手动引入；模版比较方便，但是只能每个页面都引入。这节课我们就学习一下如何使用Nuxt的默认模版和默认布局功能。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=r06044a6j5r&tiny=0&auto=0" allowfullscreen></iframe>

**默认模板**

Nuxt为我们提供了超简单的默认模版订制方法，只要在根目录下创建一个app.html就可以实现了。现在我们希望每个页面的最上边都加入“JSPang.com  技术胖的博客” 这几个字，我们就可以使用默认模版来完成。

```
<!DOCTYPE html>
<html lang="en">
<head>
   {{ HEAD }}
</head>
<body>
    <p>jspang.com 技术胖的博客</p>
    {{ APP }}
</body>
</html>
```

这里的{{ HEAD }}读取的是nuxt.config.js里的信息，{{APP}} 就是我们写的pages文件夹下的主体页面了。需要注意的是HEAD和APP都需要大写，如果小写会报错的。

这里还有一个小坑需要大家注意，就是如果你建立了默认模板后，记得要重启服务器，否则你的显示不会成功；但是默认布局是不用重启服务器的。

**默认布局**

和默认模板类似的功能还有默认布局，但是从名字上你就可以看出来，默认布局主要针对于页面的统一布局使用。它在位置根目录下的layouts/default.vue。需要注意的是在默认布局里不要加入头部信息，只是关于`<template>`标签下的内容统一订制。

还是上边的需求，我们在每个页面的最顶部放入“JSPang.com  技术胖的博客” 这几个字，看一下在默认布局里的实现。

```
<template>
  <div>
    <p>JSPang.com  技术胖的博客</p>
    <nuxt/>
  </div>
</template>
```

这里的`<nuxt/>`就相当于我们每个页面的内容，你也可以把一些通用样式放入这个默认布局里，但是个人不建议这样写，会增加页面的复杂程度。

总结：要区分默认模版和默认布局的区别，模版可以订制很多头部信息，包括IE版本的判断；模版只能定制`<template>`里的内容，跟布局有关系。在工作中修改时要看情况来编写代码。

## 第08节：Nuxt的错误页面和个性meta设置

当用户输入路由错误的时候，我们需要给他一个明确的指引，所以说在应用程序开发中404页面是必不可少的。Nuxt.js支持直接在默认布局文件夹里建立错误页面。

<iframe frameborder="0"  width="100%" src="https://v.qq.com/iframe/player.html?vid=p06069cczbj&tiny=0&auto=0" allowfullscreen></iframe>

**建立错误页面**

在根目录下的layouts文件夹下建立一个error.vue文件，它相当于一个显示应用错误的组件。

```
<template>
  <div>
      <h2 v-if="error.statusCode==404">404页面不存在</h2>
      <h2 v-else>500服务器错误</h2>
      <ul>
          <li><nuxt-link to="/">HOME</nuxt-link></li>
      </ul>
  </div>
</template>
 
<script>
export default {
  props:['error'],
}
</script>
```

代码用v-if进行判断错误类型，需要注意的是这个错误是你需要在`<script>`里进行声明的，如果不声明程序是找不到error.statusCode的。

这里我也用了一个`<nuxt-link>`的简单写法直接跟上路径就可以了。

**个性meta设置**

页面的Meta对于SEO的设置非常重要，比如你现在要作个新闻页面，那为了搜索引擎对新闻的收录，需要每个页面对新闻都有不同的title和meta设置。直接使用head方法来设置当前页面的头部信息就可以了。我们现在要把New-1这个页面设置成个性的meta和title。

1.我们先把`pages/news/index.vue`页面的链接进行修改一下，传入一个title，目的是为了在新闻具体页面进行接收title，形成文章的标题。

/pages/news/index.vue

```
<li><nuxt-link :to="{name:'news-id',params:{id:123,title:'jspang.com'}}">News-1</nuxt-link></li>
```
2.第一步完成后，我们修改/pages/news/_id.vue，让它根据传递值变成独特的meta和title标签。
```
<template>
  <div>
      <h2>News-Content [{{$route.params.id}}]</h2>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
  </div>
</template>
<script>
export default {
 
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data(){
    return{
      title:this.$route.params.title,
    }
  },
//独立设置head信息
  head(){
      return{
        title:this.title,
        meta:[
          {hid:'description',name:'news',content:'This is news page'}
        ]
      }
    }
}
  
</script>
```
注意：为了避免子组件中的meta标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为meta标签配一个唯一的标识编号。



## 第09节：asyncData方法获取数据

在项目中需要在初始化页面前先得到数据，也就是我们常说的异步请求数据。Nuxt.js贴心的为我们扩展了Vue.js的方法，增加了anyncData。从名字上就很好理解，这是一个一部的方法。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j0607huiqnz&tiny=0&auto=0" allowfullscreen></iframe>

**创建远程数据**

在这里制作一些假的远程数据，我选择的网站是myjson.com，它是一个json的简单仓库，学习使用是非常适合的。
我们打开网站，在对话空中输入JSON代码，这个代码可以自己随意输入哦。

```
{
  "name": "JSPang",
  "age": 18,
  "interest": "I love coding!"
}
```
输入后，网站会给你一个地址，这就是你这个JSON仓库的地址了。
`https://api.myjson.com/bins/8gdmr`

**安装Axios**

Vue.js官方推荐使用的远程数据获取方式就Axios，所以我们安装官方推荐，来使用Axios。这里我们使用npm 来安装 axios。
直接在终端中输入下面的命令：

`npm install axios --save`

**ansycData的promise方法**

我们在pages下面新建一个文件，叫做ansyData.vue。

然后写入下面的代码：

```
<template>
  <div>
      <h1>姓名：{{info.name}}</h1>
      <h2>年龄：{{info.age}}</h2>
      <h2>兴趣：{{info.interest}}</h2>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
     return {
         name:'hello World',
     }
  },
  asyncData(){
      return axios.get('https://api.myjson.com/bins/8gdmr')
      .then((res)=>{
          console.log(res)
          return {info:res.data}
      })
      
  }
}
</script>
```
这时候我们可以看到，浏览器中已经能输出结果了。

**ansycData的await方法**

当然上面的方法稍显过时，现在都在用ansyc…await来解决异步,改写上面的代码。

```
<template>
  <div>
      <h1>姓名：{{info.name}}</h1>
      <h2>年龄：{{info.age}}</h2>
      <h2>兴趣：{{info.interest}}</h2>
 
     
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
     return {
         name:'hello World',
     }
  },
  async asyncData(){
      let {data}=await axios.get('https://api.myjson.com/bins/8gdmr')
      return {info: data}
      
  }
}
</script>
```


## 第10节：静态资源和打包

出差了一个星期，终于又回来了，可以继续给小伙伴们录课了。有一些小伙伴给我留言，说一些图片在项目开发时可用，但是打包后就不可用了，这节课就讲一下Nuxt.js项目中如何放置静态资源和打包。

<iframe frameborder="0"  width="100%" src="https://v.qq.com/iframe/player.html?vid=l06127encjl&tiny=0&auto=0" allowfullscreen></iframe>

**直接引入图片**

我们在网上任意下载一个图片，放到项目中的static文件夹下面，然后可以使用下面的引入方法进行引用

```
<div><img src="~static/logo.png" /></div>
```
这种引用方法是不用估计相对路径的，“~”就相当于定位到了项目跟目录，这时候你的图片路径就不会出现错误，就算打包也是正常的。

**CSS引入图片**

如果在CSS中引入图片，方法和html中直接引入是一样的，也是用“~”符号引入。

```
<style>
  .diss{
    width: 300px;
    height: 100px;
    background-image: url('~static/logo.png')
  }
</style>
```

这时候在npm run dev 下是完全正常的，那我们看一下打包。

**打包静态HTML并运行**

用Nuxt.js制作完成后，你可以打包成静态文件并放在服务器上，进行运行。

在终端中输入：
```
npm run generate
```
然后在dist文件夹下输入live-server就可以了。

总结：Nuxt.js框架非常简单，因为大部分的事情他都为我们做好了，我们只要安装它的规则来编写代码。我相信小伙伴通过10节课的学习，已经可以做出自己想要的效果了，Nuxt.js这个技能树也算点亮了。期待更多实用课程，我们下套课程见了。


