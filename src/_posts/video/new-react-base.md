---
top: true
category: 视频教程
tags:
  - React
date: 2019-05-04
title: React16免费视频教程（更新到第9集）
vssue-title: new-react-base
---

这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端**免费视频教程**，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。

我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。

目前课程正在更新中..........

<!-- more -->


## 第01节：React课程前言

很高兴你能来到这里学习React.js技术，这是课程的第一节，主要介绍一下小伙伴们常问的一些问题，虽然废话很多，但是还是建议你可以花几分钟看完这节视频。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=90064778&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

### React简介

首先不能否认React.js是全球最火的前端框架(Facebook推出的前端框架)，国内的一二线互联网公司大部分都在使用React进行开发，比如阿里、美团、百度、去哪儿、网易 、知乎这样的一线互联网公司都把React作为前端主要技术栈。

React的社区也是非常强大的,随着React的普及也衍生出了更多有用的框架，比如`ReactNative`和`React VR`。React从13年开始推广，现在已经推出16RC（React Fiber）这个版本，性能和易用度上，都有很大的提升。


### React优点总结

- **生态强大**：现在没有哪个框架比React的生态体系好的，几乎所有开发需求都有成熟的解决方案。

- **上手简单**: 你甚至可以在几个小时内就可以上手React技术，但是他的知识很广，你可能需要更多的时间来完全驾驭它。

- **社区强大**：你可以很容易的找到志同道合的人一起学习，因为使用它的人真的是太多了。

### 需要的前置知识

- **JavaScript基础**：如果能回ES6就更好了，因为我们尽量在课程中使用ES6的语法编写案例。

- **npm基础**：你需要会使用npm的包管理，其实这个不会也没事，反正课程中都会讲解。

### 讲授方式和学习要领

- 学习这套视频你完全不用记笔记，只要专心的听课，笔记技术胖已经为你准备好了文字版在每个视频下方。

- 代码全部手写：代码全部进行手写，不做PPT式讲解，不做粘贴复制，你只要认真看，肯定学的会，不会有坑让你爬不上来。

- 和3000名小伙伴一起学习： 群已经开放了，你可以直接进入QQ群，大家都是一起学习的，有什么问题可以一起讨论。

### 视频更新频率

这个视频**每周更新三集**，所以请小伙伴们收藏本网页，或者进入群学习，只要更新内容，群里都会进行通知。可以保证你及时的学习。

技术胖还是个一线程序员，平时加班也不少，所以有时候会更新不及时，还请大家谅解。

声明：课程借鉴了《深入浅出React和Redux》这本书，但也加入了自己的理解，更不会单纯的抄袭本书的任何话语和章节，如果引用本书话语，都会全部标出，以示对版权的尊重（其实我就是看着这本书学习的，然后录制的课程）。

如果你觉的看书更好，可以买一本学习。

### 加QQ群 一起学习

为了大家能更好的一起学习，技术胖同样也建立了QQ群，如果学习中遇到什么困难，可以进群提问，相信群里有很多人可以为你解答问题。

> **QQ群 ：524520566 （3000人大群，入群请正确回答问题，答案请全部小写）**


群里只讨论技术问题，禁止闲聊。

如果你在学习中有什么问题，还可以在文章下方进行留言，技术胖会尽快回复你的问题。

由于个人能力有限，在讲解过程中有不对之处，希望大家能在文章底部进行留言勘误校正，技术胖在先在这里抱手感谢。


## 第02节：React简介和Vue对比

这节课简单介绍一下React框架，并通过介绍，引出一个争执很多的话题，到底什么时候用`React.js`？什么时候用`Vue.js`？其实这节课也是偏重于理论的，但是我觉的有必要单独拿出来一节课说一说，因为有很多小伙伴还在犹豫，我已经会了Vue，还有没有必要学习React？答案是肯定的，那就是一定要学。因为这套课可能更多的面向新手，所以必要的理论也是不能缺少的。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=90254640&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

### React简介

如果你进入官方网站，只会看到一句简单的介绍：

> A JavaScript library for building user interfaces  (用于构建用户界面的JavaScript库)

就是这样简单的一句话，显得朴实无华，但当我每次看到时都感到它的霸气侧漏，肃然起敬。越是伟大的东西，越让人感到谦卑。

**毒鸡汤**

>作为一个程序员，任何时候，都不要瞧不起别人…鸟活着时，吃蚂蚁；鸟死后，蚂蚁吃鸟。一棵树可以制成一百万根火柴，烧光一百万棵树只需一根火柴。所以不要瞧不起任何人！你瞧不起别人时，只不过别人不和你计较！花，姹紫嫣红，却只是昙花一现： 树，朴素寻常，却可以百岁长青。活着，低调做人。因为作为一名程序员，就算你想高调，你有时间和金钱吗?别做梦了，好好学习吧！


**React三大体系**

![React三大体系图](http://blogimages.jspang.com/React%E4%B8%89%E5%A4%A7%E4%BD%93%E7%B3%BB.png)


这个学习也是有一个层次的，需要你先学会`React.js`的基本知识，然后再学习`ReactNative`,这样你的学习难度会大大降低。我的目标也是这样的，先讲解`React.js`基础，然后基础打好了，开始学习`ReactNatvie`。所以这个视频的周期还是比较长的，需要你多些耐心的学习。



**正式简介**

`ReactJS`是由Facebook在2013年5月推出的一款JS前端**开源**框架,推出式主打特点式**函数式编程**风格。值得一说的是，到目前为止`ReactJS`是世界上使用人数最多的前端框架,它拥有全球最健全的文档和社区体系。我们这里学习的是`React Fiber`版本，也就是React16这个版本，这个版本算是一个大升级，增加了很多新的特性，这些特性我都会在以后的课程中给大家一点点讲解。

> ReactJS的官方网站为:https://reactjs.org


如果你是英文很好的同学，我建议你一直阅读React官方文档，这个文档我相信一定可以超过80%现在市面上的React书籍，详细程度就更不用多说了，怎么说人家是官方文档，是书籍编写者的写作大纲哦。(包括我的文章，一定不如官方文档好)

### React和Vue的对比

这是前端最火的两个框架，虽然说React是世界使用人数最多的框架，但是就在国内而言Vue的使用者很有可能超过React。两个框架都是非常优秀的，所以他们在技术和先进性上不相上下。

那个人而言在接到一个项目时，我是如何选择的那？`React.js`相对于`Vue.js`它的灵活性和协作性更好一点，所以我在处理复杂项目或公司核心项目时，React都是我的第一选择。而`Vue.js`有着丰富的API，实现起来更简单快速，所以当团队不大，沟通紧密时，我会选择Vue，因为它更快速更易用。（需要说明的是，其实Vue也完全胜任于大型项目，这要根据自己对框架的掌握程度来决定，以上只是站在我的知识程度基础上的个人总结）

### 总结

我相信大家通过这节课的学习，对React一定有了一个直观的概念。下节课开始我们就要动手开发了，小伙伴们加油了。


## 第03节：React开发环境搭建

通过两节课的理论学习，这节终于可以进入操作环节了，其实技术胖早已经迫不及待了。讲理论就放佛认识一个美女，缺只能让你看，剩下啥都做不了一样。了解我的小伙伴都知道，我一定不是这种性格。这节课就让我们一起动手，把React的开发环境搭建好。在搭建React开发环境前需要你安装Node，如果你已经安装了可以省略这些步骤。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=90254864&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>


### 安装Node.js

使用`React.js`是可以用最原始的`<Script>`标签进行引入的，但是这实在是太low了，工作中也不会有这种形式进行引入。所以在学习的时候，我们就采用脚手架形式的安装。这就需要我们安装`Node.js`，用里边的`npm`来进行安装。

安装Node只需要进入Node网站，进行响应版本的下载，然后进行双击安装就可以了。

> Node中文网址：http://nodejs.cn/  (建议你在这里下载，速度会快很多)

需要你注意的是，一定要正确下载对应版本，版本下载错误，可是没有办法使用的哦。

`Node.js` 安装好以后，如果是Windows系统，可以使用 `Win+R`打开运行，然后输入`cmd`，打开终端（或者叫命令行工具）。

输入代码：

```
node -v 
```
如果正确出现版本号，说明Node安装成功了，需要说明的是，你的版本号可能跟我视频中的有所不同，这无关紧要。

然后再输入代码:

```
npm -v
```
如果正确出现版本号，说明npm也是没问题的，这时候我们的`Node.js`安装就算完成了。

### 脚手架的安装

Node安装好之后，你就可以使用npm命令来安装脚手架工具了，方法很简单，只要打开终端，然后输入下面的命令就可以了。

```
npm install -g create-react-app
```

`create-react-app`是React官方出的脚手架工具，其实有很多第三方的脚手架工具，也有很多优秀的。但是作为初学者为了减少踩坑，所以我们使用官方的脚手架。

### 创建第一个React项目

脚手架安装好以后，就可以创建项目了，我们在`D盘`创建一个`ReactDemo`文件夹，然后进入这个文件夹，创建新的React项目。

```
D:  //进入D盘
mkdir ReactDemo  //创建ReactDemo文件夹
create-react-app demo01   //用脚手架创建React项目
cd demo01   //等创建完成后，进入项目目录
npm start   //预览项目，如果能正常打开，说明项目创建成功
```

其实这些操作只需要再终端中输入就可以了。等到浏览器可以打开React网页，并正常显示图标后，说明我们的环境已经全部搭建完成了。

**毒鸡汤**
亲爱的程序员：
如果你安装失败了，你不要惧怕，毕竟怕啥来啥。
你要相信只要你全力以赴，就没有你搞不砸的事情。

你可以试着换成手机WIFI热点，再来一遍上边的步骤，没准你流量费花了，就安装成功了那。你也可以在群里留言，技术胖会全力帮助你。


**总结**：这节课开始技术胖希望你能跟着我动手作一作，因为你不动手永远学不会。技术胖没有任何别的目的，真心希望你可以学会。动手把环境搭建好，否则下节课你就没办法练习了。

## 第04节：脚手架生成的项目目录介绍

用脚手架生成目录后，需要对目录有个基本的认识。最起码知道都是作什么用的，否则我们如何编写程序那？打个比喻：你知道了一个特别好的娱乐场所，你一直很向往，想去体验一把，可是你不了解行情和规矩，那最多你也只能去泡泡澡，吃吃自助餐了。我们现在就是这种情况，所以这节课将带你浏览一下React脚手架生成目录和文件的作用。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=90482691&page=4" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>


### 项目根目录中的文件

先从进入项目根目录说起，也就是第一眼看到的文件(版本不同，可能稍有不同)

- **README.md** :这个文件主要作用就是对项目的说明，已经默认写好了一些东西，你可以简单看看。如果是工作中，你可以把文件中的内容删除，自己来写这个文件，编写这个文件可以使用`Markdown`的语法来编写。

- **package.json**: 这个文件是`webpack`配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这个里边进行配置，当然脚手架已经为我们配置了一些了，目前位置，我们不需要改动。如果你对webpack了解，对这个一定也很熟悉。

- **package-lock.json**：这个文件用一句话来解释，就是锁定安装时的版本号，并且需要上传到git，以保证其他人再`npm install` 时大家的依赖能保证一致。

- **gitignore** : 这个是git的选择性上传的配置文件，比如一会要介绍的`node_modules`文件夹，就需要配置不上传。

- **node_modules** :这个文件夹就是我们项目的依赖包，到目前位置，脚手架已经都给我们下载好了，你不需要单独安装什么。

- **public** ：公共文件，里边有公用模板和图标等一些东西。

- **src** ： 主要代码编写文件，这个文件夹里的文件对我们来说最重要，都需要我们掌握。


### public文件夹介绍

这个文件都是一些项目使用的公共文件，也就是说都是共用的，我们就具体看一下有那些文件吧。

- **favicon.ico** : 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示。

- **index.html** : 首页的模板文件，我们可以试着改动一下，就能看到结果。

- **mainifest.json**：移动端配置文件，这个会在以后的课程中详细讲解。



### src文件夹介绍

这个目录里边放的是我们开放的源代码，我们平时操作做最多的目录。

- **index.js** : 这个就是项目的入口文件，视频中我们会简单的看一下这个文件。

- **index.css** ：这个是`index.js`里的CSS文件。

- **app.js** : 这个文件相当于一个方法模块，也是一个简单的模块化编程。

- **serviceWorker.js**: 这个是用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。


总结:建议你这节课要看视频进行学习，视频会讲的详细一点，而且更有层次，看文章你可能学不会。


## 第05节：HelloWorld和组件的讲解


这节课先把`src`目录里的文件全部删除，我们一点点写一个·HelloWorld·程序，并通过编写这个程序了解一下什么是`React`中的组件化编程。


### 入口文件的编写

写一个项目的时候一般要从入口文件进行编写的，在`src目录`下，新建一个文件`index.js`，然后打开这个文件。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=90598709&page=5" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" allowfullscreen="true"> </iframe>

写入下面4行代码:
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(<App />,document.getElementById('root'))
```

上面的代码，我们先引入了React两个必要的文件，然后引入了一个APP组件，目前这个组件还是没有的，需要一会建立。然后用React的语法把APP模块渲染到了`root` ID上面.这个rootID是在`public\index.html`文件中的。

这样入口文件就写好了，这时候我们就需要写APP组件了。

### app组件的编写

现在写一下App组件，这里我们采用最简单的写法，就输出一个`Hello JSPang`,就可以了。

```javascript
import React, {Component} from 'react'

class App extends Component{
    render(){
        return (
            <div>
                Hello JSPang
            </div>
        )
    }
}
export default App;
```
这里有一个难点，就是：

```javascript
import React, {Component} from 'react'
```
这其实是ES6的语法-解构赋值，如果你分开写就比较清楚了，你可以把上面一行代码写成下面两行.

```javascript
import React from 'react'
const Component = React.Component
```
如果你对ES6语法不熟悉，你完全可以使用这种形式来进行编写。

当我们这两个文件都编写完成后，可以在终端使用`npm start`命令，来看一下我们编写的结果了。

**总结：**React的主要优势之一就是组件化编写，这也是现代前端开发的一种基本形式。所以我们在学习React的时候就要多用这种思想，只有不断练习，我们才能在工作中得心应手，轻松自如。小伙伴们也动手作一下吧。


## 第06节：React中JSX语法简介

上节课已经接触到了JSX语法，看起来跟`html`标签几乎一样，事实也是如此。JSX语法确实也有很多需要注意的事项，但是对于初学者学太多反而不好。所以这节课我们作一个最简单的JSX语法介绍。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=90829514&page=6" scrolling="no" width="100%" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### JSX简介

> JSX就是Javascript和XML结合的一种格式。React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM，当遇到`<`，JSX就当作HTML解析，遇到`{`就当JavaScript解析.

比如我们写一段JSX语法

```html
<ul className="my-list">
    <li>JSPang.com</li>
    <li>I love React</li>
</ul>

```


比如我们以前写一段代码JS代码：

```javascript
var child1 = React.createElement('li', null, 'JSPang.com');
var child2 = React.createElement('li', null, 'I love React');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
```
从代码量上就可以看出JSX语法大量简化了我们的工作。


### 组件和普通JSX语法区别


这个说起来也只有简单的一句话，就是你自定义的组件必须首写字母要进行大写，而JSX是小写字母开头的。

这个也算是一个比较重要的知识点吧。



### JSX中使用三元运算符


在JSX中也是可以使用js语法的，这节课我们先简单讲解一个三元元算符的方法，见到了解一下。

```javascript
import React from 'react'
const Component = React.Component


class App extends Component{
    render(){
        return (
            <ul className="my-list">
                <li>{false?'JSPang.com':'技术胖'}</li>
                <li>I love React</li>
            </ul>
        )
    }
}

export default App;

```

总结:通过这节课的简单学习，小伙伴们一定对JSX语法有个简单的了解，其实作为一个初学者，我们先知道这么多就足够了。随着课程以后我们会继续深入讲解。


## 第07节：React实例-小姐姐服务菜单

通过六节的学习，已经对React有了基本的认识。最好的学习就是在实战中的成长了，我们开始以作一个《小姐姐服务菜单》的应用，练习以前所学的知识和学习新知识。当然这个视频不是教大家作CSS的，所以我就不进行样式布局了。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=91983316&page=7" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 新建小姐姐组件

现在`SRC`的目录下面，新建一个文件`Xiaojiejie.js`文件，然后写一个基本的HTML结构。代码如下：

```javascript
import React,{Component} from 'react'

class Xiaojiejie extends Component{
    render(){
        return  (
            <div>
               <div><input /> <button> 增加服务 </button></div>
               <ul>
                   <li>头部按摩</li>
                   <li>精油推背</li>
               </ul> 
            </div>
        )
    }
}
export default Xiaojiejie 
```

这个文件现在还没有什么功能，只是写完了一个小组件。然后我们把入口文件的`<App />`组件换成`Xiajiejie`组件。


### 组件外层包裹原则

这是一个很重要的原则，比如上面的代码，我们去掉最外层的`<Div>`，就回报错，因为React要求必须在一个组件的最外层进行包裹。

错误代码(因为外边少了最外层的包裹):

```javascript

import React,{Component} from 'react'

class Xiaojiejie extends Component{
    render(){
        return  (
               <div><input /> <button> 增加服务 </button></div>
               <ul>
                   <li>头部按摩</li>
                   <li>精油推背</li>
               </ul> 
        )
    }
}
export default Xiaojiejie 

```
所以我们在写一个组件的时候，组件的最外层都需要有一个包裹。

### Fragment标签讲解

加上最外层的DIV，组件就是完全正常的，但是你的布局就偏不需要这个最外层的标签怎么办?比如我们在作`Flex`布局的时候,外层还真的不能有包裹元素。这种矛盾其实React16已经有所考虑了，为我们准备了`<Fragment>`标签。

要想使用`<Fragment>`，需要先进行引入。

```javascript
import React,{Component,Fragment } from 'react'
```

然后把最外层的`<div>`标签，换成`<Fragment>`标签，代码如下。

```javascript
import React,{Component,Fragment } from 'react'

class Xiaojiejie extends Component{
    render(){
        return  (
            <Fragment>
               <div><input /> <button> 增加服务 </button></div>
               <ul>
                   <li>头部按摩</li>
                   <li>精油推背</li>
               </ul> 
            </Fragment>
        )
    }
}
export default Xiaojiejie 
```


这时候你再去浏览器的`Elements`中查看，就回发现已经没有外层的包裹了。

**总结:**下节课我们要实现增加服务项，期待下一集和技术胖一起开车吧。




## 第08节：React实例-宝剑磨的好,理论不能少

这节课我们主要了解一下React中的响应式设计原理和数据的绑定方法，俗话说的好："宝剑磨的好，理论不能少"。这节课我们不仅要编写效果，还要讲理论，这节课很重要，因为这涉及`React`中的设计思想和你以后的编程思路。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=92144248&page=8" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 响应式设计和数据的绑定

`React`不建议你直接操作`DOM`元素,而是要通过数据进行驱动，改变界面中的效果。React会根据数据的变化，自动的帮助你完成界面的改变。所以在写React代码时，你无需关注DOM相关的操作，只需要关注数据的操作就可以了（这也是React如此受欢迎的主要原因，大大加快了我们的开发速度）。

现在的需求是增加小姐姐的服务项，就需要先定义数据。数据定义在`Xiaojiejie`组件中的构造函数里`constructor`。

```javascript
//js的构造函数，由于其他任何函数执行
constructor(props){
    super(props) //调用父类的构造函数，固定写法
    this.state={
        inputValue:'' , // input中的值
        list:[]    //服务列表
    }
}

```


在`React`中的数据绑定和`Vue`中几乎一样，也是采用`字面量`(我自己起的名字)的形式，就是使用`{}`来标注，其实这也算是js代码的一种声明。比如现在我们要把`inputValue`值绑定到`input`框中，只要写入下面的代码就可以了。其实说白了就是在JSX中使用js代码。

```html
<input value={this.state.inputValue} /> 
```
现在需要看一下是不是可以实现绑定效果，所以把`inputValue`赋予一个'jspang'，然后预览看一下效果。在这里我们并没有进行任何的`DOM`操作，但是界面已经发生了变化，这些都时`React`帮我们作的，它还会自动感知数据的变化。

### 绑定事件

这时候你到界面的文本框中去输入值，是没有任何变化的，这是因为我们强制绑定了`inputValue`的值。如果要想改变，需要绑定**响应事件**，改变`inputValue`的值。比如绑定一个改变事件，这个事件执行`inputChange()`(当然这个方法还没有)方法。

```html
<input value={this.state.inputValue} onChange={this.inputChange} />
```
现在还没有`inputChange()`这个方法，在`render()`方法的下面建立一个`inputChange()`方法，代码如下：
```
 inputChange(e){
        console.log(e);
    }
```
这时候会发现响应事件可以使用了，但是如何获得我们输入的值那，程序中输入下面的代码。

```javascript
inputChange(e){
    console.log(e.target.value);
}
```
这时候控制台是可以打印出输入的值的，视频中会有演示。看到获得了输入的值，想当然的认为直接改变`inputValue`的值就可以了(错的).

```javascript
inputChange(e){
    console.log(e.target.value);
    this.state.inputValue=e.target.value;
}

```
写完后再进行预览，会发现程序直接报错了（加项服务还真的有点难度哦,大宝剑不好作的...........）。

其实我们范了两个错误：
1. 一个是`this`指向不对，你需要重新用`bind`设置一下指向(ES6的语法)。
2. 另一个是`React`中改变值需要使用`this.setState`方法。

第一个错误很好解决，直接再`JSX`部分，利用`bind`进行绑定就好。

```
 <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
```

这步做完，我们还需要加入`setState`方法，改变值。代码如下:

```javascript
inputChange(e){
    // console.log(e.target.value);
    // this.state.inputValue=e.target.value;
    this.setState({
        inputValue:e.target.value
    })
}

```
现在测试一下，输入框可以改变值了，其实这节课很重要，里边设计了`React`的重要思想，建议这节课可以反复多看两遍，虽然不难，但是这是一个最基本的思想的转变。下节课可要真的增加服务项目了。

## 第09节：React实例-老板我要加个钟

有了上节课的基础，这节课终于可以添加服务，为所欲为了，随意增加你想要的服务了。这节课我们就来增加一个躺式采耳服务，体验一把帝王级待遇。

<iframe src="//player.bilibili.com/player.html?aid=51455080&cid=92488792&page=9" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 让列表数据化

现在的列表还是写死的两个`<li>`标签，那要变成动态显示的，就需要把这个列表先进行数据化，然后再用`javascript`代码，循环在页面上。

我们先给上节课的list数组增加两个数组元素，代码如下：

```javascript
constructor(props){
    super(props) //调用父类的构造函数，固定写法
    this.state={
        inputValue:'jspang' , // input中的值
        //----------主要 代码--------start
        list:['基础按摩','精油推背']   
        //----------主要 代码--------end
    }
}
```

有了数据后，可以在`JSX`部分进行循环输出，代码如下：

```javascript
render(){
    return  (
        <Fragment>
            <div>
                <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                <button> 增加服务 </button>
            </div>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>  
        </Fragment>
    )
}

```

完成上面的步骤，数据就不再是固定的了，而是动态管理的，也为我们接下来的添加打下了基础，剩下的步骤也显得很简单了。

### 增加服务选项

要增加服务选项，我们需要再增加按钮上先绑定一个方法`this.addList`(这个方法目前还没有，需要我们接下来建立).

```html
<button onClick={this.addList.bind(this)}> 增加服务 </button>
```
接下来就是把`this.addList`方法，代码如下：

```javascript
//增加服务的按钮响应方法
addList(){
    this.setState({
        list:[...this.state.list,this.state.inputValue]
    })

}
```

这里需要说的市`...`这个是ES6的新语法，叫做扩展运算符。意思就是把list数组进行了分解，形成了新的数组，然后再进行组合。这种写法更简单和直观，所以推荐这种写法。

写完上面的代码，应该就可以实现增加项目了，你可以试着增加一下自己喜欢的服务进去，比如"中药泡脚"........

### 解决key值错误

高兴的同时其实是有一些隐患的，打开浏览器的控制台`F12`,可以清楚的看到报错了。这个错误的大概意思就是缺少`key值`。就是在用map循环时，需要设置一个不同的值，这个时React的要求。我们可以暂时用`index+item`的形式来实现。

```javascript
<ul>
    {
        this.state.list.map((item,index)=>{
            return <li key={index+item}>{item}</li>
        })
    }
</ul>  

```

这样就解决了这个隐患，现在就可以舒服的享受帝王级的服务了。

## 第10节：React实例-宝剑虽然好 老腰受不了

添加服务虽然很美妙，但是有时候也需要有些节制。这节课就学习如何删除一个服务选项。需求是这样的，当点击已经有的选项后，我们就进行删除。如果使用原生的js来写，这是非常麻烦的，但是有了`React`后就变的简单了。

### 数组下标的传递

如果要删除一个东西，就要得到数组里的一个编号，这里指下标。传递下标就要有事件产生，先来绑定一个双击事件.代码如下:

```javascript
<ul>
    {
        this.state.list.map((item,index)=>{
            return (
                <li 
                    key={index+item}
                    onClick={this.deleteItem.bind(this,index)}
                >
                    {item}
                </li>
            )
        })
    }
</ul>  
```
为了看着更清晰，我们在`return`部分加了`()`这要就可以换行编写`JSX`代码了.在`onClick`我们绑定了`deleteItem`方法.

### 编写`deleteItem`方法

绑定做好了,现在需要把`deleteItem`,在代码的最下方,加入下面的代码.方法接受一个参数`index`.

```javascript
//删除单项服务
deleteItem(index){
    console.log(index)
}
```

这时候可以预览一下啊,已经在方法里获取到了下标.


### 正式删除数据

获得了数据下标后,删除数据就变的容易起来.先声明一个局部变量,然后利用传递过来的下标,删除数组中的值.删除后用`setState`更新数据就可以了.

```javascript
//删除单项服务
deleteItem(index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
        list:list
    })
    
}
```

其实这里边是有一个坑的,有的小伙伴肯定会认为下面的代码也是正确的.

```javascript
//删除单项服务
deleteItem(index){
    this.state.list.splice(index,1)
    this.setState({
        list:this.state.list
    }) 
}
```
记住React是禁止直接操作state的,虽然上面的方法也管用,但是在后期的性能优化上会有很多麻烦,所以一定不要这样操作.这也算是我`React`初期踩的比较深的一个坑,希望小伙伴们可以跳坑.

## 第11节：JSX防踩坑的几个地方

上节课作完“大宝剑”菜单后，如果你跟着我做出来了，说明你的`React`已经入门了。也是一个好的开始，接下来的路虽然还很长，但会平坦的多。这节课就讲一下`JSX`语法中需要注意的几个小坑。

### JSX代码注释

`JSX`中的代码注释是非常有讲究的，这个书上介绍的也非常少，所以在这里讲一下，因为技术胖在初学`React`在这里踩过坑。

我第一次写`JSX`注释，是直接这样写的，当然这样写是完全不对的。

```jsx
<Fragment>
    //第一次写注释，这个是错误的
    <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}> 增加服务 </button>
    </div>
```
那写`JSX`的注释，可以有下面两种写法:

```jsx
<Fragment>
    {/* 正确注释的写法 */}
    <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}> 增加服务 </button>
    </div>
```
如果你记不住，有个简单的方法，就是用`VSCode`的快捷键，直接按`Ctrl+/`，就会自动生成正确的注释了。

你可以把这个理解为，在jsx中写javascript代码。所以外出我们套入了`{}`，然后里边就是一个多行的javascript注释。如果你要使用单行祝注释`//`，你需要把代码写成下面这样。
```jsx
<Fragment>
    {
        //正确注释的写法 
    }
    <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}> 增加服务 </button>
    </div>

```
也就是你要进行换行，所以个人认为这种方法不太优雅，所以推荐第一种注释方法。

### JSX中的class陷阱

比如要给朴素单纯的界面，加入黄色成分，让我们的文本框又粗又黄。我们先来错误演示。

第一步：先写一个CSS样式文件，在`src`目录下，新建一个`style.css`的样式文件。
```css
.input {border:3px solid #ae7000}
```
第二步：在`Xiaojiejie.js`里引入，先用`import`进行引入,能用import引入，都是webpack的功劳。

```javascript
import './style.css'
```

第三部：给`JSX`加入`class,注意下面的代码是错误的。
```jsx
<input class="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
```
虽然现在页面是可以正常显示结果的，但是你代开浏览器控制台会发现`Warning`警告。
```jsx
index.js:1437 Warning: Invalid DOM property `class`. Did you mean `className`?
    in input (at Xiaojiejie.js:19)
    in div (at Xiaojiejie.js:18)
    in Xiaojiejie (at src/index.js:5)
```

意思就是要把`class`换成`className`，它是防止和`js`中的`class`类名 冲突，所以要求换掉。这也算是一个小坑吧。

### JSX中的`html`解析问题

如果想在文本框里输入一个`<h1>`标签，并进行渲染。默认是不会生效的，只会把`<h1>`标签打印到页面上，这并不是我想要的。如果工作中有这种需求，可以使用`dangerouslySetInnerHTML`属性解决。具体代码如下：

```jsx
<ul>
    {
        this.state.list.map((item,index)=>{
            return (
                <li 
                    key={index+item}
                    onClick={this.deleteItem.bind(this,index)}
                    dangerouslySetInnerHTML={{__html:item}}
                >
                </li>
            )
        })
    }
</ul> 

```

上面的代码就可以实现`html`格式的输出。

### JSX中`<label>`标签的坑

JSX中`<label>`的坑，也算是比较大的一个坑，label是`html`中的一个辅助标签，也是非常有用的一个标签。

先看下面的代码，我们在文本框前面加入一个`<label>`。

```jsx
<div>
    <label>加入服务：</label>
    <input className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```

这时候想点击“加入服务”直接可以激活文本框，方便输入。按照`html`的原思想，是直接加ID就可以了。代码如下：
```jsx
<div>
    <label for="jspang">加入服务：</label>
    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```
这时候你浏览效果虽然可以正常，但`console`里还是有红色警告提示的。大概意思是不能使用`for`.它容易和javascript里的for循环混淆，会提示你使用`htmlfor`。
```jsx
<div>
    <label htmlFor="jspang">加入服务：</label>
    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```
这时候代码就正确了，可以实现点击`<label>`后,激活`<input>`标签了。

这节算是我总结的一些`JSX`中的坑吧，总结出来，希望小伙伴们少踩这些坑，能快速上手`React`。



