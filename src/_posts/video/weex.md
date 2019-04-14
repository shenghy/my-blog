---
category: 视频教程
tags:
  - Vue
date: 2017-07-12
title: WEEX免费视频教程-从入门到放肆 (共17集)
vssue-title: weex
---

## 第01节：课程介绍
WEEX是什么？

WEEX的出现让我们可以使用Vue来进行移动端原生应用开发，是前端小伙伴们必备技能。


与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用 HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。但实际上，应用的底层是 Objective-C 或 Java， 同时，Weex 提供很多 native 组件或模块供开发人员使用。也就是说，你会前端知识，想作真正的app，那你学习WEEX就对了。
<!-- more -->
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=h0526yke324&tiny=0&auto=0" allowfullscreen></iframe>

**那些公司在用**

阿里系的公司基本都在用，包括天猫、淘宝、钉钉（具体可以看下边的图片）。现在尤大神担当的WEEX的顾问。所以说我们有必要系统的学习一下WEEX。虽然WEEX已经捐赠给了Apache公司，但是阿里的人员一直做着贡献。有人说React Native要比WEEX的组件多百倍，我不否认，毕竟WEEX才刚刚开始，就像VUE刚刚开始一样，很多人鄙视瞧不起，但是现在也被接受，并开始大规模使用一样。



**需要的前置知识：**

1. Vue的基础知识，这也算一个最高的门槛了，但是幸运的是在这里你都可以免费学到。
2. 会安装Node和使用NPM进行包管理。
3. 会基本的CSS和JavaScript的知识。

**学前先知：**

- 这门课程的坑是比较多，难度要比其他课程要大，所以做好思想准备。
- 如果你有Vue的基础，上手会简单一些。
- 这不再是网页，而是原生应用，所以有很多和网页不一样的地方，你需要适应。

**课程难点：**

- 国内的网络会给你带来很多麻烦，所以你需要一些科学上网的本领。
- 环境的搭建，环境搭建你可以能需要8小时-2天时间，不要放弃，多尝试。
- 适应原声开发的一些规范，如果你已经是个前端开发高手，你需要多一些适应。

**PS：**看WEEX的文档坑会比较多，所以建议你学完视频再去看文档进行填坑操作。如果你有坑过不去了，也可以参与到我们的众筹活动中来，技术胖会在群里进行解答。

## 第02节：开发环境安装(1)

开发环境的搭建是这门课程的重点和难点，因为国内网络环境的原因，你可能会安装好几遍才能安装成功，也会由于错误，你可能要重新安装系统，但是请不要放弃，因为只要踏过这道坎我们讲师一马平川，顺风顺水。我在完全熟悉的安装下也安装了8个小时左右，所以你最好是一边工作以边安装，或者拿出一个周六，看着电影安装着，这样会消除一些你的不安情绪。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=k0532m0aboy&tiny=0&auto=0" allowfullscreen></iframe>

首先是系统建议，如果你用windows系统，我建议你升级到win10，因为在win7下安装由于权限的原因，你有可能会安装失败。经过几次尝试，发现win10安装还是比较顺利的。

**安装node：**

在系统安装好后，你需要先安装Node。这个过程和安装QQ的过程一样，所以没什么讲的。

下载地址：[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

请使用LTS版本，因为Node维护着两条发布流程：奇数版本每年10月份发布，偶数版本第二年4月份发布。当一个奇数版本发布后，最近的一个偶数版本会立即进入LTS维护计划，一直持续18个月，再之后会有12个月的延长维护期。当一个偶数版本发布时，奇数版本只有2个月的维护期，以后只能升级。

当然也不建议使用CURRENT版本，也就是我们说的最新版，虽然官方说是可以使用的，但是我个人还是比较保守的，我怕一些未发现的BUG，影响我们的安装，所以我们使用LTS，长期维护版本。

** 安装完成后查看版本：** 

node安装完成后我们最好在命令行工具中检测一下版本。

node检测

```
node -v
```
npm检测

```
npm -v
```

**安装Java的环境**

因为我们最终开发的是android原生程序，所以需要安装java的环境。因为国内网络环境的问题，这个安装可能会很慢。

下载地址：[http://www.java.com/zh_CN/](http://www.java.com/zh_CN/)

这个现在的文件很小，这并不是完整的离线安装包，它的作用是检测你系统并给你提供正确下载包的一个小软件。所以它需要联网继续下载安装，如果你的网络不好，你会遇到你学WEEX的第一坑，这个坑需要科学上网，否则你会等到天荒地老。请大家有点耐心，当显示下图时说明你迈过了第一个坑。

![alt](http://59.110.165.66/static/upload/20180823/O_R6vBmU4I5gRI59LwCW.png)

如果你真的在这个坑无法跳出，你可以下载脱机文件，虽然也会很慢，但是会有个进度，你就会比较安心。（具体方法可以看视频教程….）

**git的安装**

windows带的命令行工具不是很友好，而且我们在学习WEEX时会用到Git的命令，所以这里需要安装一下Git。这个对于已经工作的小伙伴一定再熟悉不过了，每天都要进行使用。

Git的下载地址：https://git-scm.com

这个大概有37M大小，下载还算顺利，然后一路下一步，下一步就可以安装成功。桌面出现Git Bash图标，说明安装成功。

**安装weex-toolkit**

安装weex-toolkit需要使用npm进行安装。

```
npm install weex-toolkit -g
```
**坑填：**在安装weex-toolkit的时候，尽量不要使用cnpm，因为我有过两次使用cnpm安装失败的经历，还有一次再次用npm安装也不行，最后没办法重新作系统。需要提醒的是这个包的安装也是比较耗时的。安装完成后会报几个WARN，这先不用管。安装完成后，你可以使用-v的命令检测是否安装成功，弹出版本号，说明安装成功了。

```
weex -v
```
**安装全局webpack**

使用npm安装webpack,如果你安装很慢，这个是可以使用cnpm来进行安装的。

```
npm install webpack -g
```
安装好后使用-v进行查看版本。

**安装android-studio：**

其实到上一步骤，已经可以使用了，但是没有原生开发的感觉。那为了这个Feel我们需要再安装android-studio。

在安装过程中，你需要记录一下SDK的安装位置，安装好后，我们要配置环境变量。

![alt](http://59.110.165.66/static/upload/20180823/5cRVIfGFyUkt0MNtSqPw.png)

**填坑：**安装时你最好关闭杀毒软件或者360卫士这样的软件，因为他会组织android-studio一些关键位置的写入，导致安装后出现未知错误。

**配置环境变量：**

打开环境变量路径：控制面板->系统和安全->系统->高级系统设置->环境变量。

新建：ANDROID_HOME 并把我们刚才赋值的sdk路径作为值插入。

添加platform-tools和tools到path下（这个看视频吧，每个人的路径不一样，结果也不一样）。

**AndroidStudio配置：**

在AndroidStudio的欢迎界面，你需要点击右下方的Configure进行老版本的SDK tool配置，

步骤：Configure->SDKManager->SDK Tools->勾选show Package Details ->勾选23.0.2

然后进入安装。

总结：这节课虽然不难，但是比较耗时。大家一定要熬过这个过程，剩下就没这么耗时了。

## 第03节：开发环境安装(2)

通过上节课艰难的安装，凭着自己的耐心和毅力已经顺利安装完了。那我们这节课继续进行开发环境的搭建，但是这节课不会像上节课坑那么多。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=z0533b9zysr&tiny=0&auto=0" allowfullscreen></iframe>

**建立weex项目目录**

上节课我们安装了`weex-toolkit`，这个安装成功了，我们就可以在命令行使用weex命令了，我们先来看一下版本的查询。

```
weex -v
```
有了这个就可以生成我们的项目目录了，类似于`vue-cli`。创建命令如下：
```
weex create helloWeex
```
输入完这条命令时，如果你没有安装weexpack，他会提醒你进行安装，这个`weexpack`也可以自己单独安装。
```
npm install weexpack -g
```
如果你没有安装weexpack这个过程会慢一点，请耐心等待。等出现`Creating a new weex project`.说明项目构建完成了，我们可以到项目目录中去看一下。

你会发现已经给我建立了项目所需要的基本结构和文件，这时候我们就可以cd到项目目录下，然后使用`npm install`安装依赖包了。

```
npm install
```
如果你感觉慢的话，你也可以使用`cnpm install`  ，但是要说的是cnpm 有时候会安装错误，这也算一个小坑吧。如果你用npm进行安装时间会很长，并且在安装完成后会有一些WARN警告，你可以暂时忽略这些警告。

**添加Android应用支持**

我们建立好了项目的基本目录，这时候我们还要添加平台的支持，这里我们添加Android的支持。
```
weex platform add android
```
如果你要支持IOS平台的话，你还要添加IOS应用，但是抱歉的是我没有苹果电脑，所以这里就不演示苹果的添加了。这个安装过程并不算长，安装好后可以去项目根目录的platforms下看到android文件夹，说明应用支持添加成功。

**发布成Android应用 **

想在写完一段代码时进行预览效果，这时候就要使用run命令了。

```
weex run android
```

这里是有一个坑，在命令执行完，它会报一个错误，错误是找不到安装设备。No android devices found.如果你自学这个坑会够你添一会的了。那这里我们安装的android-studio就排上用途了。

** 在Android Studio里运行weex **

这里是坑的重灾区，希望大家专心迈坑。在上节课我们已经安装好了Android Studio，我们点击图标重新启动。这时候出现上节课的界面，选择第二项。

![alt](http://59.110.165.66/static/upload/20180823/RS84cpzYC7rrwNc7WzGX.png)

然后选择你用weex创建的项目下的platforms/android目录，打开项目。这时候坑就来了，会报好多错误，但是你不要惊慌，双击安装就好。

这个过程时间长短会根据你网络状况和机器配置有关，如果网络不好，可能要安装1-2个小时，所以耐心等待。等待loading条的消失，然后你就可以配置AVD了。（此过程最好收看视频，文字不太好表达。）

**AVD虚拟机的安装**

等待错误和loading条消失以后，就可以配置虚拟机了，选择菜单栏里的`Tools->Android->AVD Manager` 进行配置。

![alt](http://59.110.165.66/static/upload/20180823/MUI_BK29pTjwXN6aRKgK.png)

到达这个页面，然后点击`Create Virtual Device` 按钮创建视频。这时候要根据自己的电脑配置，选择屏幕的大小，这个虚拟机很吃内存，所以尽量选择小屏幕分辨率的。然后点击Next，之后进入虚拟机的安装过程，这个也是比较慢的，只要设计到google产品的都不会快。

安装好后点击三角按钮开始运行虚拟机，然后稍等一会，不用作任何操作就会出现weex程序的默认界面。看到下面的界面恭喜你，这节课你已经大功告成了。

![alt](http://59.110.165.66/static/upload/20180823/JFMzxWJcJm5oIRIejv99.png)

## 第04节：weex常用命令和热更新

我相信上节课由于Gradle访问慢的原因已经把小伙伴折腾的筋疲力尽了，其实到上节课位置，我们开发软件和项目的建设已经基本完成了。但是作为一个资深前端是要追求工匠精神的，那这节课我们就把我们的项目变的更好。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j0535xmlt58&tiny=0&auto=0" allowfullscreen></iframe>

作为一个前端没有预览热更新就会感觉很low，所以我们花点时间进行配置一下。但是在学习前，先了解一下weex中常用的npm命令。这些npm xxx的命令，其实都是在`package.json`里设置的。在代码第6行的位置，你可以看到如下的代码.

```
"scripts": {
        "build": "webpack",
        "build_plugin": "webpack --config ./tools/webpack.config.plugin.js --color",
        "dev": "weex-builder src dist -w",
        "serve": "webpack-dev-server --config webpack.dev.js -p --open"
    },
```

在代码中你会看到build、build_plugin、dev、serve这些属性，这些就是我们常用的npm 命令。

**npm run dev**

我们在开始项目编写时，第一个要在命令行输入的命令就是这个，这个命令输入后，会给我们进行实时的压缩混淆操作（也叫编译操作），生成dist目录下的`index.js`文件和`index.web.js`文件。
```
npm run dev
```

命令开启后，我们每次修改src下的文件会自动给我们编译。所以我们在开发时需要最先开启这个命令。
```
npm run server
```
虽然可以用Android Studio进行看效果，但是我们还是需要一个web端来支持我们开发预览的，这时候我们可以启用npm run server 来解决问题，他会给我们在浏览器中打开我们的vue页面（但是需要注意的是，你现在看到的并不是程序的最终样式和结果）。

凭借我们以前的开发经验，它应该是热更新预览的，但是你想多了，它并没有提供这个功能，甚至我们刷新也是没有任何效果的，必须再次在命令行中输入webpack才能预览到我们想要的结果。
```
npm  run build
```
在运行webpack时，发现npm run build 里的命令执行的就是webpack命令，那我们改造一下,我们在代码中加上–watch。

```
 "scripts": {
        "build": "webpack --watch",
        "build_plugin": "webpack --config ./tools/webpack.config.plugin.js --color",
        "dev": "weex-builder src dist -w",
        "serve": "webpack-dev-server --config webpack.dev.js -p --open"
    },
```

这时候你修改代码后，只要刷新浏览器就可以实现更新了，已经不用再次输入webpack命令了。

**自动热更新**

学到这步就可以实现自动热更新了，如果你了解`webpack`的话，一定知道webpack-`dev-server`模式，只要在地址栏上加上这个，就可以实现热更新了。如果你还不了解webpack可以先看看我以前的课程。

现在可以关掉`npm run dev` 这个窗口了，我们只通过`npm run build `和 `npm run serve`就可以实现开发热更新预览了。

## 第05节：Android Studio 开发设置

经过上节可的学习，已经学会了热更新预览，但是这个热更新并不是最终我们想看的结果，它只能满足我们开发时简单的预览，这时候需要android端最终效果的预览。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=h0535h9ru7n&tiny=0&auto=0" allowfullscreen></iframe>

android端预览

我们先打开我们的Android Studio，启动AVD。把我们在工程项目里的`dist/index.js`文件内容，复制到Android Studio下的`app/assets/dist/index.js`中。


保存后，点击工具栏上的⚡（闪电）符号进行更新。就可以预览到原生的真实效果了。

**如何修改图标**

现在你看到的app图标还是weex自带的图标，修改这个图片很简单。他存放在Android Studio 工程目录下的`app/res/mipmap/ic_launcher.png`文件夹中。可以根据这些图片的大小更换需要的图片。



**打包成Apk **

打包操作很简单，只要点击菜单栏中的Build/build Apk 就可以了。打包完成后在Android Studio右下角会有提示，并可以点击查看我们打包成功的Apk。打包好后，可以拷贝到andorid手机上进行安装了。

**用weex init 命令搭建开发环境**

我们之前都是使用weex create 来进行项目的创建，但是weex还听过init的创建方法，现在就学习一下。这个在开发时也是比较方便的，所以建议大家用这种方式进行开发，写代码。
```	
weex w init xxxx
```
输入完命令后，会提示你要起一个项目名称，可以随便起一个名字，我这里起名为weexWork。

安装好后，进入到项目目录，运行npm install  （这个过程有点慢）。install完成后，可以打开`package.json`查看有那些命令。

```
"scripts": {
    "build": "webpack",
    "dev": "webpack --watch",
    "serve": "node build/init.js && serve -p 8080",
    "debug": "weex-devtool"
  },
```
有了前几节课的经验，这里就不难理解了，只要运行`npm run server` 和 `npm  run dev `就可以了，然后打开`127.0.0.1:8080`进行预览。这时候会出现坑，我们用网页浏览会出现一个error错误:`http://127.0.0.1:8080/node_modules/weex-vue-render/index.js `  找不到这个js。这个原因的产生主要是weex版本升级造成的。

**解决方法：**

找到项目根目录下的：weex.html文件，找到15行左右的引入代码。

```
<script src="./node_modules/weex-vue-render/index.js"></script>
```
改为
```
<script src="./node_modules/weex-vue-render/dist/index.js"></script>
```
然后刷新页面，就可以看到我们的制作效果了。这个要比我们之前学习的预览真实一点，但是仍然不是原生效果，但我们开发时预览已经足够了。

![alt](http://59.110.165.66/static/upload/20180823/tQY830SfwQUnzkbJ2_l3.png)

这节课我们能跳出这个页面，并会利用Android Studio 进行打包就可以了。下节课开始我们进入到课程的第二部部分，正式开始学习如何使用weex里的组件，用Vue开发原生应用。

## 第06节：weex和vue的爱恨情仇

从这节开始学习weex中的组件，在学习之前，你先要对自己大声说三遍:”我现在开发的是原生App”。接触前端较长的成手，在学习weex时很难转变这个坑，比如我学的时候在布局上就很喜欢用浮动布局，但是weex不支持。所以大家一定先在脑海里转变思想。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j0535gcf7dr&tiny=0&auto=0" allowfullscreen></iframe>

这节就对照Vue，我们看看有哪些基本的不同。

** weex组件： **

weex组件是我们用Vue的语言和weex特定的语法编写，通过编译最后生产的是APP原生的组件。这和我们学习Vue的组件有些不同，Vue组件主要是要进行复用和封装的，而这里是为了编译生产原生组件。

**PS：**讲组件时，我并不会面面俱到的讲，因为大家都是有一定的html基础和CSS基础，我只讲差异和重点。视频可以保证你们会用，至于开发时你们需要可以具体查API。

**启动上节的项目**

上节课我们用`weex init` 进行了构建weex项目，那每次启动项目你都需要输入2条命令，才能进行开发。

1. `npm run serve`:打开服务
2. `npm run dev`:进行打包

之后我们在浏览器中输入`http://127.0.0.1:8080`就可以了。

**布局的不同**
**flex布局：**

在html或者Vue中我们可以使用浮动布局，但是weex并不支持，所以请不要使用。weex提倡使用Flex进行布局。如果你对Flex布局还不熟悉的话，那可能这里需要几个小时自学一下。

** 不支持百分数：** 

html中布局，经常使用百分比进行布局，这种布局可以适应不同屏幕，但是你用weex布局时百分比是不支持的。有的小伙伴肯定会不信这个邪，非要试一下，结果发现还真的好使，但是这只是假象。你放到虚拟机中进行测试就明白了。（具体效果请看视频中，如果使用百分比在模拟器中会乱掉）

** border设置请分开写 **

在html中我们写边框样式，经常使用`border:1px solid #ccc`;这样的形式，但是weex同样不支持，它要求你必须分开写，并且和`html`中不同。

有了这个经验，在开发中写CSS，尽量分开写，不要合并起来写。

**长度单位只支持px **

是不是觉的这个有点奇葩，其实如果你了解原生应用的dpi单位，那这里的px是和dpi单位相对应的。所以你也不用纠结。使用就可以了，需要注意的是请不要再使用我们的rem,em,pt进行布局了。
如果你想了解一下dpi的知识，我推荐一篇文章：`http://blog.csdn.net/yuzhouxiang/article/details/7283931`

如果你还不了解，最好看一下。**PS：**这里要说明一下，这里的ps单位和我们html中的ps不一样，他也相当于`rem`的，它会根据屏幕的不同展现出良好的兼容适应性。所以你不用担心，屏幕不同带给我们的困扰。

## 第07节：自定义组件和Text组件

这节课我们来讲一下自定义组件和Text组件，如果学过Vue，自定义组件和Vue的自定义组件几乎一样。但是有些细节还是不一样的。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=b0538aqqzbk&tiny=0&auto=0" allowfullscreen></iframe>

**自定义组件**

先写一个自定义组件，然后再看有什么不同。我们定义一个app头部的组件，主要看一下结构特点。

```
<template>
  <div class="topheader">
      <text class="top_text"> 技术胖</text>
  </div>
</template>
 
<script>
export default {
  
}
</script>
 
 
<style scoped>
    .topheader{
        background-color:red;
        padding:10px;
    }
    .top_text{
        color:#fff;
        text-align: center;
        font-size:50px;
    }
</style>
```

**注意点一：**

模版里（`template`）最外层标签只能用`<div>`标签来表示，其他标签都会报错，这是weex里的一个小坑，需要你注意。

**注意点二：**

在写Css样式时，必须使用类名或者ID进行设置，其他选择器不起作用。这个坑也比较深，我研究了很久。

引入方式和Vue的引入方式完全一样，我在这里就不码字重复了(具体方法视频中有体现)。

**Text组件**

text组件是weex内置的组件，他是用来放至文本的容器。在weex中使用文本，必须用text组件，而不是原来我们直接放到任意标签中就可以的。

**1.超出显示省略号**

`text`组件提供一个`lines`的样式，直接把这个样式写在css里就可以生效了，并且带了省略号。这里的坑就是不要写在标签的属性上，而是要写在样式里。

```
<template>
  <div class="topheader">
      <text class="top_text"> 技术胖技术胖技术胖技术胖技术胖技术胖技术胖技术胖技术胖技术胖技术胖技术胖</text>
  </div>
</template>
 
<script>
export default {
  
}
</script>
 
 
<style scoped>
    .topheader{
        background-color:red;
        padding:10px;
    }
    .top_text{
        color:#fff;
        text-align: center;
        font-size:50px;
        lines:1;
    }
</style>
```

** 2.css属性有那些 **

这个可以直接去官方网站查看文档，这些都很简单，我就不在这里讲解了。有什么可以在群里或文章下方提问。

[http://weex.apache.org/cn/references/components/text.html](http://weex.apache.org/cn/references/components/text.html)

总结：这几节课程都会学习组件，难度并不大，但是你一定要动手敲一下代码，这样才能学会，听一遍什么都学不会。其实我这个人是比较笨的，所以我以写博客的方式驱动学习。这样同样一个知识点，我最少要重复3遍以上，学习一遍，备课一遍，讲课一遍，三遍以后我会对这个知识记得比较牢固。

## 第08节：Input组件和初识内建模块

无论是什么开发，文本框的操作都是有必须的。这节课我们就先来看看weex中的Input组件。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=u0538wanhyr&tiny=0&auto=0" allowfullscreen></iframe>

**Input组件**

Weex内置的`<input>`组件用来创建接收用户输入字符组件。input和我们html中的input很像，也是通过type来控制input的类型的。下面我们试着写一个input组件来看一下，也说一下里边的坑。

```
<template>
  <div >
    <topheader></topheader>
     <div><input class="testInput" type="text" placeholder="瞎输入点什么"  /></div>
      <text class="title">Hello2 {{target}}</text>
  </div>
</template>
 
<style>
  
  .title { font-size: 48px;  }
  .testInput{
    height:80px; 
    padding:10px;
    font-size:32px; 
    width:750px;
    border-bottom-width:1px;
    }
</style>
 
<script>
  import topheader from './topheader.vue';
  export default {
    data: {
      target: 'World'
    },
    components:{topheader},
    methods: {}
  }
</script>
```

**注意点一：**

我们在weex中`<input>`标签必须写成闭合形式,例如`<input/>`。如果不闭合在手机或者模拟器中是渲染不出来的，会一直显示加载。

**注意点二：**

在开发中你使用网页预览时，由于是模拟的客户端，所以会出现很多奇怪的错误，建议在网页端预览后到虚拟机进行预览。

在网页端预览时是不能进入输入框的，但是不要紧，在浏览器中就可以识别了。
输入过长时，会出现布局错乱，这也是假象，不要在意。

**内建模块**

内建组件很好理解，就是weex给我们写好的组件，除了组件，weex还提有个内建模块的概念。内建模是一些不能用标签来表达的其他移动端特有的功能，这节课我们只作初步了解，只学个最简单的Toast。

要使用内建模块，必须先要引入。
```
var modal = weex.requireModule('modal');
```
这里引入了modal模块，它的主要作用是一些提示。这里我们在页面初始化时，进行一个提示，然后3秒后消失。
```
import topheader from './topheader.vue';
  var modal = weex.requireModule('modal')
  export default {
    data: {
      target: 'World'
    },
    created(){
      console.log('will show toast')
        modal.toast({
          message: '初始化成功。',
          duration:5
        })
    },
    components:{topheader},
    methods: {}
  }
```
这是调用的原生方法，这节课我们只是简单接触一下，要明白的是必须用`weex.requireModule(‘xxx’)`。

## 第09节：Image和video组件

weex内置的组件中只有image组件是可以操作图像的，div组件和text组件都不支持背景图片。video组件可以播放视频和音频，让我们的应用更加丰富。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=s0538oiq8z7&tiny=0&auto=0" allowfullscreen></iframe>

**Image组件：**

先来做一个最简单的图片应用，我们在代码中插入一个图片，这里的图片采用了图床的方式，如果你的图片的动态加载的，我也建议你使用图床的方式进行。

**先来看一下标签的写法：**

```
<image class="testImage" src="http://7xjyw1.com1.z0.glb.clouddn.com/20170412101827.png"></image>
```
这里需要注意的是，这是一个双标签组件，但是在两个`<image>` 中间不能放入其它任何东西。还需要注意的是你必须和html中的`<img>`标签区分，对比学习其实也是不错的学习方式。

还需要注意的是必须给`<image>`组件设置样式宽高，否则无法显示。

```
.testImage{
    width:400px;
    height:300px;
  }
```
**resize属性**

resize属性是控制图片的拉伸方式的，它有三种拉伸方式。

1. stretch：默认值，指定图片按照容器拉伸，有可能使图片产生形变。
2. cover：指定图片可以被调整到容器，以使图片完全覆盖背景区域，图片有可能被剪裁。
3. contain：指定可以不用考虑容器的大小，把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。

详细效果可以在视频中进行查看。

**布局兼容性：**

有的小伙伴还是不太明白这个以像素为单位的狂傲如何兼容.如果你会flex布局的话，weex的兼容是没有任何问题的，但是对px这个单位如何控制的更好那，其实它和百分比是可以换算的。

宽：720px=100%         高：1250px =100%

知道了这个公式，是不是布局起来就非常方便了那。现在我们可以把图片进行一个全屏显示了。

** video组件 **

有了图像，我们肯定会想了解视频，weex也提供了video组件解决原生视频的问题。但是这种解决方案在实际开发中并不好，工作中还是需要其他一些技术来完成视频的播放，但是一个简单的展示页，用video组件是足够的。

```
<template>
  <div>
    <video class="video" :src="src" autoplay controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
    <text class="info">state: {{state}}</text>
  </div>
</template>
<style scoped>
  .video {
    width: 630px;
    height: 350px;
    margin-top: 60px;
    margin-left: 60px;
  }
  .info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }
</style>
<script>
  export default {
    data () {
      return {
        state: '----',
        src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
      }
    },
    methods:{
      onstart (event) {
        this.state = 'onstart'
      },
      onpause (event) {
        this.state = 'onpause'
      },
      onfinish (event) {
        this.state = 'onfinish'
      },
      onfail (event) {
        this.state = 'onfinish'
      }
    }
  }
</script>
```
需要注意的是，我们在预览时查看的是HTML5的播放器，而在App中调用的是原生的播放器。

## 第10节：一起作个列表出来

weex的组件我们已经学了几节课，这节课一起整理和学习制作一个可以上拉加载下拉刷新的列表组件出来。这节课的视频可能会长一些，大家可以准备好水，先上个厕所，然后开始学习。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=a0541klmfa9&tiny=0&auto=0" allowfullscreen></iframe>

**`<list>`内置组件**

说到列表，我们第一个想到的单词就是`list`，`weex`也很体贴的使用了list关键词作为列表组件。我们先来作一个列子。只是一个最简单的列表。

```
<template>
  <div>
    <list>
      <cell v-for="rum in lists">
         <div class="panel">
           <text class="text">{{rum}}</text>
         </div>
      </cell>
    </list>
  </div>
</template>
<style scoped>
  .panel{
    width:600px;
    height:250px;
    margin-left:75px;
    margin-top:35px;
    margin-bottom:35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color:rgb(162,217,192);
    background-color:rgba(162, 217, 192, 0.2)
  }
  .text{
    font-size:50px;
    text-align: center;
    color:#41B883;
  }
</style>
<script>
  export default {
    data () {
      return {
        lists:[1,2,3,4,5]
      }
    },
    methods:{
     
    }
  }
</script>
```
我们在`script`的data里加入了lists数组，并用循环的方式展现了数组，这里你会发现两个并不熟悉的标签`<list>`和`<cell>`。

- `<list>`就相当于我们在html中的`<ul>`标签。
- `<cell>`就相当于我们在html中的`<li>`标签。

需要注意的是并不需要给`<list>`和`<cell>`增加额外的css样式，而是把样式都写在`<div>`中，还有就是在网页中预览的时候会出现一些样式错误，但是你在模拟器中预览就比较好。

** 上拉加载**
 
在移动端中上拉加载是经常使用的一个功能，weex中要实现这个功能需要使用一个`loadmore`属性，从英文单词中可以看出，就是加载更多的意思。我们在`<list>`中加入`loadmore`属性，并绑定一个`fetch`方法。

```
<template>
  <div>
    <list @loadmore="fetch" loadmoreoffset="10">
      <cell v-for="rum in lists">
         <div class="panel">
           <text class="text">{{rum}}</text>
         </div>
      </cell>
    </list>
  </div>
</template>
```
然后在script中的methods中加入fetch方法。

```
const modal=weex.requireModule('modal')
  export default {
    data () {
      return {
        lists:[1,2,3,4,5]
      }
    },
    methods:{
      fetch(event){
        modal.toast({message:'loadmore',duration:1});
        setTimeout(()=>{
          const length = this.lists.length;
          for(let i=length;i<length+4;i++){
            this.lists.push(i+1);
          }
        },800);
      }
    }
  }
```

有经验的小伙伴已经发现，这里只是一个简单的模仿，在实际开发中我们会用stream模块从后台取得数据。虽然已经实现了这个功能，但weex还提供了另一种下拉加载的组件`<loading>`。

** `<loading>`组件**
要使用`<loading>`组件你需要先去`<list>`组件上的`loadmore`和`loadmoreoffset`属性，并在代码中加入`<loading>`组件。看下面代码的写法：

加入`<loading>`组件的模版写法。

```
<template>
  <div>
      <list>
        <cell v-for="rum in lists">
          <div class="panel">
            <text class="text">{{rum}}</text>
          </div>
        </cell>
        <loading class="loading" @loading="onloading" :display="showLoading">
          <text class="indicator">Loading...</text>
        </loading>
      </list>
  </div>
</template>
```
在代码中可以看到，绑定了onloading方法，这时候我们在methods中再写一个onloading方法就可以了。
```
onloading(event) {
    modal.toast({ message: 'loading', duration: 1 });
    this.showLoading = 'show';
      setTimeout(() => {
        const length = this.lists.length;
        for (let i = length; i < length + 4; i++) {
          this.lists.push(i + 1);
        }
        this.showLoading = 'hide';
 
      }, 1500)
｝
```
现在更像在实际开发中遇到的加载效果了，接下来作上拉刷新效果。

**`<refresh>`组件**

实际开发中还需要刷新页面，weex在列表中也为我们想好了，提供了 `<refresh>`组件，它的作用就是在上拉时进行刷新页面。

我们现在模板中加入`<refresh>`标签。
```
<refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing">
        <text class="indicator">Refreshing ...</text>
</refresh>
```
可以看到`refresh`和我们`loading`组件很像，接着我们要两个方法供组件调用。

```
onrefresh (event) {
        modal.toast({ message: 'refresh', duration: 1 })
        this.refreshing = 'show'
        setTimeout(() => {
          this.lists=[1,2,3,4,5];
          this.refreshing = 'hide'
        }, 2000)
      },
 onpullingdown (event) {
        modal.toast({ message: 'pulling down', duration: 1 })
      }
```
- `refresh`:下拉刷新时触发，
- `pullingdown`：精准下拉，可以获得下拉高度，前后两次滑动距离等详细参数。

总结：这节课我们学的内容比较多，而且在实际开发中经常使用，所以这节课一定要熟练掌握，能多敲几遍代码就多敲几遍。

## 第11节：从后端服务器上获取数据

上节课学习了列表，小伙伴就开始在群里问我，如何从远端服务器上获取数据，并显示了。其实这涉及到了内置模块stream。这节课我们就专门学一下stream的知识。，它的作用就是从服务器端获得数据，类似我们使用的`ajax`或者`axios`。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=f0541pc4ohy&tiny=0&auto=0" allowfullscreen></iframe>

**stream的引入**

要想使用stream，必须使用weex来进行引入。

```
const stream = weex.requireModule('stream');
```
引入成功后，就可以使用了。

** 案例操作 **

我在我的博客服务器上放置了一串数据，并且是支持远程调用的。

数据地址：`http://www.jspang.com/DemoApi/newsApi.php`

你直接使用这个地址就可以作案例了。

这里我们直接上代码了。具体的内容在视频中进行讲解。

```
<template>
  <div>
    <list>
      <cell v-for="news in lists">
        <div class="panel">
          <text class="text">{{news.newsTitle}}</text>
          <text class="content">{{news.newsContent}}</text>
        </div>
      </cell>
      
    </list>
  </div>
</template>
<style scoped>
.panel {
  width: 650px;
  height: 250px;
  margin-left: 50px;
  margin-top: 35px;
  margin-bottom: 35px;
  flex-direction: column;
  padding-top:15px;
   padding-left:10px;
  padding-right:10px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2)
 
}
 
.text {
  font-size: 36px;
  text-align: center;
  color: #41B883;
}
 
 
.content{
  lines:3;
  font-size: 28px;
}
</style>
<script>
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream');
export default {
  data() {
    return {
      lists: [],
     
    }
  },
  created(){
    let url='http://www.jspang.com/DemoApi/newsApi.php';
    this.getNews(url,res=>{
      modal.toast({message:'请求成功',duration:1});
      this.lists=res.data;
      console.log(res.data);
    });
  },
  methods: {
    getNews(url,callback){
      return stream.fetch({
        method:'GET',
        type:'json',
        url:url
      },callback);
    }
  }
}
</script>
```

最后的实现结果如下：



这节课的内容不用多说了，虽然简单，但是练习和扩展是必须的。毕竟工作中天天都会用到。

## 第12节：作轮播图片效果

现在已经逐渐熟悉了Weex的编程方式，也了解它的基本特性。今天继续学习weex的内置组件`<slider>`。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=h05414csdn1&tiny=0&auto=0" allowfullscreen></iframe>

`<slider>`组件说明
`<slider>`组件是用于在一个页面展示多个图片时使用的，在前端我们把这种效果叫做轮播图。

先来看一个最简单的写法：

```
<template>
  <div>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
  </div>
</template>
<style scoped>
  .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
</style>
<script>
  export default {
    data () {
      return {
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    }
  }
</script>
```

现在可以实现图片的轮播了，但是和我们平时见的还不太一样，没有类似书签的效果。如果需要加这种书签的效果，可以使用`<slider>`组件的`<indicator>`组件。

**`<indicator>`组件**

`<indicator>`：组件用于显示轮播图指示器效果，必须充当 `<slider>` 组件的子组件使用。

它有三个新的CSS样式：

- `item-color {color}`：设置项的颜色，可以是颜色的名称，例如 red；也可以是 16 进制的颜色，例如 #RRGGBB。
- `item-selected-color {color}`：被选中时的颜色，可以是颜色的名称，red；也可以是 16 进制的颜色，例如 #RRGGBB。
- `item-size {number}`：指示器的大小。

明白了这几个元素，我们给现在的轮播图加上指示器。
```
<indicator class="indicator"></indicator>
```
CSS样式也加上：
```
.indicator {
    width: 700px;
    height: 700px;
    item-color: #ffffff;
    item-selected-color: blue;
    item-size: 20px;
    position: absolute;
    top: 200px;
    left: 0px;
  }
```

这里需要注意的是top，left都是以图的中心点算起的，所以设置便宜的时候要小心。还需要注意的是`<indicator>`是`<slider>`的子组件，所以层级关系要正确。

最终效果图：



## 第13节：a组件和web组件
其实这个组件的使用是比较简单的，但是里边也是有几个坑容易跌进去跳出不来的，所以单独拿出一节课讲一下。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j0541pht3wp&tiny=0&auto=0" allowfullscreen></iframe>

**`<a>`组件讲解**

使用`<a>`组件时需要和我们html中的`<a>`标签区分，`html`中的`<a>`标签是用来链接html页面的，而`weex`中的`<a>`组件是用来链接`weex`格式的`js`文件的。

什么是weex格式的`js`文件？就是我们平时`npm run build`后生成的`app.weex.js`文件一样。那我们先利用我们的text标签生成一个`app.weex.js`文件。现在把上节课作的轮播图效果的`app.weex.js`文件，另存到项目根目录下，起个名字叫`slider.js`。保存后要尝试这个文件是在地址栏里输入地址可以打开的。

然后回到`foo.vue`页面，写一个`<a>`组件的页面。这里注意的是`href`链接的是`js`文件。

```
<template>
  <div class="wrapper">
    <a class="button" href="http://192.168.1.8:8080/slider.js">
    <text class="text">跳转轮播图</text>
    </a>
  </div>
</template>
<style scoped>
 .wrapper{
   flex-direction:column;
   justify-content: center;
 }
 .button{
   width:450px;
   margin-top:30px;
   margin-left:150px;
   padding-top:20px;
   padding-bottom:20px;
   border-width:2px;
   border-style:2px;
   border-color:#DDDDDD;
   background-color: #F5F5F5;
 }
 .text{
   font-size:60px;
   color:#666666;
   text-align: center;
 }
</style>
<script>
  export default {
    data () {
      return {
       
      }
    }
  }
</script>
```

因为`script`里不需要什么代码，所以我们留空了。现在就可以在模拟器中预览了，这里有个小坑，你在电脑浏览器中浏览是出不来效果的，所以你必须到模拟器中进行预览。

**`<web>`组件**

使用`<web>`组件可以在`weex`中嵌入一张网页内容。你可以使用`webview module` 模块来控制web的前进、后台和重装。

**src属性：**此属性指定嵌入的web页面url。

需要注意的是这个组件你必须要设置width和height两个属性。如果不设置会显示0px,所以你看不到效果。

**三个钩子函数：**

- `pagestart`:`<web>`组件开始加载时此事件触发。
- `pagefinish`:`<web>`组件完成加载时此事件触发。
- `error`：如果`<web>`组件出现错误，会发送此事件消息。

我们`jspang.com`这个网站加载为例，作一个`<web>`组件的程序。

```
<template>
  <div class="wrapper">
    <web src="https://jspang.com" class="web" @pagestart="start" @pagefinish="finish"></web>
  </div>
</template>
<style scoped>
 .wrapper{
   flex-direction:column;
   justify-content: center;
 }
 .web{
   margin-left:75px;
   width:600px;
   height:750px;
   border-width:2px;
   border-style:solid;
   border-color:#41B883;
 }
 
</style>
<script>
  const modal = weex.requireModule('modal');
  export default {
    data () {
      return {
       
      }
    },
    methods:{
      start(){
        modal.toast({message:'pagestart'});
      },
      finish(){
        modal.toast({message:'pagefinish'});
      }
    }
  }
</script>
```
这个组件基本没什么坑，所以快速的给大家过一遍。在实际开发中，我们经常用这种形式来加入我们的SPA程序。如果需要原生的，我们再调用原生的。

## 第14节：通用事件和动画

在作前端的时候，事件我们并不陌生，什么`click`事件，什么`onChange`事件。但是在原生开发中有三个通用的事情和我们以前的web开发有所不同，今天就在这里学习一下。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=c0541m7m7pa&tiny=0&auto=0" allowfullscreen></iframe>

**通用事件：**

所谓的通用事件就是大部分组件都可以使用的事件和web开发一样的`click`事件就不作介绍了。我们对三个web中没有的事情作一下介绍。

- `longpress`(长按事件):如果一个组件被绑定了 `longpress` 事件，那么当用户长按这个组件时，该事件将会被触发。

- `Appear`（屏幕内事件）：如果一个位于某个可滚动区域内的组件被绑定了 `appear` 事件，那么当这个组件的状态变为在屏幕上可见时，该事件将被触发。

- `Disappear（屏幕外事件）:如果一个位于某个可滚动区域内的组件被绑定了 `disappear` 事件，那么当这个组件被滑出屏幕变为不可见状态时，该事件将被触发。

简单的讲解过后，从这篇文章开始，我们将更多的去关注官方文档，因为`weex`还是一个新生儿，在不断的变化。所以我讲的课程也许会很快就过时或者情况不一样了。所以从这节开始我也带着大家试着读一下文档。这里有一个例子，大家可以拷贝下来看一下，都很简单，我就不带着大家敲了。

**animation动画模块**

动画的运用会为我们的移动开发增光不少，weex为我们提供了`animation`组件。我们一边敲程序，一边讲解`animation`的用法。然后敲出来后，我再带着你看一遍官方文档。如果你对web 的`animation`动画比较了解，那学习起来就会比较容易。

```
<template>
  <div class="wrapper">
    <div ref="test" @click="move" class="box"></div>
  </div>
</template>
<style scoped>
 .box{
   width:250px;
   height:250px;
   background-color:#DDD;
 }
 
</style>
<script>
  const modal = weex.requireModule('modal');
  const animation =weex.requireModule('animation');
  export default {
    data () {
      return {
       
      }
    },
    methods:{
       move () {
        var testEl = this.$refs.test;
        animation.transition(testEl, {
          styles: {
            color: '#FF0000',
            transform: 'translate(250px, 100px)',
            transformOrigin: 'center center'
          },
          duration: 800, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          modal.toast({ message: 'animation finished.' })
        })
      }
     
    }
  }
</script>
```
模块的掌握是要有良好的js基础的，如果你学这个还感觉有些困难，那证明你需要加强`javascript`的基础了。

## 第15节：教会你自学weex

通过14节课的讲解，我相信大家一定都已经入门了。对于一个知识的学习，并不是一套视频可以让你成为真正的高手的，视频只能领你入门，特别是对于一个还不成熟的技术，变化相当快，所以有自己看文档和自学的能力非常重要。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=w05411m8v6q&tiny=0&auto=0" allowfullscreen></iframe>

这节课就教你如何查看文档，并自学几个常用的模块。（所以这节课视频很重要，文章的内容会很少。）

**自学通道**

官方文档：`weex.apache.org`

学习一个新技术的最重要途径就是看官方网站和文档，所以你必须要经常性的查看官方网站和文档。我们就用自学的方式看一下`picker`模块。

**picker模块：**

picker是`weex`调用原生的时间选项功能，感觉很重要，但是在实际开发中我们很少用，因为这个事件选项实在是太丑了，在这个看脸的时代，这种模块是没办法使用的，所以这只能算一个鸡肋模块。但是为了知识的完整性，我们还是简单的看一下。

**学习步骤：**

1. 复制实例代码，如果你时间充裕，可以对照着手敲，这样能更好的理解代码。
2. 根据API进行修改代码，尽量把所有API知识都用到。
3. 想一个跟知识有关的小例子，撸一下代码。这样才能遇到问题解决问题。

我们就用这个方法，开学习一下picker模块。

**clipboard模块**

这个模块主要操作的是剪贴板，如果你觉的剪贴板不好理解，你可以简单认为是控制复制和粘贴功能的。这个功能经常用在分享上，比如我们的腾讯视频就有这样的分享功能。那这个模块我再带着大家学习一下。

总结：这节课的内容是你以后学习的关键，我相信`weex`以后会有很好的发展，并快速更新。你学会这节课的方法后，剩下的内容都可以进行简单的自学。也给大家留个小作业，就是把剩下的模块自学一下，有什么问题可以在微信群里向我提问。

## 第16节：Navigator和webview模块

通过上节课的学习，你一定对自学有了一点认识。那这节课我们再继续讲解两个重要点的模块Navigator模块和webview模块。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=v0541wvlaw8&tiny=0&auto=0" allowfullscreen></iframe>

**Navigator模块**

这个就是原生系统上的前进和后退，里边的方法也很简单。只有两个方法。

- `push`:把一个`weex`页面URL压入导航堆栈中，可指定在页面跳转时是否需要动画，以及操作完成后需要执行的回调函数
- `pop`:把一个 `Weex` 页面 URL 弹出导航堆栈中，可指定在页面弹出时是否需要动画，以及操作完成后需要执行的回调函数。

作个例子演示一下。

```
<template>
  <div class="wrapper">
    <text class="button" @click="jump">Jump</text>
  </div>
</template>
<style scoped>
.wrapper {
  flex-direction: column;
  justify-content: center;
}
 
.button {
  font-size: 60px;
  width: 450px;
  text-align: center;
  margin-top: 30px;
  margin-left: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-style: solid;
  color: #666666;
  border-color: #DDDDDD;
  background-color: #F5F5F5
}
</style>
<script>
const modal = weex.requireModule('modal');
const navigator = weex.requireModule('navigator');
export default {
  data() {
    return {
 
    }
  },
  methods: {
    jump(event) {
      navigator.push({
        url: 'http://192.168.1.8:8080/slider.js',
         animated: true
      }, event => {
        modal.toast({ message: 'callback:' + event });
      })
    }
 
  }
}
</script>
```

**webview模块**

webview是一系列的操作，必须和web组件配合使用。包括goback，goForward，reload。注意的是webview必须和`<web>`组件共用。

它有三个方法需要我们掌握：

1. goBack:相当于浏览器里的后退。
2. goForward:相当于浏览器里的前进。
3. reload:刷新页面。

会了这上个方法，我们就可以很简单的使用我们webview模块了，但还是要记得模块必须先引入才能使用。下面是官方的一个例子，我们可以敲一下，加深一下印象。

```
<template>
  <div class="wrapper">
    <div class="group">
      <input class="input" v-model="value" ref="input" type="url" autofocus="false"></input>
    </div>
    <div class="group">
      <text class="button" @click="loadURL">LoadURL</text>
      <text class="button" @click="reload">reload</text>
    </div>
    <web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>
  </div>
</template>
<script>
  const webview = weex.requireModule('webview')
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        url : 'https://m.alibaba.com',
        value: 'https://m.alibaba.com'
      }
    },
    methods: {
      loadURL (event) {
        this.url = this.value
        modal.toast({ message: 'load url:' + this.url })
        setTimeout(() => {
          console.log('will go back.')
          modal.toast({ message: 'will go back' })
          webview.goBack(this.$refs.webview)
        }, 10000)
      },
      reload (event) {
        console.log('will reload webview')
        modal.toast({ message: 'reload' })
        webview.reload(this.$refs.webview)
      },
      start (event) {
        console.log('pagestart', event)
        modal.toast({ message: 'pagestart' })
      },
      finish (event) {
        console.log('pagefinish', event)
        modal.toast({ message: 'pagefinish' })
      },
      error (event) {
        console.log('error', event)
        modal.toast({ message: 'error' })
      }
    }
  }
</script>
<style scoped>
  .group {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
  }
  .input {
    width: 600px;
    font-size: 36px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-width: 2px;
    border-style: solid;
    border-color: #BBBBBB;
  }
  .button {
    width: 225px;
    text-align: center;
    background-color: #D3D3D3;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 30px;
    font-size: 30px;
  }
  .webview {
    margin-left: 75px;
    width: 600px;
    height: 750px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
</style>
```
相信通过自学和这节课的详细学习，你对weex已经了解的差不多了。其实在实际开发中，我们也是利用weex做一些原生的功能开发，主要内容还是放到网页上完整的，原因很多，毕竟weex还不够成熟和强大。

## 第17节：vue-router的使用

weex中`vue-router`的使用和我们在vue中的`vue-router`一模一样。我在这里就简单给大家说说。并讲一些避坑的方法，可以少走一些弯路。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=g0541fpjx2n&tiny=0&auto=0" allowfullscreen></iframe>

**模式的使用有坑：**

经过我的测试，路由的三个模式：hash,history,abstract只有我们的abstract是可以使用的，其它使用都会出现问题。

`router-link`不能再使用

以前在写vue时，我们经常使用`<router-link>`标签进行连接跳转。

```
<!-- 只能在 Web 中使用，Native 环境不支持！ -->
<template>
  <div>
    <router-link to="profile">
      <text>Profile</text>
    </router-link>
  </div>
</template>
```
但是在weex当中这种形式是不可以使用的，要使用编程式导航的形式进行跳转。

```
<template>
  <div>
    <text @click="jump">Profile</text>
  </div>
</template>
<script>
  import router from './path/to/router'
  export default {
    methods: {
      jump () {
        router.push('profile')
      }
    }
  }
</script>
```

总结：这节课算是我们的最后一节知识课了，大家通过17节课的入门，可以说对weex 算是一个入门了，如果要想提高成为一个高手，你需要做实例和在实际工作中进行使用。如果你的课程中有什么疑问，你可以在微信群里进行提问，如果回答特别长，我还可以增加2-3节课程，用来答疑。

最后谢谢你能一直看完这篇教程，一直陪着技术胖一起学习进步，我也会更努力的出前端视频，帮助更多的前段小伙伴学习前端知识。祝大家工作顺利，心想事成。
