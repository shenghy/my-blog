---
category: 视频教程
tags:
  - Flutter
date: 2019-01-20
title: Flutter免费视频第一季-环境搭建
vssue-title: Flutter-base01
---



Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。我们将在这里揭开他可爱而神奇的面纱。

这个只是第一季，还会接着出，我争取从基础一直给大家讲到实战。每周更新三集。

翻墙可以看一下Google的发布会介绍：[https://www.youtube.com/watch?v=RS36gBEp8OI](https://www.youtube.com/watch?v=RS36gBEp8OI)


<!-- more -->

## 第00节：课程说明，有用的废话

>学习讨论QQ群：806799257

>入群问题：Flutter出自于哪个公司？

>入群答案：google

### 建议学习方式

这是一套图文视频教程，你可以看视频来进行学习，也可以在公司不忙时看文字教程。但是在这里我希望你先看一边视频，然后复习或者工作中使用的时候再来查看文章（省去了你记笔记的时间，所有重点的内容，都写成了文字教程）。


### 文章更新频率

本篇文章**每周更新三集**，由于本人不是专业讲师，所以在时间上没办法保证。

- 你可以跟着文章的脚步，从第一篇开始就一起学习。因为更新频率并不快，所以你能跟上学习进度，而不那么费力。

- 当然你也可以等都更新完再进行学习，这样更连贯，可以一气呵成，让知识更有条理性。

当然，你可以随心而为，不便考虑那么多，最主要的是有所收获。


### 学习适合人群

-  **前端爱好者：**希望升级技能，掌握全端开发的技术。
-  **Flutter从业人员：**Flutter从业人员一定也可以学到很多知识。
-  **移动开发爱好者：**想从事移动开发，但是还没有入门的新手。


### 视频特点和收看建议

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=62816723&page=1" scrolling="no" width="100%" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

视频依据了Flutter官方网站，也参照了中文网站。所以内容难免有所重复，但是这些知识也经过了我精心筛选和顺序的排序，目的是希望你能快速学会这项技能。

本人语速较慢，建议使用1.5倍速来进行观看视频，这样体验更好。


## 第01节：认识一下Flutter

我们先来拷贝官网的一段介绍，让大家有一个直观的认识：

>Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=62816724&page=2" scrolling="no" width="100%"  border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

我觉的这句话的重点有三个：
-  **跨平台：**现在Flutter至少可以跨4种平台，甚至支持嵌入式开发。我们常用的有Linux、Android、IOS，甚至可以在谷歌最新的操作系统上Fuchsia进行运行,经过第三方扩展，甚至可以跑在MacOS和Windows上，到目前为止，Flutter算是支持平台最多的框架了，良好的跨平台性，直接带来的好处就是减少开发成本。
-  **原生用户界面：** 它是原生的，让我们的体验更好，性能更好。用官方的话讲就是平滑而自然的滑动效果和平台感知，为您的用户带来全新的体验。（可以看一下图片，这是Flutter的表现）
-  **开源免费：**这个不用多说，我们只要学会并使用，这些都是免费的。这对于大公司是非常必要的，有人说你可以用破解版什么的....说明你还是小公司，我们公司的软件全部是正版，就更不用说操作系统和生产环境了，否则各种公司的侵权官司你都解决不了。

![alt](http://jspang.com/static/upload/20181030/YOmviA96d7pST8-ghsXKLD3B.jpg)


### 主流框架的对比

其实说这一块是带有主观性的，很容易遭到攻击，我也不敢保证我说的就完全正确，但是我还是给大家简单介绍一下。

- **Cordova：**个人认为Flutter可以完胜了，因为Cordova还是基于网页技术进行包装，利用插件的形式开发移动应用的，就这一点。无论是性能还是体验，Flutter都可以完胜了。
- **RN（React Native）：**RN的效率由于是将View编译成了原生View,所以效率上要比基于Cordova的HTML5高很多,但是它也有效率问题,RN的渲染机制是基于前端框架的考虑,复杂的UI渲染是需要依赖多个view叠加.比如我们渲染一个复杂的ListView,每一个小的控件,都是一个native的view,然后相互组合叠加.想想此时如果我们的list再需要滑动刷新,会有多少个对象需要渲染.所以也就有了前面所说的RN的列表方案不友好。
- **Flutter：**吸收了前两者的教训之后,在渲染技术上,选择了自己实现(GDI),由于有更好的可控性,使用了新的语言Dart,避免了RN的那种通过桥接器与Javascript通讯导致效率低下的问题,所以在性能方面比RN更高一筹;有经验的开发者可以打开Android手机开发者选项里面的显示边界布局,发现Flutter的布局是一个整体.说明Flutter的渲染没用使用原生控件进行渲染。 

也有很多前端小伙伴问我为什么不出RN的课程，而是出这个，因为个人觉的Flutter要优于RN，会在前端的领域霸占更久的舞台，所以出了这套免费视频。


### 120fps超高性能
Flutter采用GPU渲染技术，所以性能极高。

Flutter编写的应用是可以达到120fps(每秒传输帧数),这也就是说，它完全可以胜任游戏的制作。而我们常说的RN的性能只能达到60fps，这也算是Flutter的一个超高竞争力吧。官方宣称Flutter甚至会超过原生性能。

如果你想迈入移动游戏领域，学习Flutter也是一个非常好的选择。

### Flutter生态情况

由于有google这样的超级公司支持和推广，Flutter虽然刚出来没有多久，但是生态还是非常好的，中国也有了大量的Flutter爱好者，那技术胖也是其中之一。

我们先来看一下Flutter的插件情况。由法国人总结了一个Flutter的插件列表，我们可以打开看一下，里边的插件非常丰富。所以小伙伴们完全没有必要为Flutter的生态环境而担忧。

**github地址：**[https://github.com/Solido/awesome-flutter ](https://github.com/Solido/awesome-flutter )


![alt](http://jspang.com/static/upload/20181030/cETrXVG2NPDHD_3T0GMzsnmc.png)



目前阿里集团已经开始使用Flutter来进行开发了，比如我们经常使用的闲鱼，主要模块就是Flutter进行开发的。再给大家一个图片，这些效果都是Flutter进行开发的。


Flutter 的官方网站为我们提供了一个`showcase`,有兴趣的小伙伴可以点击下方链接进行查看。

Showcase地址：[https://github.com/Solido/awesome-flutter ](https://github.com/Solido/awesome-flutter )


小伙伴们，快点上车吧，一起来掌握这门新技能。


## 第02节：Flutter开发环境搭建Windows版

作为一个老程序，还是喜欢在windows上进行开发的，虽然公司用MacOS开发，但是这样也会增加你学习的成本，所以我们把中心还是放在windows上进行讲解。windows上的安装也要相对麻烦一点。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=62816735&page=3" scrolling="no" width="100%" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

**特别说明:如果你还不会翻墙，科学上网。那你先停止学习吧，因为你不可能安装成功，先去学学这些东西，能打开谷歌了，再返回来学效率更高。**

### 系统的基本要求

- **操作系统:**必须windows7以上64位操作系统。（这个一般都能很好的满足）
-  **磁盘空间：**大于3个G，虽然官方说的是400M，但是你还需要安装Android Studio 和 虚拟机，所以至少要3个G左右，如果能达到5个G就更好了（满足多个虚拟机的要求）。
-  需要Git环境：Flutter需要git环境的支持，所以这个也要有，作为一个前端，这个是必备工具，所以我在文章中就不教大家安装了。


### JAVA环境的安装

既然要做原生应用了，而且是基于Android的，那还是需要我们安装一下JAVA的环境的，我比一般得到一个新系统后首先做的就是这一步。这个就相当于你按一个软件，你不用考虑太多。

**JAVA环境下载地址：**

```
https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
```
这个地址会随着Java升级有所变化，如果已经改变了，请百度搜索`java下载`或者直接到Java官网下载。

![alt](http://jspang.com/static/upload/20181105/MSD2uI502vy3DRZmlHX9onjG.png)

先点击红圈，然后根据你系统是64位还是32位选择版本，我这里是64位的，所以选择最下面的x64版本。

下载完成后进行安装，这个就直接下一步下一步就可以了。我一般都是安装到系统盘，也就是C盘。

安装完成到终端（命令行）里输入`java`，能出现下图中的结果，说明安装成功。

![alt](http://jspang.com/static/upload/20181105/lgd-jSBO2Upw9FnOFrYKbBfX.png)


**下载安装 FlutterSDK**

1. 去官网下载Flutter安装包，下载地址:[https://flutter.io/sdk-archive/#windows](https://flutter.io/sdk-archive/#windows)
  (这个官方会经常改动，如果不可用，请通知我，我再进行修改。)我选择的版本是0.9.4。

2. 将安装包zip解压到你想安装Flutter SDK的路径（如：            `E:\fluter\flutter`；注意，不要将flutter安装到需要一些高权限的路径如C:\Program Files\，这个没必要跟我一样，凭借自己喜好设置就好）。

3. 在Flutter安装目录的`flutter`文件下找到`flutter_console.bat`，双击运行并启动flutter命令行，接下来，你就可以在Flutter命令行运行flutter命令了。

4. 配置`环境变量`，Flutter的执行是要进行联网的，由于国内的原因，所以你需要设置环境变量（墙翻的好，这步可以省略.视频中有具体讲解）

```
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

5. 如果你想在任何地方都可以执行`Flutter`命令，你需要把Flutter SDK的目录配到环境变量中的path条目下。（这个也看视频吧）


### 进行Flutter doctor 的测试

在终端中输入` flutter doctor `，你可能会得到下面类似的结果。

```
Android toolchain - develop for Android devices
    • Android SDK at D:\Android\sdk
    ✗ Android SDK is missing command line tools; download from https://goo.gl/XxQghQ
    • Try re-installing or updating your Android SDK,
      visit https://flutter.io/setup/#android-setup for detailed instructions.
```
这时候你得到的x比这个会多一些，因为我们还没有安装`Android studio`那下一步就是进行`Android Studio`的安装。

### Android Studio的安装

其实前边的都是比较简单的，到这一步就开始耗时间了。因为在安装Android Studio的时候，要到google的网站下很多的包，但是谷歌被墙的厉害，所以比较耗时间，希望小伙伴可以有点耐心，一边不行就装两遍。

1. 下载`Android Studio`：直接到官网进行下载就可以了。下载地址：[https://developer.android.com/](https://developer.android.com/)进入后向下拉，然后看到如下界面，点击红圈处进行下载。
![alt](http://jspang.com/static/upload/20181105/1KK9K0_EZqM6A7TAPXo7Arq0.png)

2. 安装Android Studio 软件：这个安装也就是差不多下一步下一步，如果你真的不会，给你个比较详细的教程。[https://www.cnblogs.com/xiadewang/p/7820377.html](https://www.cnblogs.com/xiadewang/p/7820377.html)，（需要注意的是，到下图时，会变的很慢，它去谷歌下载了很多包，我大概下载了30分钟）
![alt](http://jspang.com/static/upload/20181105/mY5Qhlb66tRSXFWbmnZfUT2W.png)

3. 打开Android Stuido 软件，然后找到Plugin的配置，搜索Flutter插件。
![alt](http://jspang.com/static/upload/20181031/Exnsbuo_aOB3s75oTd4r6JCE.png)
出现上图，点中间的`Search in repositories`,然后点击安装。
![alt](http://jspang.com/static/upload/20181031/6-jjLcq_aEZHibMxVyy_3P78.png)
安装完成后，你需要重新启动一下Android Studio软件。


### 安装Android证书 

安装好Android Studio后，再次打开终端（命令行），输入`flutter doctor`,这时候的x会明显减少，但是你还是会遇到1-2个，其中有一个就是提示没有安装证书。安装证书只要在终端里执行下面的命令。

```
flutter doctor --android-licenses
```
然后会提示你选Y/N，不要犹豫，一律选择Y，就可以把证书安装好。（说的都是一大堆一大堆的英文，我也看不懂是啥）

到这里windows的开发环境就安装的差不多了，但是你不要高兴的太早，我们下节课安装虚拟机，并在虚拟机上运行也许你会碰上很大的麻烦。（如果你跟着学，一定要把这节课做完，再继续学习）

## 第03节：Flutter开发环境搭建Mac版

由于我公司使用的是Mac电脑，但是家里录课的不是Mac。所以这节是文字版，但我会写的尽量详细。希望你能通过阅读文章，也能在mac上搭建起Flutter环境。

### 系统环境要求

Flutter因为是新出的框架，所以对系统还是有一定的要求的。

- MacOS （64-bit）
- 磁盘空间：大于700M，如果算上Android Studio等编辑工具，尽量大于3G。
- 命令号工具：bash、mkdir、rm、git、curl、unzip、which、brew 这些命令在都可以使用。

注意：一般你会在brew这个命令下载坑，很多mac系统都没有安装这个，你可以进行安装，因为这个和本知识关系性不大，所以我就不写流程了，如果你出现问题，直接点击链接学习安装就可以了。

学习安装brew：[https://segmentfault.com/a/1190000013317511](https://segmentfault.com/a/1190000013317511)

### 下载Flutter SDK包

这里推荐去官网下载就好，我挂了梯子，速度并不慢。

网址：https://flutter.io/setup-macos/

进入网址后，向下拖拽一下，然后看到图片中的内容，点击红框处就可以下载了。

![alt](http://jspang.com/static/upload/20181031/e5SRe6KVwMubQqzl0j2WMtbt.png)

如果你这也感觉麻烦，那可以直接点击下面的链接：

>点击直接下载：[https://storage.googleapis.com/flutter_infra/releases/beta/macos/flutter_macos_v0.9.4-beta.zip](https://storage.googleapis.com/flutter_infra/releases/beta/macos/flutter_macos_v0.9.4-beta.zip)

这个会随着版本的升级，而失效，所以不建议使用。

### 配置环境变量

压缩包下载好以后，找个位置进行解压。这个位置很重要，因为下面配置环境变量的时候要用到。比如你配置到了根目录下的app文件夹。

1.打开终端工具（这个我就不用写了吧），使用vim进行配置环境变量，命令如下：

```
vim ~/.bash_profile
```
在打开的文件里增加一行代码，意思是配置flutter命令在任何地方都可以使用。
```
export PATH=/app/flutter/bin:$PATH
```
提示：这行命令你要根据你把压缩包解压的位置来进行编写，写的是你的路径，很有可能不跟文章一样。

配置完成后，需要用`source`命令重新加载一下 ，具体命令如下：
```
source ~/.bash_profile
```
完成这部以后，就算我们flutter的安装工作完成了，但是这还不能进行开发。可以使用命令来检测一下，是否安装完成了。
```
flutter -h
```
出现下面的结果，说明到目前为止，我们安装一切顺利。

![alt](http://jspang.com/static/upload/20181031/yLd3fYMgchoJpvFe2eK5wAC6.png)

### 检查开发环境

到上边为止，我们安装好了Flutter，但是还不具备开发环境。开发还需要很多软件和插件的支持，那到底需要哪些插件和软件那？我们可以使用Flutter为我们提供的命令来进行检查：
```
flutter doctor
```

![alt](http://jspang.com/static/upload/20181031/hWspWXNesCVAZYZV0Z2iSdhb.png)

如果你英文很好，你应该可以很容易读出上面的检测结果，有很多条目都没有通过。需要我们安装检测结果一条条进行安装，直到满足开发环境。（如果有[!]x标志，表示本行检测没有通过，就需要我们设置或者安装相应的软件了。）

有可能你的Android studio也没有安装，那么你要先安装这个编辑器，安装好后，可以顺便下载Android SDK。

Android Studio下载地址：[http://www.android-studio.org/](http://www.android-studio.org/)

打开后选择对应的Mac版本，如下图（随着网站的改版，可能略有不同）

![alt](http://jspang.com/static/upload/20181031/rEMSYdoKxMYLmeAop7n720Hj.jpg)


下载Android SDK的时候，记得搭上梯子，否则你会等到天荒地老（祝君一切顺利）。

如果你有安装，那么第一步要作的是允许协议（android-licenses）。允许方法就是在终端运行如下命令：

```
flutter doctor --android-licenses
```
然后让你输入Y/N的时候，一路Y就可以了（至于啥意思，我也没仔细看，大概就和安装软件的下一步下一步是一样的，你按N是不能成功的）。

这不完成后，我们再使用`flutter doctor`进行检测后，会看到还是有很多x。大概如下：

```
  To install, run:
    brew install --HEAD libimobiledevice
    brew install ideviceinstaller
✗ ios-deploy not installed. To install:
    brew install ios-deploy
✗ CocoaPods not installed.
    CocoaPods is used to retrieve the iOS platform side's plugin code that responds to your plugin usage on the Dart side.
    Without resolving iOS dependencies with CocoaPods, plugins will not work on iOS.
    For more info, see https://flutter.io/platform-plugins
  To install:
    brew install cocoapods
    pod setup
```
其实大概意思就是我们需要这些软件，Flutter推荐你用brew命令进行安装。

我们可以直接在终端里输入下列命令（每输完一个都要等一会，等待软件包安装完成）
```
brew install --HEAD libimobiledevice
brew install ideviceinstaller
brew install ios-deploy
brew install cocoapods
pod setup
```
安装完这些，我大概花了1个半小时左右，我这是百兆光纤还加了梯子。

这个大问题解决以后，我们还需要为Android Studio安装一下Flutter插件（这个有可能你安装过，如果出现下面的提示，说明你还没有安装）

```
✗ Flutter plugin not installed; this adds Flutter specific functionality.
✗ Dart plugin not installed; this adds Dart specific functionality.
```
打开Android Stuido 软件，然后找到Plugin的配置，搜索Flutter插件。

![alt](http://jspang.com/static/upload/20181031/Exnsbuo_aOB3s75oTd4r6JCE.png)

出现上图，点中间的`Search in repositories`,然后点击安装。

![alt](http://jspang.com/static/upload/20181031/6-jjLcq_aEZHibMxVyy_3P78.png)

安装完成后，你需要重新启动一下Android Studio软件。

我做到这里环境就全部OK了，只有一个没有找到调试设备了，因为我没有调试的手机硬件，所以出现这个提示,不用管它。
```
[!] Connected devices
    ! No devices available
```
### Pub源的配置

如果你没有梯子，一个人人都知道的原因，你还需要在环境变量里配置一下Pub源，不然你是无法进行使用的。

运行：
```
vim ~/.bash_profile
```
增加两行配置

```
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```
重新加载环境变量

```
source ~/.bash_profile
```

希望大家都能安装成功，这只是我的安装过程，不敢保证全部正确，但是我尽量详细的描述了我Mac的搭建过程，希望可以帮助到Flutter的爱好者。



## 第04节：安装AVD虚拟机 Flutter跑起来

在基础的环境安装完成后，打开Android Studio可以新建一个Flutter项目了。当然如果你有手机（真机）来进行预览效果是最好的，但是为了我们前端追求的热更新和讲课的需要，我们还是需要建立一个虚拟机的。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=62816760&page=4" scrolling="no" width="100%" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Android studio新建Flutter项目

打开Andorid Studio ，会出现下面的界面，我们选择第二项，新建Flutter项目。

![alt](http://jspang.com/static/upload/20181105/dhVd15XCwZdXV9cS3FQOcUqa.png)

（如果你第一次新建项目，可能会有些慢，这个可能跟技术胖700元的电脑有关，土豪请无视这句话。）

打开第二个窗口后，选择第一个选项`Flutter Application`(flutter应用)。

![alt](http://jspang.com/static/upload/20181105/qjSES3vkbBz935xuMb-gN06h.png)

这步完成后，系统就会自动为我们创建一个Flutter项目（新建项目的过程也是很慢的，它要去谷歌下载gradle，这个东西很容下载失败，如果失败，可以多反复试几次）。

![alt](http://jspang.com/static/upload/20181105/gWf4s9RsHlsKK-SyMxmqeDU5.png)

如果你到了这一步，坚持住，马上成功了。

### 安装AVD虚拟机

1. 现在需要一个虚拟机来运行我们的程序，可以点击Android Studio中的上方菜单`tool` -`AVD Manager`选项。
2. 出现新建菜单，选择`Create Virtual Device.....`,如果你一个虚拟机也没建过，这个选项在对话框的中间（我一定跟我的图一样）。
![alt](http://jspang.com/static/upload/20181105/xQuLNq5ZikkOY6qxrV0F5KAK.png) 
3. 选择虚拟机类型，这个你随意选就好，我选择的是`Nexus 5x`。（如果你屏幕小，就选择一个小屏幕的虚拟机）
![alt](http://jspang.com/static/upload/20181105/ZwbObMwjvhcsErM5boZjyvNH.png)

4. 选择系统，这里尽量选择最新的，我选择了`Android 9.0`系统，选择好后，又是一个漫长的等待过程。

5. 安装好后，点击开始按钮，运行虚拟机了（第一次运行，需要安装系统，会慢一些），运行起来后，如下图。
![alt](http://jspang.com/static/upload/20181105/dbln0YAd-njaHfoNp42Ya70w.png)

### 让Flutter跑起来

虚拟机运行以后，可以点击`debug`按钮，让Flutter程序跑起来。如果你幸运的话，你的Flutter程序经过编译后，就会跑起来了。（这种幸运的机会很小，总会碰到一些小错误，我在这里介绍两个常见的错误）。

![alt](http://jspang.com/static/upload/20181105/n_w6-BJ8Af8_a3ajhA_FP8JP.png)


### Error runing Gradle 错误解决（1.x版本已经修复）

在Debug项目的时候，应该最常见的错误就是类似下面这样的错误了。
```
Launching lib/main.dart on Android SDK built for x86 in debug mode...
Initializing gradle...
Resolving dependencies...
* Error running Gradle:
ProcessException: Process "/Users/rabbit/develop/android/flutter_app/android/gradlew" exited abnormally:
Project evaluation failed including an error in afterEvaluate {}. Run with --stacktrace for details of the afterEvaluate {} error.

FAILURE: Build failed with an exception.

* Where:
Build file '/Users/rabbit/develop/android/flutter_app/android/app/build.gradle' line: 25

* What went wrong:
A problem occurred evaluating project ':app'.
> Could not resolve all files for configuration 'classpath'.
   > Could not find lint-gradle-api.jar (com.android.tools.lint:lint-gradle-api:26.1.2).
     Searched in the following locations:
         https://jcenter.bintray.com/com/android/tools/lint/lint-gradle-api/26.1.2/lint-gradle-api-26.1.2.jar

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 0s
  Command: /Users/rabbit/develop/android/flutter_app/android/gradlew app:properties

Finished with error: Please review your Gradle project setup in the android/ folder.
```

这个问题的产生的原因，还是中国特有的问题，解决方案是改位阿里的链接(1.0已经修复了这个问题，不用再重新设置了)。

第一步：修改掉项目下的android目录下的`build.gradle`文件，把google() 和 jcenter()这两行去掉。改为阿里的链接。

```
maven { url 'https://maven.aliyun.com/repository/google' }
maven { url 'https://maven.aliyun.com/repository/jcenter' }
maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
```

全部代码：

```
buildscript {
    repositories {
        //  google()
        //  jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public'}
        }
        dependencies {
        classpath 'com.android.tools.build:gradle:3.1.2'
    }
}

allprojects {
    repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
    }
}

rootProject.buildDir = '../build'
subprojects {
    project.buildDir = "${rootProject.buildDir}/${project.name}"
}
subprojects {
    project.evaluationDependsOn(':app')
}

task clean(type: Delete) {
    delete rootProject.buildDir
}

```
注意是有两个部分进行了修改，不要只修改一处。

第二步：修改Flutter SDK包下的`flutter.gradle`文件,这个目录要根据你的SDK存放的位置有所变化。比如我放在了D盘Flutter目录下，那路径就是这个。
```
D:\Flutter\flutter\packages\flutter_tools\gradle
```
打开文件进行修改，修改代码如下（其实也是换成阿里的路径就可以了）。
```
buildscript {
    repositories {
        //jcenter()
        // maven {
        //     url 'https://dl.google.com/dl/android/maven2'
        // }
        maven{
            url 'https://maven.aliyun.com/repository/jcenter'
        }
        maven{
            url 'http://maven.aliyun.com/nexus/content/groups/public'
        }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.2'
    }
}
```
然后再重新Debug一下，就基本可以启动起来。

还有一种错误是说硬件没有启动GPU，需要下载安装一个程序，这个提示的很清楚，不做过多的介绍了。

## 第05节：VSCode下如何玩转Flutter

我已经使用VSCode有几年了，记得是从刚出VSCode就开始使用了，我个人是不喜欢用Android Studio来进行开发的，感觉它太重量级了（我700元的电脑跑起来很费劲）。所以必须想办法用VSCode进行开发。幸运的是VSCode已经有了Flutter插件，而且也非常完美。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=62816789&page=5" scrolling="no" width="100%" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


### VSCode安装Flutter插件

打开VSCode的Flutter插件界面，然后用在搜索框中输入`Flutter`,第一个就是Flutter插件了。点击`install`就可以进行安装了（具体看下图）。

![alt](http://jspang.com/static/upload/20181106/tzPfiuSUHBYeUwt75b659yRf.png)

安装完成后，是需要重启VSCode的。有的小伙伴肯定会问用不用装`Dart`插件，其实是用装的，只不过安装完Flutter插件后，Dart也为我们安装好了，不用我们自己安装。

这时候已经可以编写Flutter程序了，但是还没有预览的地方，也就是虚拟机没有开启。


###  一条命令快速开启虚拟机

现在想开启虚拟机需要打开`Android Studio`,然后再打开AVD虚拟机，我的电脑足足要等2分钟左右(土豪电脑除外)，我反正是不能接受的，一点不符合极客精神。下面就用一条命令，或者说制作一个批处理文件，来直接开启AVD虚拟机，这样就不用再等两分钟来开启`Android Studio`了。


**开启虚拟机需要两个步骤：**

1. 打开`emulator.exe`这个程序，你可以巧妙利用windows的查找工具进行查找。
2. 打开你设置的虚拟机，批处理时需要填写你设置的虚拟机名称。

**具体步骤如下：**

1. 新建一个`xxx.bat`文件到桌面，xxx的意思是，你可以自己取名字，随意叫什么都可以。我这里叫`EmulatorRun.bat`.
2. 查找`emulator.exe`文件的路径，把查找到的路径放到bat文件中（如图）。
![alt](http://jspang.com/static/upload/20181106/WUt5dxiRFulRy65z1exoJczt.png)
你一般会查找到两个emulator.exe文件，一个是在tools目录下，一个是在emulator目录下，我们选择`emulator`目录下的这个,复制它的路径。
```
C:\Users\Administrator\AppData\Local\Android\Sdk\emulator\emulator.exe
```
(特别说明，你的和我的很有可能不一样，你要复制i电脑中的路径，不要复制这里的代码)

3. 打开`Android Studio`，并查看你的AVD虚拟机名称（如图所示）。
![alt](http://jspang.com/static/upload/20181106/VY-KBKi8Avdjj9JA4aOE4QgY.png)
如果你觉的输入不方便和怕出错，你可以点击图片后边的笔型按钮，进入编辑模式，复制这个名称。
![alt](http://jspang.com/static/upload/20181106/lhy-0jIpJ9I2gQxsH2Q-s9v0.png)

4. 然后根据你复制的名称，把bat文件输入成如下形式。
```
C:\Users\Administrator\AppData\Local\Android\Sdk\emulator\emulator.exe -netdelay none -netspeed full -avd Nexus_5X_API_28
```
进行保存后双击bat文件，就可以迅速打开虚拟机了。

**参数解释：**
- -netdelay none :设置模拟器的网络延迟时间，默认为none，就是没有延迟。
- -netspeed full: 设置网络加速值，full代表全速。

### flutter run 开启预览

现在模拟器也有了，VSCode也支持Flutter开发了.现在可以在VSCode中直接打开终端，快捷键是`ctrl+~`，然后在终端中输入下面的命令。

```
flutter run
```
 经过短暂的编译后就会启动我们的程序了（如图）。
![alt](http://jspang.com/static/upload/20181106/08GJZG6lpm1ksUNV2_ke5iRo.png)


到此处，终于搭建出了适合前端程序员的开发环境，下节课开始，我们正式来学习Flutter代码的编写知识。

## 第06节：写一个HelloWorld程序

环境搭建好后，按照惯例就是写一个HelloWorld程序，这节课就用最简单的结构，写一个HelloWorld，并介绍一下相关的Dart语法。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=62816803&page=6" scrolling="no" width="100%" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### HelloWorld整体代码

先快速写一个最简单的结构体，这个界面只包含两部分，头部订单的蓝色bar条和屏幕中间区域的内容。（请看下面代码）

这段代码写在`根目录\lib\main.dart`文件中，这就是Flutter主文件。
```
import 'package:flutter/material.dart';
//主函数（入口函数），下面我会简单说说Dart的函数
void main() =>runApp(MyApp());
// 声明MyApp类
class MyApp extends StatelessWidget{
  //重写build方法
  @override
  Widget build(BuildContext context){
    //返回一个Material风格的组件
   return MaterialApp(
      title:'Welcome to Flutteraa',
      home:Scaffold(
        //创建一个Bar，并添加文本
        appBar:AppBar(
          title:Text('Welcome to Flutter'),
        ),
        //在主体的中间区域，添加一个hello world 的文本
        body:Center(
          child:Text('Hello World'),
        ),
      ),
    );
  }
}
```
写完后打开终端，运行`flutter run `,等待一小会，就会看到虚拟机中显示了`Hello World`的内容。 

![alt](http://jspang.com/static/upload/20181107/Hbs0InrlsLlF0X9-xNF0B_US.png)

也许你对上面的语法还不够了解，但你不必惊慌，我们会一点点进行说明，那先来看一下Dart中的函数。

### Dart语法Function函数

Dart是面向对象的语言，即使是函数也是对象，并且属于Function类型的对象。这意味着函数可以分配给变量或作为参数传递给其他函数。当然你也可以像JavaScript一样，调用一个函数。

比如我们写Hello World中的第2行，就是一个函数。
```
void main() =>runApp(MyApp());
```
因为这个函数体里只有一行代码，所以可以直接使用`=>`来省略`{}`，只有函数体里只有一行时，才可以使用，否则请使用大括号。

（ps:学习Dart语法时你要记住一条，Dart里一切皆对象，包括数字和函数.......,没对象的程序员小哥哥可要抓紧学习了，程序中自有颜如玉的时代到了）

###  StatefulWidget和StatelessWidget

-  StatefulWidget ： 具有可变状态的窗口部件，也就是你在使用应用的时候就可以随时变化，比如我们常见的进度条，随着进度不断变化。
- StatelessWidget：不可变状态窗口部件，也就是你在使用时不可以改变，比如固定的文字（写上后就在那里了，死也不会变了）。

这个HelloWorld代码就继承了不可变窗口部件`StatelessWidget`。

### VSCode中如何热加载

用VSCode编写Flutter不好的一点就是要手动加载更新应用，个人感觉这至少会降低10%的工作效率。

当我们运行`flutter run`以后，会有一段红色文字的提示，说明了我们可以作的事情。

```
To hot reload changes while running, press "r". To hot restart (a
nd rebuild state), press "R".
An Observatory debugger and profiler on Android SDK built for x86 is
available at: http://127.0.0.1:64590/
You can dump the widget hierarchy of the app (debugDumpApp) by pressing "w".
To dump the rendering tree of the app (debugDumpRenderTree), press "t".
For layers (debugDumpLayerTree), use "L"; for accessibility (debugDumpSemantics), use "S" (for traversal order) or "U" (for inverse hit test order).
To toggle the widget inspector (WidgetsApp.showWidgetInspectorOverride), press "i".
To toggle the display of construction lines (debugPaintSizeEnabled),
press "p".
To simulate different operating systems, (defaultTargetPlatform), press "o".
To display the performance overlay (WidgetsApp.showPerformanceOverlay), press "P".
To save a screenshot to flutter.png, press "s".
To repeat this help message, press "h". To detach, press "d"; to quit, press "q".
```

我们来看几个重点的：

- r  键：点击后热加载，也就算是重新加载吧。
- p 键：显示网格，这个可以很好的掌握布局情况，工作中很有用。
- o 键：切换android和ios的预览模式。
- q 键：退出调试预览模式。

常用的一般就这些，剩下的命令以后碰到我们再进行讲解。

如果你觉的这太麻烦了，我们可以开启Debug模式，这时就可以实现真正的热加载了（我们保存，效果立即就会改变），但有时报错也挺烦人的。（下图时Debug模式）

![alt](http://jspang.com/static/upload/20181107/2WxazaL369vpjmevd_xlTwkq.png)


这节课算我们上手编写代码的第一节课，这个基本的结构很重要，小伙伴们可以多练习几遍，把基本结构记熟练。


第一季到这里就结束了，我希望小伙伴们都能把环境搭建出来。我们会紧接着开启第二季的视频，开始Flutter基本组件的讲解。希望你持续关注。


















