---
category: 视频教程
tags:
  - React
date: 2019-09-19
title: React实战视频教程-技术胖Blog开发(更新16集)
vssue-title: react-demo
---

![React免费实战视频](https://jspang.com/images/react_blog_demo.jpg)

React的基础和全家桶都已经讲完了，是时候把所有知识都串联起来，作一个真实项目了。
项目要用到的技术栈会很多，而且是真实项目，开发完成后，我会把自己的博客替换成新开发的，并且会把代码进行开源。
项目前台会使用React服务端渲染，并且全部使用Hooks语法来完成。
项目后台可能会使用php+mysql,这个暂时还不太确定。

本教程并没有课程大纲，一遍开发一遍讲述，但这样可以保证最真实的开发流程。如果你也想用React开发个人博客，那这个教程是你最好的选择。

<!-- more -->


## p01：博客实战的课程介绍

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=118424020&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 技术胖的自我介绍 

我相信看这个文章的大部分人，都是我的老朋友，但是也会有一些新朋友加入，所以我有必要作一下自我介绍。我是一个有12年开发经验的程序员，目前专注于前端开发领域，以前做过Java和php的开发。我从两年前开始录制免费视频，目标是10年录制1000集免费视频，写这篇文章时已经录制371集免费前端视频。

视频每周都会更新3集左右，全部是下班回家后录制，所以没办法再快了。


### 文章和视频的一些说明

注意：由于这套视频是实战视频，类似于开发全程的记录，所有代码都是手写，包括CSS代码和JSX代码，所以可能会显得甬长。这就类似一个有着丰富经验的程序前辈，手把手带着你作了一个完整项目。

整个项目会包括三个部分:

![Bolg的三个结构](https://jspang.com/images/blog_demo01.jpg)

**更新频率**

这个文章和视频每周会更新三集左右，每集视频大概10-15分钟，太长了你看起来会比较累。最好的学习是方式是先看视频，然后跟着文章作一遍，这样可以保证你学习效率和质量。

**一起学习**

这套教程的文章和视频都是免费的，但不提供问题解答和讨论，如果你想参与，可以加入技术胖的小密圈。

### 课程前置知识

你学习这套视频教程前，希望你把技术胖2019年录制的React全家桶视频先看一遍，这样可以更好的衔接本视频。

技术胖的React全家桶视频（共84集）:

[1.React16免费视频教程（共28集) ](https://jspang.com/posts/2019/05/04/new-react-base.html)

[2.Redux免费视频教程（共24集）](https://jspang.com/posts/2019/06/20/redux.html)

[3.React Router 免费文字视频教程（共9集）](https://jspang.com/posts/2019/07/31/react-router.html)

[4.React Hooks 免费视频教程(共11集)](https://jspang.com/posts/2019/08/12/react-hooks.html)

[5.React服务端渲染框架Next.js入门(共12集)](https://jspang.com/posts/2019/09/01/react-nextjs.html)


如果你没学过这些视频，看这套教程，可能会看不懂，以前讲过的知识点我会直接写出结果，不会作态度的知识介绍。


## p02：项目前端基础开发环境搭建


这套视频会分三个大的模块来讲，先完成博客的前端界面的制作，也就是上图说的第一个部分。前端主要完成功能就是用户的访问，文章列表和文章详情页面。因为Blog的前台需要SEO操作，所以我们一定会选用`Next.js`框架来辅助我们开发。然后减少CSS和各种组件的重复开发，选用阿里的`Ant Desgin`来作为UI交互库。定下这两个目标后，就可以搭建开发环境了。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=118845089&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 用`create-next-app`快速创建项目

`create-next-app`就是`Next.js`的脚手架工具，有了它可以直接一句命令就建立好项目目录和基本结构，省去了我们很多的麻烦。如果你没有使用过`create-next-app`,可以先进行全局安装，安装命令如下.

```
$ npm install -g create-next-app
```
先创建一个总的目录，因为我们的项目会分为三个大模块，所以需要一个顶层目录。
创建完成后，再进入目录。
安装完成后，进入你要建立项目的位置，使用`npx`来进行安装。

```
$ npx create-next-app blog
```

输入后按回车，就会自动给我们进行安装项目需要的依赖，Next相关的命令也会添加好。完成后可以使用`yarn dev`来测试一下。

在浏览器中输入`http://localhost:3000/`,看到下面的内容，说明项目生产成功。

![create-next-app](https://jspang.com/images/nextjs-01.png)


基本的前台项目结构就建立好了。


### 建立博客首页

用`create-next-app`建立好后，主页是默认的，所以我们要删除一下默认的文件和代码。把首页改成下面的代码。

```js
import React from 'react'
import Head from 'next/head'
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
 </>
)
export default Home
```
这样基本的前台结构就算搭建完成了，但是我们还要使用`Ant Desgin`轮子来写我们的UI部分。

### 让`Next`支持CSS文件

先用`yarn`命令来安装`@zeit/next-css`包，它的主要功能就是让`Next.js`可以加载`CSS`文件，有了这个包才可以进行配置。

```
yarn add @zeit/next-css
```
包下载完成后，在`blog`根目录下，新建一个`next.config.js`文件。这个就是`Next.js`的总配置文件。写入下面的代码:

```js
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})
```

这样我们的`Next.js`就支持CSS文件了。

### 按需加载`Ant Design`

接下来用yarn来安装`antd`，在命令行里输入：
```
yarn add antd 
```
然后再安装一下`babel-plugin-import`，命令如下：

```
yarn add babel-plugin-import
```

安装完成后，在项目根目录建立`.babelrc`文件，然后写入如下配置文件。
```json
{
    "presets":["next/babel"],  //Next.js的总配置文件，相当于继承了它本身的所有配置
    "plugins":[     //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
        [
            "import",
            {
                "libraryName":"antd"
            }
        ]
    ]
}

```
在pages目录下，新建一个`_app.js`文件，然后把CSS进行全局引入.

```js
import App from 'next/app'

import 'antd/dist/antd.css'

export default App
```
这样`Ant Design`就可以按需引入了。现在`index.js`加入一个按钮，看看是否可以正常使用,代码如下。
如果能正常使用，我们的基本环境就已经建立完成了。

```js
import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div><Button>我是按钮</Button></div>
 </>
)

export default Home

```
## p03：制作博客公用头部并形成组件


博客的头部每个页面都一样，所以可以制作成一个组件。这样就可以保持每个博客的页面头部都是统一的，而且易于上线后的维护。博客头部还要能支持适配大部分终端，比如PC、手机和平板。适配终端使用`Ant Design`提供的24格栅格化的技术进行布局。


<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=119065643&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 通用CSS文件的编写

博客需要一个浅灰背景色，并且每个页面的背景色都是一样的，所以需要一个公共的`css`样式文件，在`/static`文件夹下新建一个`/style/`,在`/style`文件夹下新建两个文件夹`/pages`和`/components`，然后再`/pages`文件夹下新建立`comm.css`文件。以后只要每个页面都用到的CSS样式，都放入这个文件中。

建立文件后，写入下面的CSS样式，就是把背景设置成浅灰色。

```css
body{
  background-color: #f6f6f6;  
}
```
修改`/pages/_app.js`引入这个CSS，这个文件引入后，每个页面都会起作用。

```js
import App from 'next/app'
import 'antd/dist/antd.css'
import '../static/style/pages/comm.css'

export default App
```
注意引入时的目录层次，如果引入错了会直接报错。这部完成后，也买你的背景颜色就变成了灰色。


### Ant Design的24格栅格化系统

接下来就可以编写公用的头部了，遇到的第一个问题是如何让界面适配各种屏幕。如果自己编写还是挺麻烦的，幸运的是可以直接使用`Ant Design`的轮子来制作。

Ant Design做好了栅格化系统，可以适配多种屏幕，简单理解成把页面的分成均等的24列，然后进行布局。


需要对适配几个属性熟悉一下：

- xs: `<576px`响应式栅格。
- sm：`≥576px`响应式栅格.
- md: `≥768px`响应式栅格.
- lg: `≥992px`响应式栅格.
- xl: `≥1200px`响应式栅格.
- xxl: `≥1600px`响应式栅格.

先在`/blog/components/`目录下新建一个`Header.js`文件。
然后在`/static/style/components/header.css`,用来编写CSS文件。

Header.js文件
```js
import React from 'react'
import '../static/style/components/header.css'

import {Row,Col, Menu, Icon} from 'antd'
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
            <span className="header-logo">技术胖</span>
            <span className="header-txt">专注前端开发,每年100集免费视频。</span>
        </Col>
       
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home" />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    <Icon type="youtube" />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                    <Icon type="smile" />
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header

```

header.css文件

```css
.header{
    background-color: #fff;
   
    padding: .4rem;
    overflow: hidden;
    height: 2.8rem;
    border-bottom:1px solid #ccc;
}
.header-logo{
    color:#1e90ff;
    font-size: 1.4rem;
    text-align: left;
   
}
.header-txt{
    font-size: 0.6rem;
    color: #999;
    display: inline-block;
    padding-left: 0.3rem;
}
.ant-meu{
    line-height: 2.6rem;
    
}
.ant-menu-item{
    font-size:.7rem !important;
    padding-left:1rem;
    padding-right:1rem;

}

```

写完以后，可以把`/Header.js`文件引入到首页，看一下效果。

index.js
```js

import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
import Header from '../components/Header'
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <div><Button>我是按钮</Button></div>
 </>
)

export default Home


```

完成后，到浏览器中查看一下效果，根据实际情况进行微调就可以了。如果你有2K屏，可以自己试着适配一下2K屏幕。


## p04：完成首页主体的两栏布局

可以看到博客主体分为左右两栏布局，左边是主要的文章列表，右边是个人信息和一些广告的东西。并且也是在不同的终端中有不同的表现。这节课我们先制作出两栏布局。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=119411752&page=4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 对公用头部的微调

由于上节课录制的适配比较长，所以公用头部还是不那么好看，特别是在2K屏下，显得太小气了。所以先对公用头部的CSS进行调整。打开`header.css`文件，改成下面，代码的样式。

```css
.header{
    background-color: #fff;
    padding: .4rem;
    overflow: hidden;
    height: 3.2rem;
    border-bottom:1px solid #eee;
}
.header-logo{
    color:#1e90ff;
    font-size: 1.4rem;
    text-align: left;
}
.header-txt{
    font-size: 0.6rem;
    color: #999;
    display: inline-block;
    padding-left: 0.3rem;
}
.ant-meu{
    line-height: 2.8rem;
}
.ant-menu-item{
    font-size:1rem !important;
    padding-left:1rem;
    padding-right:1rem;
}

```
对屏幕的适配我们也作一下对应的调整，把适配参数配置成如下参数:

logo部分
```
 xs={24} sm={24} md={10} lg={15} xl={12}
```
Menu部分
```
xs={0} sm={0} md={14} lg={8} xl={6}
```
这样就好看多了，可以在浏览器预览一下效果。


### 编写首页的左右两列布局

可以看到博客是分为左右两列布局的，而且也是适配各终端的，有了上节课的经验，我们得知，可以用`Row`和`Col`组件来完成。

index.js
```js
import React from 'react'
import Head from 'next/head'
import {Row, Col} from 'antd'
import Header from '../components/Header'
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        左侧
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>

 </>
)

export default Home
```

CSS样式写在公用的`comm.css`里，代码如下:

```css
body{
  background-color: #f6f6f6;  
}

.comm-left{
  background-color: #FFF;
  padding:.3rem;
  border-radius: .3rem;
  border-bottom:1px solid #eee;
}
.comm-right{
  background-color: #FFF;
  margin-left: .5rem;
  padding:.3rem;
  border-radius: .3rem;
  border-bottom:1px solid #eee;

}
.comm-main{
  margin-top: .5rem;
}
```

我相信你学到这里，CSS都是没有任何问题，所以在CSS部分，我就采用复制的方式了,不在反复的编写了。

### 其他页面的大结构复制

因为博客的列表页、详细页都采用了这种页面的总体形式，所以我们在Pages目录新建`list.js`和`detailed.js`文件，然后把`index.js`代码复制到里边，并进行简单的修改。

list.js

```js
import React from 'react'
import Head from 'next/head'
import {Row, Col} from 'antd'
import Header from '../components/Header'
const List = () => (
  <>
    <Head>
      <title>List</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        左侧
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>

 </>
)

export default List

```

detailed.js

```js

import React from 'react'
import Head from 'next/head'
import {Row, Col} from 'antd'
import Header from '../components/Header'
const Detailed = () => (
  <>
    <Head>
      <title>Detailed</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        左侧
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>

 </>
)

export default Detailed

```

这样，我们就确定了博客的整体结构，并且是统一的。下节课我们继续把通用的博客底部做出来，当然也做成一个组件，其实React编写就是在不断的制作组件。

## p05：利用`List`组件 制作博客列表        

左右两边的基本布局完成后，需要对列表的单元项进行制作，也就是首页列表中的每一项。这个制作起来涉及的内容不多，因为以后要解析`Markdown`代码，所以这里只是先模拟一下，把基本的样式完成。因为基础知识点我们都讲过了，所以这里就以实践为主了。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=119584660&page=5" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 编写列表项的基本结构

由于`Ant Design`本身就有列表相关的组件，所以我们不用把这部分独立出去，而是使用`Ant Design`本身所有的List组件。

在使用时先引入`List`,代码如下:

```js
import {Row, Col , List ,Icon} from 'antd'
```
然后把`useState`也引入过来，以后要进行使用。

```js
import React,{useState} from 'react'
```

用useState,伪造一些假数据，然后在`jsx`中进行使用。
```js
const [ mylist , setMylist ] = useState(
    [
      {title:'50元加入小密圈 胖哥带你学一年',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React实战视频教程-技术胖Blog开发(更新04集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React服务端渲染框架Next.js入门(共12集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React Hooks 免费视频教程(共11集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
    ]
  )

```

有了数据后，我们就可以用这些数据来构建List布局了。代码如下：

```js
 <div>    
  <List
    header={<div>最新日志</div>}
    itemLayout="vertical"
    dataSource={mylist}
    renderItem={item => (
      <List.Item>
        <div className="list-title">{item.title}</div>
        <div className="list-icon">
          <span><Icon type="calendar" /> 2019-06-28</span>
          <span><Icon type="folder" /> 视频教程</span>
          <span><Icon type="fire" /> 5498人</span>
        </div>
        <div className="list-context">{item.context}</div>  
      </List.Item>
    )}
  />    
</div>
```

### 列表页CSS样式的编写

在`/static/style/pages`文件夹下，新建立一个`index.css`文件。
CSS样式我们依然采用复制的方式，这里给出了CSS样式的代码。

```css

.list-title{
    font-size:1.3rem;
    color: #1e90ff;
    padding: 0 0.5rem;
}
.list-context{
    color:#777;
    padding:.5rem;
}
.list-icon{
    padding:.5rem 0;
    color:#AAA;
}
.list-icon span{
    display: inline-block;
    padding: 0 10px;
}
```


写完后记得引入到`index.js`里边。

```js
import '../static/style/pages/index.css'
```
这时候进行预览，应该就可以出现比较好看的列表样式效果了。

## p06：编写“博主介绍”组件    

博客的文章列表有了，接下来开始完善博客右侧的功能，右侧的绝大部分都是需要在其他页面复用的，所以尽量制作成组件，减少以后的开发和维护成本。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=119769293&page=6" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 编写Author组件

在`/components`文件夹下面，新建一个`Author.js`文件。这个组件里要包括头像、自我介绍和社交账号标识。

代码如下:
```js

import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg"  /></div>
            <div className="author-introduction">
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author

```

这里的`Avatat`组件时`Ant Desgin`提供的，专门用来编辑头像的，通过这个可以制作原型或者方形的头像。
`Divider`是分割线组件，也是`Ant Desgin`提供的组件，特点是可以在分割线左、中、右，根据自己需要插入文字。

### CSS样式的编写

这里我提供出了对应的CSS样式，你可以直接复制到项目中使用，你也可以直接写一个自己喜欢的样式。

```css
.author-div{
    text-align: center;
    padding: 1rem;
   
}
.author-div div{
    margin-bottom: 1rem;

}
.author-introduction{
    font-size:.8rem;
    color: #999;
}
.account{
    background-color: #999;
    margin-left: .5rem;
    margin-right: .5rem;
}
```

我们也改写了`comm.css`，把里边的`comm-box`名称，改为了`comm-box`，这样只要到边框的时候，直接使用这个样式就可以了。

```css
body{
  background-color: #f6f6f6;  
}

.comm-left{
  background-color: #FFF;
  padding:.3rem;
  border-radius: .3rem;
  border:1px solid #eee;
}
.comm-box{
  background-color: #FFF;
  margin-left: .5rem;
  padding:.3rem;
  border-radius: .3rem;
  border:1px solid #eee;
 

}
.comm-main{
  margin-top: .5rem;
}

```

### 把组件引入到首页查看效果

打开`index.js`文件，然后在文件头部先引入`Author`组件，代码如下：

```js
import Author from '../components/Author'
```

引入组件后，就可以在需要的位置进行使用了。使用完成，可以到浏览器中查看一下现在的效果了。如果一切正常，我们的自我介绍组件就编写完成了。



## p07：编写“通用广告”组件 

和上节课编写博主介绍组件几乎一样，就是写写基本结构，然后形成组件，引入到主页里查看效果。但是这个广告组件和博主自我介绍组件我都准备用静态来作，就是没有后台配置。这样作的好处是节省掉每次和数据库的交互和后台的交互，提高博客性能。我的博客有时候并发是很大的，所以能节省的资源一定要节省。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=119769293&page=7" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>



### 编写`Advert.js`文件

在`/components`文件夹下新建立一个`Advert.js`文件，然后写入下面的代码:

```js
import '../static/style/components/advert.css'

 const Advert = ()=>{
    return (
        <div className="ad-div comm-box">
          <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
          <div><img src="https://jspang.com/images/ad_4.jpg" width="100%" /></div>
        </div>
    )
 }

 export default Advert

```

### 编写`advert.css`文件

在`/static/components`文件夹下建立一个`advert.css`文件，写入下面的代码:

```css
.ad-div{
    margin-top: .5rem;
}
.ad-div div{
    border-radius: .3rem;
    margin-bottom: .2rem;
    overflow: hidden;
}
```

### 引入首页查看样式

写完后在`index.js`中用`import`引入`Advert`组件，并使用就可以了。

```js
import Advert from '../components/Advert'
```
然后在`index.js`中使用

```js
<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
  <Author />
  <Advert />
</Col>
```

引入后可以在浏览器中进行预览，根据查看效果，进行微调就可以了。实战就是很多东西都是重复的，也是一个从学到会的过程。

## p08：博客列表页面快速制作

这节我们先把博客底部(脚部)制作一下，然后在快速制作博客的列表页面，通过这个你就能感觉到React组件化开发的魅力，有了这些通用组件，能很快完成列表页的开发。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=120176780&page=8" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 博客底部的制作

每个博客在底部都会放置一些类似版权，联系方式，友情连接的东西。并且每个页面也都是一样的，所以我们要作一个通用的博客底部组件（Footer.js）。

在`/components`目录下，新建立一个`Footer.js`的文件，然后写入下面代码.

```js
import '../static/style/components/footer.css'
const Footer = ()=>(
    <div className="footer-div">
        <div>系统由 React+Node+Ant Desgin驱动 </div>
        <div>JSPang.com</div>
    </div>
)

export default Footer
```
然后在`/static/style/components`文件夹下建立一个`footer.css`文件
```css
.footer-div{
    text-align: center;
    width: 100%;
    padding: 1rem;
    color:#888;
}
```
编写完成后引入到`index.js`里，就可以完成底部菜单的开发了，在预览后可以根据自己的喜好进行微调。

### 博客列表页的制作

因为博客列表页和首页非常类似，只是列表页多了“面包屑导航”,我们先把首页的代码`index.js`，拷贝到`list.js`页面中，然后去掉`index.css`的引入。你会发现列表样式没有了。因为列表样式写在了`index.css`里边了，但现在要共用，所以我们这届把列表样式提到`comm.css`样式里边。


然后就可以写面包屑导航了，直接用`Ant Design`自带的`Breadcrumb`就可以，用法也是非常简单，先进行引入:

```js
import {Row, Col , List ,Icon ,Breadcrumb  } from 'antd'
```


```js
<div className="bread-div">
  <Breadcrumb>
    <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
    <Breadcrumb.Item>视频列表</Breadcrumb.Item>
  </Breadcrumb>
</div>
```

为了方便你的学习，这里给出全部代码。

list.js
```js

import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , List ,Icon ,Breadcrumb  } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/list.css'



const Home = () =>{

  const [ mylist , setMylist ] = useState(
    [
      {title:'50元加入小密圈 胖哥带你学一年',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React实战视频教程-技术胖Blog开发(更新04集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React服务端渲染框架Next.js入门(共12集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React Hooks 免费视频教程(共11集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
    ]
  );
  

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <List
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={item => (
                  <List.Item>
                    <div className="list-title">{item.title}</div>
                    <div className="list-icon">
                      <span><Icon type="calendar" /> 2019-06-28</span>
                      <span><Icon type="folder" /> 视频教程</span>
                      <span><Icon type="fire" /> 5498人</span>
                    </div>
                    <div className="list-context">{item.context}</div>  
                  </List.Item>
                )}
              />  
                
            </div>
        </Col>
  
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer/>
  
   </>
  )

} 

export default Home


```

comm.css
```css
body{
  background-color: #f6f6f6;  
}
.comm-left{
  background-color: #FFF;
  padding:.3rem;
  border-radius: .3rem;
  border:1px solid #eee;
}
.comm-box{
  background-color: #FFF;
  margin-left: .5rem;
  padding:.3rem;
  border-radius: .3rem;
  border:1px solid #eee;
}
.comm-main{
  margin-top: .5rem;
}
.list-title{
  font-size:1.3rem;
  color: #1e90ff;
  padding: 0 0.5rem;
}
.list-context{
  color:#777;
  padding:.5rem;
}
.list-icon{
  padding:.5rem 0;
  color:#AAA;
}
.list-icon span{
  display: inline-block;
  padding: 0 10px;
}

```

这节课就到这里，下节课我们再制作文章详细页，文章详细页完成我们的前台UI部分就算基本完成了。


## p09：博客详细页面制作1-编写基本页面结构

十一期间我一直在给老妈装修房子，所以没时间写博客，现在回归正常了，又可以写博客了。这节课我们主要作一下博客前台的详细页面。详细页做主要的一点是对`Markdown`语法的解析。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=122085238&page=9" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 编写基本页面结构

在编写页面前，在`/static/style/pages`文件夹下建立一个`detailed.css`文件，代码如下：

```css
.bread-div{
    padding: .5rem;
    border-bottom:1px solid #eee;
    background-color: #e1f0ff;
}
.detailed-title{
    font-size: 1.8rem;
    text-align: center;
    padding: 1rem;
}
.center{
    text-align: center;
}
.detailed-content{
    padding: 1.3rem;
    font-size: 1rem;
}
code {
    display: block ;
     background-color:#f3f3f3;
     padding: .5rem !important;
     overflow-y: auto;
     font-weight: 300;
     font-family: Menlo, monospace;
     border-radius: .3rem;
}

.title-anchor{
    color:#888 !important;
    padding:4px !important;
    margin: 0rem !important;
    height: auto !important;
    line-height: 1.2rem !important;
    font-size: .9rem !important;
    border-bottom: 1px dashed #eee;
}
.active{
    color:rgb(30, 144, 255) !important;
}
.nav-title{
    text-align: center;
    color: #888;
    border-bottom: 1px solid rgb(30, 144, 255);
   
}

```



有了样式文件后,打开以前我们准备好的`detailed.js`，然后检查一下页面的引入:

```js
import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , Icon ,Breadcrumb  } from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'
```

编写`return`部分的`jsx`代码，

```js
 return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                  <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                </Breadcrumb>
              </div>

             <div>
                <div className="detailed-title">
                React实战视频教程-技术胖Blog开发(更新08集)
                </div>
            
                <div className="list-icon center">
                  <span><Icon type="calendar" /> 2019-06-28</span>
                  <span><Icon type="folder" /> 视频教程</span>
                  <span><Icon type="fire" /> 5498人</span>
                </div>
              
                <div className="detailed-content" >
                  详细内容，下节课编写
                </div>

             </div>
                
            </div>
        </Col>
  
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />

        </Col>
      </Row>
      <Footer/>
  
   </>
  )

```

写完后看一下详细页的效果，然后进行微调。这节课的内容很简单，都是简单的布局，小伙伴只要跟着作就好了。下节课我们来解析`Markdown`。



## p10：博客详细页面制作2-解析Markdown语法

作为一个程序员的博客，一定是要使用` Markdown`来编写文章，所以对`Markdown`文件的解析也是前端必须要作的一件事。我这里使用了`react-markdown`.

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=122085238&page=10" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 认识`react-markdown`组件


`react-markdown`是react专用的markdown解析组件，目前来看是非常不错的.我公司用了`marked + highlight.js`，觉的还是不太好，所以博客中尝试使用`react-markdown`。先上一张图，说明它的强大。

![react-markdown](https://jspang.com/images/react-markdown.png)

它支持代码高亮，表格，而且解析的非常好。

> github网址：https://github.com/rexxars/react-markdown

目前已经有4000+多star了，算是比较好和火的React组件。


### `react-markdown`的安装和引入

可以直接使用`yarn add` 来进行安装，代码如下:

```
yarn add react-markdown
```
安装好后，使用`import`进行引入，代码如下:

```js
import ReactMarkdown from 'react-markdown'
```

### 准备md相关数据

因为目前还没有后端程序，所以需要伪造一个md数据，让web页面可以渲染。

这里声明一个`markdown`变量,当然内容全部是我胡乱写的，为的就是可以顺利渲染出来。

```js

let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

```


### 使用`react-markdown`渲染markdown

现在组件和markdown文件都准备好了，可以进行渲染了。代码如下:

```jsx
<div className="detailed-content" >
    <ReactMarkdown 
      source={markdown} 
      escapeHtml={false}  
    />
</div>
```
现在可以到浏览器中预览一下了，如果一切正常，应该可以正常接卸`markdown`语法了。


## p11：博客详细页面制作3-Markdown导航制作

我的博客文章都是长文章，所以需要一个类似书籍目录的东西，对文章进行导航。这个导航方便小伙伴们阅读，大大提升了博客的体验度。`React`有着极好的技术生态，基本你能想到的技术需求都可以找到对应的轮子，所以我们依然适应第三方组件`markdown-navbar`.

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=122450442&page=11" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 认识`markdown-navbar`组件

`markdown-navbar`组件是一款第三方提供的组件，因为这个是比较小众的需求，所以使用的人并不多。目前只有18star,这个是国人开发的，我用起来还不错，希望作者可以一直维护下去（目前开来是不进行维护了，但是用起来还是挺好用）。


`markdown-navbar`的基本属性：

- className： 可以为导航定义一个class名称，从而进行style样式的定义。
- source：要解析的内容，也就是你的Markdown内容。
- headingTopOffset:描点距离页面顶部的位置，默认值是0.
- ordered: 显示数字编码，默认是显示的，也就是true，设置为false就不显示了。


### `markdown-navbar`的安装和使用

用`npm install`进行安装，命令如下：

```
npm install --save markdown-navbar
```

用`yarn add`进行安装，命令如下：
```
yarn add markdown-navbar
```
安装完成后，直接在要使用的页面用`import`进行引入,需要注意的是你还需要引入`css`。

```js
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
```
这样就引入成功了，现在就可以制作导航了，代码如下：

```js
<div className="detailed-nav comm-box">
  <div className="nav-title">文章目录</div>
  <MarkNav
    className="article-menu"
    source={markdown}
    ordered={false}
  />
</div>
```

在浏览器中预览一下，可以看到效果了。但现在有一个需求，就是这个导航要一直在页面的右侧。我们经常叫这个需求为`固钉`。`Ant Desgin`中提供了`Affix`.

先用import引入Affix组件。

```js
import {Row, Col ,Affix, Icon ,Breadcrumb  } from 'antd'
```
引入后在需要固钉的外层加上Affix组件就可以了。

```js
<Affix offsetTop={5}>
  <div className="detailed-nav comm-box">
    <div className="nav-title">文章目录</div>
    <MarkNav
      className="article-menu"
      source={markdown}
      
      ordered={false}
    />
  </div>
</Affix>
```
写完这段代码，到浏览器中预览一下，就可以实现固钉的效果了。这节课就到这里了，实现了详细页的文章导航效果，到目前为止，基本的用户前台部分就已经制作基本完成了，但是还有很多细节需要我们在中台和后台都开发完成后，再不断打磨。


## p12：中台搭建1-安装egg.js开发环境

博客系统的服务端（或者叫做中台），采用Koa的上层框架egg.js，所谓上层框架就是在Koa的基础上，封装的框架。他主要针对于企业级开发，所以性能和稳定性上都非常不错，而且在国内有很高的声望，由阿里技术团队支持。如果你没有Koa的基础，我建议你还是先停下这个视频，去补一下Koa的知识，也就是几个小时就能学会，技术胖也有免费的视频可以学习。

> 视频学习地址:[挑战全栈 Koa2免费视频教程 (共13集)](https://jspang.com/posts/2017/11/13/koa2.html)

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=122636064&page=12" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>




### 认识egg.js框架

egg.js是由阿里开源的面向企业级开发的Node.js服务端框架，目的就是帮助团队和开发人员降低开发和维护成本。需要说的是他的底层是Koa2来搭建的。（这个框架完全可以开一节新课程讲一下，里边的内容还是非常多的，但是我们在个人博客这样简单的系统中，使用的并不是很多，所以我就用到那里给大家讲那里，不用的我就不讲了。）Koa2虽然已经很好了，但是它并没有任何约定和规范，这样在团队开发中，会出现混乱的现象。

> Github地址：https://github.com/eggjs/egg

目前项目由1.3万star，是非常火爆的开源项目，不过使用的大部分都是国人。框架主要是简化我们的开发流程。


### 搭建开发环境

我们先进入到项目的根文件夹中，然后在根文件夹下，建立一个`service`的文件夹，这就是中台的文件夹了。

全局安装`egg.js`的脚手架工具`egg-init`：

```
npm i egg-init -g
```
因为npm的源还是比较慢的，所以需要多等一些时间。安装完成后，用cd命令进入service文件夹。
用脚手架自动生成项目的基本结构，在终端中直接输入下面的命令。
```
egg-init --type=simple
```
如果不成功，你需要多式几次，这多是网络不顺畅造成的，所以没有什么更好的办法来解决。等待顺利完成后，可以打开文件夹，看一下是否自动生成了很多文件和文件夹。但是现在还没有安装相关的依赖包，所以要使用命令安装egg项目所需要的所有依赖包。

```
npm install
```
安装完成后，就可以启动服务查看一下结果了。

```
npm run dev
```
然后在浏览器中打开网址:http://127.0.0.1:7001/

如果在页面中显示`hi.egg`说明我们环境搭建完成。这节课也就先到这里，下节课我们继续开发中台。


## p13：中台搭建2-egg.js目录结构和约定规范


上节课已经搭建好了egg.js开发环境，但是我没有讲过egg.js的基础知识，所以需要点时间，简单讲解一下egg.js的目录结构和约定规范。只有明白了这些，我们才能更好的进行开发。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=123215513&page=13" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### egg.js目录结构介绍

这里我只介绍比较重要的文件，如果是开发中不太常用的我就不作过多介绍了，毕竟我们这是实战项目，讲解太多的基础知识会耽误大家时间。大家可以自己去看文档（文档全部中文，很好理解）。

- app文件夹:项目开发文件，程序员主要操作的文件，项目的大部分代码都会写在这里。
- config文件夹：这个是整个项目的配置目录，项目和服务端的配置都在这里边进行设置。
- logs文件夹：日志文件夹，正常情况下不用修改和查看里边内容。
- node_modules:项目所需要的模块文件，这个前端应该都非常了解，不多作介绍。
- run文件夹：运行项目时，生成的配置文件，基本不修改里边的文件。
- test文件夹：测试使用的配合文件，这个在测试时会使用。
- .autod.conf.js: egg.js自己生成的配置文件，不需要进行修改。
- eslinttrc和eslintignore：代码格式化的配置文件。
- gitgnore：git设置忽略管理的配置文件。
- package.json： 包管理和命令配置文件，这个文件经常进行配置。


这些就是egg.js项目比较重要的一些文件作用，这里只是简单的介绍了一下，在以后课程中如果开发用到，我们会详细讲解。比较重要的是app文件夹、config文件夹和package.json文件。


### Egg.js目录约定规范

上节课我说过Koa2框架虽然小巧好用，但是在团队开发中使用，是缺少规范的，所以不擅长企业级开发。Egg.js框架就是在Koa2的基础上规范了这些约定，所以也带来了一些文件目录的限制。

在app目录下，egg要求我们必须要有下面的文件：

- controller文件夹：控制器，渲染和简单的业务逻辑都会写道这个文件里。配置路由时也会用到（路由配置需要的文件都要写在控制器里）。
- public文件夹：公用文件夹，把一些公用资源都放在这个文件夹下。
- router.js: 项目的路由配置文件，当用户访问服务的时候，在没有中间件的情况下，会先访问router.js文件。
- service文件夹：这个是当我们的业务逻辑比较复杂或和数据库打交道时，会把业务逻辑放到这个文件中。
- view文件夹：模板文件夹，相当于表现层的专属文件夹，这个项目，我们使用接口的形式，所以不需要建立view文件夹。
- extend文件：当我们需要写一些模板中使用的扩展方法时，我们会放到这个文件夹里。
- middleware：中间件文件夹，用来写中间件的，比如最常用的路由首位。

当然我们现在有个最基础的，然后又需要再不断向文件夹里加文件就可以。


现在我们作一个小例子，在`/app/controller/home.js`文件中，加入一个list方法，然后再进行配置路由。

home.js
```js
async list() {
    const { ctx } = this;
    ctx.body = '<h1>jspang blog list</h1>';
  }
```
router.js
```js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
};

```

这时候，你启动一下服务，然后访问一下,http://127.0.0.1:7001/list,可以看到我们的页面放生了变化。


这节课就到这里，大家只要理解egg.js目录结构和相应的约定规范就可以了。


## p14：中台搭建3-RESTful API设计简介和路由配置

我们的所有数据的获得和业务逻辑的操作都是通过中台实现的，也就是说中台只提供接口，这里的设计我们采用`RESTful`的规则，让egg为前端提供Api接口，实现中台主要的功能。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=123518556&page=14" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### RESTful简介和约束方式

RESTful是目前最流行的网络应用程序设计风格和开发方式，大量使用在移动端App上和前后端分离的接口设计。这种形式更直观并且接口也有了一定的约束性。

约束的请求方式和对应的操作。

- **GET(SELECT)**  ： 从服务端取出资源，可以同时取出一项或者多项。
- **POST(CREATE)** ：在服务器新建一个资源。
- **PUT(UPDATE)** ：在服务器更新资源（客户端提供改变后的完整资源）。
- **DELETE(DELETE)** ：从服务器删除资源。

还有一些不常用的请求方式，因为不常用或者说我们的博客中用不到，所以我就不作过多的介绍了。

### 在egg.js中Api接口的路由配置

首先打开`service`根目录下的`controller`文件夹，在这个文件夹中新建两个文件夹admin（管理端使用的所有API接口）和default（客户端使用的所有API接口）文件夹。

目前我们只有客户端（前台）的页面，所以先在`default`目录下建立一个home.js文件，用于前台首页所需要的api接口。代码如下：

/service/app/controller/default/home.js

```js
'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        this.ctx.body="api接口"
    }
}

module.exports = HomeController
```

接口写好以后，我们需要配置一下路由。这里为了把路由也分成前后端分离的，所以在`app`文件夹下新建一个`router`文件夹。

在文件夹下新建两个文件`default.js`和`admin.js`。

default.js文件

```js
module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index',controller.default.home.index)
}
```
router.js文件

```js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  
  require('./router/default')(app)
};

```
编写好以后，我们使用`yarn dev`命令进行开启服务器，然后到浏览器中输入地址`http://127.0.0.1:7001/default/index`,如果能出现`api接口`字样，说明已经完成了基本的路由设置。

下节课我们学习egg.js如何连接数据库和实现相关的操作。


## p15：中台搭建4-Egg.js中连接mysql数据库

这节课讲解一下Egg.js中使用mysql数据库，那需要你的mysql数据有基础的了解，比如说一些常用的sql语句和安装。但是如果你说我真不会，也是可以跟着视频作下来的，但只是能做出效果，对于里边的为什么可能不太了解。还是需要你自己补齐一下mysql的基础知识啊。我还建议，如果你对mysql不熟悉，还是暂停学习一下，找一套相关的mysql最新教程学习一下，这样你接下来的学习才会更简单。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=123768416&page=15" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### egg-mysql模块安装

如果要在egg.js中使用mysql数据库，那需要先进行安装`egg-mysql`模块，这个模块你可以使用npm或者yarn来进行安装。

npm安装命令如下:
```
npm i egg-mysql --save
```
yarn安装命令如下:
```
yarn add egg-mysql
```
这个的等待大概要1分钟，具体要根据你自己的网速确定，请耐心等待安装完成。安装完成可以到`package.json`中看一下，是否有这个文件。我安装的版本是3.0.0版本。你学的时候，这个版本可能所有变化。


### 进行插件配置

在安装完成以后，还不能正常使用，egg.js要求我们对于外部模块在`plugin.js`中进行配置。配置方法如下：

文件/server/config/plugin.js
```js
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}
```

这个配置完，也就说明egg.js可以支持mysql数据库的使用和连接了。

全部代码如下:

```js
'use strict';

//配置插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}
```

以后还会多次配置这个文件，所以我们这里要对这个`config.js`有所印象，他的左右就是配置egg.js项目的。


### 数据库连接配置


这个配置时，你要先确认你已经有一台安装mysql的服务器或者是主机，当然你也可以在自己的开发机上进行安装，因为我使用的`php Study`这个集成开发环境（作php用的）。所以我的机器上是安装的。

打开/config/config.default.js文件，作下面的配置（这段配置你可以在https://www.npmjs.com/  网址中找到这个配置）


```js
exports.mysql = {
  // database configuration
  client: {
    // host
    host: 'mysql.com',
    // port
    port: '3306',
    // username
    user: 'test_user',
    // password
    password: 'test_password',
    // database
    database: 'test',    
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};

```

这时候你需要根据你的环境，修改对应的参数，主要的就是host、user、password和database（每个数据库配置不同，所以这个每个人都不同）。
我的是这样的，但是你不一定完全跟我一样。
```js
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '12345678',
      // database
      database: 'react_blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

```

这个配置完成后，就可以连接到数据库了。

### 创建数据库

现在我们还没有数据库，所以需要先建立数据库，直接使用`PhP Study`里的`SQL_Front5.3`来管理数据，如果你没有安装需要安装一下，安装完成后点后面的管理按钮，就可以管理了。（这个过程看视频吧）

1. 输入你数据库的用户名和密码，然后点击进入。
2. 进入后新建一个数据库`react_blog`，这个名字你可以自己起
3. 新建一个表`blog_content`,字段就是title、type、introduce和content
4. 随便写条数据进去，这个自由发挥吧

这样数据库的准备就写好了，接下来需要验证一下，数据库是否已经连接上了。


### 使用get进行表的查询

打开上节课写的`/app/controller/defalut/home.js`文件，改写`index`方法。

```js
'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        //获取用户表的数据
       
        let result = await this.app.mysql.get("blog_content",{})
        console.log(result)
        this.ctx.body=result
    }

   
}

module.exports = HomeController
```
改写后，在浏览器中输入`http://127.0.0.1:7001/default/index`.如果能在控制台打印出结果和页面中显示结果，说明数据库已经连接成功了。这节课主要讲解了egg.js中mysql数据的连接方式，下节课我们简单的介绍一下数据库的增删改查操作。


## p16：中台搭建5-数据库设计和首页接口制作

现在已经可以连接数据库了，我们现在就要好好设计一下数据库结构，把文章的表和类别的表建立好，然后我们复制一些数据进去，形成一个列表，供首页调用。

<iframe src="//player.bilibili.com/player.html?aid=68325396&cid=123951645&page=16" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 数据库中的表建立

直接使用MySQL-front工具建立使用的表，建立两张表`type`和`article`表，表结构如下:

**type表（文章类型表）**

- id : 类型编号 int类型
- typeName: 文章类型名称 varchar类型
- orderNum: 类型排序编号 int类型

建立好表之后，我们再写入一条数据，编号为1，名称是视频教程，排列需要为1

**article表（文章内容表）**

- id : 文章编号 int类型
- type_id : 文章类型编号 int类型
- title : 文章标题，varchar类型
- article_cointent : 文章主体内容，text类型
- introduce： 文章简介，text类型
- addTime : 文章发布时间，int(11)类型
- view_count ：浏览次数， int类型

建立好之后，可以自己写一些对应的文章进去，记得点击发布才可以。


### 前端首页文章列表接口

现在文章相关的数据表已经建立完成了，我们也简单的写入了一些数据，那现在就可以利用RESTful的规范，建立前端首页所需要的接口了。

在`/app/contoller/default/home.js`文件夹中，写一个`getArticleList`的方法，代码如下：

```js
async getArticleList(){

   let sql = 'SELECT article.id as id,'+
             'article.title as title,'+
             'article.introduce as introduce,'+
             'article.addTime as addTime,'+
             'article.view_count as view_count ,'+
             '.type.typeName as typeName '+
             'FROM article LEFT JOIN type ON article.type_id = type.Id'

    const results = await this.app.mysql.query(sql)

    this.ctx.body={
        data:results
    }
}

```
因为我到目前一共只写了20多篇文章，所有也不需要什么分页的东西,这里也就不作分页设置了。

写完之后还需要配置一下路由（router），打开`/app/router/default.js`,新建立一个get形式的路由配置，代码如下：

```js
module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index',controller.default.home.index)
    router.get('/default/getArticleList',controller.default.home.getArticleList)
}
```

这个配置完成后，可以现在浏览器中预览一下结果，看看是否可以正确输出结果。访问地址：http://127.0.0.1:7001/default/getArticleList。如果能出现结果，说明我们已经完成了数据和接口的开发。



## p17：前中台结合1-前台读取首页文章列表接口

现在数据库、表和接口我们都已经完成了，这集可以试着从数据接口获得数据，然后现在在页面上了。实现这个需求，我们将使用Axios模块来实现。


### 安装Axios模块

先进入前台的文件夹，如果你和我写的文件名是一样的，应该是`blog`，引入后就可以使用yarn命令进行安装了，当然你用npm来进行安装也是完全可以的。

```
yarn add axios
```
安装完成后可以到`package.json`里看一下现在安装的结果，我目前安装的0.19.0版本，你们学习的时候可以跟我的不太一样。


### 新建getInitialProps方法并获取数据

当`Axios`安装完成后，就可以从接口获取数据了。打开`/blog/pages/index.js`文件，在文件下方编写`getInitialProps`。

```js
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res)=>{
        //console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}
```

这里使用了经典的`async/await`的异步方法。我们可以在得到数据后在控制台打印一下，查看一下结果。

### 把数据放入到界面中

当我们在`getInitialProps`方法里获得数据后，是可以直接传递到正式方法里，然后进行使用:

```js
const Home = (list) =>{

  console.log(list)
  //---------主要代码-------------start
  const [ mylist , setMylist ] = useState( list.data);
  //---------主要代码-------------end
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
             
              <List
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={item => (
                  <List.Item>
                  
                    <div className="list-title">{item.title}</div>
                    <div className="list-icon">
                      <span><Icon type="calendar" /> {item.addTime}</span>
                      <span><Icon type="folder" /> {item.typeName}</span>
                      <span><Icon type="fire" /> {item.view_count}人</span>
                    </div>
                    <div className="list-context">{item.introduce}</div>  
                  </List.Item>
                )}
              />  
                
            </div>
        </Col>
  
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer/>
  
   </>
  )

} 

```

做完这步，我们的内容就应该正确的显示在页面上了，但是还是有点小问题，比如我们的日期格式还是不正确。


### 修改时间戳为日期格式

其实这个有很多方法，有前端实现的方法，也有后端实现的方法，但是我觉的使用SQL语句来实现是最简单的一种方法。

打开`/service/app/controller/home.js`文件，找到拼凑SQL语句那部分代码，把代码修改成如下样式即可实现转换。

```js
let sql = 'SELECT article.id as id,'+
                 'article.title as title,'+
                 'article.introduce as introduce,'+
                 //主要代码----------start
                 "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
                 //主要代码----------end
                 'article.view_count as view_count ,'+
                 '.type.typeName as typeName '+
                 'FROM article LEFT JOIN type ON article.type_id = type.Id'
```

现在去浏览器中预览一下，应该就实现了时间戳转换成时间日期格式了。这节课我们就到这里，主要讲解了前台读取接口后如何显示在页面上的一些知识。












