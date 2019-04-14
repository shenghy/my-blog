---
category: 视频教程
tags:
  - Vue
date: 2017-05-22
title: Vue实战视频-快餐店收银系统 (共11集)
vssue-title: vueDemo
---

**课程前言**

这是我网站恢复后写的第一篇文章，在关站这段时间里，群里的小伙伴们给了我很多支持，没有你们的支持，很可能我就放弃写博客了，所以非常感谢你们的支持。
<!-- more -->

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=s05139v8tpx&tiny=0&auto=0" allowfullscreen></iframe>

这个系统使用的技术栈为：Vue+Webpack+Element+Axios+vueRouter.系统是一个快餐店的POS系统，当然我们不可能实现一个完整POS系统的所有功能（业余时间我会开发完成并开源），我们在视频中只完成收银模块的制作。你在这个视频中会学习到很多实战的技巧，让你在真实的工作中得心应手，脱颖而出。

课程源码GitHub地址：[https://github.com/shenghy/AwesomePOS](https://github.com/shenghy/AwesomePOS)

如果你是一个Vue新手，你可能还不能完全掌握文章的内容，你需要一些Vue的初级知识和中级知识。如果你是新手是不是感到很无奈，幸运的是本站为你提供了全部的前置视频学习资源，你可以踏踏实实的学习。


## 第1节：Mockplus把我们的想法画出来

Mockplus是产品经理装逼使用的利器，但是真的很好用，作为一个已经工作的程序员必须舔产品经理的脸，所以你也要对Mockplus的使用有所了解，并会简单的使用。其实Mockplus就是一个线框图制作工具，能把我们的想法或者不太好用语言表达的地方，快速画出线框草图增加理解能力。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=z0506t80dm1&tiny=0&auto=0" allowfullscreen></iframe>

** 为什么选择快餐店POS系统？ **

刚开始我想作一套以酒水商城为背景的手机端应用，但是我发现网上这样的应用太多了，什么仿饿了么，什么知乎，什么购物车都可以在网上找到，所以你完全可以Github网站中下载，自学掌握。我觉的既然作了这个实战，就要够酷够复杂，我下面列举了三个原因，大家可以看一下（你其实可以忽略前两点）。

- 这个收银界面足够复杂：我们采用三栏布局，每栏的交互操作都很有技术技巧，让你快速掌握复杂应用的开发。
- 用到的知识点多：用到实战中90%以上的知识点，让你把Vue的知识串联起来，快速成为单位中的技术牛人。
- 为了更好的和女神啪啪啪：京东-强东哥的女神愿望就是开奶茶店，我的女神愿望就是开个快餐店。

**MockPlus软件下载：**

Mockplus是一款免费的软件，你可以随便下载：[https://www.mockplus.cn/](https://www.mockplus.cn/) 。下载好后你需要注册一个账户，就可以正常使用了。

![alt](http://59.110.165.66/static/upload/20180823/VADjfl2ZU7vkaeYU7CLy.png)

** 项目框线图； **

下面是我们用Mockplus制作的应用框线图，虽然简单，但是已经把我脑海中快餐店Pos系统的大体样式画出来了。在作项目之前，一定要画出框线图，反复讨论需求和技术实现，这样能避免开发中的大范围修改，在实际工作当中非常重要。


![alt](http://59.110.165.66/static/upload/20180823/waPZKoMSq3mbw_SzDzyW.jpg)

## 第2节：Vue-cli搭建开发环境

我们采用Vue-cli进行快速搭建，如果你对`Vue-cli`还不了解，请观看下面的文章，大概30分钟可完全掌握Vue-cli。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=s0506m2hbmv&tiny=0&auto=0" allowfullscreen></iframe>

**搭建项目架构：**

项目采用Webpack+Vue-router的架构方式，开始安装（全部在windows系统上操作，我也没有mac电脑）。
1.按Win+R，然后在文本框中输入cmd，回车打开命令行，输入vue-cli安装命令：
```
mpm install vue-cli -g
```
这里的-g代表全局安装。

2.在命令行中初始化项目，我们采用的是webpack模板，输入初始化命令：

```
vue init webpack AwesomePos
```
这里的AwesmonePos是我的项目文件夹名称，你可以起一个自己喜欢的名称。安装时根据项目需要配置所需要的模块。这里有一个小技巧，就是在你已经提前建立好了文件夹的时候，我们也进入了文件夹，这时候我们可以省略这个文件夹名称。如下情况：

```
mikdir AwesomePos
cd AwesomePos
vue init webpack
```
3.在命令行中，进入项目目录，使用`npm install` 安装`ackage.json`里项目的依赖包。如果你网速较慢的话，可以使用淘宝镜像的cnpm来进行安装。

4.查看是否安装正确。在命令行中输入 `npm run dev` ，如果能在浏览器中正常打开页面，说明安装正确。

到这里为止，我们的项目架构就建立好了，我们需要对`Vue-cli`给我们生成的文件进行一些必要的修改。

**修改项目文件内容：**

1.修改根目录下的index.html文件，我们想写一些CSS样式，这样作是为了更好的布局，然后修改一下标题栏。让标题符合项目这里起名叫“AwesomePOS-快餐店管理系统”。index.html修改后内容如下。

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AwesomePOS-快餐管理系统</title>
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_wyhhdpv5lhvbzkt9.css">
    <style>
      html,body,#app{height:100%;padding: 0;margin:0;}
    </style>
  </head>
  <body >
     
                  
                
    <div id="app" ></div>
    <!-- built files will be auto injected -->
    
  </body>
 
</html>
```
2.新建Pos组件，这个相当于程序员的入口文件。在`src/components/page/`目录下新建`Pos.vue`文件。文件内容写出vue模板的架构就可以。
```
<template>
  <div class="pos">
   Hello Pos Demo!
  </div>
</template>
 
<script>
export default {
  name: 'Pos'
}
</script>
<style scoped>
 
</style>
```
3.修改路由文件，项目根目录`/src/router/index.js`，让入口文件变成Pos组件。
先用import引入了Pos模板组件，然后修改routes里边的内容。如果你对`Vue-router`的知识还不了解，可以去看我以前的课程，这里就不作过多的讲解了。

```
import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }
  ]
})
```
这时候看一下浏览器中的网页，如果显示出了Hello Pos Demo.我们就算成功搭建项目架构了。下节课我们确定一下项目中使用的图标。

## 第3节：搞定项目图标Iconfont

在开发中经常会遇到小图标的使用问题，小图标的使用可以让程序更美观和增加可用性。网上给程序加上小图标的方法有很多。曾经为了寻找一款使用简单，图标美观的图标库，我真的是到处搜索，直到遇到了IconFont，我觉的它能满足我的大部分要求。那在这里我推荐大家使用IconFont，这是阿里巴巴的矢量图标库。（这绝对不是广告，只是自己使用的一些感受）

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=o0507v4geh4&tiny=0&auto=0" allowfullscreen></iframe>


挑选自己喜欢的图标

Iconfont中有很多图标，我们可以像在超市逛街一样，挑选自己喜欢的商品，然后放入购物车。

*** 挑选图标的过程（共6步）*** 

1. 进入网站：Iconfont网址：http://www.iconfont.cn
2. 点击网站上方的“官方图标库”，选择自己喜欢的图标。在这里我选择天猫的图标库。
3. 选择好自己喜欢的图标，你可以有两个选择，下载代码 和 添加至项目。
4. 我们这两选择添加至项目，然后新建项目，并输入名称。
5. 项目添加好后，会自动给我们转入到我们项目库中。点击查看在线链接。
6. 生产css引入的代码，生成后就可以在项目首页index.html引入了。

```
 <link rel="stylesheet" href="http://at.alicdn.com/t/font_wyhhdpv5lhvbzkt9.css">
```

**图标的使用：**
图标顺利引入到项目中，已经可以使用它们了，在“我的项目中”你会看到图标的font class值。可以直接复制代码粘贴，也可以自己写代码。
```
<i class="icon iconfont icon-hanbao"></i>
```
这样在页面中就可以看到图标了。

*** 添加更多图标： ***

如果在项目中觉的图标不够用了，需要添加更多图标。可以利用下面四步进行添加。

1. 去Iconfont网站继续挑选，把相中的图标加入购物车中。
2. 把购物车中的图标加入到项目中。
3. 重新生成在线链接。（这部很重要）
4. 在项目主页中(index.html)，更换css引入链接。

实战项目开发的知识点就是很多，也很杂，但是这些都很实用，你也会快速成长，不要感觉和Vue无关就忽略，让我们共同努力，变成更好的自己。

## 第4节：编写独立的侧边栏导航组件

上节学习了inconFont的使用，可以在项目中加入漂亮的icon图标了。这节课我们要快速撸一个侧边栏组件出来。组件的作用就是在可以复用，想在那个页面使用都可以，并且像写html标签一样简单。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=i05086v83z1&tiny=0&auto=0" allowfullscreen></iframe>


** 建立leftNav.vue文件： **

我们在src/components目录下，先新建一个common和page文件夹。
- common文件夹用来放共用组件，下面写的leftNav.vue组件就放到这里。
- page文件夹用来放我们的页面模板组件，页面的模板文件放到这里。

在common文件夹下，新建leftNav.vue文件。

开始动手写代码：

建立好文件后，我们先给components来个基本组件结构，你可以复制粘贴也可以手写。
```
<template>
  <div class="left-nav">
    
  </div>
</template>
 
<script>
export default {
  name: 'leftNav',
  data () {
    return {
    }
  }
}
</script>
<style>
 
</style>
```
开始写html结构，我们用列表li来代表导航。菜单栏有收银、店铺、商品、会员、统计。我们编写的html结构如下

```
 <ul>
        <li>
            <i class="icon iconfont icon-wodezichan"></i>
            <div>收银</div>
        </li>
 
        <li>
            <i class="icon iconfont icon-dianpu"></i>
            <div>店铺</div>
        </li>
 
        <li>
            <i class="icon iconfont icon-hanbao"></i>
            <div>商品</div>
        </li>
 
         <li>
            <i class="icon iconfont icon-huiyuanqia"></i>
            <div>会员</div>
        </li>
 
 
        <li>
            <i class="icon iconfont icon-tongji"></i>
            <div>统计</div>
        </li>
</ul>
```
注意：这里你也许和我使用的图标不一样，请自行改成你图标用的代码，不要无脑拷贝，图标会显示不出来。

components（组件）基本结构写好后，开始动手写CSS样式，让我们的组件变的好看。

```
<style>
    .left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px;
    }
</style>
```
编写完CSS样式，这个组件算是大体写好了，以后根据需求我们会在组件里添加`<route-link>`标签。但是现在还没有这个需求，所以暂时不添加。

** 把leftNav组件放到模板中 **

先用import在App.vue中引入leftNav组件。

```
import leftNav from '@/components/common/leftNav'
```
引入后在vue的构造器里添加components属性，并放入我们的leftNav组件。

```
export default {
  name: 'app',
  components:{
    leftNav
  }
}
```
这样组件就算在也页面引入成功了，接下来我们就可以在`<template>`区域里愉快的使用它`（<leftNav></leftNav>）`。贴出引入使用全部代码，方便大家学习查看。
```
<template>
  <div id="app">
    <!--左侧导航-->
    
        <leftNav></leftNav>
    
    <!--操作区域-->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
 
<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'app',
  components:{
    leftNav
  }
}
</script>
 
<style>
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
   height:100%;
}
 
.main{
  float:left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
 
}
</style>
```

## 第5节：开启Element封印

Element是一套为开发者、设计师和产品经理准备的基于Vue2.0的组件库，提供了配套设计资源，帮助你的网站快速成型。在项目中自己写组件虽然灵活，但是效率并不高效，所以要学会站在巨人的肩膀上干活，Element就是巨人的肩旁，也是现在国内比较成熟的以一套Vue的组件库。所以我决定 使用这个组件库开发项目。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=x0509ln93qb&tiny=0&auto=0" allowfullscreen></iframe>

**npm安装**

这里使用npm的方式安装，它能更好地和webpack打包工具配合使用。

```
	
npm n install element-ui --save
``` 
如果你网络状况不佳可以使用cnpm来进行安装。

**完整引入项目**

在main.js中写入以下内容:

```
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
 
Vue.use(ElementUI)
 
new Vue({
  el: '#app',
  render: h => h(App)
})
```
以上代码便完成了Element的引入。需要注意的是，样式文件需要单独引入。

** 用Element的el-row的布个局**

安装好，先做个简单的布局小试牛刀，这里作两栏布局，Element支持用24栏的形式进行布局。

** 在Pos.vue里添加模版布局：**
```
<template>
  <div class="pos">
    <div>
        <el-row >
            <el-col :span='7'>
            我是订单栏
            </el-col>
            <!--商品展示-->
            <el-col :span="17">
             我是产品栏
            </el-col>
        </el-row>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Pos',
  data () {
    return { 
    }
  }
}
</script>
<style scoped>
</style>
```

**解决100%高的问题 **
在页面中使用了`Element`组件，这样他会自动给我们生产虚拟DOM，我们无法设置高度100%；

这时候可以利用javascript，来设置100%高度问题。先要给我们的`<el-col>`标签上添加一个id，我们这里把ID设置为

`order-list`。然后在vue构造器里使用mounted钩子函数来设置高度。

```
 mounted:function(){
      var orderHeight=document.body.clientHeight;
      document.getElementById("order-list").style.height=orderHeight+'px';
  },
```
布局的基本架构，我们已经做好，剩下的就是一些细节。下节课我们将用一节课的时间制作大部分CSS样式内容。

## 第6节：利用Element快速布局（1）

这节课我们将快速利用Element进行布局页面，这章视频中我会直接拷贝Style代码，因为我觉的你学Vue，那CSS也没有任何问题的，所以不耽误大家的宝贵事件。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=q0509saeqeb&tiny=0&auto=0" allowfullscreen></iframe>

**el-tabs标签页组件 **

用Element里提供的el-tabs组件可以快速制作我们的tabs标签页效果，具体使用方法可以到Element的官网查看API。

基本用法很简单，可以直接在模板中引入`<el-tabs>`标签，标签里边用`<el-tab-pane>`来代表每个每个标签页。

先看一个最简单的代码：
```
<el-tabs>
      <el-tab-pane label="点餐">
       点餐   
      </el-tab-pane>
      <el-tab-pane label="挂单">
      挂单
      </el-tab-pane>
      <el-tab-pane label="外卖">
      外卖
     </el-tab-pane>
</el-tabs>
```
细心的小伙伴会看到每个`<el-tab-pane>`里会有一个label属性，这个属性就是你标签页的标题。内容可以直接写在`<el-tab-pane>`里。

** el-table组件制作表格 **

需要在订单的tab标签页里放入表格，把点选的食品放入到待结账列表里,可以使用Element的内置组件el-table。如果你对el-table不了解， 可以去Element官网去查看一下。我这里不作太多的解释，先把代码贴过来，然后根据代码在讲解。

```
<el-table :data="tableData" border show-summary style="width: 100%" >
 
    <el-table-column prop="goodsName" label="商品"  ></el-table-column>
    <el-table-column prop="count" label="量" width="50"></el-table-column>
    <el-table-column prop="price" label="金额" width="70"></el-table-column>
    <el-table-column  label="操作" width="100" fixed="right">
        <template scope="scope">
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">增加</el-button>
 
        </template>
    </el-table-column>
</el-table>
```

这里我们采用了五列布表格， 在第1行中的:data是用来绑定数据源的， border代表表格有边框效果。在这视频里我会有详细的讲解。

tableData中的数据源的值，为了布局方便，所以我们进行了写死，以后会改成动态添加的数据。

```
tableData: [{
          
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {
          
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
         
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
         
          goodsName: '甜筒',
          price: 8,
          count:1
        }]
```
你现在可以打开浏览器进行一下预览，看一下效果了。如果效果正常，我们可以继续往下编写了。

** el-button 按钮组件 **

需要在点餐表格的下方放入三个功能性按钮，分别是挂单按钮、删除按钮、结账按钮。同样使用Element里的组件，进行快速写入。`el-button `的type属性是设置按钮样式的，为了学些和区分我们这里用三个属性来设置按钮。

```
<el-button type="warning" >挂单</el-button>
<el-button type="danger" >删除</el-button>
<el-button type="success" >结账</el-button>
```
到这里我们左边最重要的订单操作区域就布局完成了，下节课我们布局右侧的商品布局。
 
## 第7节：利用Element快速布局（2）

上节完成了左边订单栏的布局，这节我们还是利用Element完成大部分布局。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=x05101fvy9m&tiny=0&auto=0" allowfullscreen></iframe>

![alt](http://59.110.165.66/static/upload/20180823/OmNyeqQNgXBocpZAKQIK.jpg)

这是完成布局的图片

** 常用商品区域布局： ** 

在`<el-col :span=17>`标签里增加一个层，然后在层内进行布局。因为里边的商品实际意义上是列表，所以用无序列表`<li>`来布局商品。贴出布局的`html`代码。

```
<div class="often-goods">
    <div class="title">常用商品</div>
    <div class="often-goods-list">
 
        <ul>
            <li>
                <span>香辣鸡腿堡</span>
                <span class="o-price">￥15元</span>
            </li>
 
        </ul>
    </div>
</div>
```
有了基本html结构后，需要增加一些css样式来美化页面：

```
 .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
   .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
  .o-price{
      color:#58B7FF; 
   }
```
现在页面变的漂亮了，我们这时候为了页面更逼近真实效果，我们在Vue的构造器里临时加一个数组，用作常用商品使用。声明的变量叫oftenGoods（真实项目不能这样起名字，这里只是练习使用）。

```
oftenGoods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ]
```
有了数据，可以使用v-for循环来输出到html模板中。

** 商品分类布局： **

这样我们商品的上半部分就布局完成了，现在需要布局下半部分，我们在下半部分先添加一个tabs的标签样式。

```
<div class="goods-type">
 
    <el-tabs>
        <el-tab-pane label="汉堡">
            汉堡
        </el-tab-pane>
            <el-tab-pane label="小食">
            小食
        </el-tab-pane>
        <el-tab-pane label="饮料">
            饮料
        </el-tab-pane>
        <el-tab-pane label="套餐">
            套餐
        </el-tab-pane>
 
    </el-tabs>
</div>
```
有上节课作tabs标签页的经验，这个变的异常简单。

制作商品的无序列表：

```
<ul class='cookList'>
    <li>
        <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
        <span class="foodName">香辣鸡腿堡</span>
        <span class="foodPrice">￥20.00元</span>
    </li>
</ul>
```
对无序列表进行CSS样式编写：

```
.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
```
有了基本的样式，我们可以在Vue的构造器里添加汉堡类的数据。声明一个type0Goods的数据，数据格式如下。

```
type0Goods:[
          {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ],
```

用`v-for改造我们的无序列表：

```
<li v-for="goods in type0Goods">
    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
    <span class="foodName">{{goods.goodsName}}</span>
    <span class="foodPrice">￥{{goods.price}}元</span>
</li>
```
页面的基本布局我们已经制作完成，终于看起来像个收银界面了。但是现在的数据都是写死的，下节课我们将从后端用Axios拉去数据。

## 第8节：Axios从远程读取数据

上节课我们利用Elemnt已经把页面布局的差不多了，如果你觉的不够美观，可以自己再进行美化，因为课程的原因css细节我们这里就不深入美化了。这节课我们开始学习Axios的知识，并把商品数据从远端读取到页面上。学这节课时技术胖已经为大家准备好了后端数据，你们只要调用相应的页面就可以调取，在实际开发中，这些后台数据是需要后端程序员和你共同讨论制作的。我们现在只做前端，数据大家只要会调用即可。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=u05110ff4xw&tiny=0&auto=0" allowfullscreen></iframe>

**安装Axios**

我们直接使用npm install来进行安装。
```	
npm n install axios --save
```
由于axios是需要打包到生产环境中的，所以我们使用–save来进行安装。

**引入Axios **

我们在Pos.vue页面引入Axios，由于使用了npm来进行安装，所以这里不需要填写路径。

```
import axios from 'axios'
```

**服务端拉取常用商品数据**

远端服务器地址：https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods

（在实际项目中这个后台接口地址是后端程序员提供给你的，你可以随便调用这个接口，我已经放到服务器上了。）

可以先把地址放到地址栏访问一下，是可以正常访问的，并且输出了json格式的字符串，这就是我们需要的远端数据了。这里我们使用Axios的get 方式来获得数据。

```
created(){
      axios.get('http://old.jspag.com/DemoApi/oftenGoods.php')
      .then(response=>{
         console.log(response);
         this.oftenGoods=response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  },
```
把axios的方法写到了created钩子函数中，我们使用了get 方法进行拉取数据，如果拉取成功用远端数据对oftenGoods进行赋值。

**拉取报错，一般有两种情况：**

1. 网络不通：网络状况不是很好，这可以在失败后隔5秒再次请求。
2. 报决绝访问：这种多是后端程序员设置了不允许跨域访问，需要你和后端程序员一起调试解决。

**拉取分类商品数据：**

远端服务器地址：https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods

依然用Get进行拉取，拉取后先用consoe.log(response)查看一下数据结构，让后进行赋值。由于知识跟上边的很像，文字版我就不多描述了，详细可以查看视频教程。

在这里贴出拉取和分配不同分类代码：

```
       //读取分类商品列表
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(response=>{
         console.log(response);
         //this.oftenGoods=response.data;
         this.type0Goods=response.data[0];
         this.type1Goods=response.data[1];
         this.type2Goods=response.data[2];
         this.type3Goods=response.data[3];
 
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
```
html模板输出代码：

```
<ul class='cookList'>
     <li v-for="goods in type3Goods">
         <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
         <span class="foodName">{{goods.goodsName}}</span>
         <span class="foodPrice">￥{{goods.price}}元</span>
      </li>
</ul>
```

在实际开发中类别也是循环出来的，这里为了教学演示，没有写的那么复杂，你只要明白了如何操作，以后你可以自己增加。就像我这个项目一样，在视频结束后，会慢慢写完善所有功能，最后送给女神，赢得女神芳心。

下节课我们学习订单操作里需要的功能，比如点击商品，添加到左边的订单栏里，增加，删除商品，模拟订单提交到后台。如果下节课一节讲不完，我们就分成两节课来讲。

## 第9节：订单模块制作 核心功能-1

经过上节课的学习，我们已经可以从后台取得数据了。这节课要完成的任务是实现页面左侧的订单列表页面的添加操作。本来我想一节课讲完的，但是内容还是比较多的，又不想让大家每节课学习很长时间，所以我把这个内容进行了划分。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=h0512he74qk&tiny=0&auto=0" allowfullscreen></iframe>

**添加商品到订单页面**

我们在vue的构造器里加入methods方法，在methods方法里再加入addOrderList方法。这个方法的作用是点击右侧的商品，然后把商品添加到左边的列表里。

addOrderList方法(也许你只看文字版无法理解，推荐查看视频)：

```
methods:{
      //添加订单列表的方法
      addOrderList(goods){
            this.totalCount=0; //汇总数量清0
            this.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);
 
            }
 
            //进行数量和价格的汇总计算
            this.tableData.forEach((element) => {
                this.totalCount+=element.count;
                this.totalMoney=this.totalMoney+(element.price*element.count);   
            });
           
      }
  }
```

在作这个方法的时候，在订单列表的下方又添加了订单的统计功能，其实也就两项：订单价格汇总和订单商品数量汇总。我们在data里声明的值是totalMoney和totalCount。

写完这个方法后，我们还需要在我们的商品上绑定方法，来进行调用添加方法。

```
@click="addOrderList(goods)"
```
这样在点击商品时订单列表就会根据我们的程序逻辑发生变化。

**订单列表中的增加按钮**

商品中绑定addOrderList方法是非常容易的，如果在订单列表中绑定是需要特殊处理一下的，需要用到template的scope值，让后进行绑定。

```
<el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
```
这节课我们把订单增加的操作制作完成了，下节课我们要制作订单商品的删除和订单的整体删除功能，最后模拟一下订单的结账功能。

## 第10节：订单模块制作 核心功能-2

继续制作订单模块，这节课主要三个功能的制作，删除列表中的单个商品，删除列表中的全部商品，简单模拟结账。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=f0513e6q0b8&tiny=0&auto=0" allowfullscreen></iframe>

**删除单个商品 **

在veu构造器methods属性里增加一个delSingleGoods方法，并接收goods对象为参数，用数组的filter可以轻松删除数组中单个的商品。

```
//删除单个商品
      delSingleGoods(goods){
        console.log(goods);
        this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
 
      },
```

现在可以npm run dev试一下了，会发现现在商品可以正确的删除了，但是统计的数量和金额是不正确的，我们需要写一些统计的代码。在下手之前你会发现在增加商品方法中也有类似统计的方法，既然两个功能很像，我们就重新写一个方法。

```

//汇总数量和金额
getAllMoney(){
    this.totalCount=0;
    this.totalMoney=0;
    if(this.tableData){
            this.tableData.forEach((element) => {
        this.totalCount+=element.count;
        this.totalMoney=this.totalMoney+(element.price*element.count);   
    });
    }
    
}
```
需要注意的是，以前我们是单独使用的，所以不用把`totoalCount`和`totalMoney`清零，但是做成公用方法了，记得清零。方法做好了，我们在需要的地方直接用`this.getAllMoney()`引用就可以了。

功能做好了，我们还需要为删除按钮绑定事件：

```
<el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
```

这样我们就把删除单个订单商品的功能做好了，我们可以测试调试一下。

** 删除全部订单商品 **

这个功能其实很简单，只要把this.tableData清空就可以了，在methods属性中写一个delAllGoods的方法。

```
//删除所有商品
delAllGoods() {
  this.tableData = [];
  this.totalCount = 0;
   this.totalMoney = 0;
},
```
有的小伙伴会好奇，你完全可以再次复用getAllMoney()方法进行汇总，为什么不用那？汇总方法里毕竟是有业务逻辑的，我们只做两个清零，这样消耗的资源更少，所以我们没有使用。

** 模拟结账 ** 
因为模拟结账需要Post数据到后台，我的服务器又不能提供这样的借口给大家，所以我只说制作思路，大家可以在自己的服务器上去实现。
1. 设置我们Aixos的Pos方法。
2. 接受返回值进行处理。
3. 如果成功，清空现有构造器里的tableData，totalMoney，totalCount数据。
4. 进行用户的友好提示。

由于前两个步骤不能演示，所以这里我们只模拟3和4步。在methods里作一个结账方法，清空数据和进行友好提示。

```
checkout() {
    if (this.totalCount!=0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
            message: '结账成功，感谢你又为店里出了一份力!',
            type: 'success'
        });
 
    }else{
        this.$message.error('不能空结。老板了解你急切的心情！');
    }
 
}
```

订单模块基本的功能就制作完成了，我希望大家都能动手练习一下，如果你不动手练习你永远学不会的。

## 第11节：项目打包和上线

一直追看的小伙伴可能知道原来还有一节挂单功能的制作，但是在录制的过程中我发现90%的知识点都是重复的，不重复的知识点讲的还和Vue没有关系，是html5的localStorage操作，所以我去掉了这节。这节我们主要讲一下打包需要注意的事项和总结一下我们学习的知识。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=v0513sgyp0m&tiny=0&auto=0" allowfullscreen></iframe>

**打包注意事项：**

1、把绝对路径改为相对路径 

我们打开config/index.js 会看到一个build属性，这里就我们打包的基本配置了。你在这里可以修改打包的目录，打包的文件名。最重要的是一定要把绝对目录改为相对目录。

```
assetsPublicPath:'./'
```

这样才能保证我们打包出去的项目可以正常预览。

2、在命令行中用npm run build  进行打包。

```
	
npm n run build
```

**总结：**

我们通过这篇文章和视频学到了Vue2.0在实际项目开发中用到的知识点，有vue-router，Element，Axios，iconFont，如何利用数据来修改Dom。希望这篇文章可以对你有所帮助，（码了16000多字，陆陆续续写了20天）如果这篇文章对您有帮助，请到文章右方或者下方进行打赏。













