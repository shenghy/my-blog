---
category: 视频教程
tags:
  - Vue
date: 2018-04-28
title: Vue2.x+Koa2实战移动电商(共61集)
vssue-title: vue+koa
vssue: false
---



这是我的第一套实战课程，希望小伙伴多支持。有很多不足，但是总要开始，只有在不足中不断成长，才能成功。
课程一共61集，10万多字文字版教程，从前端讲到全栈，希望小伙伴们有所收获。

<!-- more -->


## 课程说明
这个教程将全面讲解Vue+Koa的实战项目，学完本教程能成为以前端技术为主的全栈程序员。
这套课程总时长会超过20小时，每节课会控制在15分钟左右。
- 文字版教程免费：一分钱不花你也可以学习全部内容，可能稍微辛苦一点。
- 视频加辅导收费：188元看全套课程

GitHub地址：https://github.com/shenghy/SmileVue

涉及的技术栈包括：***Vue+Router+Vant+Node+Koa2+Mongoose+MongoDB***

课程将从零开始搭建一个移动电商系统，包括首页展示，类别展示，购物功能，注册登录，积分系统，查找页面，后台接口设置。

<video src="http://27.50.142.212/video/VueDemo01.mp4" controls="controls" width="100%">
</video>


###  付款方式
-  **[千聊购买，3端可看(推荐)](https://m.qlchat.com/live/channel/channelPage/2000003626425314.htm)**
- **[点击轻课堂网站付款观看](https://www.edurt.com/my/course/168"点击轻课堂网站付款观看")**

付款后，加技术胖微信flutter100，发送购买截图，技术胖邀请你进群学习。


### 项目完成效果图

![效果图](http://blogimages.jspang.com/vue_koa2_ad.jpg)

### 课程特色


* 特点一：课程代码全部在视频中当场编写，保证跟着视频可以做出来。
* 特点二：每周一次的熊猫TV直播解决问题(间和房间号在微信群内公开，预售阶段提供直播指导，预售结束后停止指导)
* 特点三：每天技术胖群内提供20分钟课程问题解答，保证你的问题有人回答(预售期间购买有效)。

如果所讲知识学不会，可以直接找技术胖微信退钱。

### 预售更新频率
每周更新3-4集，每周一次的视频直播解答，每天20分钟群内互动。
（如果你有任何问题，可以在文章下方留言）


## 第01节：前端环境的搭建


<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>>

当你看这套教程的时候，我希望已经有一定的基础知识。如果你没有那学习来并不轻松，幸运的是在博客上可以完全免费的通过视频教程把这些技术知识学会。点击下面链接就可以免费学习。
1. [Vue的基础知识，技术胖的博客已经提供了很多Vue的免费视频](https://jspang.com/posts/2017/01/11/all-video-list.html#_13-vue2-0%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B-%E5%86%85%E9%83%A8%E6%8C%87%E4%BB%A4-%E5%85%B18%E9%9B%86)
2. [Koa2和Node.js的基础知识。技术胖也已经在博客中作了免费的视频教程。](https://jspang.com/posts/2017/01/11/all-video-list.html#_9-%E6%8C%91%E6%88%98%E5%85%A8%E6%A0%88-koa2%E5%85%8D%E8%B4%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B-%E5%85%B113%E9%9B%86)
3. [MongoDB的基础知识，技术胖也为你准备好了免费教程。](https://jspang.com/posts/2017/01/11/all-video-list.html#_8-%E6%8C%91%E6%88%98%E5%85%A8%E6%A0%88-mongodb%E5%9F%BA%E7%A1%80%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B-%E5%85%B121%E9%9B%86)

为了降低教程难度，就算你没有看过以上基础教程，你只要跟着项目一起操作，多练习，也是可以完全上手视频中的项目的，这也算技术胖为自己设置的一个教程挑战吧。

### 前端开发环境搭建
教程中我们采用***前后端分离***的开发模式，也就是前端调用后端提供的JSON接口，让Vue和Koa2的代码没有任何的耦合。所以开发环境也是完全分离的，开发完成后你甚至可以分别部署到两个服务器上来进行运行。

***1.建立前端文件夹***

我在D盘的Code目录下建立了SmileVue文件夹。smile是微笑的意思，使用这个单词，我需要大家在学习完这套教程都对整个项目的理解和技术上的应用有一个层次的提供，露出微笑的表情。

你也可以利用终端的形式建立，打开终端进入D盘的code目录下，建立命令如下：

` mkdir SmileVue`

当然这个目录可以和我的不一样，你可以起一个自己喜欢的名字，也可以找一个自己喜欢的盘符位置。

目录建立好以后，打开代码编辑工具Visual Studio Code(以后简称VSCode)。并在VSCode中打开我们的项目。


***2.使用vue-cli生成项目目录***
使用vue-cli非常方便快速，它可以为我们生成基本的Vue的项目结构。

* 检测npm版本，在终端输入 `npm -v`,尽量使用5.x以上版本。
* 全局安装vue-cli，在终端里输入，`npm install vue-cli -g`。
* 在终端中输入 `vue init webpack`

等到上面这些都正确安装完成后，我们需要验证一下，我们安装是否成功。

***3.测试环境是否安装成功***

- 使用`npm run dev` 进行测试环境的打开。
- 在浏览器中输入 `http://localhost:8080 ` 进行测试。

在浏览器中打开页面，出现Vue的正常页面时，说明你的项目已经初始化成功了。下节课我们就可以愉快的进行编程了。

### 一个README.md的重要性
在一个实际项目中,特别是开源项目中是非常重要的。
所以我们要建立一个README.md文件，这个就是你项目的说明文件。
每个公司的书写要求有所不同，所以请根据实际情况编写。
我这里就记录每节课的讲述内容和项目的初始化方法了。

### 总结
第一节我们轻松一点，讲了用vue-cli建立我们的项目前端目录。虽然很简单，但如果你vue-cli还不会使用，那你需要花点时间把我以前讲的vue-cli的课程看一遍。这也是我为什么第一节课没有多讲的原因。
[vue-cli免费视频教程（点击学习）](https://jspang.com/posts/2017/01/11/all-video-list.html#_17-vue-cli-%E5%85%8D%E8%B4%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B-%E5%85%B13%E9%9B%86)

## 第02节：优雅引入Vant组件库
2018年4月18日晚更新第二节：

<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=4" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

在工作中，有很多自己的组件库，但是在开发这些前都会选择一套稳定的开源的作为轮子作为基础（大公司是有能力造自己轮子的）。因为我们要作电商系统，所以选择有赞的Vant作为Vue的基本组件和样式组件。

### Vant简介
vant是有赞前端团队提供的Vue组件库。它的有点有以下5个：
1. 国人制造，复合中国网站样式和交互习惯；
2. 单元测试超过90%，有些个人的小样式组件是不作单元测试的；
3. 支持babel-plugin-import引入，按需加载插件，无需单独引入样式；
4. 支持TypeScript，这个是2018年前端最应该学的技术；
5. 支持SSR，服务端渲染也是可以使用这个组件库的；

### 安装Vant
`npm i vant -S`：这是简写形式。
`npm install vant --save`:这是完整写法。

如果你网络很慢的话，可以使用淘宝的源，但是不建议使用cnpm来进行安装，用cnpm安装时我个人是会出现一些未知的问题的，所以我在实际项目中，都是用了这种安装方式。
```shell
 npm install vant --save --registry=https://registry.npm.taobao.org
```
安装好后，看一下我们的package.json文件，并确认一下版本，我这里使用的是1.0.5版本。如果以后版本有所升级，可能下面课程中的使用方法有所不同，这个需要注意。

### 引入Vant的第一种方法（不推荐）
安装好vant后，可以使用以前常用的方法进行引入-这是一种全局引入的方式。
直接在src/main.js进行全局引入。
```javaScript
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(vant)
```
简单的三行代码已经可以把Vant引入进来了，但是这并不够优雅，也使得最后打包发布时会增加包的大小，Vue的SPA首屏打开时本来就有些慢，所以不建议使用这种方法进行引入。

### 优雅的引入Vant
vant是支持babel-plugin-import引入的，它可以让我们按需引入组件模块，并且不用管理我们的样式，现在Vue项目组件库的主流引入方法。
***安装babel-plugin-import***
```shell
npm i babel-plugin-import -D
```
也可以使用完整写法
```shell
npm install babel-plugin-import --save-dev
```
在.babelrc中配置plugins（插件）
```
"plugins": [
    "transform-vue-jsx", 
    "transform-runtime",
    ["import",{"libraryName":"vant","style":true}]
  ]
```

### 按需使用Vant组件
我们设置好.babelrc后，就可以按需引入Vant框架了。比如现在我们引入一个`Button`组件.
在src/main.js里加入下面的代码：
```javaScript
import { Button } from 'vant'
Vue.use(Button)
```
有了这段代码之后，我们就可以在需要的组件页面中加入`Button`了.

```
 <van-button type="primary">主要按钮</van-button>
```

------
### 总结：
本节重点在于引入Vant的方式，建议小伙伴课下自行了解一下`babel-plugin-import`.


## 第03节：移动端屏幕适配基础
2018年4月19日晚更新第二节：
<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=5" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

制作webapp时一个很关键的问题就是适配各种机型不同屏幕的大小，让每种机型上的布局看起来都尽量一样，这让很多小伙伴很是头疼。在这里我介绍一下我平时工作中常用的适配方案，当然适配方案有很多种，所以你有更好的方法，也可以使用或者大家一起交流。
### 常见移动web布局适配方法
 * 固定高度，宽度百分比：这种方法只适合简单要求不高的webApp，几乎达不到大型项目的要求，属于过时的方法。
 * Media Query（媒体查询）：现在比较主流的适配方案，比如我们常用的样式框架Bootstrap就是靠这个起家的，它能完成大部分项目需求，但是编写过于复杂。
 * flex布局：主流的布局方式，不仅适用于移动Web，网页上也表现良好，这也是现在工作中用的最多的布局方式，那我们的项目尽量采用flex+rem的方式进行布局和完成移动端的适配。
### rem单位介绍
`rem`（font size of the root element）是相对长度单位。相对于根元素（即html元素）`font-size`计算值的倍数。

* 适配原理：将px替换成rem，动态修改html的font-size适配。它可以很好的根据根元素的字体大小来进行变化，从而达到各种屏幕基本一直的效果体验。

现在我们作一个实验，你可以新建一个网页，并写入如下代码：
```
<div class="test">
    <p class="hello">Hello jspang</p>
</div>
````
然后给html一个基本的样式:
```css
.test{
    width:320px;
    height:160px;
    background-color: bisque;
    text-align: text；
}
.hello{
    color:red;
}
```
上边我们使用了还是传统的使用px作为单位，我们在移动端调试模式iphone5环境查看一下。会发现`div`的宽度是正好的，我们再查看一下字体，发现大小是16px。

我们现在可以把CSS中的px单位换成rem单位来进行测试。因为html根元素的字体大小是16px，那么换成rem单位，直接除以16就好。
```css
.test{
    width:20rem;
    height:10rem;
    background-color: bisque;
    text-align: text；
}
.hello{
    color:red;
    font-size:1rem;
}
```
页面并没有什么变化，也就是说我们掌握了换算关系。为了更好的说明这点，我们可以试着给html根样式加入字体大小，比如换成`font-size:32px;`。这时页面和字体都扩大了一倍。但是我们现在还是不能实现适配，因为我们根元素的字体是固定的。

### JS控制适配屏幕
明白了REM的原理后，我们就可以使用这个特点来进行适应布局了，这也是现在比较主流的移动端web适配方案。当然你有更好的方案，也可以在文章下方进行留言。
三行JS代码完成适配：
```javaScript
//得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
htmlDom.style.fontSize= htmlWidth/20 + 'px';
```
####  总结


这节主要学习了移动端用Rem + JavaScript完成屏幕适配的方法。重点是理解Rem的特性，因为我们以后的程序都会使用Rem进行布局。这节课的内容虽然跟实战业务逻辑没什么关系，但是我希望小伙伴们一定要进行练习和掌握。

## 第04节：首页布局和路由设置

<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=6" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

这节开始布局首页，课程采用先静后动的原则，就是先用静态数据代替，然后使用Mock模拟数据，最后上真实的接口。这样的好处是，可以满足不同阶段不同岗位的小伙伴动能愉快的上手项目。

这节课的三个基础知识：
1. 首页路由的配置：这个如果有基础可以跳过学习的。
2. 建立首页组件（components）：先把首页组件建立起来。
3. 讲解Vant的布局方法：我希望我这节课CSS的比重不占太多的课程内容，所以为了尽量少的涉及CSS，我们引入了第三方样式组件库。

### user-scalable设置
先补一个上节课忘记加入的属性，在作移动端页面适配时，一般我们不希望用户自己缩放页面大小，我们可以在`index.html`的`meta`标签进行设置，加入`user-scalable=no`。

### 首页路由的配置
打开路由配置页面：`src/router/index.js`,先删除vue-cli自动生成的`HelloWorld.vue`的配置,然后加入我们的路由配置.

```javaScript
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMall',component: ShoppingMall}
  ]
})

```
这里的@代表的是项目的src目录。


### 建立首页组件
删除`HelloWorld.vue`文件，建立`ShoppingMall.vue`文件。编写如下代码：
```
<template>
  <div>
      {{msg}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Shopping Mall'
    }
  }
}
</script>

```

这段代码手写是很麻烦的，我们可以利用VSCode的`vue VSCode Snippets`插件来解决,熟练掌握这个插件后，你写代码的速度会和思想统一，让代码飞起来。
![](http://7xjyw1.com1.z0.glb.clouddn.com/vscodevuesnipete.gif)

写好这个可以使用`npm run dev` 进行预览一下。
### Vant布局讲解
使用Vant的布局需要先进行按需引入，我们直接在`/scr/main.js`里引入`Row`和`Col`组件。
```javaScript
import { Button, Row, Col } from 'vant'
Vue.use(Button).use(Row).use(Col)
```
他的布局是采用24格布局法，简单的理解，就是把页面均匀的分成24等分，然后我们控制这24个等分的比例就可以实现布局。
```
<van-row>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
</van-row>
```

明白了这个编写方式，我们就可以愉快的布局了。

***总结：***
这节课学习了路由的建立、页面的快速建立方法和Vant的24格布局。这些在实际工作中都非常的常用，特别是`Vue VSCode Snippets`这个插件的使用会大大提高你的编码速度。


## 第05节：首页搜索区域的布局
2018年4月23日晚更新第五节：

<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=7" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

课程因为刚开始，我会带着大家写一些CSS样式，但是随着课程的不断深入，我会把CSS样式这个环境省略掉，大家可以直接到GitHub上clone项目，来查看CSS样式。

### 解决小问题
但页面很大的时候，我们作的移动适配方案会呈现很大的字体，这不是我们想要的。所以加一个判断，解决页面字体过大的问题。
在 `index.html`的`script`里加入判断页面的语句。
```javascript
 if(htmlWidth>750){htmlWidth=750}
```
当页面宽度大于750px时，我们就把页面的宽度设置成750像素。

### 搜索条的布局（search bar）


*** 1. icon图标的下载 ***

利用`van-row`和`van-col`我们快速布局一个搜索条的html骨架出来，代码如下。
```
<!--search bar layout-->
<div class="search-bar">
    <van-row>
        <van-col span="3">icon</van-col>
        <van-col span="16">serach input</van-col>
        <van-col span="5">button</van-col>
    </van-row>
</div>
```
并给他一些简单的样式
```css
.search-bar{
      height: 2.2rem;
      background-color: #e5017d;
      line-height:2.2rem;
  }
```

*** 2. icon图标的下载 ***

图标的下载我们依然在iconfont(网址：http://www.iconfont.cn/)进行下载，
找到自己喜欢的图标后，我们新建images文件夹，目录为`src/assets/images`,以后会把所有的项目图片都放到这里。

*** 3. 正确引入图片 ***
有很多小伙伴都在引入图片时摘了跟头，有的是开发时引入错误，有的是开发完成后，build时路径不对了。如果用require引入图片，在不作任何配置的情况下就可以基本解决你的图片路径问题。
先把图片用require引进到页面中：
```javascript
export default {
    data() {
        return {
            locationIcon: require('../../assets/images/location.png')
        }
    },
}
```
然后通过绑定属性的方法插入图片
```
<van-col span="3"><img :src="locationIcon" width="100%" /></van-col>
```

这时候进行预览，图片已经正常显示在浏览器中了。

*** 4. 写input和button ***

这里都是CSS样式和基本的html结构，所以直接上代码了。视频中我会作讲解说明，你可以完全拷贝下面的代码来看效果，然后进行修改学习。
```
<template>
    <div>
<!--search bar layout-->
<div class="search-bar">
    <van-row gutter="5">
        <van-col span="3"><img :src="locationIcon" width="80%" class="location-icon" /></van-col>
        <van-col span="16">
          <input type="text" class="search-input"/>
        </van-col>
        <van-col span="5"><van-button size="mini">查找</van-button></van-col>
       
    </van-row>
</div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            locationIcon: require('../../assets/images/location.png')
        }
    },
}
</script>

<style scoped>
  .search-bar{
      height: 2.2rem;
      background-color: #e5017d;
      line-height:2.2rem;

  }
  .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #e5017d;
      color:#fff;
  }
  .location-icon{
      padding-top: .2rem;
      padding-left: .3rem;
  }

</style>
```


## 第06节：首页轮播图的制作

这节课主要来制作轮播图区域（swiper），制作成功后，再了解一下Vant中swipe插件的全貌。

<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=8" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

### 1.按需加载Swipe组件
按照惯例我们在使用Vant组件时需要把组件import进来。在`/src/main.js`下按需引入，代码如下：
```javascript
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
```
现在我们`/src/main.js`的样子如下:
```javascript
import { Button, Row, Col ,Search , Swipe , SwipeItem  } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem)
```
引入成功后，就可以写轮播图代码了。

### 2.下载这三张图片
我们作轮播图的三张图片，你可以先下载好。图片放到了七牛云上，你可以下载，也可以直接使用这些图片地址。
![](http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg)
![](http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg)
![](http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg)

### 开始制作轮播图
首先我们在js部分写入一个data参数`bannerPicArray`，把图片地址放入到里边。
`/src/components/pages/ShoppingMall.vue`
```javaScript
 data() {
        return {
            locationIcon: require('../../assets/images/location.png'),
            bannerPicArray:[
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
            ]
        }
    },
```
模版文件如下
```
<!--swipwer area-->
<div class="swiper-area">
    <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img :src="banner.imageUrl" width="100%"/>
        </van-swipe-item>
    </van-swipe>
</div>
```
CSS代码：
```css
.swiper-area{
      width:20rem;
      clear:both;
  }
```



这时候你会发现CSS样式并不是我们想要的效果，这主要是用Vant组件，他有一些默认的样式，所以我们要做一些CSS的修复操作。
`overflow: hidden;`,`clear:both;`

### 利用Vant实现图片轮播的懒加载
引入Vant的图片懒加载组件，以后我们的项目中会有很多远程图片，所以启用图片懒加载是必须的，那正好我们这里第一次开始用远程图片，就在这里学一下图片的懒加载
```javaScript
import { Button, Row, Col ,Search , Swipe , SwipeItem , Lazyload  } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload)
```
然后修改一下我们的template区域，加入`v-lazy="banner.imageUrl"`就可以图片的懒加了。

### Chrome调试技巧 模拟慢速3G网络
视频中进行讲解，作为补充内容。

总结：这节课主要学习了Swipe组件的使用和图片懒加载的用处，最后还讲解了chrome浏览器下模拟`slow 3G`的情况。小伙伴一定要课下练习。


## 第07节：easyMock和Axios的使用
2018年4月27日晚更新第七节：


<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=9" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

上节课学完，我在群里组织了一次关于是否讲CSS布局的投票，大家虽然有62.5%的希望不讲，当时还有54个人是希望讲的。课程开始前我也答应要全部手敲代码，所以CSS内容我会在重要的地方进行讲解并手敲代码演示。

这节课我想来讲一下easyMock的使用，Mock的使用作为前端非常重要，比如在项目开始重启，前后端一起开发，后端并无暇照顾前端接口。这时候我们可以使用Mock的方式，来模拟数据。

### Mock数据准备

这里我准备好了需要Mock的JSON格式数据，在实际工作中这些需要你跟后台协商，订制统一标准后，才可以定义接口标准，如果项目很大，这个过程是需要开会协商的。
```json
{

  "data": {
    "advertesPicture": {
      "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20180404/20180404085441_850.gif"
    },
    "floor3": [{
      "goodsId": "ae4e71807a91460792670b657fa3ed3a",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407181423_15.jpg"
    }, {
      "goodsId": "2a398a5048074fc3b36bc8026bf9dc65",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407181216_8263.jpg"
    }, {
      "goodsId": "b37577ce45ee4cc6ba162959933dbac8",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407181247_7554.jpg"
    }, {
      "goodsId": "43912e1f7b7842cab40fcdee9dbe8758",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407181316_6196.jpg"
    }, {
      "goodsId": "98922617593e44c9a5880329a4cf0fd0",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407181348_4054.jpg"
    }],
    "floor2": [{
      "goodsId": "d0fabe0c966043cb8313fa55de9c555b",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180547_3253.jpg"
    }, {
      "goodsId": "36360da2ec084316a100c2df1c714e37",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180631_4071.jpg"
    }, {
      "goodsId": "eb47b495b65d42b8a1fc5823dcd5589c",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180705_7181.jpg"
    }, {
      "goodsId": "7f6e857e83b240508836717c8764a0b0",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180736_2822.jpg"
    }, {
      "goodsId": "c7cb656294ea48d3b224ddee5fdd9647",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180408/20180408081756_7181.jpg"
    }],
    "floorName": {
      "floor3": "营养奶品",
      "floor2": "新鲜水果",
      "floor1": "休闲食品"
    },
    "floor1": [{
      "goodsId": "e53c046465204d4fb8f22431cc2807e7",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180109_6316.jpg"
    }, {
      "goodsId": "f36f6dd8f62247d5846eaa9b3f269cbc",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180151_6180.jpg"
    }, {
      "goodsId": "72a3ec63956347a2a9f113589fe79c03",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180217_3970.jpg"
    }, {
      "goodsId": "a632bfb3818541da8e6843d6d0dbd917",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180257_2378.jpg"
    }, {
      "goodsId": "6694401a30a940f6ae437d541b7fd26d",
      "image": "http://images.baixingliangfan.cn/homeFloor/20180407/20180407180427_8557.jpg"
    }],
    "category": [{
      "mallCategoryId": "1",
      "mallCategoryName": "新鲜水果",
      "bxMallSubDto": [{
        "mallSubId": "2c9f6c946016ea9b016016f79c8e0000",
        "mallCategoryId": "1",
        "mallSubName": "热带水果",
        "comments": null
      }, {
        "mallSubId": "2c9f6c94608ff843016095163b8c0177",
        "mallCategoryId": "1",
        "mallSubName": "时令水果",
        "comments": null
      }, {
        "mallSubId": "402880e86016d1b5016016db9b290001",
        "mallCategoryId": "1",
        "mallSubName": "苹果/梨",
        "comments": null
      }, {
        "mallSubId": "402880e86016d1b5016016dbff2f0002",
        "mallCategoryId": "1",
        "mallSubName": "柑橘橙柚",
        "comments": null
      }],
      "comments": null,
      "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408111959_2837.png"
    }, {
      "mallCategoryId": "2",
      "mallCategoryName": "中外名酒",
      "bxMallSubDto": [{
        "mallSubId": "2c9f6c9460337d540160337fefd60000",
        "mallCategoryId": "2",
        "mallSubName": "白酒",
        "comments": ""
      }, {
        "mallSubId": "402880e86016d1b5016016e083f10010",
        "mallCategoryId": "2",
        "mallSubName": "啤酒",
        "comments": ""
      }, {
        "mallSubId": "402880e86016d1b5016016df1f92000c",
        "mallCategoryId": "2",
        "mallSubName": "葡萄酒",
        "comments": ""
      }, {
        "mallSubId": "2c9f6c94621970a801626a40feac0178",
        "mallCategoryId": "2",
        "mallSubName": "洋酒",
        "comments": null
      }, {
        "mallSubId": "2c9f6c94621970a801626a412c240179",
        "mallCategoryId": "2",
        "mallSubName": "海外直采",
        "comments": null
      }],
      "comments": null,
      "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408112010_4489.png"
    }, {
      "mallCategoryId": "3",
      "mallCategoryName": "营养奶品",
      "bxMallSubDto": [{
        "mallSubId": "402880e86016d1b5016016e135440011",
        "mallCategoryId": "3",
        "mallSubName": "鲜奶",
        "comments": ""
      }, {
        "mallSubId": "402880e86016d1b5016016e171cc0012",
        "mallCategoryId": "3",
        "mallSubName": "酸奶",
        "comments": ""
      }, {
        "mallSubId": "402880e86016d1b5016016e240e60013",
        "mallCategoryId": "3",
        "mallSubName": "乳酸菌",
        "comments": ""
      }, {
        "mallSubId": "2c9f6c9460a03c0c0160a041ab1d0000",
        "mallCategoryId": "3",
        "mallSubName": "奶油奶酪",
        "comments": null
      }],
      "comments": null,
      "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408113102_1595.png"
    }, {
      "mallCategoryId": "5",
      "mallCategoryName": "食品饮料",
      "bxMallSubDto": [{
        "mallSubId": "2c9f6c94609a62be0160a02d1dc20021",
        "mallCategoryId": "5",
        "mallSubName": "饼干糕点",
        "comments": ""
      }, {
        "mallSubId": "402880e86016d1b5016016e4dca2001e",
        "mallCategoryId": "5",
        "mallSubName": "休闲小食",
        "comments": ""
      }, {
        "mallSubId": "402880e86016d1b5016016e51380001f",
        "mallCategoryId": "5",
        "mallSubName": "糖果巧克力",
        "comments": ""
      }, {
        "mallSubId": "2c9f6c94609a62be0160a02de70e0022",
        "mallCategoryId": "5",
        "mallSubName": "冲调饮品",
        "comments": ""
      }, {
        "mallSubId": "2c9f6c94626a435f01626a4a7f590000",
        "mallCategoryId": "5",
        "mallSubName": "进口食品",
        "comments": ""
      }, {
        "mallSubId": "402880e86016d1b5016016e4ac16001d",
        "mallCategoryId": "5",
        "mallSubName": "坚果炒货",
        "comments": null
      }, {
        "mallSubId": "402880e86016d1b5016016e549710020",
        "mallCategoryId": "5",
        "mallSubName": "饮用水",
        "comments": ""
      }, {
        "mallSubId": "402880e86016d1b5016016e656c50022",
        "mallCategoryId": "5",
        "mallSubName": "果蔬汁",
        "comments": null
      }, {
        "mallSubId": "2c9f6c946016f86f01601709335d0000",
        "mallCategoryId": "5",
        "mallSubName": "乳制饮料",
        "comments": null
      }, {
        "mallSubId": "2c9f6c946077476a0160781eb392000d",
        "mallCategoryId": "5",
        "mallSubName": "咖啡茶饮",
        "comments": null
      }, {
        "mallSubId": "402880e86016d1b5016016e62bbd0021",
        "mallCategoryId": "5",
        "mallSubName": "碳酸饮料",
        "comments": null
      }, {
        "mallSubId": "2c9f6c946077476a0160781f6d8c000e",
        "mallCategoryId": "5",
        "mallSubName": "功能饮料",
        "comments": null
      }],
      "comments": null,
      "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408113048_1276.png"
    }, {
      "mallCategoryId": "4",
      "mallCategoryName": "个人护理",
      "bxMallSubDto": [{
        "mallSubId": "2c9f6c94621970a801626a35cb4d0175",
        "mallCategoryId": "4",
        "mallSubName": "进口护理",
        "comments": null
      }, {
        "mallSubId": "2c9f6c94621970a801626a363e5a0176",
        "mallCategoryId": "4",
        "mallSubName": "口腔护理",
        "comments": null
      }, {
        "mallSubId": "2c9f6c94621970a801626a3770620177",
        "mallCategoryId": "4",
        "mallSubName": "特殊用纸",
        "comments": null
      }],
      "comments": null,
      "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408112053_8191.png"
    }],
    "slides": [{
      "image": "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg",
      "goodsId": "b1195296679f482aa7d54d95ac2b4a94"
    }, {
      "image": "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg",
      "goodsId": "da34d6f381464a219b37a9ac0ad579e8"
    }, {
      "image": "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg",
      "goodsId": "ad176e397858448a854dc50371334faf"
    }],
    "buyTime": "08:00:00-20:30:00",
    "hotGoods": [{
      "mallPrice": 3.90,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415120500_6504.jpg",
      "goodsId": "fb0f913950944b66a97ae262ad14609a",
      "price": 3.90,
      "name": "美汁源果粒奶优水果饮料蜜桃450ml/瓶"
    }, {
      "mallPrice": 4.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415115202_8432.jpg",
      "goodsId": "775e575ce28a4f89b1dfe2c99eb08ae7",
      "price": 4.50,
      "name": "阿华田麦芽乳饮品牛奶味250mL/盒"
    }, {
      "mallPrice": 3.70,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415121351_6470.jpg",
      "goodsId": "e68d5293c0a04e99a3480aaaad101362",
      "price": 3.70,
      "name": "养元香浓六个核桃240ml/瓶"
    }, {
      "mallPrice": 6.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415120956_8491.jpg",
      "goodsId": "7c377350cc9342edba600f3f6a548bd0",
      "price": 6.50,
      "name": "名屋木瓜牛乳340ml/瓶"
    }, {
      "mallPrice": 3.90,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415120411_5740.jpg",
      "goodsId": "f8c3f62810aa4ce781d14a885333a2b8",
      "price": 3.90,
      "name": "美汁源果粒奶优草莓味450ml/瓶"
    }, {
      "mallPrice": 7.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415120720_7233.jpg",
      "goodsId": "85d4fece907a4170b4b27a22c035321d",
      "price": 7.50,
      "name": "名屋醇豆浆饮料485ml/瓶"
    }, {
      "mallPrice": 5.00,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180103161335_9324.jpg",
      "goodsId": "9abd33f0d2e4496f9c023a1dcfbfe2ad",
      "price": 6.30,
      "name": "李子园甜牛奶乳饮料450ml/瓶"
    }, {
      "mallPrice": 5.00,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415120239_7917.jpg",
      "goodsId": "1258c2fd52844f679fad1ebf24764082",
      "price": 5.00,
      "name": "李子园草莓风味乳饮料450ml/瓶"
    }, {
      "mallPrice": 6.30,
      "image": "http://images.baixingliangfan.cn/compressedPic/20171224082006_6602.jpg",
      "goodsId": "bd25fd5d128e41fd9a737e99f75f92f8",
      "price": 8.50,
      "name": "娃哈哈AD钙奶220ml*4/条"
    }, {
      "mallPrice": 6.00,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415121537_4372.jpg",
      "goodsId": "cfbe6ec3101a414f9563a8c6624aec08",
      "price": 6.00,
      "name": "一榨鲜绿豆汁300ml/瓶"
    }, {
      "mallPrice": 5.00,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415120109_275.jpg",
      "goodsId": "e9808eb0d3574c11971e38f75076f1a4",
      "price": 5.00,
      "name": "李子园朱古力风味乳饮料450ml/瓶"
    }, {
      "mallPrice": 7.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415120857_4885.jpg",
      "goodsId": "a5d1130de39f434facc6d35514cea053",
      "price": 7.50,
      "name": "名屋黑豆浆饮料485ml/瓶"
    }, {
      "mallPrice": 4.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415114959_7217.jpg",
      "goodsId": "06130c91497b4806bf2b3e538814bb66",
      "price": 4.50,
      "name": "阿华田麦芽乳饮品高钙味250mL/盒"
    }, {
      "mallPrice": 6.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415121108_2001.jpg",
      "goodsId": "b75e437adc0540c6b30516537d759122",
      "price": 6.50,
      "name": "名屋香蕉牛乳340ml/瓶"
    }, {
      "mallPrice": 3.90,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415120608_2319.jpg",
      "goodsId": "0d51d2863bdc485688c2fee2a165bb51",
      "price": 3.90,
      "name": "美汁源果粒奶优原味450ml/瓶"
    }, {
      "mallPrice": 7.40,
      "image": "http://images.baixingliangfan.cn/compressedPic/20171224082144_8430.jpg",
      "goodsId": "85173b3ce7a24a44ac2ed960a3e431fc",
      "price": 9.00,
      "name": "旺仔牛奶125ml*4/条"
    }, {
      "mallPrice": 68.00,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415122117_1031.jpg",
      "goodsId": "99e37959ae22433da7bb378a2d24c19c",
      "price": 68.00,
      "name": "同福阿胶粥300g/箱"
    }, {
      "mallPrice": 3.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415122256_2373.jpg",
      "goodsId": "068fe09cf2a849b4b8c7ce3fea734072",
      "price": 3.50,
      "name": "银鹭桂圆莲子八宝粥360g/瓶"
    }, {
      "mallPrice": 14.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415121432_880.jpg",
      "goodsId": "8172961149434b51865612820c7b8891",
      "price": 14.50,
      "name": "椰树牌椰汁饮料1L/瓶"
    }, {
      "mallPrice": 4.50,
      "image": "http://images.baixingliangfan.cn/compressedPic/20180415115515_7254.jpg",
      "goodsId": "a870459dfbba4df8af52e52aa6d0c426",
      "price": 4.50,
      "name": "豆本豆原味豆奶250ml/盒"
    }],
    "recommend": [{
      "image": "http://images.baixingliangfan.cn/compressedPic/20180411083404_6619.jpg",
      "mallPrice": 16.80,
      "goodsId": "238bc2e023844769a6b67d9a4c04b2ea",
      "price": 16.80,
      "goodsName": "纳美小苏打源生护龈牙膏3010/支"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180411085355_2725.jpg",
      "mallPrice": 9.50,
      "goodsId": "245fc7d457e5454481db9620f0f9881f",
      "price": 9.50,
      "goodsName": "ABCK25超吸棉柔护垫22片/包"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180413093730_3138.jpg",
      "mallPrice": 6.00,
      "goodsId": "24afea564e5248b5a2bc59da95f09911",
      "price": 6.00,
      "goodsName": "果倍爽橙汁饮料330ml/瓶"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180409155457_3302.jpg",
      "mallPrice": 109.00,
      "goodsId": "418fc60784d04e71beffe1ce5174c947",
      "price": 109.00,
      "goodsName": "睿嫣白檀香护发素500ml/瓶"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180412173646_7050.jpg",
      "mallPrice": 4.00,
      "goodsId": "4ae4e2e2c1df45308be5011a97aae537",
      "price": 4.00,
      "goodsName": "乐百氏脉动芒果味600ml/瓶"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180413142444_1480.jpg",
      "mallPrice": 6.90,
      "goodsId": "4cf7744443f94557b7c6ad37dca9c4db",
      "price": 6.90,
      "goodsName": "农夫山泉NFC橙汁100%300ml/瓶"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180411084437_6209.jpg",
      "mallPrice": 8.60,
      "goodsId": "66074cd2d8464dcc9b2d7fbef5b417d9",
      "price": 8.60,
      "goodsName": "七度空间少女棉超薄超长夜用卫生巾8片/包"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180407172335_1082.jpg",
      "mallPrice": 15.00,
      "goodsId": "6694401a30a940f6ae437d541b7fd26d",
      "price": 15.00,
      "goodsName": "爱莲巧牛奶巧克力100g/块"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180407172544_4503.jpg",
      "mallPrice": 9.90,
      "goodsId": "a632bfb3818541da8e6843d6d0dbd917",
      "price": 9.90,
      "goodsName": "Gemez小鸡干脆面（烧烤鸡肉味）90g/袋"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180407173221_2015.jpg",
      "mallPrice": 8.00,
      "goodsId": "ad176e397858448a854dc50371334faf",
      "price": 8.00,
      "goodsName": "单身狗粮地中海盐味薯片 71g/袋"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180413091557_6636.jpg",
      "mallPrice": 6.50,
      "goodsId": "af117ed90b624318914fd4b42001216c",
      "price": 6.50,
      "goodsName": "可口可乐2L/瓶"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180413142955_5219.jpg",
      "mallPrice": 6.90,
      "goodsId": "bdd9bd7f131843c59c7f9aabdb36f069",
      "price": 6.90,
      "goodsName": "农夫山泉NFC苹果香蕉汁100%300ml/瓶"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180410091738_4529.jpg",
      "mallPrice": 138.00,
      "goodsId": "d6e15b84c1cd45138d9493c72333f7ce",
      "price": 138.00,
      "goodsName": "可米小子象牙松子罐装262g/罐"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180407171943_7260.jpg",
      "mallPrice": 29.80,
      "goodsId": "e53c046465204d4fb8f22431cc2807e7",
      "price": 29.80,
      "goodsName": "费罗伦珍珠水果糖（狮子座）240g/盒"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180412174207_1023.jpg",
      "mallPrice": 4.00,
      "goodsId": "e7ebc6153924459287468104768bee00",
      "price": 4.00,
      "goodsName": "农夫山泉水葡萄果味饮料530ml/瓶"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20180407171519_1489.jpg",
      "mallPrice": 9.90,
      "goodsId": "f36f6dd8f62247d5846eaa9b3f269cbc",
      "price": 11.50,
      "goodsName": "捷客每日红提味曲奇120g/盒"
    }, {
      "image": "http://images.baixingliangfan.cn/compressedPic/20171225110825_6758.jpg",
      "mallPrice": 26.00,
      "goodsId": "fa750a815cfd46c3ba468db800f0e370",
      "price": 28.00,
      "goodsName": "青芒1.6kg/盒"
    }],
    "sendFee": {
      "chargeStartFee": "59.00",
      "deliveryFee": "3.00"
    }
  },
  "page": null,
  "limit": null
}
```

### 进入easy-Mock
easy-mock是比较好用的一个图形化的网站，我们完全可以使用他来模拟我们的Mock数据。
网址：https://www.easy-mock.com/
因为图形操作比较简单，我就在视频里进行演示了。


### axios的引入

直接使用 `npm install` 进行安装。

```shell
npm install --save axios
```
安装之后在要使用的页面组件中进行引入。
```
import axiso from 'axiso'
```
然后在created的声明周期里取得数据
```javascript
created(){
    axios({
        url: 'https://www.easy-mock.com/mock/5ae2427800247c2aa1efe442/SmileVue/',
        method: 'get',
    })
    .then(response => {
        console.log(response)
    })
    .catch((error) => {     
    })
}
```

如果能取得数据后，说明已经Mock成功了，那接下来就用这些数据进行布局。这节课的内容在工作中经常使用，所以我们一定要学会。


## 第08节：Mock数据的使用flex布局

<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=10 scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

这节课我们开始首页的布局,如果你flex布局和CSS掌握的很好，完全可以跳过这节课程，当初答应小伙伴们项目代码全部手写，自己挖的坑一定要自己埋上。上节课我们已经取得了mock数据。

### 首页商品分类栏的布局
使用了flex布局，因为采用`van-row`是24格布局，你5个元素是不好分的，所以使用`flex`布局。
1.提取Mock数据

------
在js代码`created`的axios then 方法里写入下面代码：
```
created(){
    axios({
        url: 'https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/index',
        method: 'get',
    })
    .then(response => {
        console.log(response)
        if(response.status==200){
            this.category=response.data.data.category;
        }
    })
    .catch((error) => {     
    })
}
```

### 编写html代码

------

有了数据，可以把html的骨架编写上去，代码如下。
```
<div class="type-bar">
    <div  v-for="(cate,index) in category" :key="index" >
            <img v-lazy="cate.image" width="90%" />
            <span>{{cate.mallCategoryName}}</span> 
    </div>
</div>
```
这里使用了`div`嵌套的方式，这样只要在外层div上使用flex布局就可以让5个元素均匀分部。

### CSS样式

------
CSS主要采用了flex布局，flex的详细语法不进行讲解，你们可以看阮一峰大神的文章，你完全可以学的很好。
```css
 .type-bar{
      background-color: #fff;
      margin:0 .3rem .3rem .3rem;
      border-radius: .3rem;
      font-size:14px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{
      padding: .3rem;
      font-size: 12px;
      text-align: center;
  }
```
代码详细的讲解会在视频中进行。

### 广告Banner的布局

------

先在created里获取数据，然后进行html骨架编写，最后进行CSS样式的调整。

```javascript
this.adBanner = response.data.data.advertesPicture //获得广告图片
```
html代码编写
```
<!--AD banner area-->
<div class="ad-banner">
    <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
</div>
```

### 改造swpie组件

------

前面的课程已经用静态数据模拟了轮播效果，现在我们有了Mock数据，完全可以用Mack数据代替。
先获取轮播图片地址数组。
```javascript
 this.bannerPicArray = response.data.data.slides   //轮播图片
```
然后修改html模版中的数据绑定就可以了

```
<div class="swiper-area">
    <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img v-lazy="banner.image" width="100%"/>
        </van-swipe-item>
    </van-swipe>
</div>
```

### 总结

------

这节课主要的知识点就是Mock数据在项目中的使用和flex布局实战中如何进行简单布局。我希望就算小伙伴基础很好，也要把这节课的内容做出来，这样你才会跟技术胖一起把这个项目作完。

## 第09节：商品推荐vue-awesome-swiper

<iframe src="//player.bilibili.com/player.html?aid=50740645&cid=88837437&page=11" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

这节会讲解首页商品推荐区域的布局和vue-awesome-swiper的使用，作一个可以左右滑动的商品推荐区域出来。学完这节课你将对vue-awesome-swiper有个很好的了解，并能轻松使用在项目和工作中。

### 先来简单的布局

------

我们先把基本的布局做好，在`src/components/pages/ShoppingMall.vue`，里编写如下html和CSS代码，这里只是简单的布局。

```
<!--Recommend goods area-->
<div class="recommend-area">
    <div class="recommend-title">
        商品推荐
    </div>
    <div class="recommend-body">
        
    </div>
</div>
```

```css
 .recommend-area{
       background-color: #fff;
       margin-top: .3rem;
  }
  .recommend-title{
      border-bottom:1px solid #eee;
      font-size:14px;
      padding:.2rem;
      color:#e5017d;
  }
```

###  安装 vue-awesome-swiper

------

还是使用npm 来进行安装,我这里的安装版本是3.1.3,写文章时是最新版本，但是你看时，可能已经升级，注意查看官方文档。
github地址：https://github.com/surmon-china/vue-awesome-swiper

```shell
 npm install vue-awesome-swiper --save
```
### 引入 vue-awesome-swiper 的两种方式

- 全局引入

可以直接使用全局引入，引入代码如下：
```javaScript
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
```

- 以组件形式引入

这种方式是在需要的页面以`component` 的形式引入，好处就是依赖性不强。

```javaScript
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  }
}

```

### 获取推荐商品数据

在`javascript`部分的data里加入`recommendGoods:[]`属性，然后在`created`生命周期里获得.

```javascript
this.recommendGoods = response.data.data.recommend  //推荐商品
```

### 编写swiper的html

------

```
<!--swiper-->
<swiper :options="swiperOption">
    <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
        <div class="recommend-item">
            
                <img :src="item.image" width="80%" />
                <div>{{item.goodsName}}</div>
                <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
                
        </div>
    </swiper-slide>
</swiper>
```
```css
  .recommend-body{
       border-bottom: 1px solid #eee;
   }
  
  .recommend-item{
      width:99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
  }
 

```
可以查看一下效果，现在还不够完美，下节课我们会调整一些基础样式。

------


***总结：***
本节课程主要使用了vue-awesome-swiper组件，大家虽然做出了效果，但是对swiper组建的使用还不清楚，我们接下来会用几节课时间讲一下vue-awesome-swiper这个组件，因为他在项目中经常使用，而且效果还不错。

## 第10节：vue-awesome-swiper 详讲1

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

作为一个Vuer，`vue-awesome-swiper`组件在开发中是经常使用的，所以个人觉的是有必要详细了解一下它的用法的。他可以作轮播图，可以作滚动。

### 一个最简单的轮播图

------

我们这里作一个单独的组件，这样不会污染项目中的文件，这个只是一个最简单默认的swiper，我们在components目录下新建一个文件夹`swiper`，然后新建一个`swiperDefault.vue`文件。写入如下代码:
```
<template>
  <div >
      <swiper>
        <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
           Slide {{item}} 
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1,2,3,4,5,6]
            }
        },
        components:{swiper,swiperSlide}
    }
</script>

<style scoped>
  .swiper-slide{
      height: 4rem;
      text-align: center;
      padding-top: 3rem;
      border-bottom: 1px solid #ccc;
  }
</style>
```
代码写好后，在`shoppingMall.vue`文件里进行引入使用。
```javascript
import swiperDefault from '../swiper/swiperDefault'
```
然后注册组件,其实上节课的代码也是可以封装成一个component的。
```javascript
components:{swiper,swiperSlide,swiperDefault},
```
注册好后，直接在`template`里使用就可以了.
```
<swiperDefault></swiperDefault>
```

### 添加分页器

------

作这类轮播图效果，现在主流的都是添加上分页器的，就是下方的小圆点，配置这些就需要在`swiper`标签上使用options属性来进行配置了。
我们现在data里进行配置，代码如下：
```javascript
swiperOption:{
    pagination:{
        el:'.swiper-pagination'
    }
}
```
然后在`template`标签里加入一个`div`用于显示分页器,注意的是要在`swiper-slide`外层。
```
<div class="swiper-pagination" slot="pagination"></div>
```
最后是在`swiper`标签里加入 `:options="swiperOption"`。就实现了有分页期的效果。
整体代码如下：
```
<template>
  <div >
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
           Slide {{item}} 
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1,2,3,4,5,6],
                swiperOption:{
                    pagination:{
                        el:'.swiper-pagination'
                    }
                }
            }
        },
        components:{swiper,swiperSlide}
    }
</script>

<style scoped>
  .swiper-slide{
      height: 4rem;
      text-align: center;
      padding-top: 3rem;
      border-bottom: 1px solid #ccc;
  }
</style>
```

### 竖屏切换效果

------

在配置项里直接配置`direction`就可以了，配置竖屏代码如下。
```javascript
swiperOption:{
    direction:'vertical',
    pagination:{
        el:'.swiper-pagination'
    }
}
```
整体代码如下：
```
<template>
  <div >
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
           Slide {{item}} 
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1,2,3,4,5,6],
                swiperOption:{
                    direction:'vertical',
                    pagination:{
                        el:'.swiper-pagination'
                    }
                }
            }
        },
        components:{swiper,swiperSlide}
    }
</script>

<style scoped>
  .swiper-slide{
      height: 4rem;
      text-align: center;
      line-height: 4rem;
  }
  .swiper{
      height: 7rem;
      border-top:1px solid #ccc;
      border-bottom:1px solid #ccc;
  }
</style>
```
## 第11节：vue-awesome-swiper 详讲2
[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

上节课我们已经作了一些swiper的效果，这节课我们继续增加swiper的功能。例如：无限循环滚动，分页器可以点击选择，文章内容滚动等效果。希望小伙伴们能在教程中学到知识，让技术有所增长。

### 区域滚动效果

在移动布局里，在大段文章的下拉上拉时，有些老旧手机会有卡顿效果。都需要我们自己加入上划下拉的组件，这里就可以直接使用`vue-awesome-swiper`来解决。我们作一个组件，里边有一大段文字，然后给文字加入顺畅的下拉上拉效果。
```
<template>
  <div >
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="text">
            <div class="centent">
               一大堆文章.........
            </div>
        </swiper-slide>
        
      </swiper>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption:{
                    direction:'vertical',
                    slidesPerView: 'auto',
                    freeMode:true,
                    mousewheel:true
                }
            }
        },
        components:{swiper,swiperSlide}
    }
</script>

<style scoped>
  .swiper{
      height: 300px;
      overflow: hidden;
  }
  .text{
      font-size: 18px !important;
      text-align: left;
      padding:30px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
   
  }
</style>
```
重点看一下options的加入属性：

- direction：'vertical'设置竖排显示

- slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用`auto`是随意的意思。

- freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。

- mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。

只要掌握好这些属性，其实做出文本滑动效果是非常简单的。


### 让分页器可以自由选择

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

在实际工作当中分页器都是可以自由选择的，只要配置一下Options的`clickable`数据就可以了。注意这个属性要配置在`pagination`下面，才能起作用。

```javaScript
pagination:{
    el:'.swiper-pagination',
    clickable:true
}
```
这时候再预览一下，就可以看到swiper分页器加了选择功能。

### 无限循环滚动

工作中还有一个需求就是无限循环滚动，不要到底了就要往回滚动，这个只要在options里加一个`loop:true`就可以实现了。

```javaScript
data() {
    return {
        slide: [1,2,3,4,5,6],
        swiperOption:{
            loop:true,
            pagination:{
                el:'.swiper-pagination',
                clickable:true
            }
        }
    }
},

```

总结：`vue-awesome-swiper`还有很多好玩的配置，可以做出很多酷炫的效果，大家可以看API文档自己学习，在项目中如果用到，我会再讲解。小伙伴赶快动手练习一下吧。

## 第12节：首页楼层区域布局

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")
学了两节的`vue-awesome-swiper`这节课回归正题，删除这些swiper组件，然后继续我们的布局。这节课我们主要完成楼层区域的布局。楼层这里是有两个最基本的需求的，第一个是前三图是不规则形状，后边的是规则并且能根据数量自动增长的。

### 不规则的布局

------
#### 第一步：先获取楼层1的数据

在data里注册一个floor1的数组变量`floor1:[]`，在axios里得到数据。
```javascript
this.floor1 = response.data.data.floor1              //楼层1数据
this.floor1_0 =this.floor1[0]
this.floor1_1 =this.floor1[1]
this.floor1_2 =this.floor1[2]
```
看到上面这段代码，我想有小伙伴一定会吐槽，但是没有办法，如果直接在模版中使用`floor1[0].image`取值会报错，这可能也是vue框架的一个限制，所以只能这样完成数据绑定了。
#### 第二步编写HTML代码

在编写HTML的时候需要注意层次结构，原则就是先统一规划大体，然后再调整局部。
```
<!--floor one area-->
<div class="floor">

    <div class="floor-anomaly">
        <div class="floor-one"><img :src="floor1_0.image" width="100%" /></div>
        <div>
            <div class="floor-two"><img :src="floor1_2.image" width="100%" /></div>
            <div><img :src="floor1_3.image" width="100%" /></div>
        </div>
    </div>

</div>
````

### 第三步编写CSS样式

主要使用了`flex`布局和`box-sizing`。
```css
 .floor-anomaly{
      display: flex;
      flex-direction:row;
      background-color: #fff;
      border-bottom:1px solid #ddd;
  }
  .floor-anomaly div{
     width:10rem;
    
     box-sizing: border-box;
     -webkit-box-sizing: border-box;
  }
  .floor-one{
      border-right:1px solid #ddd;
      
  }
  .floor-two{
      border-bottom:1px solid #ddd;
  }

```

布局到这里，可以进行预览了。

### 规则部分的布局

------

所谓规则部分，就是由左右两列组成，用`v-for`可以进行循环。

#### 第一步布局我们的html

```
<div class="floor-rule">
    <div v-for="(item ,index) in floor1.slice(3)" :key="index">
        <img :src="item.image" width="100%"/>
    </div>
</div>
```

### 第二步编写CSS样式

```css
  
  .floor-rule{
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      background-color: #fff;

  }
  .floor-rule div{
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width:10rem;
      border-bottom:1px solid #ddd;
  }
  .floor-rule div:nth-child(odd){
      border-right: 1px solid #ddd;
  }
```

### 楼层标题的布局

------
做到这里我们的主要代码就算完成了，但是还没有楼层标题，这个部分就留个小伙伴们自己发挥了，你可以作一个自己喜欢的标题样式。

## 第13节：楼层组件的封装和watch使用
[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

首页楼层布局基本完成，但是真实项目中有很多楼层，为了代码复用和少写一些代码，我们把楼层这部分封装成一个传递参数的组件，并使用watch来监听参数的变化，达到正确渲染的目的。

### 编写组件
在`src/components/`下新建一个`component`的文件夹，进入文件夹，新建`floorComponent.vue`文件，用来编写我们的楼层组件。
在编写的时候，我们先从页面中把相对应的html模版和CSS代码拷贝过来，然后再进行改造。全部组件代码如下：
```
<template>
    <div>
        <!--floor one area-->
        <div class="floor">

            <div class="floor-anomaly">
                <div class="floor-one"><img :src="floorData0.image" width="100%" /></div>
                <div>
                    <div class="floor-two"><img :src="floorData1.image" width="100%" /></div>
                    <div><img :src="floorData2.image" width="100%" /></div>
                </div>
            </div>

            <div class="floor-rule">
                <div v-for="(item ,index) in floorData.slice(3)" :key="index">
                    <img :src="item.image" width="100%"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props:['floorData'],
        data() {
            return {
                floorData0:{},
                floorData1:{},
                floorData2:{}
            }
        },
        created(){
            //这里写得不到数据，应为数据是延迟返回的
            
        },
        watch:{
            floorData:function(val){
                console.log(this.floorData)
                this.floorData0=this.floorData[0]
                this.floorData1=this.floorData[1]
                this.floorData2=this.floorData[2]
            }
        }

    }
</script>

<style scoped>
  .floor-anomaly{
      display: flex;
      flex-direction:row;
      background-color: #fff;
      border-bottom:1px solid #ddd;
  }
  .floor-anomaly div{
     width:10rem;
    
     box-sizing: border-box;
     -webkit-box-sizing: border-box;
  }
  .floor-one{
      border-right:1px solid #ddd;
      
  }
  .floor-two{
      border-bottom:1px solid #ddd;
  }
  
  .floor-rule{
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      background-color: #fff;

  }
  .floor-rule div{
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width:10rem;
      border-bottom:1px solid #ddd;
  }
  .floor-rule div:nth-child(odd){
      border-right: 1px solid #ddd;
  }
</style>
```

由于组件中的数据是从远程拿到的，所以刚开始数据是为空的，所以组件渲染不出来。我们需要加入watch属性来监听传递过来值的变化，当变化时，我们给1，2，3副图片进行赋值操作。
最后根据赋值来改造我们template的html结构。

### 引入组件

在`ShoppingMall.vue`中引入组件，首先使用`import `进行引入

```javascript
import floorComponent from '../component/floorComponent'
```
在`components`属性里注册组件

```javascript
components:{floorCompoent}
```
作完上面两部直接在`template`里标签的形式的使用就可以了。
```
<floorComponent :floorData="floor1"></floorComponent>
```
使用绑定属性的形式传入需要的值，按照这种方法，就可以直接引入其他3个楼层了。

### 删除页面中的无用代码。

有了组件后，页面中的很多代码都变的无用了，我们需要作一下处理，这部分很简单，我就在视频中演示了。



***总结：*** 组件的封装是Vue的一个最主要的优点，在工作中我们要学会使用组件封装，这样才能让代码结构清晰简单，可复用，大大节省了后期重构的成本。这节课的watch用法大家也要掌握好，在需要等待数据时，非常好用。

## 第14节：楼层组件的完善

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

这节先完善一下楼层组件，加入一个标题区域。原来想把这部分留给小伙伴自己制作，发现自己制作的过程中还是有一些问题的，小伙伴加入静态的头部都没有什么问题，可是动态数据还是不知道方法。

### 楼层组件标题区域制作

首先在`floorComponent.vue`组件的`template`区域加入`HTML`代码。
```
 <div class="floor-title"> {{floorTitle}} </div>
```

然后编写一下简单的CSS样式,我相信小伙伴们作出这些东非常简单。
```
.floor-title{
      text-align:center;
      font-size:14px;
      height: 1.8rem;
      line-height: 1.8rem;
  }
```
其次加入`props`属性的编写
```
  props:['floorData','floorTitle'],
```
这样我们就完成了楼层组件区域的制作，并可以在使用的时候传递过来一个标题了。

### 给头部区域传值

先在`ShoppingMall.vue`的Data里声明一个叫`floorName`的值。然后在axios里进行赋值。

```
this.floorName = response.data.data.floorName        //楼层名称
```

最后修改一下在template里的写法就可以使用了。

```
 <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
```
### 完成其他两个楼层的代码编写

1.现在data里进行声明
```
data() {
    return {
        swiperOption: {
            slidesPerView:3,
        },
        locationIcon: require('../../assets/images/location.png'),
        bannerPicArray:[], // 轮播图片
        category:[],       //商品类别标签栏
        adBanner:'',       //广告图片
        recommendGoods:[], //推荐商品
        floor1:[],         //楼层1的数据
        floor2:[],         //楼层1的数据
        floor3:[],         //楼层1的数据
        floorName:{}       //楼层名称
    }
},
```
2.在axios里获得数据
```

this.floor1 = response.data.data.floor1              //楼层1数据
this.floor2 = response.data.data.floor2              //楼层2数据
this.floor3 = response.data.data.floor3              //楼层3数据

```
3.在模版`template`里使用组件

````
<floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
<floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
<floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
````

现在可以预览一下效果了，我们的楼层组件也算完成了，希望小伙伴们可以在课程中学到东西，用来改造自己的实际项目。


## 第15节：Filter在实战中的使用



作电商项目对钱的格式是有一定要求的，而`JavaScript`恰恰在小数部分有一些瑕疵，就需要我们对钱的格式有一个处理。有些小伙伴会认为在vue的`JavaScript`部分里处理就好，其实我认为这类处理写一个过滤器就很方便了。下面我们就以钱的格式为例，写一个过滤器，然后以后只要涉及到钱的部分，我们都是用这个过滤器。

### 编写过滤器通用方法

因为过滤器都是需要在很多组建中进行使用的，所以要编写一个比较通用的方法。先在`src`文件夹下建立一个`filter`文件夹，然后在filter文件夹下建立一个`moneyFilter.js`文件。
这时候有可以编写格式化钱的方法，其实很简单，我们这里用了`toFixed()`方法。

```
export function toMoney(money){

    let newMoney = money;
    if(newMoney){
        newMoney = newMoney.toFixed(2)
    }else{
        newMoney=0
        newMoney=newMoney.toFixed(2)
    }
    return newMoney

}

```
上边的方法写的并不优雅，所以我们后边会进行修改，让他变的优雅些，这里只是做一个错误的示范而已。因为很多小伙伴问我如何优化代码，让代码变的优雅。我觉的这个很难讲清楚，所以在这里举个例子。


### 引入`Filter`

```
import {toMoney} from '@/filter/moneyFilter.js'
```

注意这里的`@`代表的是`src`目录的意思，这个是`webpack`的配置，我们可以在`/build/webpack.base.conf.js`里找到这个配置项。


### 编写`vue`里的`filter`属性

`vue`是支持`fitler`属性的，之前只是方法，现在要在`vue`文件里编写属性。

```
filters:{
    moneyFilter(money){
        return toMoney(money)
    }  
},
```
这里需要注意的是你`fitler`的名字可以随便起，但是你用的`toMoney`方法，要和你上边引入的一样。

### 在`template`中使用`filter`

直接在使用价格的地方使用`item.price | moneyFilter`就可以了。


### 优化我们的filter通用方法

上边的通用方法写的实在是太难看了，所以我们需要进行优化一下。

```
export function toMoney(money = 0){
    return money.toFixed(2)
}
```


**总结：** `Filter`在实际工作中是并用的一个技能，虽然很简单，但是你要反复琢磨你写的代码是否可以优化或者是否可以精简。


## 第16节：首页热卖模块的Van-list组件使用

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

这节课作一下首页商品的热卖部分制作，也是对组件封装的一个再次联系吧。这节课完事我会集中讲解一下Axios的使用，因为从留言和微信提问来看，小伙伴对这部分的知识还是比较模糊的。

### html+CSS部分的编写

从这节课开始，我会加快HTML+CSS的讲解，甚至省略CSS部分的编写，而把更多的精力放到我们Vue代码和组件封装上来，但是在文字版还是会完整的贴出这些代码。目的是为了小伙伴能无痛 的做出这个项目。

Html代码，这些代码是卸载`ShoppingMall.vue`文件中的.

```
<!--Hot Area-->
<div class="hot-area">
    <div class="hot-title">热卖商品</div>
    <div class="hot-goods">
      <!--这里需要一个list组件-->
    </div>
</div>
```

CSS代码部分，在视频中我们就不在讲解了，而是采用复制的方式

```css
.hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
```

### Vant列表(List)组件的使用

因为我们希望作一个下拉加载更多的功能，你当然可以完全自己手写一个这样的组件，工作中由于任务会比较紧张，所以这部分基本不会给你太多时间来写，也不要重复造轮子。可以直接使用Vant的List组件。

1.引入List组件:在`/src/App.vue`文件中引入List组件

```javascript
import { List } from 'vant'
Vue.use(List)
```

2.构造数据：现在`data`里声明hotGoods
```
data(){
	hotGoods:[] //热卖商品
}
```
3.在axios里获得数据
```
 this.hotGoods = response.data.data.hotGoods           //热卖商品
```

4.加入List组件，并使用`van-row`布局

```
<!--Hot Area-->
<div class="hot-area">
    <div class="hot-title">热卖商品</div>
    <div class="hot-goods">
        <van-list>
            <van-row gutter="20">
                <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
                    <div>{{item.name}}</div>
                </van-col>
            </van-row>
        </van-list>
    </div>
</div>
```





### 商品显示组件的编写

因为这个商品列表组件会在首页用到，会在列表页用到，会在搜索页用到。所以封装成一个通用的组件是很好的选择，封装后会大大降低开发难度。

新建`/src/component/goodsInfoComponent.vue`文件，用来制作商品组件。

```
<template>
    <div class="goods-info">
        <div class="goods-image">
            <img v-lazy="goodsImage" width="90%" />
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice | moneyFilter }}</div>
    </div>
</template>

<script>
    import {toMoney} from '@/filter/moneyFilter.js'
    export default {
        props:['goodsImage','goodsName','goodsPrice'],
        filters:{
            moneyFilter(money){
                return toMoney(money)
            }  
        },
    }
</script>

<style scoped>
    .goods-name{
        padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
    }
</style>
```

编写完组件，直接在`ShoppingMall.vue`里引入就可以了，还又在components里声明一下。
```
import goodsInfo from '../component/goodsInfoComponent'
```
在模版中使用组件

```
<van-row gutter="20">
    <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
        <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
    </van-col>
</van-row>
```

## 第17节：编写后台服务接口配置文件

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

在开发中我们现在直接把数据接口文件写到了axios中，这样写如果地址改变或者接口改变，我们需要进入业务逻辑代码进行修改，维护起来会非常的麻烦。那这节课我们就把项目中用到的接口都单独拿出来，作一个接口配置文件`serviceAPI.config.js`。

### 编写接口配置文件

项目src目录下建立`serviceAPI.config.js`,然后打开编写如下代码。

```
const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo'
}

module.exports = URL
```

编写好后，我们可以直接在要使用的文件中用import的形式引入。

```javascript
import url from '@/serviceAPI.config.js'
```

引入后就可以直接使用了。

```javascript
axios({
    url: url.getShoppingMallInfo,
    method: 'get',
})
```

总结：这节课的内容虽然很短，但是这是作配置文件的一种方法，在项目中你想作任何配置文件完全可以使用这节所学的内容。希望小伙伴们可以把这种最基本的方法学会，并应用在工作中。

## 第18节：安装Koa2到项目中来
[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")
前端部分已经学的差不多了，现在需要作一些后端服务来支撑前端的数据了，也就是Koa2和MongoDB要登场了。为了演示方便，我们就不单独起个项目了，而是在这个项目中新建一个`Service`文件夹。

### 安装Koa和MongoDB到项目中

1.首先在项目根目录下建立文件夹`service`，然后进入文件。
```shell
mkdir service
cd service
```
2.使用`npm init -y ` 生成并初始化package.json 文件。

3.在终端中使用npm来安装koa
```
npm install --save koa
```
### 编写一个Hello World 测试一下安装是否成功

安装好后，写个Hello World 测试，也帮助小伙伴们回忆一下Koa最基本的语法（如果看到这里，你还没有学习Koa2的基础课程），那你需要停下来转到Koa2去学习一下基础，然后回来再进行学习。

```
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})
```

编写好以后，使用`node index.js`来启动服务，然后在浏览器中输入`http://loacalhost:3000`，如果正常显示hell koa2 说明我们的koa2已经安装成功。

**总结**：这节课就是把Koa2安装好，然后测试一下可以使用就可以了。下节课我们安装我们的MongoDB数据库。


## 第19节：安装MongoDB数据库
[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")
今天我们更新两集视频，因为这两集都比较简单，以前也讲过，但是为了课程的完整性，我们还是需要再讲一下，以免小伙伴在操作时出现断档,导致向下做不出来。

### 安装步骤

1. 去官网下载MongoDB，https://www.mongodb.com/  ,在网站中找到Download按钮。下载会有点忙， 国外的服务器，你懂的。 
2. 下载后进行安装，安装没什么难度，但是对于新手建议选择默认安装，而不选择自己配置。等我们完全熟悉后再定制式配置。
3. 安装时如果有安全软件，会报一些拦截，一律允许就好，不允许会安装失败的。
4. 安装完成后，需要配置“环境变量”，目的是再命令行中直接使用，而不需要输入很长的路径了。（此步骤观看视频）


### 运行MongoDB服务端

------

安装好MongoDB数据库后，我们需要启用服务端才能使用。启用服务的命令是：Mongod。

1. 打开命令行:先打开运行（快捷键win+R），然后输入cmd后回车，就可以打开命令行工具。
2. 执行mongod:在命令中直接输入mongod，但是你会发现服务并没有启动，报了一个exception，服务停止了。
3. 新建文件夹:出现上边的错误，是因为我们没有简历Mongodb需要的文件夹，一般是安装盘的根目录，建立data/db,这两个文件夹。
4. 运行mongod：这时候服务就可以开启了，链接默认端口是27017。

### 下载Robo3

------

由于我们是作项目，所以图形界面比较直观，我们上边并没有安装图形界面，这里我们使用Robo3来弥补一下。

下载地址：https://robomongo.org/download

然后就是下一步下一步安装了。

总结：这节课就是把MongoDB安装好，Koa2和MongoDB都安装好了，我们就可以愉快的编程了。

## 第20节： Koa用Mongoose连接数据库（1）
[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")
在作软件的时候，我们经常会遇到MVC这个词(Model View Controller)，那在Model和Controller这一层经常需要一些工具来进行对接。Mongoose就是Koa和MongoDB的粘合材料（其实也相当于一个驱动），帮助我们完成数据库的操作和通讯。要实现通讯第一步就是实现粘合，软件里叫做连接数据库。这就是这节课我们需要讲的内容。

### Mongoose概念

> Mongoose是一个开源的封装好的实现Node和MongoDB数据通讯的数据建模库。

### Mongoose的安装
还是使用npm来进行安装。
```shell
npm install mongoose --save
```

### 连接数据库

我们在项目的`service`文件夹下建立一个`database`文件夹，用来存放和数据库操作有关的文件。在database文件夹下，建立一个`init.js`文件，用来作数据库的连接和一些初始化的事情。

/service/database/init.js

```
const mongoose = require('mongoose')
const db = "mongodb://localhost/simle-db"

mongoose.Promise =  global.Promise

exports.connect = ()=>{
    //连接数据库
    mongoose.connect(db)

    //增加数据库连接的事件监听
    mongoose.connection.on('disconnected',()=>{
        //进行重连
        mongoose.connect(db)
    })

    //数据库出现错误的时候
    mongoose.connection.on('error',err=>{
        console.log(err)
        mongoose.connect(db)
    })

    //链接打开的时候
    mongoose.connection.once('open',()=>{
        console.log('MongoDB Connected successfully!')
    })

}
```

然后在`/service/index.js`里加入立即执行函数，在使用前记得用require进行引入 `connect`。
```
//引入connect
const {connect} = require('./database/init.js')

//立即执行函数
;(async () =>{
    await connect()
})()
```

然后我们在中终端里使用`node index.js`执行一下，可以看到数据库已经连接成功了。

**总结:**这节课的内容只是简单的连接，还有一些错误或者是连接中断的业务代码没有编写，我们留到下一节进行编写。作程序都是这样的，先要实现主要功能，然后考试考虑意外情况，减少代码错误。

## 第21节： Koa用Mongoose连接数据库（2）

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")
上节课已经作了基本的数据库连接，并且已经连接成功。但是如果数据没有开启，或网络出现问题，我们并没有作这些意外处理，在写程序时，当主要功能完成时，我们要作意外处理和逻辑处理，让程序增加健壮性。


### 增加Promise的支持
我们在作这个init.js文件时，必须确保先连接数据库后，再作其他事情，所以我们需要在所有代码的外层增加一个`Promise`。

```
return  new Promise((resolve,reject)=>{
//把所有连接放到这里
})
```
### 连接失败自动重连
一般数据库连接失败，我们会重新连接，但这个重连也是需要有一个次数的，比如连接3次失败，我们在服务端抛出异常。
首先声明一个最大连接数`maxConnectTimes`.
```
let maxConnectTimes = 0 
```

当连接断开时，我们进行重连的代码如下：

```
mongoose.connection.on('disconnected',()=>{
    console.log('***********数据库断开***********')
    if(maxConnectTimes<3){
        maxConnectTimes++
        mongoose.connect(db)    
    }else{
        reject()
        throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
    }
    
})
```
当连接断开时，我们需要把连接次数加1，并重新连接数据库。当重连次数超过3次后，我们抛出了异常，并用reject()通知了promise。



同样当连接出错时，我们也要进行重连操作。
```
mongoose.connection.on('error',err=>{
    console.log('***********数据库错误***********')
    if(maxConnectTimes<3){
        maxConnectTimes++
        mongoose.connect(db)   
    }else{
        reject(err)
        throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
    }

})
```


### 全部文件

```
const mongoose = require('mongoose')
const db = "mongodb://localhost/smile-db"

exports.connect = ()=>{
    //连接数据库
    mongoose.connect(db)

    let maxConnectTimes = 0 

    return  new Promise((resolve,reject)=>{
    //把所有连接放到这里
        
        //增加数据库监听事件
        mongoose.connection.on('disconnected',()=>{
            console.log('***********数据库断开***********')
            if(maxConnectTimes<3){
                maxConnectTimes++
                mongoose.connect(db)    
            }else{
                reject()
                throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
            }
            
        })

        mongoose.connection.on('error',err=>{
            console.log('***********数据库错误***********')
            if(maxConnectTimes<3){
                maxConnectTimes++
                mongoose.connect(db)   
            }else{
                reject(err)
                throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
            }

        })
        //链接打开的时
        mongoose.connection.once('open',()=>{
            console.log('MongoDB connected successfully') 
            resolve()   
        })

    })

}
```

# 第22节： Mongoose的Schema建模介绍

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

数据库已经可以连接成功了，这节课学习一下如何建模，也就是定义Schema，他相当于MongoDB数据库的一个映射。Schema是一种以文件形式存储的数据库模型骨架，无法直接通往数据库端，也就是说它不具备对数据库的操作能力。Schema是以key-value形式Json格式的数据。

### Schema中的数据类型
- String ：字符串类型
- Number ：数字类型
- Date  ： 日期类型
- Boolean： 布尔类型
- Buffer ： NodeJS buffer 类型
- ObjectID ： 主键,一种特殊而且非常重要的类型
- Mixed ：混合类型
- Array ：集合类型

### Mongoose中的三个概念

- schema ：用来定义表的模版，实现和MongoDB数据库的映射。用来实现每个字段的类型，长度，映射的字段，不具备表的操作能力。
- model ：具备某张表操作能力的一个集合，是mongoose的核心能力。我们说的模型就是这个Mondel。
- entity ：类似记录，由Model创建的实体，也具有影响数据库的操作能力。

### 初学定义一个用户Schema
这节我们先以用户表为例，定义一个基本数据模型，当然这并不完善，我们会在后边的几节课把这个模型完善，并加入一些安全的机制进群。
在`/servcie/database/`文件夹下新建一个`schema`文件夹，然后新建一个`User.js`文件.

```
const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型

//创建我们的用户Schema
const userSchema = new Schema({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()}

})

//发布模型
mongoose.model('User',userSchema)
```


## 第23节： 载入Schema和插入查出数据

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

Schema建立好以后，需要我们载入这些数据库，当然最好的方法就是在后台服务已启动的时候就把载入做好，所以我们在`service/init.js`里作这件事，然后在index.js里直接执行。

### 载入所有Schema

直接在`service\init.js` 先引入一个glob和一个resolve

首先安装glob

```javascript
npm install glob --save
```

```javascript

const glob = require('glob')
const {resolve} = require('path')

```
- glob：node的glob模块允许你使用 * 等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则文件。
- resolve: 将一系列路径或路径段解析为绝对路径。

了解两个引入的模块用法后，我们就可以一次性引入所有的Schema文件了。

```
exports.initSchemas = () =>{
    glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}
```
使用了glob.sync同步引入所有的schema文件，然后用forEach的方法require（引入）进来。这比你一条条引入要优雅的多。

### 插入一条数据

作了这么久的Mongoose学习，还没有真正操控数据库，比如插入和读出数据库中的内容，现在我们就开始这个操作。



记得在操作数据库前先引入我们的Mongoose和我们刚写好的initSchemas：
```javascript
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
```

引入好后，我们直接在`service/index.js`的立即执行函数里插入一天User数据

```
;(async () =>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({userName:'jspang',password:'123456'})
    oneUser.save().then(()=>{
        console.log('插入成功')
    })

})()
```

### 读出已经插入进去的数据

```javascript
let  users = await  User.findOne({}).exec()
console.log('------------------')
console.log(users)
console.log('------------------')
```
这里我们只读出了一条，小伙伴们可以试着读出多条。

完整的index.js代码如下：

```
const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')

//立即执行函数
;(async () =>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({userName:'jspang13',password:'123456'})
  
    oneUser.save().then(()=>{
        console.log('插入成功')
        
    })
let  users = await  User.findOne({}).exec()

console.log('------------------')
console.log(users)
console.log('------------------')  
})()


app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})
```

## 第24节： 打造安全的用户密码加密机制

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

通过学习，虽然可以对数据库的可以进行插入操作了，但是现在使用的都是普通的明文密码，这在实际工作中是肯定不允许，需要对密码进行加密和加盐的处理。

### 加密处理

密码的加密有很多种加密算法，比如我们使用的MD5加密或者hash256加密算法，其实他们都是hash的算法。就是把你的密码进行一次不可逆的编译，这样就算别人得到了这个密码值，也不能进行直接登录操作。
我们可以通过（http://www.atool.org/hash.php）   网站，直观的看一下加密的算法。

### 加盐处理
有了加密的处理，我们的密码就安全多了，但是有用户的密码设置的太过简单，很好进行暴力破解或者用彩虹表破解，这时候感觉我们的密码又不堪一击了。这时候我们要使用加盐技术，其实就是把原来的密码里，加入一些其他的字符串，并且我们可以自己设置加入字符串的强度。

把加盐的数据库密码进行hash处理后，再存入数据库就比较安全了。

当然还有很多更严谨更可靠的加密机制，小伙伴可以自行探索一下，这个项目我们就是用加盐加密的方法处理用户的密码。

### bcrypt的使用

**简介:** bcrypt是一种跨平台的文件加密工具。bcrypt 使用的是布鲁斯·施内尔在1993年发布的 Blowfish 加密算法。由它加密的文件可在所有支持的操作系统和处理器上进行转移。它的口令必须是8至56个字符，并将在内部被转化为448位的密钥。

首先是用npm 进行安装

```
npm instal --save bcrypt --registry=https://registry.npm.taobao.org
```
这里注意如果你安装失败了，试着是用淘宝源来进行安装，因为bcrypt里边的二进制包的下载可能是被墙掉了。

安装完成后就是引入bcrypt

```javascript
const bcrypt = require('bcrypt')
```

然后是用pre每次进行保存时都进行加盐加密的操作。（具体代码解释，视频中进行讲解）

```javascript
//每次存储数据时都要执行
userSchema.pre('save', function(next){
    //let user = this
    console.log(this)
    bcrypt.genSalt( SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(this.password,salt, (err,hash)=>{
            if(err) return next(err)
            this.password = hash
            next()
        }) 

    })
})
```

## 第25节： 编写注册页面前端视图

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")
不好意思，这一周都在出差，今天到家马上给大家编写教材。我们已经学会了用户表Schema的建立，并进行了安全机制的处理。这节开始我们就把用户注册登录这一部分进行完善。当你把这部分学完，你一定会对Koa+vue的前后台全栈开发有更深的理解。（这节课主要讲页面的编写，基础好的同学可以跳过本节，自己作更漂亮的注册页面）

### 注册页面的vue模板编写

1.新建页面

我们先来新建一个vue的模版页面，`src/components/pages/Register.vue`。

2.编写vue的路由配置文件 `router/index.js`

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMall',component: ShoppingMall},
    {path: '/register',name: 'Register',component: Register},
  ]
})
```
3.引入vant的两个插件`Field`和`NavBar`

4.编写模版文件，由于我们已经对vue的模板编写很熟悉了，这里就不作过多介绍了。（直接上代码，视频中详细讲解）

```html
<template>
    <div>
       <van-nav-bar
        title="用户注册"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />

        <div class="register-panel">
        <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="username = ''"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        <div class="register-button">
            <van-button type="primary" size="large">马上注册</van-button>
        </div>
       </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)   
            }
        },
    }
</script>

<style scoped>
    .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:10px;
    }
</style>
```

## 第26节： Koa2的用户操作的路由模块化

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

在学习基础知识的时候，我们已经讲过·`koa-router`这个插件，但是所有的路由都写在`service/idnex.js`里显然不是正确的选择，这会导致我们的`index.js`页面越来越臃肿，最后变的没办法维护。我们需要把Koa程序模块化，我们也叫做路由模块化。

### 安装koa-router

我们使用npm来安装koa-router，需要注意的是在终端中我们要进入到`service`文件夹下，然后再输入如下命令：
```shell
npm install koa-router --save
```
我现在使用的版本是`7.4.0`，大家一定要注意一下自己的版本，如果版本不同，可能学习的时候稍有区别。

### 新建一个User.js的文件

新建一个appApi的文件夹，然后在进入文件夹，新建User.js的文件。有关User.js的操作，我们以后都会放到这个文件下，就是要编写的供前台使用的接口程序了。
```
mkdir appApi
cd appApi
```
编写我们User.js文件：（视频中会详细讲解）

```
const Router = require ('koa-router')
let router = new Router()
router.get('/',async(ctx)=>{
    ctx.body="这是用户操作首页"
})
router.get('/register',async(ctx)=>{
    ctx.body="用户注册接口"
})
module.exports=router;
```

### 让路由模块化

接下来，我们需要把这个文件和koa-router加入到`service/idnex.js`下面，实现可以访问。
1.首先在`index.js`的文件顶部，引入koa-router
```
const Router = require('koa-router')
```
2.引入我们的user.js模块
```
let user = require('./appApi/user.js')
```
3.装载所有子路由

```
let router = new Router();
router.use('/user',user.routes())
```

4. 加载路由中间件

```
app.use(router.routes())
app.use(router.allowedMethods())
```


这四步作完了，我们就可以在浏览器中实验一下我们的模块化路由是否起作用了。在浏览器中输入，`http://localhost:3000/user`，已经可以出现我们设定好的页面了。

**总结：**通过这种简单的模块化路由机制，我们就实现了文件的分离，当然这并不是最完美的方案，如果对要求比较高的小伙伴，可以看一下egg.js的路由写法或者直接使用egg.js来进行开发。当然现在的这种做法完全可以应付小型项目的开发了。

## 第27节：打通注册用户的前后端通讯

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

这节我们要把前后端进行打通，使用API接口的形式可以互相同通讯和传递数据。看起来比较简单，但是这节课的内容还是比较多的，希望小伙伴能认真对待这节内容，然后课下练习。

### 安装koa-bodyparser中间件

首先我们要接到前端发过来的请求，这时候需要安装`koa-bodyparser`中间件,我们使用npm来进行安装。
记得先进入到`service`目录下，在使用npm进行安装。
```
npm install --save koa-bodyparser
```
这里使用的版本是`4.2.1`。

安装好后，在`service/index.js`文件中注册和引入中间件。
```
const bodyParser = require('koa-bodyparser')
app.use(bodyParser());
```

### 前台的axios请求处理

1.在`register.vue`头部引入axios
```
import axios from 'axios'
```
2.修改serviceAPI.config.js接口配置文件
需要对接口配置文件作一些设置，加入我们的注册接口地址。
```javscript
const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',   //用户注册接口
}

module.exports = URL

```
这里主要加入了LOCALURL常量的声明，用于存储本地请求路径，和在URL里增加了registerUser接口的地址配置。

3.引入接口配置文件

```
import url from '@/serviceAPI.config.js'
```
4.编写aixos用户注册方法
进入到`src/components/pages/Register.vue`文件下，在methods属性里，写入如下方法

```
//*********axios注册用户方法********
axiosRegisterUser(){
        axios({
        url: url.registerUser,
        method: 'post',
        data:{
            username:this.username,
            password:this.password 
        }
    })
    .then(response => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}
````

5.把注册按钮绑定axiosRegisterUser方法
```
<van-button type="primary" @click="axiosRegisterUser" size="large">马上注册</van-button>
```


### 让koa2支持跨域请求
跨域对于新手小伙伴来说是个非常头疼的问题，在微信或者QQ群里很多小伙伴问我跨域的问题，当然跨域也有多种解决方案，但是个人认为最完美的解决方案是在后台设置支持跨域。对于这个项目后台就是我们的Koa2服务。

**安装koa2-cors中间件**

在koa2里解决跨域的中间件叫`koa2-cors`，我们先进入service文件夹，然后直接使用npm来进行安装。

```
npm install --save koa2-cors
```
安装完成后，记得要在`service/index.js`文件中引入和注册（使用）一下中间件：
```
const cors = require('koa2-cors')
app.use(cors())
```


### 编写koa2接收前台数据的方法

这时候我们已经万事俱备了，打通了前台和后台数据互通的基本环节。现在主要开心的写一个后台的数据接口方法，就可以实现接收数据，并回传数据了。

进入`service/appApi/user.js`文件，修改resgister路由接口下的代码，记得把get方法换成post方法。

```
router.post('/register',async(ctx)=>{
    console.log(ctx.request.body)
    ctx.body= ctx.request.body
})
```

到此步我们已经完成了前后台数据的互通，可以打开服务接口，开启浏览器，测试一波了。小伙伴们是否传递了数据，并在前台接收到了返回。


## 第28节：用户注册数据库操作

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

这节课我们主要用户注册时，如何插入到数据库中，实现真正的Vue、Koa2、Mongodb全面互通。相信学完这节课，小伙伴们都可以开始自己向下作项目，并且使用一些小项目练手了。掌握了这节，你已经算是一个准全栈工程师了。有了编写前端+后端的能力。更多的就是练习和积累相关知识了。

### Koa2的User.js 接口的完善

1.首先在`service/appApi/user.js`下引入mongose,这样就可以操作我们的Schema了。
```javascript
const mongoose = require('mongoose')
```

2.编写 register接口的程序，代码的注释已经很详细，小伙伴们可以直接看注释。
```javascript
router.post('/register',async(ctx)=>{
    
    //取得Model
    const User = mongoose.model('User')
    //把从前端接收的POST数据封装成一个新的user对象
    let newUser = new User(ctx.request.body)
    //用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
    await newUser.save().then(()=>{
        //成功返回code=200，并返回成功信息
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch(error=>{
         //失败返回code=500，并返回错误信息
        ctx.body={
            code:500,
            message:error
        }
    })
   
})
```

### 前端Vue的业务处理

上节课我们只是用axios发送了一个请求，对返回的结果只是简单的console.log()了一下，现在我们把这些代码进行补全，根据koa端返回的code进行不同的提示。

提示我们可以使用vant的轻提示插件Toast，先引入我们的Toast组件，这个直接在`Register.vue`下引入就可以了。
```javascript
import { Toast } from 'vant'
```
具体业务逻辑代码如下：
```javascript
axiosRegisterUser(){
        axios({
        url: url.registerUser,
        method: 'post',
        data:{
            userName:this.username,
            password:this.password 
        }
    })
    .then(response => {
        console.log(response)
        //如果返回code为200，代表注册成功，我们给用户作Toast提示
        if(response.data.code == 200){
            Toast.success('注册成功')
        }else{
            console.log(response.data.message)
            Toast.fail('注册失败')
        }
            console.log(response.data.code)
    })
    .catch((error) => {   
        Toast.fail('注册失败')  
    })
            
}
```


然后我们可以测试一波了，看看是否可以插入数据库，并给用户非常友好的提示。

**总结：** 学了将近30节，小伙伴终于可以实现全栈的操作了，你现在可以想想自己学完后作一些什么小项目，我们可以按照自己的想法，用程序构建理想的世界了，这是无比美好的事情。


## 第29节：注册的防重复提交

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

其实我原本想这样就结束用户注册的讲解，但是出于一个正直、善良的程序员是不忍心这样坑害一起进步的小伙伴的，所以我又加了这节课。把注册中需要注册的细节给大家讲明白，防止工作中被项目组长骂。防重复提交一般是在前端来处理的，为什么会产生重复提交的现象那？比如用户的手机网速很慢，用户在1秒钟内还没得到结果，他认为可能是没点击到，就又点击了，这时候后台就被请求了两次。如果我们作的是千万级的程序，没多一次请求，都会给服务器带来压力，在老板眼里这都是钱。

### 1.在按钮上绑定loading属性

我们先打开`src/components/pages/Register.vue`文件，找到我们的注册按钮,然后在按钮上绑定loadding属性。
```
	 <van-button type="primary" @click="axiosRegisterUser" :loading="openLoading" size="large">马上注册</van-button>
```

然后在下面的的javascript（脚本）部分的data中声明openLoading属性
```
data() {
    return {
        username: '',
        password: '',
        openLoading: false, //是否开启用户的Loading
    }
},
```

### 2.改写我们的注册方法

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

防重复提交需要在我们进入注册业务逻辑的时候就开始实行，也就是点击注册按钮这一步时。所以我们要改造现在已经写好的`axiosRegisterUser()`方法，加入一些防重复提交的逻辑。

```
axios({
    url: url.registerUser,
    method: 'post',
    data:{
        userName:this.username,
        password:this.password 
    }
})
.then(response => {
    console.log(response)
    //如果返回code为200，代表注册成功，我们给用户作Toast提示
    if(response.data.code == 200){
        Toast.success('注册成功')
        this.$router.push('/')
    }else{
        console.log(response.data.message)
        Toast.fail('注册失败')
            this.openLoading=false
    }
        
})
.catch((error) => {   
    Toast.fail('注册失败')
    this.openLoading=false
})
        

```

在一开始进入注册方法的时候，作的第一件事就是把注册按钮变成loading状态。然后在注册失败的时候取消loading状态，注册成功就跳转到个人中心页面（由于还没制作，先跳转到商城首页）。这样在前台就防止了重复提交。

### 解决一个网友的小问题

有细心的网友会发现我们的Mongodb数据库中的表，在程序中定义的是`user`而真实数据库中变成了`users`,这对于处女作是不能忍受的，作IT的就要有完全的掌控感。其实只要在Schema里配置一下就可以解决这个问题,打开`servcie/database/schema/User.js`修改new的时候的代码。加入`{collection:'user'}`.

```javascript
const userSchema = new Schema({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()},
},{
    collection:'user'
})


```

## 第30节：注册时的前端验证

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

现在的注册是可以提交null值的，比如用户名为空或者密码为空都是可以提交到Koa服务端进行处理的，在工作中这是绝对不允许的，所以必须从前端就可以作表单验证，然后后端也需要作数据验证。这节课我们就学一下前端如何作表单验证。

### 1.首先为Field绑定error-message属性

vant框架提供的`field`属性提供了错误提示的机制，就是`error-message`属性。现在`script`的data里注册两个属性，`usernameErrorMsg`和`passwordErrorMsg`当值不符时，作用户提示使用。
```javascript
data() {
    return {
        username: '',
        password: '',
        openLoading: false,    //是否开启用户的Loading
        usernameErrorMsg:'',   //当用户名出现错误的时候
        passwordErrorMsg:'',   //当密码出现错误的时候
    }
},
```
开始这两个值都为空，不给用户作任何提示操作，只有按下注册按钮时才进行检测提示。

### 2.编写验证方法checkFrom

在methods里增加一个`checkForm()`方法，用来专门验证表单信息，详细代码如下：
```javascript
checkForm(){
    let isOk= true
    if(this.username.length<5){
        this.usernameErrorMsg="用户名不能小于5位"
        isOk= false
    }else{
        this.usernameErrorMsg=''
    }
    if(this.password.length<6){
        this.passwordErrorMsg="密码不能少于6位"
        isOk= false
    }else{
        this.passwordErrorMsg=''
    }
    return isOk
}
```

上面的代码，先验证了用户名不能少于5位，然后验证了密码不能少于6位，如果一个条件不满足方法都会返回false，只有都满足的情况下，才会返回true。

### 3.重新编写注册方法

这时我们把一个注册分为了两个业务逻辑，第一步是检验表单数据，第二步是向端口发送数据等待结果。如果直接在以前的`axisoRegisterUser()`方法上改造显得很不优雅，代码会很长，维护起来会增加额外的成本。新建一个`registerAction()`方法。
```
registerAction(){
    if(this.checkForm()){
        this.axiosRegisterUser()
    }
},
```
上面的代码是当检测表单返回true时，也就是通过时才进行条用axios方法。当然这个用if来表示显得非常的臃肿，我们可以用&&来实现。
```
registerAction(){
    this.checkForm() && this.axiosRegisterUser()
},
```

### 4.重新绑定注册按钮事件

原来的按钮事件直接调用了`axisoRegisterUser()`方法，这时候我们要更换为新的`registerAction()`方法。
```
 <van-button type="primary" @click="registerAction" :loading="openLoading" size="large">马上注册</van-button>
```

通过四步的修改，现在可以打开浏览器，来看一下我们的成果了。下节课我们开始学习登录模块的制作。

## 第31节：Vue的登录界面制作和路由配置

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

这节开始作登录部分的一些操作，登录部分我们尽量讲的细致一些，因为有很多小伙伴都在问登录部分的问题。登录也是任何一个项目必须使用的一个模块。好准备好，开始学习吧。

### 1.复制Register.vue文件并进行修改

因为登录和注册的页面很像，这里我们就直接复制注册的页面。复制Register.vue，然后粘贴一个，重新命名为Login.vue。然后进行方法名和基本的方法修改。
```
<template>
    <div>
         <van-nav-bar
            title="用户登录"
            left-text="返回"
            left-arrow
            @click-left="goBack"
            />

        <div class="register-panel">
            <van-field
                v-model="username"
                label="用户名"
                icon="clear"
                placeholder="请输入用户名"
                required
                @click-icon="username = ''"
                :error-message="usernameErrorMsg"
            />

            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                :error-message="passwordErrorMsg"
                required
            />
            <div class="register-button">
                <van-button type="primary" @click="LoginAction" :loading="openLoading" size="large">登录</van-button>
            </div>
       </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                username: '',
                password: '',
                openLoading: false,    //是否开启用户的Loading
                usernameErrorMsg:'',   //当用户名出现错误的时候
                passwordErrorMsg:'',   //当密码出现错误的时候
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)   
            },

            //*****注册用户的实行方法*****
            LoginAction(){
               
                this.checkForm() && this.axiosLoginUser()
            },

            //*******axios注册用户方法*******
            axioLoginUser(){
                    //先把按钮进行loading状态，防止重复提交
                    this.openLoading = true

                axios({
                    url: url.registerUser,
                    method: 'post',
                    data:{
                        userName:this.username,
                        password:this.password 
                    }
                })
                .then(response => {
                   
                        
                })
                .catch((error) => {   
                   
                })
                        
            },
            //**** 客户端验证
            checkForm(){
                let isOk= true
                if(this.username.length<5){
                    this.usernameErrorMsg="用户名不能小于5位"
                    isOk= false
                }else{
                    this.usernameErrorMsg=''
                }
                if(this.password.length<6){
                    this.passwordErrorMsg="密码不能少于6位"
                    isOk= false
                }else{
                    this.passwordErrorMsg=''
                }
                return isOk
            }       


        },
    }
</script>

<style scoped>
    .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:10px;
    }
</style>
```



### 2. 配置路由,让页面可以正常访问

打开`/scr/router/index.js`页面，配置路由，代码如下。

```
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMall',component: ShoppingMall},
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login},
  ]
})

```
我们配置了一个login的路由，并把Login.vue页面引进了过来，这时候我们可以打开浏览器，访问以下`http://localhost:8080/#/login`这个网址看一下。

## 第32节：登录的服务端业务逻辑代码

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

页面已经做好了，现在可以制作一下服务端（后端）的服务代码了。其实登录的业务逻辑还是很简单的，就是得到前端发来的用户名和密码，然后跟数据库进行比对，如果正确就显示登录成功，失败就显示登录失败。

### Shema中的比对实例方法
需要在Shema中制作一个比对的实例方法，这个方法就是比对我们加盐加密后的密码的。在`service/database/schema/User.js`下增加下面的代码：
````
userSchema.methods = {
    //密码比对的方法
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}
````

上面的代码声明了一个实例方法，方法叫做`comparePassword`，然后传递两个参数，一个是客户端密码，一个是数据库取出来的密码。用`bcrypt`提供的compare方法就可以比对，最后包装成`Promise`返回就可以了。

### 编写登录的Api接口

进入`service/appApi/user.js`，增加一个login路由，并在路由内写入业务逻辑代码。
```javascript
/*登录的实践 */
router.post('/login',async(ctx)=>{
    //得到前端传递过来的数据
    let loginUser = ctx.request.body
    console.log(loginUser)
    let userName = loginUser.userName
    let password = loginUser.password
    //引入User的model
    const User = mongoose.model('User')
    //查找用户名是否存在，如果存在开始比对密码
   await User.findOne({userName:userName}).exec().then(async(result)=>{
        console.log(result)
        if(result){
           //console.log(User)
            //当用户名存在时，开始比对密码
            let newUser = new User()  //因为是实例方法，所以要new出对象，才能调用
            await newUser.comparePassword(password,result.password)
            .then( (isMatch)=>{
                //返回比对结果
                ctx.body={ code:200, message:isMatch} 
            })
            .catch(error=>{
                //出现异常，返回异常
                console.log(error)
                ctx.body={ code:500, message:error}
            })
        }else{
            ctx.body={ code:200, message:'用户名不存在'}
        }
        
    }).catch(error=>{
        console.log(error)
        ctx.body={ code:500, message:error  }
    })
})
```

详细的解释我写在注释里了，视频中我会一句一句解释。

### 前后端结合调试

1.在`src/serviceAPI.config.js`下加入接口代码。

```javascript
const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',   //用户注册接口
    login:LOCALURL+'user/login',   //用户注册接口
}

module.exports = URL
```

2.修改`src/components/pages/Login.vue`把axios的Url改成我们的login接口地址。


然后打开浏览器进行调试，就会得到成功不成功，下节课我们开始编写登录前端的交互效果。


## 第33节：登录的前端交互效果制作和登录状态存储

[![花点小钱看视频](http://7xjyw1.com1.z0.glb.clouddn.com/fukuanover.jpg "花点小钱看视频")](#payFor "花点小钱看视频")

这节课我们主要完成两个方面的制作，一个是前端用户的交互效果，另一个是登录状态存储。

### 前端交互效果制作

目前为止从Koa2服务端是可以取到登录结果的，但是前端只是简单的打印了出来，并没哟作任何交互。我们要在返回登录成功时，给用户一个`Toast`提示，并跳转到首页（其实正常应该跳转到个人中心，但是我们还没有制作），当返回登录失败的时候，要提示用户登录失败，并把登录按钮重新启用，可以再次登录。

在`/src/components/pages/Login.vue`的`axisoLoginUser`方法里写修改代码如下：
```javascript
axiosLoginUser(){
        //先把按钮进行loading状态，防止重复提交
        this.openLoading = true

    axios({
        url: url.login,
        method: 'post',
        data:{
            userName:this.username,
            password:this.password 
        }
    })
    .then(response => {
        console.log(response)
        if(response.data.code==200 && response.data.message){
            
            Toast.success('登录成功')
            this.$router.push('/')
        }else{
            Toast.fail('登录失败')
            this.openLoading = false
        }
            
    })
    .catch((error) => {   
        console.log(error)
        Toast.fail('登录失败')
        this.openLoading = false
    })
            
},
```

写完上面的代码后，可以惊醒一波浏览器测试，完全跟我们想的无误后，然后我们在本地保存用户登录状态。

### 保存用户登录状态

移动端的应用有一个特殊的地方，就是当用户登录一次后，下次就不用登录了。这时候登录的信息是存储到了本地的LocalStorage里了。这个操作要等取得正确的登录状态以后再执行，也就是要在axios返回了登录成功结果以后执行。代码如下：

```javascript
new Promise((resolve,reject)=>{
        localStorage.userInfo={userName:this.username}
        setTimeout(()=>{
            resolve()
        },500)
}).then(()=>{
        Toast.success('登录成功')
        this.$router.push('/')
}).catch(err=>{
        Toast.fail('登录状态保存失败')
        console.log(err)
})
```

我们保存了用户登录状态以后，就有了一个是否登录的依据，然后我们就不会重复登录了，我们在已进入登录页面的`creadted`声明周期里，就判断是否已经登录。
```javascript

created(){
    if(localStorage.userInfo){
            Toast.success('您已经登录')
            this.$router.push('/')
    }
},

```

这时候如果已经登录后，再去登录页他会直接跳转到首页，并提示你已经登录过了。我们的登录就先做到这里，我相信小伙伴对前后端的结合已经有了初步了解，一定要多练习，才能做到工作中的信手拈来。

## 第34节：商品详细数据的提纯操作

这节开始准备页面的商品数据和类别数据，目的是制作我们的列表页和详细页。在课程中我会提供一个5万多条商品详情的JSON文件给你，但是这些数据多数是没有什么用处的，需要我们动手把有用的数据筛选出来，我把这种筛选叫做数据的提纯。

### 用fs读入数据
在service文件夹下，新建一个`fsJson.js`的文件使用node的fs模块，可以轻松把文件读取到程序中，然后进行便利，把有用的数据提取出来，写入到一个新的数组中，请看下面代码.
```javascript
const fs = require('fs')


fs.readFile('.goods.json', 'utf8', function(err, data){

    let newData= JSON.parse(data)
    let i=0
    let pushData=[]
    newData.RECORDS.map(function(value,index){
        if(value.IMAGE1!=null){
            i++
            console.log(value.NAME)
            pushData.push(value)
        }  
    })
    console.log(i)
    console.log(pushData)
});
```

### 写入到新的文件中

```javascript
fs.writeFile('./newGoods.json',JSON.stringify(pushData),function(err){
    if(err) console.log('写文件操作失败');
    else console.log('写文件操作成功');
});
```

这样就完成了这次数据的提纯操作，通过提纯我们得到了一张可用的json商品详情表。通过这节的学习主要是了解一下node的fs模块，因为这在我们工作中是非常常用的。


## 第35节：批量插入商品详情数据到MongoDB中

有了可插入的JSON数据，就可以建立一个Schema模型，然后是用Mongoose插入到我们的数据库中了，这节课就来学习如何批量插入到数据库中。

### 1.建立Goods的Schema

这个没什么说的，已经讲过如何建立Schema了，建立`servic/database/schema/Goods.js`文件，然后根据我们的数据表结构建立模型，代码如下：
```javascript
const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型

const goodsSchema = new Schema({
    ID:{unique:true,type:String},
    GOODS_SERIAL_NUMBER:String,
    SHOP_ID:String,
    SUB_ID:String,
    GOOD_TYPE:Number,
    STATE:Number,
    NAME:String,
    ORI_PRICE:Number,
    PRESENT_PRICE:Number,
    AMOUNT:Number,
    DETAIL:String,
    BRIEF:String,
    SALES_COUNT:Number,
    IMAGE1:String,
    IMAGE2:String,
    IMAGE3:String,
    IMAGE4:String,
    IMAGE5:String,
    ORIGIN_PLACE:String,
    GOOD_SCENT:String,
    CREATE_TIME:String,
    UPDATE_TIME:String,
    IS_RECOMMEND:Number,
    PICTURE_COMPERSS_PATH:String
},{
    collections:'Goods'
})

mongoose.model('Goods',goodsSchema)
```
这里需要注意的是，要安装我们JSON中的数据进行建立。

### 2.批量插入数据库的路由方法

新建一个`service/appApi/goods.js`以后关于商品的操作就都在这个api文件中编写了，我们也是要写路由的形式，提供每一个支持。
```
const Koa = require('koa')
const app = new Koa()
const Router = require ('koa-router')
let router = new Router()

const mongoose = require('mongoose')
const fs = require('fs')


router.get('/insertAllGoodsInfo',async(ctx)=>{
   
     fs.readFile('./goods.json','utf8',(err,data)=>{
        data=JSON.parse(data)
        let saveCount=0
        const Goods = mongoose.model('Goods')
        data.map((value,index)=>{
            console.log(value)
            let newGoods = new Goods(value)
            newGoods.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount)
            }).catch(error=>{
                 console.log('失败：'+error)
            })
        })
       
        
    })
    ctx.body="开始导入数据"


})

module.exports=router;
```

在视频中我会一句一句给大家解释。

### 3.把路由加入到index.js里
写好了goods.js的路由方法好，就可以把他暴漏到index.js里了，这个非常简单，只需要两句话就可以完成。
```
let goods = require('./appApi/goods.js')
router.use('/goods',goods.routes())
```

作完这一步，我们就可以在浏览器运行一下了`http://localhost:3000/goods/insertAllGoodsInfo`,运行结束后，可以到数据库看一下插入情况。


## 第36节：商品大类的Shema建立和导入数据库

这节课需要把商品大类的数据从JSON格式导入到MongoDB数据库中，涉及到的知识点有Schema的建立，fs模块的使用和Mongoose的存储。

### 1.编写Category的Schema

Schema的建立我们已经用了好几次了，但是还是有一些小伙伴不太明确Schema是什么，其实你把Schema想象成数据库collections的一个复制映射就好，它是和数据可里的collection对应的。
明确了这个道理，我们直接根据Json的格式直接制作就好：

```JavaScript
const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema

const categorySchema = new Schema({
    ID:{unique:true,type:String},
    MALL_CATEGORY_NAME:{type:String},
    IMAGE:{type:String},
    TYPE:{type:Number},
    SORT:{type:Number},
    COMMENTS:{type:String}
})

mongoose.model('Category',categorySchema)
```

### 插入Mongodb数据库

有了Schema之后可以在`service/appApi/goods.js`文件里增加一个路由配置，并把业务逻辑代码写入到路由里。业务逻辑并不复杂：
1. 用fs读取category.json的数据
2. 把数据进行循环存入数据库。

```Javascript
router.get('/insertAllCategory',async(ctx)=>{
    fs.readFile('./data_json/category.json','utf8',(err,data)=>{
        data=JSON.parse(data)
        let saveCount=0
        const Category = mongoose.model('Category')
        data.RECORDS.map((value,index)=>{
            console.log(value)
            let newCategory = new Category(value)
            newCategory.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount)
            }).catch(error=>{
                 console.log('失败：'+error)
            })
        })
       
        
    })
    ctx.body="开始导入数据"

})
```

完成后我们打开mongod服务，然后访问`http://localhost:3000/goods/insertAllCategory`,数据就可以顺利插入到数据库里了。子数据的操作也是差不多一样的，小伙伴们可以提前作一下试试。

## 第37节：商品子类的Shema建立和导入数据库

建议你看这节之前，完全可以自己先不开教程作一遍，因为这节课的知识我们都学过，但是为了巩固知识和视频的完整性，我们必须把这节录制上。我希望每个小伙伴都能作出这个项目，也算技术胖的良苦用心了。这节我们会把子类的Schema建立好，并用fs读取json文件，最后循环保存到数据库中。由于知识点前面都已经讲过，所以这里直接上代码了。

### 1.categorySub的Schema建立

```
const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema

const categorySubSchema = new Schema({
    ID:{unique:true,type:String},
    MALL_CATEGORY_ID:{type:String},
    MALL_SUB_NAME:{type:String},
    COMMENTS:{type:String},
    SORT:{type:Number}
})

mongoose.model('CategorySub',categorySubSchema)
```

### 2.保存到数据库的业务逻辑

```
router.get('/insertAllCategorySub',async(ctx)=>{
    fs.readFile('./data_json/category_sub.json','utf8',(err,data)=>{
        data = JSON.parse(data)
        let saveCount = 0 
        const CategorySub = mongoose.model('CategorySub')
        data.RECORDS.map((value,index)=>{
            console.log(value)
            let newCategorySub = new CategorySub(value)
            newCategorySub.save().then(()=>{
                saveCount++
                console.log('成功插入'+saveCount)
            }).catch(error=>{
                console.log('插入失败:'+error)
            })
        }) 
    })
    ctx.body="开始导入数据"
})

```

有了这些数据，下节课我们可以制作我们的商品详细页面了。## 第37节：商品子类的Shema建立和导入数据库

## 第37节：商品子类的Shema建立和导入数据库

建议你看这节之前，完全可以自己先不开教程作一遍，因为这节课的知识我们都学过，但是为了巩固知识和视频的完整性，我们必须把这节录制上。我希望每个小伙伴都能作出这个项目，也算技术胖的良苦用心了。这节我们会把子类的Schema建立好，并用fs读取json文件，最后循环保存到数据库中。由于知识点前面都已经讲过，所以这里直接上代码了。

### 1.categorySub的Schema建立

```
const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema

const categorySubSchema = new Schema({
    ID:{unique:true,type:String},
    MALL_CATEGORY_ID:{type:String},
    MALL_SUB_NAME:{type:String},
    COMMENTS:{type:String},
    SORT:{type:Number}
})

mongoose.model('CategorySub',categorySubSchema)
```

### 2.保存到数据库的业务逻辑

```javascript
router.get('/insertAllCategorySub',async(ctx)=>{
    fs.readFile('./data_json/category_sub.json','utf8',(err,data)=>{
        data = JSON.parse(data)
        let saveCount = 0 
        const CategorySub = mongoose.model('CategorySub')
        data.RECORDS.map((value,index)=>{
            console.log(value)
            let newCategorySub = new CategorySub(value)
            newCategorySub.save().then(()=>{
                saveCount++
                console.log('成功插入'+saveCount)
            }).catch(error=>{
                console.log('插入失败:'+error)
            })
        }) 
    })
    ctx.body="开始导入数据"
})

```

有了这些数据，下节课我们可以制作我们的商品详细页面了。

## 第38节：编写商品详情页的数据接口

现在基本的数据已经准备好了，从这节课开始，我们只做前后台结合的商品详细页面，这次我们真实的从数据库中查出数据，并调用后台接口获得数据，然后在前端根据数据格式进行前端的编写。这节课我们主要的内容就是建立好前端的路由和基础页面，然后从koa2服务那里得到数据。

### 1.编写后台数据接口

直接在`service/appApi/goods.js`里，新编写一个路由业务逻辑，并用`findeOne`的形式查找出一条商品数据。具体业务逻辑代码如下：

```javascript
//***获取商品详细信息的接口
router.post('/getDetailGoodsInfo',async(ctx)=>{
    let goodsId = ctx.request.body.goodsId
    const Goods = mongoose.model('Goods')
    await Goods.findOne({ID:goodsId}).exec()
    .then(async(result)=>{  
        ctx.body={code:200,message:result}
    })
    .catch(error=>{
        console.log(error)
        ctx.body={code:500,message:error}
    })

})
```
上面的代码，我们先获得了从前端得到的参数goodsId，然后得到Goods模型，用模型的findOne方法查找数据，查找出来进行返回。

### 2.编写Goods.vue 页面

由于现在还不能正常的查看接口，所以我们需要一个页面，来调用接口。新建`/src/components/pages/Goods.vue`文件：写入下面代码
```html
<template>
    <div>
        商品详情页面
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    export default {
        data() {
            return {
                goodsId: '775e575ce28a4f89b1dfe2c99eb08ae7'
            }
        },
        created(){
            
            this.getInfo()
        },
        methods: {
            getInfo() {
                axios({
                    url:url.getDetailGoodsInfo,
                    method:'post',
                    data:{
                        goodsId:this.goodsId
                    }
                })
                .then(response=>{
                    console.log(response)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>

</style>
```

### 3.把组件加入到路由管理中
有了模块之后，我们需要把模块加入到路由管理之中，这样才可以正常访问。
```javaScript
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Goods from '@/components/pages/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMall',component: ShoppingMall},
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login},
    {path: '/Goods',name: 'Goods',component: Goods},
  ]
})
```

现在可以直接打开`http://localhost:8080/#/Goods`路径，然后打开控制台，你发现我们已经可以顺利的从后台取得数据了。

### 改写程序，让程序更优雅

有的小伙伴提出了我的问题，说技术胖你要不只用async/await，要不只有promise/then，不要一起用，都把我弄乱了。这确实是技术胖的一个习惯问题，而且是不好的习惯问题。所以在这里我们把上面的代码进行改写，改写成只用async/await的方式。

```javascript
router.post('/getDetailGoodsInfo',async(ctx)=>{
    try{
        let goodsId = ctx.request.body.goodsId
        const Goods = mongoose.model('Goods')
        let result=await Goods.findOne({ID:goodsId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }
   
})
```

这样的代码小伙伴应该看着就舒服多了，也少了then的嵌套，小伙伴动手做一做吧。


## 第40节：商品详情的页面模板编写-1

这节课我们开始编写Vue页面的样式，如果熟练使用Vue的小伙伴，可以根据自己的喜好布局编写。为了照顾小伙伴们，让每一个人都可以做出项目，我们还是手敲代码完成。

### 1.引入Vant框架中的NavBar组件

在项目的`/src/main.js`文件中用`import`引入NavBar组件.
```javascript
import {NavBar} from 'vant'
Vue.use(NavBar)
```
如果你以前已经引入过了，那就不用再次引入了，引入一次就可以在项目中使用了。

### 2.使用NavBar制作头部导航
打开`/src/components/pages/Goods.vue`文件，编写`template`部分代码（也就是html部分），直接使用`van-nav-bar`组件。
```html
<div>
    <div class="navbar-div">
        <van-nav-bar
            title="商品详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</div>
```

- title:是显示的标题，这里就起名字叫商品详情了
- left-text：是左侧显示的内容，这里显示“返回”两个字
- left-arrow：是否显示左侧箭头，默认值是true，也就是显示。
- @click-left:绑定左侧按钮时触发的事件方法，方法名字叫做onClickLeft

编写`onClickLeft`方法，这个方法里边现在只要能回退到上一层路由经可以了，暂时不写其他逻辑，以后使用了页面缓存功能后，还要增加消除缓存的操作。

```
onClickLeft(){
    this.$router.go(-1)
},
```

现在可以打开浏览器，进行预览一下，应该看到了头部的导航栏和点击返回按钮就可以实现返回上一级路由了。

### 3.编写商品头图部分

直接使用html中的img标签把头图显示出来。
```html
<div class="topimage-div">
    <img :src="goodsInfo.IMAGE1" width="100%"/>
</div>
```

这里还没有`goodsInfo`注册数据，所以需要我们在js部分的data中先进行注册。
```javascript
data() {
    return {
        goodsId: '',
        goodsInfo:{},   //商品详细数据
    }
},
```
然后在`getInfo`方法里，对goodsInfo进行赋值:`this.goodsInfo = response.data.message `。

当然我们这么写还是很简单的，如果更严谨的写法，我们应该在赋值前判断一下code的值和message不为空，比如下面的代码：

```javascript
if(response.data.code == 200 && response.data.message ){
        this.goodsInfo = response.data.message 
}else{
    Toast('服务器错误，数据取得失败')
}
console.log( this.goodsInfo)
```

需要注意的是使用Toast记得先进行引用`import { Toast } from 'vant'`.


## 第41节：商品详情的页面模板编写-2

这节我们完成商品详细页的主要布局，设计的内容多时HTML和CSS，所以就直接上代码了。

```html
<template>
<div>
    <div class="navbar-div">
        <van-nav-bar
            title="商品详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
    <div class="topimage-div">
        <img :src="goodsInfo.IMAGE1" width="100%"/>
    </div>
    <div class="goods-name">{{goodsInfo.NAME}}</div>
    <div class="goods-price">价格：{{goodsInfo.PRESENT_PRICE}}</div>
    <div>
        <van-tabs >
        <van-tab title="商品详情">
          <div class="detail" v-html="goodsInfo.DETAIL">
             
          </div>
        </van-tab>
        <van-tab title="评价">
            正在制作中
        </van-tab>
        </van-tabs>

    </div>
</div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                goodsId: '',
                goodsInfo:{},   //商品详细数据
            }
        },
        created(){
            this.goodsId= this.$route.query.goodsId
            console.log(this.goodsId)
            this.getInfo()
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1)
            },

            getInfo() {
                axios({
                    url:url.getDetailGoodsInfo,
                    method:'post',
                    data:{
                        goodsId:this.goodsId
                    }
                })
                .then(response=>{
                    if(response.data.code == 200 && response.data.message ){
                         this.goodsInfo = response.data.message 
                    }else{
                        Toast('服务器错误，数据取得失败')
                    }
                    console.log( this.goodsInfo)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>
   .detail{
     font-size:0px;
    }
    .goods-name{
        background-color: #fff;
    }
    .goods-price{
        background-color: #fff;
    }
</style>
```


### vant标签组建的使用

1.我们首先引入标签组建，在main.js里直接引入就可以，代码如下：

```javascript
import { Tab,Tabs } from 'vant'
Vue.use(Field)
.use(Tab)
.use(Tabs)

```
这样就可以在商品组建中进行使用了。

2.编写html代码

```html
<van-tabs >
<van-tab title="商品详情">
    <div class="detail" v-html="goodsInfo.DETAIL">      
    </div>
</van-tab>
<van-tab title="评价">
    正在制作中
</van-tab>
</van-tabs>
```

### 解决图片有空隙问题

我们写入商品详细信息后，你会发现图片之间是有空隙的，并不能完美的相连。这是因为我们每个图片后边是有空格的，而图片占了宽的100%，所以空格被单独挤出了一行。

解决方法很简单，只要把字体设置为0就好，但是这样是有弊端的，就是以后如果有图文混排就会出现不显示字体的BUG。所以最好的解决方案是后端插入的时候就取消掉空格。

但是这里我们是爬取别人的数据，也没办法从源头解决，所以设置字体就好。
```
.detail{
     font-size:0px;
    }
```


## 第42节：商品详情的页面模板编写-3
继续完善商品详情页的布局，这节主要是加入价格的顾虑器和底部的加入购物车和购买按钮。

### 加入Filter过滤器，来格式化价格

页面中的价格并没有进行格式化，需要一个Filter来进行格式化，我们在制作首页的时候，已经制作了一个Filter，直接使用就可以进行格式化了。

1.引入`moneyFilter.js`文件。
```javascript
import toMoney from '@/filter/moneyFilter.js'
```
2. 在js部门编写`filters`属性。
```javascript
filters:{
    moneyFilter(money){
        return toMoney(money)
    }  
},
```
3.给价格加上Filter ,`goodsInfo.PRESENT_PRICE | moneyFilter`

通过上边的三部，我们就实现了价格的格式化。

### 底部购买按钮和加入购物车按钮

html布局，在template的最底部，加入一个层，并进行基本的flex布局。
```html
<div class="goods-bottom">
    
    <div>
            <van-button size="large" type="primary">加入购物车</van-button>
    </div>
    <div>
            <van-button size="large" type="danger">直接购买</van-button>
    </div>
    
</div>
```

编写CSS样式，让它尽量美观。
```css
.goods-bottom{
    position: fixed;
    bottom:0px;
    left:0px;
    background-color: #FFF;
    width:100%;
    
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
}
.goods-bottom > div{
    flex:1;
    padding:5px;
}

```

## 第43节：分类页面的数据读取

这节开始作商品列表页的操作，这个也会分好几节课来进行讲解，这节我们先学习从后台读取数据。

### 读取大类别的API制作

我们先获取大类信息，在`/service/appApi/goods.js`里增加一个新的路由`getCategoryList`.代码如下：

```javascript
router.get('/getCategoryList',async(ctx)=>{
    try{
        const Category = mongoose.model('Category')
        let result = await Category.find().exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }

})
```

代码说明会在视频中详细讲解。打开浏览器进行测试，`http://localhost:3000/goods/getCategoryList`

### 读取小类别的API制作
在`/service/appApi/goods.js`里增加一个新的路由`getCategorySubList`.代码如下：
```javascript
router.get('/getCategorySubList',async(ctx)=>{
    try{
        //let categoryId = ctx.request.body.categoryId
        let categoryId = 1
        const CategorySub = mongoose.model('CategorySub')
        let result = await CategorySub.find({MALL_CATEGORY_ID:categoryId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }

})
```

打开浏览器进行测试，`http://localhost:3000/goods/getCategorySubList`

### 根据商品类别获取商品列表
在`/service/appApi/goods.js`里增加一个新的路由`getGoodsListByCategorySubID`.代码如下：

```javascript
router.get('/getGoodsListByCategorySubID',async(ctx)=>{
    try{
        //let categorySubId = ctx.request.body.categoryId
        let categorySubId = '2c9f6c946016ea9b016016f79c8e0000'
        const Goods = mongoose.model('Goods')
        let result = await Goods.find({SUB_ID:categorySubId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }

})
```

打开浏览器进行测试，`http://localhost:3000/goods/getGoodsListByCategorySubID`



## 第44节：补充商品详细页的滑动切换和吸顶效果

有小伙伴要求技术胖再补充两个详细页的功能，增加缓动切换Tab页面和吸顶效果。这节课我们就利用很短的时间给大家讲解一下这两个功能的制作。

### Tab页的滑动切换

通过`van-tabs`里的`swipeable`属性就可以开启滑动切换tab页的效果。看一下我们商品页面的源码：

```html
<van-tabs  swipeable>
    <van-tab title="商品详情">
        <div class="detail" v-html="goodsInfo.DETAIL">
            
        </div>
    </van-tab>
    <van-tab title="评价">
        正在制作中
        
    </van-tab>
</van-tabs>
```

现在就可以实现左右滑动效果了，是不是超级简单那，其实吸顶效果也一样的简单。


### 吸顶效果的制作

通过`van-tabs`里的`sticky` 属性可以开启吸顶效果，也叫粘性布局，当Tab滚动到顶部时会自动吸顶。
```html
<van-tabs  swipeable sticky>
    <van-tab title="商品详情">
        <div class="detail" v-html="goodsInfo.DETAIL">
            
        </div>
    </van-tab>
    <van-tab title="评价">
        正在制作中
        
    </van-tab>
</van-tabs>
```

现在可以在浏览器中预览看一下效果了。希望提问的小伙伴可以学到东西，做出自己想要的效果。


# 第45节：商品列表页的布局-1

中间插入了一节补充的课程，这节转回来继续课程，这节我们开始布局分类列表页面。列表页面我们会讲到的效果会多一点，比如上拉加载，下拉刷新，Tab动态切换，都会讲到.....

### 建立页面和配置列表页路由
在`/src/components/pages`文件夹下新建一个`CategoryList.vue`页面。然后用vbase命令快速建立基本结构。

有了基本的页面后，到`/src/router/index.js`文件里，添加`CategoryList.vue`页面的路由。

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMall',component: ShoppingMall},
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login},
    {path: '/Goods',name: 'Goods',component: Goods},
    {path: '/CategoryList',name: 'CategoryList',component: CategoryList},
  ]
})

```
作完这部，我们的页面就可以正常访问到了，访问地址为`http://localhost:8080/#/CategoryList`.

### 标题栏的布局
现在页面还是个白板，里边什么内容都没有，我们需要加入一个标题栏。当然我们还是使用`Vant`提供好的`van-nav-bar`组件。这里只需要显示一个标题，所以这节使用加入一个title属性就可以了。代码如下：

```html
<template>
    <div>
        <div class="navbar-div">
             <van-nav-bar   title="类别列表" /> 
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
```

就这么简单，头部已经做好了。如果希望它固定在头部，可以加入`fixed`属性。

### 大类的侧边栏的布局

先把大体的自适应布局做好，这里使用了row-col布局，代码如下。
```html
<div>
    <van-row>
        <van-col span="6">
            <div id="leftNav">
                左侧导航
            </div>
        </van-col>
        <van-col span="18">右侧列表</van-col>
    </van-row>
</div>
```

### axios读取左侧大类

1.用import先引入`axiso`和`serviceAPI.config.js`,代码如下：
```javascript
import axios from 'axios'
import url from '@/serviceAPI.config.js'
```

2.配置`serviceAPI.config.js`文件

```javascript
const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',                    //用户注册接口
    login:LOCALURL+'user/login',                              //用户注册接口
    getDetailGoodsInfo:LOCALURL+'goods/getDetailGoodsInfo',   //得到商品详细数据
    getCategoryList:LOCALURL+'goods/getCategoryList',         //得到大类信息
   
}

module.exports = URL
```
3.编写axios方法

```javascript
getCategory() {
    axios({
        url:url.getCategoryList,
        method:'get',
    })
    .then(response=>{

        console.log(response)

        if(response.data.code == 200 && response.data.message ){
            
        }else{
            Toast('服务器错误，数据取得失败')
        }
        
    })
    .catch(error=>{
        console.log(error)
    }) 
}
```

4.在声明周期里加入`getCategory`方法
```javascript
created(){
    this.getCategory();
},
```
现在我们已经可以在浏览器中预览并得到大类的数据了。下节课我们继续布局我们的列表页面。


## 第46节：商品列表页的大类交互效果制作

这节我们要把列表页左侧的大类布局和交互效果作出来，用到的知识点主要有声明周期，`v-for`循环，class的动态绑定和操作原生DOM。

### 把大类列表放到左侧导航上

1.在data属性里注册category变量为数组类型。
```javascript
data() {
    return {
        category:[], 
    }
},
```
2.在上节的`getCategory()`方法里的axios的回调方法里为category赋值。
```javascript
getCategory() {
    axios({
        url:url.getCategoryList,
        method:'get',
    })
    .then(response=>{
        console.log(response)

        if(response.data.code == 200 && response.data.message ){
            this.category=response.data.message
        }else{
            Toast('服务器错误，数据取得失败')
        }
    })
    .catch(error=>{
        console.log(error)
    })
}

```

3.在`template`部分利用`li`标签把数据循环出来
```html
<div id="leftNav">
    <ul>
        <li v-for="(item,index) in category" :key="index">
            {{item.MALL_CATEGORY_NAME}}
        </li>
    </ul>
</div>
````
4.编写CSS样式，让它更好看一点。

```css
#leftNav ul li {
    line-height: 2rem;
    border-bottom:1px solid #E4E7ED;
    padding:3px;
    font-size:0.8rem;
    text-align: center;
}
```

5.在生命周期里加入js，让左侧当行适应页面高度

```javascript
mounted(){
    let winHeight = document.documentElement.clientHeight
    document.getElementById("leftNav").style.height= winHeight-46 +'px'
},
```

### 点击后的交互效果制作-反白操作

当我们点击每个大类的时候，我们希望CSS是有所变化的，证明我们已经点击过了，前端也叫做反白操作。

1.编写一个背景为白色的CSS样式
```css
.categoryActive{
    background-color: #fff;
}
```
2.在data里注册一个`categoryIndex`变量，用来控制那个导航变成白色，这里默认是0，就是当我们打开页面时第一个类别是白色的。
```javascript
data() {
    return {
        category:[], 
        categoryIndex:0, 
    }
},
```
3.编写`clickCategory`方法，点击大类时调用改方法，方法就是把点击的索引传递过去，然后付给刚才注册的`categoryIndex`属性

```javascript
//点击大类的方法
clickCategory(index){
    this.categoryIndex=index

}
```

4.在`template`里注册这些方法，并进行class动态绑定，代码如下：
```html
<li @click="clickCategory(index)" :class="{categoryActive:categoryIndex==index}"  v-for="(item,index) in category" :key="index">
    {{item.MALL_CATEGORY_NAME}}
</li>
```

## 第47节：一二级分类的联动效果制作

这节我们要实现一、二级分类的联动效果，说的简单点就是当你点击一级分类时，二级分类要根据你点击的一级分类进行变化。上节课用了自己写的Tab页面方法，这节我们直接使用Vant的Tab组件来实现。

### 在serviceAPI.config.js中加入接口

直接把service中写的API方法，加入到前端接口配置文件中，`getCategorySubList:LOCALURL+'goods/getCategorySubList',`,全部代码如下：
```javascript
onst BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',                    //用户注册接口
    login:LOCALURL+'user/login',                              //用户注册接口
    getDetailGoodsInfo:LOCALURL+'goods/getDetailGoodsInfo',   //得到商品详细数据
    getCategoryList:LOCALURL+'goods/getCategoryList',         //得到大类信息
    getCategorySubList:LOCALURL+'goods/getCategorySubList',   //得到小类信息
   
}

module.exports = URL
```
### 改写后端接口

以前写后端接口时，为了测试，所以使用的是get方法，但是为了传送数据的安全和方便，现在改为post方法，并接受前端传递过来的`categoryId`参数。代码如下：
文件位置：`service/appApi/goods.js`
```javascript
router.post('/getCategorySubList',async(ctx)=>{
    try{
        let categoryId = ctx.request.body.categoryId
        const CategorySub = mongoose.model('CategorySub')
        let result = await CategorySub.find({MALL_CATEGORY_ID:categoryId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }

})
```


### 获取小类的方法

在CategoryList文件的methods属性里，加入一个`getCategorySubByCategoryId`方法。这里主要使用axios来获取后端的数据。

```javascript
//根据大类ID读取小类类别列表
getCategorySubByCategoryId(categoryId){
        
    axios({
        url:url.getCategorySubList,
        method:'post',
        data:{categoryId:categoryId}
    })
    .then(response=>{
        if(response.data.code == 200 && response.data.message ){
            this.categorySub=response.data.message
            this.active = 0
        }else{
            Toast('服务器错误，数据取得失败')
        }  
    })
    .catch(error=>{
        console.log(error)
    }) 
}
```
改写`clickCategory`方法，加入一个categoryId参数，然后在方法里调用刚才写的`getCategorySubByCategoryId`方法，这样就可以实现二级联动效果了。
```
//点击大类的方法
clickCategory(index,categoryId){
    this.categoryIndex=index
    this.getCategorySubByCategoryId(categoryId)

},
```

### 用Vant的Tabs组建实现联动

这里直接使用Vant提供的Tabs组建来实现联动，代码如下：
```html
<div class="tabCategorySub">
    <van-tabs v-model="active">
        <van-tab v-for="(item, index) in categorySub" :key="index" :title="item.MALL_SUB_NAME">
            
        </van-tab>
    </van-tabs>
</div>
```

现在可以到浏览器中看一下效果了，但是还是有些小Bug的，就是我们在进入页面的时候是没有二级分类的。这个只要在`getCategory`方法的回掉函数里调用一下`getCategorySubByCategoryId`方法就可以了。

```javascript
this.getCategorySubByCategoryId(this.category[0].ID)
```
这里的`this.category[0].ID`是通过数组索引取得默认的第一个分类的ID值。

现在就实现了一二级商品分类的联动效果了，小伙伴们一定要自己作一下，把项目一点点实现出来哦。

## 第48节：商品列表页上拉加载效果的实现

在列表页中都是需要两个基本的功能需求：上拉加载和下拉刷新。这节课我们就来学习一下Vant的List组件，然后用List组件来实现上拉加载效果。

### 实现上拉加载效果

Vant中的List组件是有下拉加载效果的，这里直接使用。
1.我们先进行引入。在`src/main.js`中加入引入代码：
```javascript
import {List} from 'vant'
Vue.use(List)
```
如果已经引入过了，就不要重复引用了。

2.在data里声明两个属性:`loading`和 `finished`.

```javascript
data() {
    return {
        category:[], 
        categoryIndex:0, 
        active:0,
        categorySub:[],
        list:[],
        loading:false,   //上拉加载使用
        finished:false,  //下拉加载是否没有数据了
    }
},
```

3.在memthods属性中编写onLoad()方法,用于实现上拉加载
```javascript
onLoad(){
    setTimeout(()=>{
        for(let i=0;i<10;i++){
            this.list.push(this.list.length+1)
        }
        this.loading=false;
        if (this.list.length >= 40) {
        this.finished = true;
        }
    },500)
},
```

4.在模版中加入组件代码，代码如下，详细解释在视频中进行。
```html
<div id="list-div">
    <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        >
        <div class="list-item" v-for="item in list" :key="item">
            {{item}}
        </div>
    </van-list>
</div>
```

5.预览效果，根据效果编写CSS样式。
```css
    .list-item{
        text-align: center;
        line-height: 80px;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
    }
    #list-div{
        overflow: scroll;
    }
```

6.在mounted()生命周期里设置`list-div`的高度
```javascript
mounted(){
    let winHeight = document.documentElement.clientHeight
    document.getElementById('leftNav').style.height=winHeight-46 +'px'
    document.getElementById('list-div').style.height=winHeight-90 +'px'
},
```

现在可以在浏览器中看看我们制作的效果了。


## 第49节：商品列表页下拉刷新效果的实现

列表页的下拉刷新，并不是指刷新整个页面，如果刷新整个页面，那样用户的体验效果会非常的差，这节课就来学习下拉刷新的实现。

### 1.引入Vant中的PullRefresh组件

引入`pullRefresh`组件就可以实现下拉刷新效果，我们先在`src/main.js`中引入一下。

```javascript
import {PullRefresh} from 'vant'
Vue.use(PullRefresh)
```

### 2.增加下拉刷新用的变量和方法

在data中增加一个`isRefresh`属性，用来说明现在的状态是否是下拉加载状态。
```javascript
data() {
    return {
        category:[], 
        categoryIndex:0, 
        active:0,
        categorySub:[],
        list:[],
        loading:false,   //上拉加载使用
        finished:false,  //上拉加载是否没有了？
        isRefresh:false, //下拉加载
    }
}
```
然后写一个`onRefresh`方法，用来重新加载数据。
```javascript
onRefresh(){
    setTimeout(() => {
        this.isRefresh = false;
        this.list=[];
        this.onLoad()
    }, 500);
}
```

我们先把list数组清空，然后再次调用`onLoad()`方法，这样就会刷新商品列表页面。

### 3.编写template部分

直接在 `van-list`组件外边加入 `van-pull-refresh`组件就可以实现了，具体代码如下：
```html
<div id="list-div">
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
        <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
            >
            <div class="list-item" v-for="item in list" :key="item">
                {{item}}
            </div>
        </van-list>
    </van-pull-refresh>
</div>
```



现在就可以打开浏览器预览一下效果了。


## 第50节：商品类别分类的Koa2分页服务制作

学会了上拉加载和下拉刷新的效果，现在我们可以根据我们的需求来修改Koa2中的数据读取服务了，以前我们作的只是一个测试，不能完全满足于现在的业务逻辑，这节课我们就来改造后台的服务代码。

### 修改Koa2服务代码

进入`service/appApi/goods.js`找到`getGoodsListByCategorySubID`这个请求进行改造。
```javascript
router.post('/getGoodsListByCategorySubID',async(ctx)=>{
    try{
       
        let categorySubId = ctx.request.body.categorySubId //小类别
        let page =ctx.request.body.page
        let num = 10 //每页显示数量
        let start = (page-1)*num
        //let categorySubId = '2c9f6c946016ea9b016016f79c8e0000'
        const Goods = mongoose.model('Goods')
        let result = await Goods.find({SUB_ID:categorySubId})
        .skip(start) .limit(num).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }

})
```
首先我们把请求方式改为了`post`，然后从前台接收两个数据`categorySubId`（子类ID号）和`page`（当前页数）。定义每页显示的数量，再根据每页数量和当前页数算出开始读取的位置`start`。有了开始位置和每页显示数量，就可以顺利得出我们想要的结果了。

### 把写好的接口加入到前台

打开`src/serviceApi.js`文件，在最后加入代码：
```javascript
getGoodsListByCategorySubID:LOCALURL+'goods/getGoodsListByCategorySubID',   //得到小类商品信息
```
此时的全部代码如下：
```javascript
const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',                    //用户注册接口
    login:LOCALURL+'user/login',                              //用户注册接口
    getDetailGoodsInfo:LOCALURL+'goods/getDetailGoodsInfo',   //得到商品详细数据
    getCategoryList:LOCALURL+'goods/getCategoryList',         //得到大类信息
    getCategorySubList:LOCALURL+'goods/getCategorySubList',   //得到小类信息
    getGoodsListByCategorySubID:LOCALURL+'goods/getGoodsListByCategorySubID',   //得到小类商品信息
   
}

module.exports = URL
```
这节课我们就到这里，重点是后台Koa2的分页写法，下节课前端就可以通过后端的接口读取数据了。


## 第51节：真实数据的上拉加载效果制作

通过上节课的学习，我们已经制作好了后台的Koa2服务，有了服务，我们就可以从数据库中取得真实的数据，那这节我们开始制作前台的真实数据上拉加载效果。

### 在data属性里注册必要的参数

现在`src/components/pages/CategoryList.vue`里注册几个属性（或者说是变量）.代码如下.
```javascript
data() {
    return {
        page:1,          //商品列表的页数
        goodList:[],     //商品信息
        categorySubId:'' //商品子分类ID
    }
},
```

### 编写axios商品列表的获取方法
增加`getGoodList`方法，这个方法里传递两个参数，第一个是商品的子分类，第二个是请求分类的页数。
```javascript
getGoodList(){
        axios({
        url:url.getGoodsListByCategorySubID,
        method:'post',
        data:{
                categorySubId:this.categorySubId,
                page:this.page
            }
    })
    .then(response=>{
        console.log(response)
        if(response.data.code == 200 && response.data.message.length ){
            this.page++
            this.goodList=this.goodList.concat(response.data.message)
        }else{
                this.finished = true;
        }
        this.loading=false;
        console.log(this.finished)
    })
    .catch(error=>{
        console.log(error)
    })
},
```

### 点击获取子类商品信息的方法

编写点击子类Tab，就可以获取子类ID的方法，在获取子类ID的同时，你要作一些变量的初始化操作，比如把`goodsList`变量清空。
```javascript
//点击子类获取商品信息
onClickCategorySub(index,title){
    //console.log( this.categorySub)
    this.categorySubId= this.categorySub[index].ID
    console.log(this.categorySubId)
    
    this.goodList=[]
    this.finished = false
    this.page=1
    this.onLoad()

}
```

### 改造大类的方法
同样我们点击大类时，也要进行一些初始化操作。
```javascript
//点击大类的方法
clickCategory(index,categoryId){
    this.categoryIndex=index
    this.page=1
        this.finished = false
        this.goodList=[]
    this.getCategorySubByCategoryId(categoryId)

},
```

### 编写OnLoad方法，实现上来加载效果

```javascript
onLoad(){
    setTimeout(()=>{
        this.categorySubId=this.categorySubId?this.categorySubId:this.categorySub[0].ID
        this.getGoodList()
    },1000)
},
```

### 编写html和CSS
先来编写HTML部分。
```html
<van-list
    v-model="loading"
    :finished="finished"
    @load="onLoad"
    >
    <div class="list-item" v-for="(item,index) in goodList" :key="index">
        <div class="list-item-img"><img :src="item.IMAGE1" width="100%"/></div>
        <div class="list-item-text">
            <div>{{item.NAME}}</div>
            <div class="">￥{{item.ORI_PRICE}}</div>
        </div>
    </div>
</van-list>
```

CSS部分

```css
.list-item{
        display: flex;
        flex-direction: row;
        font-size:0.8rem;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        padding:5px;
    }
    #list-div{
        overflow: scroll;
    }
    .list-item-img{
        flex:8;
    }
    .list-item-text{
        flex:16;
        margin-top:10px;
        margin-left:10px;
    }
```

上述操作都完成后，我们就可以在浏览器中预览一下效果了。


## 第52节：真实数据的下拉刷新效果制作

其实我们已经学会了下拉刷新效果，但当时并没有真实的去读取服务端数据，所以这几课花几分钟时间来讲一下下拉刷新的真实数据读取。

### 下拉刷新效果的制作
在`/src/components/pages/CategoryList.vue`文件中改写onRefresh()方法.
```javascript
onRefresh(){
    setTimeout(() => {
        this.isRefresh = false;
        this.finished = false;
        this.goodList=[];
        this.page=1
        this.onLoad()
    }, 500);
},
```
然后可以在浏览器中进行预览了，试一下效果了。

### 补充，首页类别导航图片大小不一Bug的解决

群里小伙伴这两天一直问这个问题如何解决，在实际开发中，一般都是有UI设计好给你的，不会出现我们爬取这样的问题，但是如果真的出现了，也是可以很简单解决的。

1.先把我们的导航栏的层，给一个class，我这里叫做`type-item`

```html
 <div class="type-bar">
    <div class="type-item"  v-for="(cate,index) in category" :key="index" >
            <img v-lazy="cate.image" width="90%" />
            <span>{{cate.mallCategoryName}}</span> 
    </div>
</div>
```
2.然后到CSS部分加入一句CSS代码就可以搞定了。
```css
.type-item{
      flex:1;
  }
```
或者你说我连html都不愿意改动，你就直接写一句CSS代码也是完全可以改变的。

```css
  .type-bar div{
      flex:1;
  }
```

改完之后，我们可以到浏览器中查看效果了。

## 第53节：Vue中图片失效替补图片的制作方法

在获取的商品信息中，有一些商品图片已经失效，向这类问题，如果你真的在实际项目中遇到，但又没办法即时解决，这时候公司是不允许你这样直接显示图片失效的，我们需要显示一个替补图片。
我们正好在项目中遇到了这个问题，就拿出来给大家讲一下，因为群里的小伙伴真的很多人不会这个处理方式，我希望可以帮到他们。

### 制作一张替补图片

如果你会PS，你可以制作一张替补图片，越漂亮越好，但是尽量不要使用彩色，而是使用黑白灰来制作，这样才能更像一张替补图片。
如果你不会，可以直接到我的github上来寻找这张图片，或者在网上随便找一张。

### 把图片放到相应位置

把图片命名为`errorimg.png`,并放到`/src/assets/images/errorimg.png`。
然后在`src/components/pages/CategoryList.vue` 中的data中加入errorImag属性，代码如下。
```javascript
data() {
    return {
        category:[], 
        categoryIndex:0, 
        active:0,
        categorySub:[],
        list:[],
        loading:false,   //上拉加载使用
        finished:false,  //上拉加载是否没有了？
        isRefresh:false, //下拉加载
        page:1,          //商品列表的页数
        goodList:[],     //商品信息
        categorySubId:'', //商品子分类ID
        errorImg:'this.src="' + require('@/assets/images/errorimg.png') + '"'   ,  //错误图片显示路径
        
    }
},

```
注意：只加入了最后一行的代码，其他的是以前写的代码。

### 在图片位置加入onerror事件

```html
<div class="list-item-img">
    <img :src="item.IMAGE1" width="100%" :onerror="errorImg"/>
</div>
```

完成这部就可以在浏览器中看一下效果了，现在的失效图片就有了替补效果了，我们的页面也没有那么难看了。

## 第54节：商品列表页编程式导航的制作

商品类别列表页的效果制作的已经差不错了，我们这节课作为一个补充，说一下编程式导航的做法和价格过滤器的写法。

### 编程式导航

1.编写一个`goGoodsInfo()`方法，接收参数为id。这里使用了name的导航方式。

```javascript
goGoodsInfo(id){
    this.$router.push({name:'Goods',params:{goodsId:id}})
}
```
2.给html加入`click`事件。
```html
<div class="list-item" @click="goGoodsInfo(item.ID)" v-for="(item,index) in goodList" :key="index" >
    <div class="list-item-img">
        <img :src="item.IMAGE1" width="100%" :onerror="errorImg"/>
    </div>
    <div class="list-item-text">
        <div>{{item.NAME}}</div>
        <div class="">￥{{item.ORI_PRICE}}</div>
    </div>
</div>
```

3.`Goods.vue` 页面的参数接收改造

以前我们使用了`query`的方法接收，而现在我们使用params的方法传递，所以要用三元运算符作一下兼容处理。
```javascript
this.goodsId= this.$route.query.goodsId ? this.$route.query.goodsId:this.$route.params.goodsId
```
这样就做好了列表页的编程式导航，在这里我们必须要明白一个知识点，就是params和query传参的用法。

params传参，路径不能使用path，只能使用name，不然取不到传的数据。
```javascript
this.$router.push({name:'Goods',params:{goodsId:id}})
```
取数据时用params获取
```javascript
this.$route.params.goodsId
```
query传参，用的是`path`，而不是`name`,否则也会出错。
```javascript
this.$router.push({path:'/Goods',query:{goodsId:id}})
```
取数据使用query
```javascript
this.$route.query.goodsId
```
### 价格过滤器的添加

这个已经做过几次了，所以就简单介绍一下了。

1.首先引入过滤器
```javascript
import {toMoney} from '@/filter/moneyFilter.js'
```
2.filters属性的编写

```javascript
filters:{
    moneyFilter(money){
        return toMoney(money)
    }  
},
```
3.在template中使用
```html
<div class="">￥{{item.ORI_PRICE | moneyFilter}}</div>
```

价格这时候就变成了正确的样子，我们的商品列表页也就制作完成了，下面的课程我们会制作购物车页面。这节课重要是对编程式导航的正确理解，希望小伙伴们可以学会，并在实际工作中用到。

## 第55节：购物车页面的的建立

从这节课开始用几节的文章，开始制作购物车页面，购物车页面不合后台交互，并且还要保持用户数据的持久化，主要知识点在H5新增localStorage本地存储里，我们也把重心放在localStorage上。

### 建立购物车页面

在`src/componetns/pages`目录下面新建一个`Cart.vue`文件，然后建立组件的基本结构，代码如下。

```html
<template>
    <div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
```



### 加入头部区域

这个已经做过几次了，直接使用使用`vant`里的组件就可以轻松的完成头部的制作。
```html
<div class="navbar-div">
   <van-nav-bar   title="购物车" /> 
</div>
```
### 配置路由

打开`src/router/index.js`文件，增加Cart页面的路由配置.
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMall',component: ShoppingMall},
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login},
    {path: '/Goods',name: 'Goods',component: Goods},
    {path: '/CategoryList',name: 'CategoryList',component: CategoryList},
    {path: '/Cart',name: 'Cart',component: Cart},
  ]
})
```
配置完路由，我们可以打开浏览器，访问以下`http://localhost:8080/#/Cart`看看是不是可以正常访问了。

### 得到购物车数据方法编写

进入页面要作的第一件事就是取得localStorage里的数据，我们先在data里注册两个属性`cartInfo`(购物车中商品的信息)和`isEmpty`（购物是否为空的标识，方便页面呈现）,然后再编写具体的`getCartInfo()`方法。详细代码在下面。

```javascript
export default {
    data() {
        return {
            cartInfo: [],     //购物车内的商品
            isEmpty : false , //购物车是否为空，不为空则显示true，为空显示false
        }
    },
    created(){
        this.getCartInfo()
    },
    methods: {
        //得到购物车的商品
        getCartInfo() {
            //判断localStorage里是否有购物车数据
            if(localStorage.cartInfo){
                //如果有数据，我们去除并赋值给cartInfo
                this.cartInfo = JSON.parse(localStorage.cartInfo)
            }
            //打印到控制台查看效果
            console.log(' this.cartInfo:'+JSON.stringify( this.cartInfo))
            this.isEmpty = this.cartInfo.length>0 ? true : false
        }
    },
}
```
编写完这段代码后，我们到浏览器中的控制台查看效果，这时候localStorage为空，所以控制台显示为空。

## 第56节：购物车中商品的添加

购物车商品的添加，其实就是对`localStorage`的操作和数组查找的使用，也就是`array.find()`操作。购物车添加的主要逻辑，并不放在`Cart.vue`页面里，我们放在`Goods.vue`页面里，也就是商品详情页面，这样作的好处是以后好扩展，并且不用传递参数，直接操作localStoarge.

### 向购物车中添加商品


在`/components/pages/Goods.vue`里加入一个`addGoodsToCart`方法，然后编写下面的代码，详细业务逻辑已经在代码中注释。
```javascript
addGoodsToCart(){
    //取出购物车内的商品数据
    let cartInfo = localStorage.cartInfo ? JSON.parse(localStorage.cartInfo) :[]
    //判断购物车内是否已经有这个商品
    //如果没有返回undeifnd，如果有返回第一个查找到的数据
    let isHaveGoods=cartInfo.find(cart=>cart.goodsId==this.goodsId)
    console.log(isHaveGoods)
    if(!isHaveGoods){
        //没有商品直接添加到数组中
        //重新组成添加到购物车的信息
        let newGoodsInfo={
            goodsId:this.goodsInfo.ID,
            Name:this.goodsInfo.Name,
            price:this.goodsInfo.PRESENT_PRICE,
            image:this.goodsInfo.IMAGE1,
            count:1
        }
        cartInfo.push(newGoodsInfo) //添加到购物车
        localStorage.cartInfo=JSON.stringify(cartInfo) //操作本地数据
        Toast.success('添加成功')
        
    }else{
        Toast.success('已有此商品')
    }
    this.$router.push({name:'Cart'})  //进行跳转
}

},
```

完成上面代码编写后，向“加入购物车”按钮绑定`addGoodsToCart`事件方法。
```html
<van-button size="large" type="primary" @click="addGoodsToCart">加入购物车</van-button>
```

然后就可以到浏览器中进行预览效果了，应该已经实现了购物车商品的添加。

## 第57节：购物车清空和商品布局(Flex)

现在购物车里已经可以添加商品数据了，那我们这节要作的就是把这些数据显示出来。这节可能稍微简单，因为都是布局相关的，你需要的是耐心，把页面做好，尽量比技术胖作的好看。在商品布局之前，我们先来作一个清除购物车的按钮

### 上节课程序的问题说明

上节课视频中是有一点错误的，就是购物车中的商品名称没有显示出来。那这节课我们来改正一下，名称没有出来的原因是我们的赋值变量写错了，大小写问题。
把`/src/components/pages/Goods.vue`里的向购物车添加商品的方法进行修改`addGoodsToCart`,主要修改代码：
```javascript
let newGoodsInfo={
    goodsId:this.goodsInfo.ID,
    Name:this.goodsInfo.NAME,
    price:this.goodsInfo.PRESENT_PRICE,
    image:this.goodsInfo.IMAGE1,
    count:1
	}
```
修改完成后，我们再次添加商品，就可以看到一切正常了，商品名称已经出现了。

### 清空购物车按钮的制作

由于以前存在了一些不合法的数据，现在需要把`localStorage`里的`cartInfo`数据清空，这时候我们需要一个清空按钮.
`/src/components/pages/Cart.vue`里的模版里写一个button。

```html
<!--清空购物车-->
<div class="card-title">
    <van-button size="small" type="danger" @click="clearCart" plain>清空购物车</van-button>
</div>
```

有了模版再写一些css代码。
```css
.card-title{
    height: 2rem;
    line-height:2rem;
    background-color: #fff;
    border-bottom:1px solid #E4E7ED;
    padding:5px;
    text-align: right;
}
```
最后在js部分加入业务逻辑代码，其实非常简单，就是清空`localStorage`里的`cartInfo`数据。
```javascript
//清空购物车的商品
clearCart(){
    localStorage.removeItem('cartInfo')
    this.cartInfo=[]
}
```

### 购物车商品的布局

有很多小伙伴提意见，你一直用`Vant`的布局方法，可是我们想学一下Flex布局，毕竟这才是工作中经常用到的。那这次就用flex布局来进行了。
由于讲解过多，这段的讲解就在视频中进行了。
```html
<!--显示购物车中的商品-->
<div class="cart-list">
    <div class="pang-row" v-for="(item,index) in cartInfo" :key="index">
        <div class="pang-img"><img :src="item.image" width="100%" /></div>
        <div class="pang-text">
            <div class="pang-goods-name">{{item.Name}}</div>
            
                <div class="pang-control">
                <van-stepper v-model="item.count" />
            </div>
        </div>
        <div class="pang-goods-price">￥{{item.price}}</div>
    </div>
</div>
```

CSS样式代码如下：
```css
.cart-list{
    background-color: #fff;
}
.pang-row{
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    padding:0.5rem;
    font-size:0.85rem;
    border-bottom:1px solid #E4E7ED;
    
   
}
.pang-img{
    flex:6;
}
.pang-text{
    flex:14;
    padding-left:10px;
}
.pang-control{
    padding-top: 10px;
}
.pang-goods-price{
    flex:4;
    text-align: right;
}
```
现在大功告成了，可以打开浏览器看一下我们的编程结果了。如果有些小问题，我们再进行微调。


## 第58节：购物车中的商品价格计算

现在购物车已经可以添加商品了，可价格还没有进行计算，这节课来看看价格的计算方法。Vue的双向数据绑定让计算价格变的相当容易，只要对data属性力度cartInfo属性进行编辑，就会自动呈现在页面上。

### 商品价格的格式化

这个已经讲过至少2遍以上了，就是引入过滤器，然后直接使用就可以了，所以直接上代码，不作过多的介绍。

1.引入`moneyFilter`过滤器
```javascript
 import {toMoney} from '@/filter/moneyFilter.js'
```
2.编写过滤器
```javascript
filters:{
        moneyFilter(money){
            return toMoney(money)
        }  
},
```
3.使用过滤器

```
￥{{item.price |moneyFilter}}
```


### 改造template,增加单个商品总价计算

直接写出数量和每个商品的总价，这里并不需要在js里写代码，直接在模版里使用乘法便可以完成需求。
```html
<div class="pang-goods-price">
    <div>
            ￥{{item.price |moneyFilter}}
    </div>
    <div>
        x{{item.count}}
    </div>
    <div class="allPrice">
        ￥{{item.price*item.count | moneyFilter}}
    </div>

</div>
```


### 商品总价的计算
商品总价使用Vue的计算属性就可以轻松搞定，我们先编写模版，让商品总价显示出来。

```html
<!--显示总金额-->
<div class="totalMoney">

    商品总价：￥ {{totalMoney | moneyFilter}}

</div>
```

然后编写一下CSS样式，让它尽量好看一点：
```css
.totalMoney{
    text-align: right;
    background-color: #fff;
     border-bottom:1px solid #E4E7ED;
     padding: 5px;
}
```
最后就是计算属性的编写。
```javascript
computed:{
        totalMoney(){
            let allMoney = 0
            this.cartInfo.forEach((item,index) => {
               allMoney += item.price*item.count
            });

            localStorage.cartInfo=JSON.stringify(this.cartInfo)

            return allMoney
        }
    },
```

先声明了一个总价格`allMoney`,然后用循环读出`cartInfo`里的数据，并给`allMoney`进行赋值，完成后重新写入`localStorage`里，最后返回allMoney，就完成了计算属性的编写。

## 第59节：底部导航栏和子导航的制作

现在已经有了三个页面，我们切换页面还是需要在地址栏输入，然后才能有所变化，这节课我们就学习一下底部导航的制作。

### 引入tabbar组件
在`/src/main.js`文件里引入两个Vant组件Tabbar和TabbarItem.
```JavaScript
import {Tabbar, TabbarItem   } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
```

### 新建Main.vue文件
在`/src/components/pages`下新建一个`Main.vue`文件，然后编写底部导航代码，代码如下：
```html
<template>
    <div>
        <div class="main-div">
         <router-view/>
        </div>
       
        <van-tabbar v-model="active" @change="changeTabbar(active)">
            <van-tabbar-item icon="shop">首页</van-tabbar-item>
            <van-tabbar-item icon="records">列表页</van-tabbar-item>
            <van-tabbar-item icon="cart">购物车页</van-tabbar-item>
            <van-tabbar-item icon="contact" info="20">会员中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        },
        methods: {
            changeTabbar(active) {
                console.log(active)
                switch(active){
                    case 0:
                        this.$router.push({name:'ShoppingMall'})
                        break;
                    case 1:
                        this.$router.push({name:'CategoryList'})
                        break;
                    case 2:
                        this.$router.push({name:'Cart'})
                        break;
                    case 3:
                        break;
                }
            }
        },
    }
</script>

<style scoped>
  
</style>
```

### 子导航的制作

修改`/src/router/index.js`文件，把Main.vue的导航加入进来，然后把商城首页、商品列表页和购物车页面变成他的子导航。

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'
import Main from '@/components/pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/main',name: 'Main',component: Main,
      children:[
        {path: '/',name: 'ShoppingMall',component: ShoppingMall},
        {path: '/CategoryList',name: 'CategoryList',component: CategoryList},
        {path: '/Cart',name: 'Cart',component: Cart},
      ]
    },
    
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login},
    {path: '/Goods',name: 'Goods',component: Goods},
    
   
  ]
})
```

这时候我们到浏览器中看一下效果，如果一切正常，现在应该可以进行底部的导航切换了。当然程序还有一些小问题，我们下节课统一处理一下。

## 第60节：底部导航栏优化

现在已经有了底部菜单，但是还有一些小Bug需要我们处理一下。比如从商品详情页面进入购物车是底部导航不跟随变化，还有有些页面拉不到底部。这节课我们就解决一下这些小问题。

### 购物车页面底部导航的处理

购物车页面出现底部导航不跟随变化的主要问题是，我们不是点击导航进入的，而是通过编程是导航进入的，这样导航栏就没有互动和触发事件，所以并没有发生变化。解决的思路就是跟踪获取路径，根据路径改变导航栏的变化。
1.先写一个方法，方法是获得路径，然后判断路径是不是`/Cart`,是就把`this.active`变成2，就可以了，代码如下：
```javascript
changeTabBarActive(){
    this.nowPath=this.$route.path
    if(this.nowPath=='/Cart'){
        this.active=2;
    }
},

```
2.在进入页面的生命周期里引入这个方法。
```javascript
created(){
    this.changeTabBarActive()
},
```
这时候这个Bug就解决了，当然如果你的页面有多种这样的形式，你可以逐一判断。


### 商城首页不能拉到底部的修改

产生这个问题的主要原因是我们在热销商品的层里没有加入高度，我们这里给`.hot-goods`加入一段CSS样式就可以解决了。
```css
.hot-goods{
    height: 130rem;
    overflow: hidden;
    background-color: #fff;
  
}
```

### 列表页Bug的解决

列表页也有拉不到底的这个问题，因为列表页我们是动态计算出来的高度，所以我们直接在动态计算的地方减去50像素就可以了。

```javascript
mounted(){
    let winHeight = document.documentElement.clientHeight
    document.getElementById('leftNav').style.height=winHeight-46-50 +'px'
    document.getElementById('list-div').style.height=winHeight-90-50 +'px'
},
```

## 第61节：底部导航栏的keep-alive设置（完结）

这节课的内容放到视频里了，文章不作过多的介绍，因为里边有付费会员的一些后续学习方法。课程的完结并不代表学习的完结。为了防止盗版，给大家带来的不变非常抱歉。



