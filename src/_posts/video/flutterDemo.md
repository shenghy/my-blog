---
category: 视频教程
tags:
  - Flutter
date: 2019-02-22
title: 20个Flutter实例视频教程  让你轻松上手工作
vssue-title: Flutter-demo
---

这篇文章是Flutter基础的一个进阶教程，主要讲解的是在工作中一些常用的功能。学完这篇文章和视频，你可以轻松制作出80%以上工作中常用的Flutter复杂效果，对Flutter有更深刻的了解。

**本文是实战和基础的一个衔接总结。** 在学完基础后，很多小伙伴都急于上手一个实战项目，觉的做完实战项目就算学会了Flutter，达到了工作水平一样。其实在实战和基础之间还需要有一个过度，人们喜欢称之为进阶。那这篇文章或者说视频就是进阶教程，它会以小实例的方式进行讲解。实例也会达到20个以上，每个小实例就是一个小的实战。


** 学习这篇文章最重要的是，你必须在看完视频后动手练习，否则很难学会。**





<!-- more -->


## 前置知识和说明

**特别说明**

最重要的放在最前面，这些实例有些是我原创的代码，有些是在Github上找到的，都是开源的，所以我和你都可以放心大胆的使用。（我不创造知识，我只是知识的搬运工。创造知识是尤大神和Google这样的人或公司才能做到的 ，我的级别还不行。我的目的就是减轻你的学习成本。）

视频的目的是为了节约大家的学习成本，让大家简单快速的学会知识。视频中的任何一段代码我都有详细的讲解，但是我觉既然是一个进阶教程，不光要学习零散的知识点，最重要的是理解Flutter的开发模式、习惯和一些面向对象方法。


那在学习这篇文章之前，你应该先学习一下基础知识，至少把下面这四篇文章，共25集视频，先看一边，作一下练习。(这些视频是完全免费的，大家直接可以在博客上收看)。


- 第一季Flutter视频教程地址：http://jspang.com/post/flutter1.html
- 第二季Flutter视频教程地址：http://jspang.com/post/flutter2.html
- 第三季Flutter视频教程地址：http://jspang.com/post/flutter3.html
- 第四季Flutter视频教程地址：http://jspang.com/post/flutter4.html


## QQ群和微信群

**QQ群806799257 **

>学习讨论QQ群：806799257 

>入群问题：Flutter出自于哪个公司？

>入群答案：google

**微信群：**

其实我微信群上的还是比较多的，QQ群则少很多，小伙伴们可以加我微信群。

先扫码添加我微信好友，备注我要进群，我每天会在中午把你们邀请进群。

为方便小伙伴学习，微信群里提供文章的高清视频下载。

![alt](http://jspang.com/static/upload/20190102/_g3UOTjGLvyYE-l0YMS6t-0E.jpg)


## 案例效果查看

<table>
    <tr>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo01.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo02.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo03.gif" ></center></td>
    </tr>


 <tr>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo04.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo05.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo06.gif" ></center></td>
    </tr>

 <tr>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo07.png" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo08.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo09.gif" ></center></td>
    </tr>

 <tr>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo10.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo11.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo12.gif" ></center></td>
    </tr>
 <tr>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo13.png" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo14.png" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo15.gif" ></center></td>
    </tr>
<tr>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo16.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo17.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo18.gif" ></center></td>
    </tr>
</table>



## 第01节: 底部导航栏制作-1

工作中最简单的一个APP也要具备一个功能，就是底部导航栏，你很难找出没有底部导航栏的应用。这么刚需的功能，那就从这里入手开始学习吧。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=1" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![http://blogimages.jspang.com/FlutterDemo01.gif](http://blogimages.jspang.com/FlutterDemo01.gif)




### 主入口文件的编写

首先我们先写一个主入口文件，这个文件只是简单的APP通用结构，最主要的是要引入自定义的`BottomNavigationWidget`组件。


main.dart代码如下(视频中会进行详细讲解)
```
import 'package:flutter/material.dart';
import 'bottom_navigation_widget.dart';

void main()=> runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter bottomNavigationBar',
      theme:ThemeData.light(),
      home:BottomNavigationWidget()
    );
  }.
}
```
注意的是`BottomNaivgationWidget`这个组件还没有编写，所以现在会报错。

### StatefulWidget 讲解

在编写`BottomNaivgationWidget`组件前，我们需要简单了解一下什么是`StatefulWidget`.


`StatefulWidget`具有可变状态(state)的窗口组件（widget）。使用这个要根据变化状态，调整State值。

在lib目录下，新建一个`bottom_navigation_widget.dart`文件。

它的初始化和以前使用的`StatelessWidget`不同，我们在VSCode中直接使用快捷方式生成代码（直接在VSCode中输入stful）：

```
class name extends StatefulWidget {
  _nameState createState() => _nameState();
}

class _nameState extends State<name> {
  @override
  Widget build(BuildContext context) {
    return Container(
       child: child,
    );
  }
}
```

上面的代码可以清楚的看到，使用`StatefulWidget`分为两个部分，第一个部分是继承与`StatefullWidget`，第二个部分是继承于`State`.其实`State`部分才是我们的重点，主要的代码都会写在`State`中。

### BottomNaivgationWidget自定义

接下来我们就要创建`BottomNaivgationWidget`这个Widget了，只是建立一个底部导航。

```
import 'package:flutter/material.dart';


class BottomNavigationWidget extends StatefulWidget {
  _BottomNavigationWidgetState createState() => _BottomNavigationWidgetState();
}

class _BottomNavigationWidgetState extends State<BottomNavigationWidget> {
  final _BottomNavigationColor = Colors.blue;

  @override
  Widget build(BuildContext context) {
     return Scaffold(
     
       bottomNavigationBar: BottomNavigationBar(
         items: [
           BottomNavigationBarItem(
             icon:Icon(
               Icons.home,
               color:_BottomNavigationColor,
             ),
             title:Text(
               'Home',
               style:TextStyle(color:_BottomNavigationColor)
             )
           ),
           BottomNavigationBarItem(
             icon:Icon(
               Icons.email,
               color:_BottomNavigationColor,
             ),
             title:Text(
               'Email',
               style:TextStyle(color:_BottomNavigationColor)
             )
           ),
           BottomNavigationBarItem(
             icon:Icon(
               Icons.pages,
               color:_BottomNavigationColor,
             ),
             title:Text(
               'Pages',
               style:TextStyle(color:_BottomNavigationColor)
             )
           ),
           BottomNavigationBarItem(
             icon:Icon(
               Icons.airplay,
               color:_BottomNavigationColor,
             ),
             title:Text(
               'AipPlay',
               style:TextStyle(color:_BottomNavigationColor)
             )
           ),
         ],
         type:BottomNavigationBarType.fixed
       ),
     );
  }
}
```
这时候我们就可以使用`flutter run` 来进行查看代码了，效果已经出现，在APP的页面上已经出现了一个底部导航栏，只不过现在还点击还没有什么效果。

下节课我们继续学习，让点击后可以切换页面，完成我们第一个的小实例效果。


## 第02节: 底部导航栏制作-2

这节课我们继续上节课的内容，把底部导航的完整效果做出来，我们先把几个要导航的页面创建出来。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=2" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 子页面的编写

子页面我们就采用最简单的编写了，只放入一个`AppBar`和一个`Center`，然后用Text Widget表明即可。

先来写一个HomeScreen组件，新建一个pages目录，然后在目录下面新建`home_screen.dart`文件。

```
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title: Text('HOME'),
      ),
      body:Center(
        child: Text('HOME'),
      )
    );
  }
}
```

有了这个文件剩下的文件就可以复制粘贴，然后改少量的代码来完成了。

分别建立:

- email_screen.dart
- pages_screen.dart
- airplay_screen.dart

这些都是导航要用的子页面，有了这些页面，我们才能继续编写代码。

### 重写initState()方法

我们要重新`initState()`方法，把刚才做好的页面进行初始化到一个Widget数组中。有了数组就可以根据数组的索引来切换不同的页面了。这是现在几乎所有的APP采用的方式。

代码如下:
```
 List<Widget> list = List();
 @override
 void initState(){
    list
      ..add(HomeScreen())
      ..add(EmailScreen())
      ..add(PagesScreen())
      ..add(AirplayScreen());
    super.initState();
  }
```

这里的`..add()`是Dart语言的..语法，如果你学过编程模式，你一定听说过建造者模式，简单来说就是返回调用者本身。这里list后用了..add()，还会返回list，然后就一直使用..语法，能一直想list里增加widget元素。 最后我们调用了一些父类的`initState()`方法。



### BottomNavigationBar里的响应事件


`BottomNavigationBar`组件里提供了一个相应事件`onTap`，这个事件自带一个索引值`index`，通过索引值我们就可以和我们list里的索引值相对应了。

```
        onTap:(int index){
           setState((){
             _currentIndex= index;
           });
         },
```

现在给出全部的`bottom_navigation_widget.dart`的全部代码，讲解我会在视频中一行一行讲解。

```
import 'package:flutter/material.dart';
import 'pages/home_screen.dart';
import 'pages/email_screen.dart';
import 'pages/pages_screen.dart';
import 'pages/airplay_screen.dart';

class BottomNavigationWidget extends StatefulWidget {
  _BottomNavigationWidgetState createState() => _BottomNavigationWidgetState();
}

class _BottomNavigationWidgetState extends State<BottomNavigationWidget> {
  final _BottomNavigationColor = Colors.blue;
  int _currentIndex = 0;
  List<Widget> list = List();

  @override
  void initState(){
    list
      ..add(HomeScreen())
      ..add(EmailScreen())
      ..add(PagesScreen())
      ..add(AirplayScreen());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
     return Scaffold(
       body: list[_currentIndex],
       bottomNavigationBar: BottomNavigationBar(
         items: [
           BottomNavigationBarItem(
             icon:Icon(
               Icons.home,
               color:_BottomNavigationColor,
             ),
             title:Text(
               'Home',
               style:TextStyle(color:_BottomNavigationColor)
             )
           ),
           BottomNavigationBarItem(
             icon:Icon(
               Icons.email,
               color:_BottomNavigationColor,
             ),
             title:Text(
               'Email',
               style:TextStyle(color:_BottomNavigationColor)
             )
           ),
           BottomNavigationBarItem(
             icon:Icon(
               Icons.pages,
               color:_BottomNavigationColor,
             ),
             title:Text(
               'Pages',
               style:TextStyle(color:_BottomNavigationColor)
             )
           ),
           BottomNavigationBarItem(
             icon:Icon(
               Icons.airplay,
               color:_BottomNavigationColor,
             ),
             title:Text(
               'AipPlay',
               style:TextStyle(color:_BottomNavigationColor)
             )
           ),
         ],
         currentIndex:_currentIndex,
         onTap:(int index){
           setState((){
             _currentIndex= index;
           });
         },
         type:BottomNavigationBarType.fixed
       ),
     );
  }
}
```


通过两节的学习，基本掌握了APP底部导航的编写方法，其实这些知识是很面向工作的，因为真是项目中，你也要如此划分你的代码结构。


我希望你一定要动手练习一下，因为不动手练习，你是真的学不会的，这不再是基础知识，而是稍显复杂的小案例，并且这些案例你练习后，以后工作中用到，是可以直接拷贝里边的代码的，绝对不亏的。


## 第03节: 不规则底部工具栏制作-1

大部分的底部导航都是中规中矩的，但有些时候也需要突出个性，比如在中间部位增加一个突出的按钮。这节课我们主要学习一下不规则的导航如何制作。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=3" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![http://blogimages.jspang.com/FlutterDemo02.gif](http://blogimages.jspang.com/FlutterDemo02.gif)


### 自定义主题样本

Flutter支持自定义主题，如果使用自定义主题，设置的内容项是非常多的，这可能让初学者头疼，Flutter贴心的为给我们准备了主题样本。

> primarySwatch ：现在支持18种主题样本了。

具体代码如下：

```
theme: ThemeData(
  primarySwatch: Colors.lightBlue,
),
```

会了这个知识后，我们就可以先把我们的主入口文件编写一下了，具体代码如下：

```
import 'package:flutter/material.dart';
import 'bottom_appBar_demo.dart';

void main()=>runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
theme: ThemeData(
  primarySwatch: Colors.lightBlue,
),
      home:BottomAppBarDemo(),
    );
  }
}
```

这时候`bottom_appBar_demo.dart`这个文件还没有，也找不到，这个文件是我们的主要文件，我们的主要业务逻辑会写在这个文件里。

因为没有所以你写完之后会报错，那接下来我们就来编写这个文件。

### floatingActionButton Widget

`floatingActionButton `工作中我们通常简称它为“FAB”，也许只是我们公司这样称呼，从字面理解可以看出，它是“可交互的浮动按钮”,其实在Flutter默认生成的代码中就有这家伙，只是我们没有正式的接触。

一般来说，它是一个圆形，中间放着图标，会优先显示在其他Widget的前面。

下面我们来看看它的常用属性:

- onPressed ：点击相应事件，最常用的一个属性。

- tooltip：长按显示的提示文字，因为一般只放一个图标在上面，防止用户不知道，当我们点击长按时就会出现一段文字性解释。非常友好，不妨碍整体布局。

- child ：放置子元素，一般放置Icon Widget。


我们来看一下`floatingActionButton`的主要代码:

```
floatingActionButton: FloatingActionButton(
    onPressed: (){
      Navigator.of(context).push(MaterialPageRoute(builder:(BuildContext context){
        return EachView('New Page');
      }));
    },
    tooltip: 'Increment',
    child: Icon(
      Icons.add,
      color: Colors.white,
    ),
  ),
```

写完这些代码已经有了一个悬浮的按钮，但这个悬浮按钮还没有和低栏进行融合，这时候需要一个属性。

```
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
```
这时候就可以和底栏进行融合了。

### BottomAppBar Widget

`BottomAppBar` 是 底部工具栏的意思，这个要比`BottomNavigationBar` widget灵活很多，可以放置文字和图标，当然也可以放置容器。

`BottomAppBar`的常用属性:

- color:这个不用多说，底部工具栏的颜色。
- shape：设置底栏的形状，一般使用这个都是为了和`floatingActionButton`融合，所以使用的值都是CircularNotchedRectangle(),有缺口的圆形矩形。
- child ： 里边可以放置大部分Widget，让我们随心所欲的设计底栏。

这节课先来看看这个布局，下节课我们再添加交互效果。

本节课主要代码：

```
import 'package:flutter/material.dart';

class BottomAppBarDemo extends StatefulWidget {
  _BottomAppBarDemoState createState() => _BottomAppBarDemoState();
}

class _BottomAppBarDemoState extends State<BottomAppBarDemo> {

  @override
  Widget build(BuildContext context) {
     return Scaffold(
        floatingActionButton: FloatingActionButton(
          onPressed: (){
          
          },
          tooltip: 'Increment',
          child: Icon(
            Icons.add,
            color: Colors.white,
          ),
        ),
       floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
       bottomNavigationBar: BottomAppBar(
         color:Colors.lightBlue,
         shape:CircularNotchedRectangle(),
         child: Row(
           mainAxisSize: MainAxisSize.max,
           mainAxisAlignment: MainAxisAlignment.spaceAround,
           children: <Widget>[
             IconButton(
               icon:Icon(Icons.home),
               color:Colors.white,
               onPressed:(){
                
               }
             ),
             IconButton(
               icon:Icon(Icons.airport_shuttle),
               color:Colors.white,
               onPressed:(){
                 
               }
             ),
           ],
         ),
       )
        ,
     );
  }
}
```


## 第04节: 不规则底部工具栏制作-2

上节课已经完成了基本的页面布局，但是还没有交互效果，这节主要制作一下交互效果。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=4" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

###  StatefulWidget子页面的制作

在前两节课的实例中我们使用了子页面，但子页面继承与`StatelessWidget`(不可变控件)，所以很麻烦的写了4个页面，其实完全可以写一个继承于`StatefulWidget`的控件，进行搞定。

新建一个`each_view.dart`文件，然后输入如下代码：

```
import 'package:flutter/material.dart';

class EachView extends StatefulWidget {
  String _title;
  EachView(this._title);
  @override
  _EachViewState createState() => _EachViewState();
}

class _EachViewState extends State<EachView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(title:Text(widget._title)),
      body: Center(child:Text(widget._title)),
    );
  }
}
```

代码中设置了一个内部的`_title`变量，这个变量是从主页面传递过来的，然后根据传递过来的具体值显示在APP的标题栏和屏幕中间。

### 按钮交互效果的制作

这些效果都是在`bottom_appBar_demo.dart`页面完成的。首先我们需要引入新作的子页面`each_view.dart`。

```
import 'each_view.dart';
```

新建两个变量,主要作用是控制body中的试图，也就是显示不同的子页面。

```
  List<Widget> _eachView;  //创建视图数组
  int _index = 0;          //数组索引，通过改变索引值改变视图
```

下一步是为`_eachView`进行初始化赋值，我们可以直接重写初始化方法，具体代码如下：

```
  @override
  void initState() {
      // TODO: implement initState
      super.initState();
      _eachView = List();
      _eachView..add(EachView('Home'))..add(EachView('Me'));
    }
```

剩下的就是写个个按钮的交互事件，交互的动作分两种：

-  直接打开子导航，比如我们点击了中间的”+“按钮，我们直接开启子页面。
```
onPressed: (){
    Navigator.of(context).push(MaterialPageRoute(builder:(BuildContext context){
      return EachView('New Page');
    }));
  },
```

-  改变状态，通过改变状态，来切换页面，这样我们整体页面并没有被刷新。
```
onPressed:(){
  setState(() {
    _index=0;             
  });
}
```

为了方便小伙伴们学习，给出`bottom_appBar_demo.dart`所有代码，代码如下:

```
import 'package:flutter/material.dart';
import 'each_view.dart';

class BottomAppBarDemo extends StatefulWidget {
  _BottomAppBarDemoState createState() => _BottomAppBarDemoState();
}

class _BottomAppBarDemoState extends State<BottomAppBarDemo> {
  List<Widget> _eachView;  //创建视图数组
  int _index = 0;          //数组索引，通过改变索引值改变视图

  @override
  void initState() {
      // TODO: implement initState
      super.initState();
      _eachView = List();
      _eachView..add(EachView('Home'))..add(EachView('Me'));
    }

  @override
  Widget build(BuildContext context) {
     return Scaffold(
       body:_eachView[_index],
        floatingActionButton: FloatingActionButton(
        onPressed: (){
          Navigator.of(context).push(MaterialPageRoute(builder:(BuildContext context){
            return EachView('New Page');
          }));
        },
          tooltip: 'Increment',
          child: Icon(
            Icons.add,
            color: Colors.white,
          ),
        ),
       floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
       bottomNavigationBar: BottomAppBar(
         color:Colors.lightBlue,
         shape:CircularNotchedRectangle(),
         child: Row(
           mainAxisSize: MainAxisSize.max,
           mainAxisAlignment: MainAxisAlignment.spaceAround,
           children: <Widget>[
             IconButton(
               icon:Icon(Icons.home),
               color:Colors.white,
                onPressed:(){
                  setState(() {
                    _index=0;             
                  });
                }
             ),
             IconButton(
               icon:Icon(Icons.airport_shuttle),
               color:Colors.white,
               onPressed:(){
                 setState(() {
                    _index=1;             
                 });
               }
             ),
           ],
         ),
       )
        ,
     );
  }
}
```


我相信小伙伴都制作出了这个效果，这个在工作中也很常见。希望你们都能学会，特别是动态子页面的这个使用技巧。


## 第05节: 酷炫的路由动画-1

现在Flutter的路由效果已经非常不错了，能满足大部分App的需求，但是谁不希望自己的App更酷更炫那，学完这节课你就可以给自己的APP加上酷炫的路由动画了。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=5" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


<table>
    <tr>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo03.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo04.gif" ></center></td>
    </tr>
 <tr>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo05.gif" ></center></td>
        <td ><center><img src="http://blogimages.jspang.com/FlutterDemo06.gif" ></center></td>
    </tr>
</table>




其实路由动画的原理很简单，就是重写并继承`PageRouterBuilder`这个类里的`transitionsBuilder`方法。

不过这个方法还是有很多写法的，通过写法的不同，产生的动画效果也有所不同。


### 主入口方法

先编写一个主入口方法，还是最简单的格式，只不过home属性，使用的`FirstPage`的组件是我们自定义的，需要我们再次编写。入口文件的代码如下：

```
import 'package:flutter/material.dart';
import 'pages.dart';

void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home:FirstPage()
    );
  }
}
```

### pages.dart页面的编写

主入口文件用`import`引入了`pages.dart`文件，这个文件就是生成了两个页面（Flutter里的页面也是Widget,这个你要跟网页区分开）。有了两个页面就可以实现路由跳转了。

`pages.dart`文件的代码如下，这里我们先用普通路由代替，看一看效果。

```
import 'package:flutter/material.dart';


class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue,
      appBar:AppBar(
        title:Text('FirstPage',style: TextStyle(fontSize: 36.0)),
        elevation: 0.0,
      ),
      body:Center(
        child: MaterialButton(
          child: Icon(
            Icons.navigate_next,
            color:Colors.white,
            size:64.0,
          ),
          onPressed: (){
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder:(BuildContext context){
                     return SecondPage();
                  }));
          },
        ),
      )
    );
  }
}

class SecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.pinkAccent,
      appBar: AppBar(
        title: Text('SecondPage',style:TextStyle(fontSize:36.0),),
        backgroundColor: Colors.pinkAccent,
        leading:Container(),
        elevation: 0.0,
      ),
      body:Center(
        child: MaterialButton(
          child: Icon(
            Icons.navigate_before,
            color:Colors.white,
            size:64.0
          ),
          onPressed: ()=>Navigator.of(context).pop(),
        ),
      )
    );
  }
}
```
上面代码中有一个新知识点，需要学习一下：

1. AppBar Widger的 elevation 属性：这个值是AppBar
滚动时的融合程度，一般有滚动时默认是4.0，现在我们设置成0.0，就是和也main完全融合了。

写完这个页面代码后，已经可以进行最基本的导航了，但是并没有什么酷炫的动画。

### 自定义CustomRoute Widget

新建一个`custome_router.dart`文件，这个就是要自定义的路由方法，自定义首先要继承于通用的路由的构造器类`PageRouterBuilder`。继承之后重写父类的`CustomRoute`构造方法。

构造方法可以简单理解为：只要以调用这个类或者说是Widget，构造方法里的所有代码就执行了。

`custome_router.dart`代码如下(详细解释视频中说):

```
import 'package:flutter/material.dart';

class CustomRoute extends PageRouteBuilder{
  final Widget widget;
  CustomRoute(this.widget)
    :super(
      transitionDuration:const Duration(seconds:1),
      pageBuilder:(
        BuildContext context,
        Animation<double> animation1,
        Animation<double> animation2){
          return widget;
        },
     transitionsBuilder:(
          BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2,
          Widget child){
            return FadeTransition(
              opacity: Tween(begin:0.0,end :1.0).animate(CurvedAnimation(
                  parent:animation1,
                  curve:Curves.fastOutSlowIn
              )),
              child: child,
            );
        }  
      
    ); 
}
```

 - FadeTransition:渐隐渐现过渡效果，主要设置opactiy（透明度）属性，值是0.0-1.0。

- animate :动画的样式，一般使用动画曲线组件（CurvedAnimation）。

- curve: 设置动画的节奏，也就是常说的曲线，Flutter准备了很多节奏，通过改变动画取消可以做出很多不同的效果。

-  transitionDuration：设置动画持续的时间，建议再1和2之间。




写完代码，我们已经可以看到在切换路由时有了动画效果，下节课我们再写三个常用动画效果。

## 第06节: 酷炫的路由动画-2

这节课我们接着上节课再作三个常用的动画效果，目的是让你更深刻的了解路由动画的使用方法。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=6" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


### 缩放路由动画


```
return ScaleTransition(
  scale:Tween(begin:0.0,end:1.0).animate(CurvedAnimation(
    parent:animation1,
    curve: Curves.fastOutSlowIn
    )),
    child:child
);
```

### 旋转+缩放路由动画

旋转+缩放的思路是在一个路由动画里的child属性里再加入一个动画，让两个动画同时执行。来看详细代码：

```
 return RotationTransition(
  turns:Tween(begin:0.0,end:1.0)
  .animate(CurvedAnimation(
    parent: animation1,
    curve: Curves.fastOutSlowIn
  )),
  child:ScaleTransition(
    scale:Tween(begin: 0.0,end:1.0)
    .animate(CurvedAnimation(
        parent: animation1,
        curve:Curves.fastOutSlowIn
    )),
    child: child,
  )
);
```

### 左右滑动路由动画

其实用的做多的还是左右滑动路由动画，其实实现起来也是非常简单，直接使用`SlideTransition`就可以了。

```
// 幻灯片路由动画
return SlideTransition(
  position: Tween<Offset>(
    begin: Offset(-1.0, 0.0),
    end:Offset(0.0, 0.0)
  )
  .animate(CurvedAnimation(
    parent: animation1,
    curve: Curves.fastOutSlowIn
  )),
  child: child,
);
```

总结:动画的使用会让我们的APP更加酷炫，也会让别人觉的你不是一个新手，再Flutter里使用动画是非常方便的，所以你可以把这些动画效果事先写好，在工作中直接使用。


## 第07节: 毛玻璃效果制作

Flutter的Fliter Widget 也是非常强大的，它可以制作出你想要的神奇滤镜效果。这节我们就以实战的方式，制作一个毛玻璃效果，通过实例来学习Fitler 的用法。（制作效果如下图）

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=7" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


![http://blogimages.jspang.com/FlutterDemo07.png](http://blogimages.jspang.com/FlutterDemo07.png)

### main.dart文件编写

这个和以前的写法都一样，所以就直接贴代码了。详细解释会在视频中解说，不过我相信不解释，小伙伴也一定可以看明白。

```
import 'package:flutter/material.dart';
import 'frosted_glass_emo.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
      theme:ThemeData(
        primarySwatch: Colors.blue,
      ),
      home:Scaffold(
        body:FrostedGlassDemo(),
      )
    );
  }
}
```

### BackdropFilter Widget   

`BackdropFilter`就是背景滤镜组件，使用它可以给父元素增加滤镜效果，它里边最重要的一个属性是`filter`。
`filter`属性中要添加一个滤镜组件，实例中我们添加了图片滤镜组件，并给了模糊效果。

> 图片地址：https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545738629147&di=22e12a65bbc6c4123ae5596e24dbc5d3&imgtype=0&src=http%3A%2F%2Fpic30.photophoto.cn%2F20140309%2F0034034413812339_b.jpg

我们新建一个`frosted_glass_demo.dart`的文件，然后写入下面的代码，具体的解释已经写到了代码的注释中。

```
import 'package:flutter/material.dart';
import 'dart:ui';   //引入ui库，因为ImageFilter Widget在这个里边。

class FrostedGlassDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Stack(   //重叠的Stack Widget，实现重贴
        children: <Widget>[
          ConstrainedBox( //约束盒子组件，添加额外的限制条件到 child上。
            constraints: const BoxConstraints.expand(), //限制条件，可扩展的。
            child:Image.network('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545738629147&di=22e12a65bbc6c4123ae5596e24dbc5d3&imgtype=0&src=http%3A%2F%2Fpic30.photophoto.cn%2F20140309%2F0034034413812339_b.jpg')
          ),
          Center(
            child: ClipRect(  //裁切长方形
              child: BackdropFilter(   //背景滤镜器
                filter: ImageFilter.blur(sigmaX: 5.0,sigmaY: 5.0), //图片模糊过滤，横向竖向都设置5.0
                child: Opacity( //透明控件
                  opacity: 0.5,
                  child: Container(// 容器组件
                    width: 500.0,
                    height: 700.0,
                    decoration: BoxDecoration(color:Colors.grey.shade200), //盒子装饰器，进行装饰，设置颜色为灰色
                    child: Center(
                      child: Text(
                        'JSPang',
                        style: Theme.of(context).textTheme.display3, //设置比较酷炫的字体
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        ],
      )
    );
  }
}
```

这个代码嵌套很多，所以一定要注意你的代码层次，容易出错的地方就是嵌套错误。这个效果尽量少用，因为我测试了一下，它对系统的消耗还是比较大的。

## 第08节:  保持页面状态

在工作中切换页面时，再切换回来，时要求页面状态不发生改变的。这能给APP浏览者最好的体验，机会所有的APP都有这个需求，属于一个大众需求。这节课我们就来看看这样的效果如何实现。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=8" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![http://blogimages.jspang.com/FlutterDemo08.gif](http://blogimages.jspang.com/FlutterDemo08.gif)

### With 关键字的使用

with是dart的关键字，意思是混入的意思，就是说可以将一个或者多个类的功能添加到自己的类无需继承这些类，
避免多重继承导致的问题。

比如下面的代码：

```
class _KeepAliveDemoState extends State<KeepAliveDemo> with SingleTickerProviderStateMixin {

}
```
需要注意的是with后边是Mixin，而不是普通的Widget，这个初学者比较爱犯错误。需要强调一下。



### TabBar Widget的使用

`TabBar`是切换组件，它需要设置两个属性。

- controller: 控制器，后边跟的多是`TabController`组件。
- tabs：具体切换项，是一个数组，里边放的也是Tab Widget。

```
bottom:TabBar(
  controller: _controller,
  tabs:[
    Tab(icon:Icon(Icons.directions_car)),
    Tab(icon:Icon(Icons.directions_transit)),
    Tab(icon:Icon(Icons.directions_bike)),
  ],
)
```

###  基本页面布局

我们先把入口页面布局好，下节课我们再让他保持状态。学了上面两个知识，你其实可以做出来布局了。全部代码如下：


```
import 'package:flutter/material.dart';

void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme:ThemeData(
        primarySwatch: Colors.blue,
      ),
      home:KeepAliveDemo()
    );
  }
} 

class KeepAliveDemo extends StatefulWidget {
  _KeepAliveDemoState createState() => _KeepAliveDemoState();
}
/*
with是dart的关键字，意思是混入的意思，
就是说可以将一个或者多个类的功能添加到自己的类无需继承这些类，
避免多重继承导致的问题。
SingleTickerProviderStateMixin 主要是我们初始化TabController时，
需要用到vsync ，垂直属性，然后传递this
*/
class _KeepAliveDemoState extends State<KeepAliveDemo> with SingleTickerProviderStateMixin {
  TabController _controller;

  @override
  void initState(){
    super.initState();
    _controller = TabController(length:3, vsync: this);
  }

  //重写被释放的方法，只释放TabController
  @override
  void dispose(){
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title:Text('Keep Alive Demo'),
        bottom:TabBar(
          controller: _controller,
          tabs:[
            Tab(icon:Icon(Icons.directions_car)),
            Tab(icon:Icon(Icons.directions_transit)),
            Tab(icon:Icon(Icons.directions_bike)),
          ],
        )
      ),
      body:TabBarView(
        controller: _controller,
        children: <Widget>[
         Text('1111'),
         Text('2222'),
         Text('3333')
        ],
      )
    );
  }
}

```

## 第09节:  保持页面状态-2

上节课已经做出了TabBar的效果，这节课主要任务是保持状态。那为了能看出是保持状态的，我们作一个按钮，然后点一下加一。就跟Flutter为我们生成的例子一样。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=9" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

我这里就直接贴出代码了，知识点我已经在代码中写了注释，并且我会在视频中详细讲解。

如果小伙伴们对代码有什么不了解的，可以私信，我来进行解答。

```
import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

//混入AutomaticKeepAliveClientMixin，这是保持状态的关键
//然后重写wantKeppAlive 的值为true。
class _MyHomePageState extends State<MyHomePage> with AutomaticKeepAliveClientMixin {
  int _counter = 0;
  //重写keepAlive 为ture ，就是可以有记忆功能了。
  @override
  bool get wantKeepAlive => true;
  //声明一个内部方法，用来点击按钮后增加数量
  void _incrementCounter(){
    setState((){ _counter++;});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('点一下加1，点一下加1:'),
            Text(
              '$_counter',
              style:Theme.of(context).textTheme.display1,
            )
          ],
        ),
      ),
      //增加一个悬浮按钮，点击时触犯_incrementCounter方法
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```
写完这个Widget，然后在入口文件中引入。

```
import 'keep_alive_demo.dart';
```
然后把Body区域改成我们刚写的MyHomePage Widget  就可以了，注意是改三个。


## 第10节:  一个不简单的搜索条-1

搜索这个功能，大部分APP都会存在，这节课我们就学习一下，如何做一个有提示功能，而且交互很好的搜索条。需要提前提示的是，这节课的内容可能稍微有些难度，需要你慢慢消化，多作两遍。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=10" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![http://blogimages.jspang.com/FlutterDemo09.gif](http://blogimages.jspang.com/FlutterDemo09.gif)


### 主入口文件

这个还是继承`StatelessWidget`,然后在home属性中加入`SearchBarDemo`，这是一个自定义的Widget，主要代码都在这个文件中。

`main.dart` 文件的代码如下：

```
import 'package:flutter/material.dart';
import 'search_bar_demo.dart';

void main() =>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
      theme: ThemeData.light(),
      home: SearchBarDemo()
    );
  }
}
```

### 数据文件 asset.dart

`asset.dart`相当于数据文件，工作中这些数据是后台传递给我们，或者写成配置文件的，这里我们就以List的方式代替了。我们在这个文件中定义了两个List：

- searchList : 这个相当于数据库中的数据，我们要在这里进行搜索。

- recentSuggest ： 目前的推荐数据，就是搜索时，自动为我们进行推荐。

整体代码如下 ：

```
const searchList = [
  "jiejie-大长腿",
  "jiejie-水蛇腰",
  "gege1-帅气欧巴",
  "gege2-小鲜肉"
];

const recentSuggest = [
  "推荐-1",
  "推荐-2"
];
```

### AppBar的样式制作

这节课我们先把第一个搜索界面布好，下节课我们主要作搜索的交互效果。看下面的代码：


```
import 'package:flutter/material.dart';
import 'asset.dart';


class SearchBarDemo extends StatefulWidget {
  _SearchBarDemoState createState() => _SearchBarDemoState();
}

class _SearchBarDemoState extends State<SearchBarDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title:Text('SearchBarDemo'),
        actions:<Widget>[
          IconButton(
            icon:Icon(Icons.search),
            onPressed: (){
               print('开始搜索');
            }
          ),
        ]
      )
    );

  }
}

```

这时候就可以在虚拟机中进行预览了，但是这时候点击搜索按钮还没有任何反应。


## 第11节:  一个不简单的搜索条-2

上节课已经作好了搜索条的基本布局，现在就是要在点击搜索图标后，变成搜索条的样式，并且有一定都交互效果。

在点击图标时执行`searchBarDelegate` 类，这个类继承与`SearchDelegate`类，继承后要重写里边的四个方法。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=11" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

###  重写buildActions方法：

`buildActions`方法时搜索条右侧的按钮执行方法，我们在这里方法里放入一个clear图标。
当点击图片时，清空搜索的内容。

代码如下:
```
  @override
  List<Widget> buildActions(BuildContext context){
    return [
      IconButton(
        icon:Icon(Icons.clear),
        onPressed: ()=>query = "",)
      ];
  }

```

### buildLeading 方法重写

这个时搜索栏左侧的图标和功能的编写，这里我们才用`AnimatedIcon`，然后在点击时关闭整个搜索页面，代码如下。

```
  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
        icon: AnimatedIcon(
            icon: AnimatedIcons.menu_arrow, progress: transitionAnimation),
        onPressed: () => close(context, null));
  }
```

###  buildResults方法重写

`buildResults`方法，是搜到到内容后的展现，因为我们的数据都是模拟的，所以我这里就使用最简单的`Container`+`Card`组件进行演示了，不做过多的花式修饰了。

```
 @override
  Widget buildResults(BuildContext context) {
    return Container(
      width: 100.0,
      height: 100.0,
      child: Card(
        color: Colors.redAccent,
        child: Center(
          child: Text(query),
        ),
      ),
    );
  }
```
 
###  buildSuggestions方法重写

这个方法主要的作用就是设置推荐，就是我们输入一个字，然后自动为我们推送相关的搜索结果，这样的体验是非常好的。(具体代码的解释，请观看视频)

具体代码如下：

```
 @override
  Widget buildSuggestions(BuildContext context) {
    final suggestionList = query.isEmpty
        ? recentSuggest
        : searchList.where((input) => input.startsWith(query)).toList();
    return ListView.builder(
        itemCount: suggestionList.length,
        itemBuilder: (context, index) => ListTile(
              title: RichText(
                  text: TextSpan(
                      text: suggestionList[index].substring(0, query.length),
                      style: TextStyle(
                          color: Colors.black, fontWeight: FontWeight.bold),
                      children: [
                    TextSpan(
                        text: suggestionList[index].substring(query.length),
                        style: TextStyle(color: Colors.grey))
                  ])),
            ));
  }


}
```


为了方便小伙伴们学习，给出所有`search_bar_demo.dart`文件的代码：


```
import 'package:flutter/material.dart';
import 'asset.dart';


class SearchBarDemo extends StatefulWidget {
  _SearchBarDemoState createState() => _SearchBarDemoState();
}

class _SearchBarDemoState extends State<SearchBarDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title:Text('SearchBarDemo'),
        actions:<Widget>[
          IconButton(
            icon:Icon(Icons.search),
            onPressed: (){
               showSearch(context:context,delegate: searchBarDelegate());
            }
            // showSearch(context:context,delegate: searchBarDelegate()),
          ),
        ]
      )
    );

  }
}

class searchBarDelegate extends SearchDelegate<String>{
  @override
  List<Widget> buildActions(BuildContext context){
    return [
      IconButton(
        icon:Icon(Icons.clear),
        onPressed: ()=>query = "",)
      ];
  }
  
  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
        icon: AnimatedIcon(
            icon: AnimatedIcons.menu_arrow, progress: transitionAnimation),
        onPressed: () => close(context, null));
  }

  @override
  Widget buildResults(BuildContext context) {
    return Container(
      width: 100.0,
      height: 100.0,
      child: Card(
        color: Colors.redAccent,
        child: Center(
          child: Text(query),
        ),
      ),
    );
  }

   @override
  Widget buildSuggestions(BuildContext context) {
    final suggestionList = query.isEmpty
        ? recentSuggest
        : searchList.where((input) => input.startsWith(query)).toList();
    return ListView.builder(
        itemCount: suggestionList.length,
        itemBuilder: (context, index) => ListTile(
              title: RichText(
                  text: TextSpan(
                      text: suggestionList[index].substring(0, query.length),
                      style: TextStyle(
                          color: Colors.black, fontWeight: FontWeight.bold),
                      children: [
                    TextSpan(
                        text: suggestionList[index].substring(query.length),
                        style: TextStyle(color: Colors.grey))
                  ])),
            ));
  }


}

```


## 第12节:  流式布局 模拟添加照片效果

这节已一个模拟添加多张照片的小实例，主要学习一下流式布局在Flutter里的应用。如果你作为一个前端开发者，那这节课的内容将非常容易。
<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69809722&page=12" scrolling="no" width="100%" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


![http://blogimages.jspang.com/FlutterDemo10.gif](http://blogimages.jspang.com/FlutterDemo10.gif)

### mediaQuery 媒体查询

使用`meidaQuery`可以很容易的得到屏幕的宽和高，得到宽和高的代码如下：

```
final width = MediaQuery.of(context).size.width;
final height = MediaQuery.of(context).size.height;
```

### Wrap流式布局

Flutter中流式布局大概有三种常用方法，这节课先学一下Wrap的流式布局。有的小伙伴会说Wrap中的流式布局可以用Flow很轻松的实现出来，但是Wrap更多的式在使用了Flex中的一些概念，某种意义上说式跟Row、Column更加相似的。



单行的Wrap跟Row表现几乎一致，单列的Wrap则跟Column表现几乎一致。但Row与Column都是单行单列的，Wrap则突破了这个限制，mainAxis上空间不足时，则向crossAxis上去扩展显示。


从效率上讲，Flow肯定会比Wrap高，但Wrap使用起来会更方便一些。

这个会在实例中用到，所以，我在实例中会讲解这个代码。


###  GestureDetector 手势操作

`GestureDetector`它式一个Widget，但没有任何的显示功能，而只是一个手势操作，用来触发事件的。虽然很多Button组件是有触发事件的，比如点击，但是也有一些组件是没有触发事件的，比如：Padding、Container、Center这时候我们想让它有触发事件就需要再它们的外层增加一个`GestureDetector`，比如我们让Padding有触发事件，代码如下：

```
Widget buildAddButton(){
    return  GestureDetector(
      onTap:(){
        if(list.length<9){
          setState(() {
                list.insert(list.length-1,buildPhoto());
          });
        }
      },
      child: Padding(
        padding:const EdgeInsets.all(8.0),
        child: Container(
          width: 80.0,
          height: 80.0,
          color: Colors.black54,
          child: Icon(Icons.add),
        ),
      ),
    );
  }

```


### 入口文件

入口文件很简单，就是引用了`warp_demo.dart`文件，然后再home属性中使用了`WarpDemo`，代码如下：

```
import 'package:flutter/material.dart';
import 'warp_demo.dart';

void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: new ThemeData.dark(),
      home:WarpDemo()
    );
  }
}

```

### warp_demo.dart

主要的文件代码我就列在下面了，方便小伙伴们学习。讲解还式主要看视频吧。

```
import 'package:flutter/material.dart';


//继承与动态组件
class WarpDemo extends StatefulWidget {
  _WarpDemoState createState() => _WarpDemoState();
}

class _WarpDemoState extends State<WarpDemo> {
  List<Widget> list;  //声明一个list数组

  @override
  //初始化状态，给list添加值，这时候调用了一个自定义方法`buildAddButton`
  void initState() { 
    super.initState();
    list = List<Widget>()..add(buildAddButton());
  }


  @override
  Widget build(BuildContext context) {
    //得到屏幕的高度和宽度，用来设置Container的宽和高
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    


    return Scaffold(
      appBar: AppBar(
        title: Text('Wrap流式布局'),
      ),
      body:Center(
        child: Opacity(
          opacity: 0.8,
          child: Container(
            width: width,
            height: height/2,
            color: Colors.grey,
            child: Wrap(    //流式布局，
              children: list,
              spacing: 26.0,  //设置间距
            ),
          ),
        ),
      )
    );
  }

  Widget buildAddButton(){
    //返回一个手势Widget，只用用于显示事件
    return  GestureDetector(
      onTap:(){
        if(list.length<9){
          setState(() {
                list.insert(list.length-1,buildPhoto());
          });
        }
      },
      child: Padding(
        padding:const EdgeInsets.all(8.0),
        child: Container(
          width: 80.0,
          height: 80.0,
          color: Colors.black54,
          child: Icon(Icons.add),
        ),
      ),
    );
  }


  Widget buildPhoto(){
    return Padding(
        padding: const EdgeInsets.all(8.0),
        child: Container(
          width: 80.0,
          height: 80.0,
          color: Colors.amber,
          child: Center(
            child: Text('照片'),
          ),
        ),
    );
  }

}
```


## 第13节: 展开闭合案例

手机的屏幕本身就很小，所以要合理利用空间，把主要的元素展示出来，次要或者不重要的元素等用户向看的时候再给用户展示。这类操作最常见的交互就是展开和闭合了。这节课我们主要学习一下`ExpansionTile`组件的使用。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=13" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


![http://blogimages.jspang.com/FlutterDemo11.gif](http://blogimages.jspang.com/FlutterDemo11.gif)


### ExpansionTile组件

`ExpansionTile Widget`就是一个可以展开闭合的组件，常用的属性有如下几个。

- title:闭合时显示的标题，这个部分经常使用`Text Widget`。
- leading:标题左侧图标，多是用来修饰，让界面显得美观。
- backgroundColor: 展开时的背景颜色，当然也是有过度动画的，效果非常好。
- children: 子元素，是一个数组，可以放入多个元素。
- trailing ： 右侧的箭头，你可以自行替换但是我觉的很少替换，因为谷歌已经表现的很完美了。
- initiallyExpanded: 初始状态是否展开，为true时，是展开，默认为false，是不展开。

### main.dart入口文件

```
import 'package:flutter/material.dart';
import 'expansion_tile.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
      theme: new ThemeData.dark(),
      home:ExpansionTileDemo()
    );
  }
}
```

### expansion_tile.dart 扩展组件

这个文件是我们的主要学习文件，但是并不复杂，就是一个可展开组件。全部代码如下:
```
import 'package:flutter/material.dart';

class ExpansionTileDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text('expansion tile demo')),
      body:Center(
        child: ExpansionTile(
          title:Text('Expansion Tile'),
          leading:Icon(Icons.ac_unit),
          backgroundColor: Colors.white12,
          children: <Widget>[
            ListTile(
              title:Text('list tile'),
              subtitle:Text('subtitle')
            )
          ],
          initiallyExpanded: true,
        )
      )
    );
  }
}
```

这时候就可以预览了，效果也应该出现了。

## 第14节: 展开闭合列表案例

上节课学的只是一个单个的展开闭合组件，你当然可以把这个组件作为List元素，组成一个数组，形成列表。不过Flutter也很贴心的为提供了一个ExpansionPanelList Widget，它可以实现展开闭合的列表功能。

需要注意的是这个列表必须放在可滑动组件中使用，否则会报错。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=69758162&page=14" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


![http://blogimages.jspang.com/FlutterDemo12.gif](http://blogimages.jspang.com/FlutterDemo12.gif)

### ExpansionPanelList 常用属性

- expansionCallback:点击和交互的回掉事件，有两个参数，第一个是触发动作的索引，第二个是布尔类型的触发值。
- children:列表的子元素，里边多是一个List数组。


### ExpandStateBean 自定义类

为了方便管理制作了一个`ExpandStateBean`类，里边就是两个状态，一个是是否展开`isOpen`,另一个索引值。代码如下:

```
class ExpandStateBean{
  var isOpen;
  var index;
  ExpandStateBean(this.index,this.isOpen);
}
```

### expansion_panel_list.dart 

这个文件我就直接上代码了，讲解我会在视频里说明，代码中我也进行了详细的注释。

```
import 'package:flutter/material.dart';

class ExpansionPanelListDemo extends StatefulWidget {
  _ExpansionPanelListDemoState createState() => _ExpansionPanelListDemoState();
}

class _ExpansionPanelListDemoState extends State<ExpansionPanelListDemo> {
  var currentPanelIndex = -1;
  List<int> mList;   //组成一个int类型数组，用来控制索引
  List<ExpandStateBean> expandStateList;    //开展开的状态列表， ExpandStateBean是自定义的类
  //构造方法，调用这个类的时候自动执行
  _ExpansionPanelListDemoState(){
    mList = new List(); 
    expandStateList = new List();
    //便利为两个List进行赋值
    for(int i=0;i<10;i++){
      mList.add(i);
      expandStateList.add(ExpandStateBean(i,false));
    }
  }
   //修改展开与闭合的内部方法
  _setCurrentIndex(int index, isExpand){
    setState(() {
          //遍历可展开状态列表
          expandStateList.forEach((item){
            if(item.index==index){
              //取反，经典取反方法
              item.isOpen = !isExpand;
            }
          });
        });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title:Text("expansion panel list")
      ),
      //加入可滚动组件
      body:SingleChildScrollView(
        child: ExpansionPanelList(
          //交互回掉属性，里边是个匿名函数
          expansionCallback: (index,bol){
            //调用内部方法
            _setCurrentIndex(index, bol);
          },
          children: mList.map((index){//进行map操作，然后用toList再次组成List
            return ExpansionPanel(
              headerBuilder: (context,isExpanded){
                return ListTile(
                  title:Text('This is No. $index')
                );
              },
              body:ListTile(
                title:Text('expansion no.$index')
              ),
              isExpanded: expandStateList[index].isOpen
            );
          }).toList(),
        ),
      )

    );
  }
}
//自定义扩展状态类
class ExpandStateBean{
  var isOpen;
  var index;
  ExpandStateBean(this.index,this.isOpen);
}
```

## 第15节: 贝塞尔曲线切割 

现在人们对于网站的美感要求是越来越高了，所以很多布局需要优美的曲线设计。当然最简单的办法是作一个PNG的透明图片，然后外边放一个`Container`.但其内容如果本身就不是图片，只是容器，这种放入图片的做法会让包体变大。其实我们完全可以使用贝塞尔曲线进行切割。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=70409103&page=15" scrolling="no" border="1"  width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![http://blogimages.jspang.com/FlutterDemo13.png](http://blogimages.jspang.com/FlutterDemo13.png)


### 去掉DeBug图标

在讲正式内容之前，先回答小伙伴们的一个问题，就是如何去掉DeBug图标。在我们进行编写代码预览时，有一Debug的图标一直在屏幕上，确实不太美观，其实只要语句代码就可以去掉的。

```
 debugShowCheckedModeBanner: false,
```
这个代码要配置在主入口文件里，全部代码如下“

```
import 'package:flutter/material.dart';
import 'custom_clipper.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme:ThemeData(
        primarySwatch: Colors.blue,
      ),
      home:HomePage()
    );
  }
}
```


### ClipPath 路径裁切控件

`clipPath`控件可以把其内部的子控件切割，它有两个主要属性（参数）:

- child :要切割的元素，可以是容器，图片.....
- clipper : 切割的路径，这个要和CustomClipper对象配合使用。
- 

```
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Column(
        children: <Widget>[
          ClipPath(
            clipper:BottomClipper(),
            child: Container(
              color:Colors.deepPurpleAccent,
              height: 200.0,
            ),
          )
        ],
      )
    );
  }
}
```

在`Scaffold`里放置了一个列容器，然后把`ClipPath`控件放到了里边，`ClipPath`的子元素是一个容器控件`Container`。`BootomClipper`是我们自定义的一个对象，里边主要就是切割的路径。


### CustomClipper 裁切路径

我们主要的贝塞尔曲线路径就写在`getClip`方法里，它返回一段路径。

一个二阶的贝塞尔曲线是需要控制点和终点的，控制点就像一块磁铁，把直线吸引过去，形成一个完美的弧度，这个弧度就是贝塞尔曲线了。

我们先来熟悉一下裁切路径和贝塞尔曲线，作一个最简单的贝塞尔曲线出来。

全部代码如下：

```
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Column(
        children: <Widget>[
          ClipPath(
            clipper:BottomClipper(),
            child: Container(
              color:Colors.deepPurpleAccent,
              height: 200.0,
            ),
          )
        ],
      )
    );
  }
}

class BottomClipperTest extends CustomClipper<Path>{
  @override
    Path getClip(Size size) {
      // TODO: implement getClip
      var path = Path();
      path.lineTo(0, 0);
      path.lineTo(0, size.height-30);
      var firstControlPoint =Offset(size.width/2,size.height);
      var firstEndPoint = Offset(size.width,size.height-30);

      path.quadraticBezierTo(firstControlPoint.dx, firstControlPoint.dy, firstEndPoint.dx, firstEndPoint.dy);

      path.lineTo(size.width, size.height-30);
      path.lineTo(size.width, 0);
    
      return path;

    }
    @override
      bool shouldReclip(CustomClipper<Path> oldClipper) {
        // TODO: implement shouldReclip
        return false;
      }

}
```


## 第16节: 波浪形式的贝塞尔曲线 

上节课已经对知识点有了了解，这节课我们主要就是加大一些难度，作个更复杂的贝塞尔裁切出来。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=70409103&page=16" scrolling="no" border="1"  width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![http://blogimages.jspang.com/FlutterDemo14.png](http://blogimages.jspang.com/FlutterDemo14.png)

这节课主要改造上节课的代码，作一个波浪形的贝塞尔裁切。波浪形式的只要把裁切变成两个对称的贝塞尔曲线就可以实现了。代码如下：（具体方法视频）

```
class BottomClipper extends CustomClipper<Path>{
  @override
    Path getClip(Size size) {
      // TODO: implement getClip
      var path = Path();
      path.lineTo(0, size.height-20);
      var firstControlPoint =Offset(size.width/4,size.height);
      var firstEndPoint = Offset(size.width/2.25,size.height-30);

      path.quadraticBezierTo(firstControlPoint.dx, firstControlPoint.dy, firstEndPoint.dx, firstEndPoint.dy);

      var secondControlPoint = Offset(size.width/4*3,size.height-80);
      var secondEndPoint = Offset(size.width,size.height-40);

      path.quadraticBezierTo(secondControlPoint.dx, secondControlPoint.dy, secondEndPoint.dx, secondEndPoint.dy);

      path.lineTo(size.width, size.height-40);
      path.lineTo(size.width, 0);

      return path;

    }
    @override
      bool shouldReclip(CustomClipper<Path> oldClipper) {
        // TODO: implement shouldReclip
        return false;
      }

}
```

这两节课的主要内容就是如何裁切和贝塞尔曲线的原理，其实裁切还有圆形裁切、圆角裁切和矩形裁切，因为都比较容易，我就不再讲解了。感兴趣的小伙伴可以自学一下。

## 第17节：打开应用的闪屏动画案例

打开一个APP，经常会看到精美的启动页，这种启动页也称为闪屏动画。它是从无到有有一个透明度的渐变动画的。图像展示完事后，才跳转到用户可操作的页面。这节课主要学习一下闪屏动画的制作。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=70687456&page=17" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![http://blogimages.jspang.com/FlutterDemo15.gif](http://blogimages.jspang.com/FlutterDemo15.gif)

### AnimationController 

`AnimationController`是`Animation`的一个子类，它可以控制`Animation`, 也就是说它是来控制动画的，比如说控制动画的执行时间。

我们这里有了两个参数 ：

- `vsync:this` :垂直同步设置，使用this就可以了。 
-  `duration` : 动画持续时间，这个可以使用`seconds`秒，也可以使用`milliseconds`毫秒，工作中经常使用毫秒，因为秒还是太粗糙了。

来看一段代码，这段代码就是控制动画的一个典型应用。

```
 _controller = AnimationController(vsync:this,duration:Duration(milliseconds:3000));
_animation = Tween(begin: 0.0,end:1.0).animate(_controller);
```

这段代码的意思是，设置一个动画控制器，这个动画控制器控制动画执行时间是3000毫秒。然后我们设置了一段动画，动画使用了动画控制器的约定。


### animation.addStatusListener 

`animation.addStatusListener`动画事件监听器，它可以监听到动画的执行状态，我们这里只监听动画是否结束，如果结束则执行页面跳转动作。

```
_animation.addStatusListener((status){
  if(status == AnimationStatus.completed){
    Navigator.of(context).pushAndRemoveUntil(
      MaterialPageRoute(builder: (context)=>MyHomePage()), 
      (route)=> route==null);
  }
});
```

- `AnimationStatus.completed`:表示动画已经执行完毕。
- `pushAndRemoveUntil`:跳转页面，并销毁当前控件。



### 案例重要代码

我们会了上边的知识点，做出案例就没什么问题了。我把复杂的代码都作了注释，小伙伴们应该可以看懂。

main.dart文件

```
import 'package:flutter/material.dart';
import 'splash_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch:Colors.blue,
      ),
      home:SplashScreen()
    );
  }
}
```


splash_screen.dart文件

```
import 'package:flutter/material.dart';
import 'home_page.dart';

class SplashScreen extends StatefulWidget {
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {

  AnimationController _controller;
  Animation _animation;

  void initState() { 
    super.initState();
    _controller = AnimationController(vsync:this,duration:Duration(milliseconds:3000));
    _animation = Tween(begin: 0.0,end:1.0).animate(_controller);


    /*动画事件监听器，
    它可以监听到动画的执行状态，
    我们这里只监听动画是否结束，
    如果结束则执行页面跳转动作。 */
    _animation.addStatusListener((status){
      if(status == AnimationStatus.completed){
        Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(builder: (context)=>MyHomePage()), 
          (route)=> route==null);
      }
    });
    //播放动画
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }


  @override
  Widget build(BuildContext context) {
    return FadeTransition( //透明度动画组件
      opacity: _animation,  //执行动画
      child: Image.network(  //网络图片
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546851657199&di=fdd278c2029f7826790191d59279dbbe&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112cb554438090000019ae93094f1.jpg%401280w_1l_2o_100sh.jpg',
        scale: 2.0,  //进行缩放
        fit:BoxFit.cover  // 充满父容器
      ),
    );
  }
}
```

home_page.dart文件

```
import 'package:flutter/material.dart';

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text('首页')),
      body:Center(
        child: Text('我是首页')
      )
    );
  }
}
```

希望小伙伴都能练习一下，做出这个动态图片的效果。

## 第18节：右滑返回上一页案例

在苹果手机上有一种才操作叫做右滑返回上一页，一些不错的应用都有类似的操作，随着苹果手机越来越多，这种操作开始普遍开来，在安卓手机上也开始使用。这节就来学习一下如何实现这种右滑返回上一页的操作。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=70687456&page=18" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


![http://blogimages.jspang.com/FlutterDemo16.gif](http://blogimages.jspang.com/FlutterDemo16.gif)


### Cupertino UI

其实早都知道Flutter有两套UI模板，一套是`material`,另一套就是`Cupertino`。`Cupertino`主要针对的的就是IOS系统的UI，所以用的右滑返回上一级就是在这个`Cupertino`里。

**Cupertino的引入方法**

直接使用import引入就可以了，代码如下:

```
import 'package:flutter/cupertino.dart';
```

引入了`cupertino`的包之后，就可以使用皮肤和交互效果的特性了。要用的右滑返回上一页也是皮肤的交互特性，直接使用就可以了。

### CupertinoPageScaffold 

这个和以前使用`material`的`Scaffold`类似，不过他里边的参数是`child`，例如下面的代码.
```
return CupertinoPageScaffold(
  child: Center(
    child: Container(
      height: 100.0,
      width:100.0,
      color: CupertinoColors.activeBlue,
      child: CupertinoButton(
        child: Icon(CupertinoIcons.add),
        onPressed: (){
          Navigator.of(context).push(
            CupertinoPageRoute(builder: (BuildContext context){
              return RightBackDemo();
            })
          );
        },
      ),
    ),
  ),
);
```

在`Cupertino`下也有很多`Widget`控件，他们都是以`Cupertino`开头的，这就让我们很好区分，当然两种皮肤是可以进行混用的。

### 整个案例代码

这个案例就两个主要文件，`main.dart`和`right_back_demo.dart`，具体解释可以看视频，代码如下:

**main.dart文件代码**

```
import 'package:flutter/material.dart';
import 'right_back_demo.dart';

void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
      theme:ThemeData(primarySwatch: Colors.blue),
      home: RightBackDemo(),
    );
  }
}

```

**right_back_demo。dart文件**

```
import 'package:flutter/cupertino.dart'; 

class RightBackDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      child: Center(
        child: Container(
          height: 100.0,
          width:100.0,
          color: CupertinoColors.activeBlue,
          child: CupertinoButton(
            child: Icon(CupertinoIcons.add),
            onPressed: (){
              Navigator.of(context).push(
                CupertinoPageRoute(builder: (BuildContext context){
                  return RightBackDemo();
                })
              );
            },
          ),
        ),
      ),
    );
  }
}
```

其实只要使用`CupertinoPageRoute`打开的子页面，就可以实现右滑返回上一级。所以整个案例并不难。希望小伙伴们有所收获。

## 第19节：ToolTip控件实例

轻提示的效果在应用中式少不了的，其实Flutter已经准备好了轻提示控件，这就是`toolTip`。 

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=70687456&page=19" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


![http://blogimages.jspang.com/FlutterDemo17.gif](http://blogimages.jspang.com/FlutterDemo17.gif)


### 轻量级操作提示

其实Flutter中有很多提示控件,比如`Dialog`、`Snackbar`和`BottomSheet`这些操作都是比较重量级的，存在屏幕上的时间较长或者会直接打断用户的操作。

当然我并不是说这些控件不好，根据需求的不同，要有多种选择，所以才会给大家讲一下轻量级操作提示`Tooltip`

`Tooltip`是继承于`StatefulWidget`的一个Widget，它并不需要调出方法，当用户长按被`Tooltip`包裹的Widget时，会自动弹出相应的操作提示。

### main.dart文件

这节课就用最简单代码给大家做一个轻量级提示案例出来。入口文件代码如下：

```
import 'package:flutter/material.dart';
import 'tool_tips_demo.dart';

void main()=> runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
      theme:ThemeData.light(),
      home: ToolTipDemo(),
    );
  }
}
```

### tool_tips_demo.dart文件

这个文件主要的用途就是承载轻提示控件，代码如下：

```
import 'package:flutter/material.dart';

class ToolTipDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text('tool tips demo')),
      body:Center(
        child: Tooltip(
          message: '不要碰我，我怕痒',
          child: Icon(Icons.all_inclusive),
        ),
      )
    );
  }
}

```

## 20节Draggable控件实例

Flutter提供了强大的拖拽控件，可以灵活定制，并且非常简单。这节课就学习一下Flutter拖拽控件，并根据学到的知识作一个拖拽案例。

这节课也是我们这个文章的最后一节，一共讲了20节，这20节算是一个Flutter进阶，是入门和实战的一个桥梁，在课程中我尽量靠近了平时工作的开发环境，无论hi编辑工具还是区分模块，都以实际工作为出发点，我相信只要你用心学习了这20节，一定是有所收获的。

<iframe src="//player.bilibili.com/player.html?aid=39709290&cid=71559162&page=20" scrolling="no" border="1" width="100%" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![http://blogimages.jspang.com/FlutterDemo18.gif](http://blogimages.jspang.com/FlutterDemo18.gif)

### Draggable Widget

`Draggable`控件负责就是拖拽，父层使用了`Draggable`，它的子元素就是可以拖动的，子元素可以实容器，可以是图片。用起来非常的灵活。

参数说明：

-  `data`: 是要传递的参数，在`DragTarget`里，会接受到这个参数。当然要在拖拽控件推拽到`DragTarget`的时候。
- `child`:在这里放置你要推拽的元素，可以是容器，也可以是图片和文字。
- `feedback`: 常用于设置推拽元素时的样子，在案例中当推拽的时候，我们把它的颜色透明度变成了50%。当然你还可以改变它的大小。
- `onDraggableCanceled`:是当松开时的相应事件，经常用来改变推拽时到达的位置，改变时用`setState`来进行。


代码:

```
Draggable(
  data:widget.widgetColor,
  child: Container(
    width: 100,
    height: 100,
    color:widget.widgetColor,
  ),
  feedback:Container(
    width: 100.0,
    height: 100.0,
    color: widget.widgetColor.withOpacity(0.5),
  ),
  onDraggableCanceled: (Velocity velocity, Offset offset){
    setState(() {
      this.offset = offset;
    });
  },
```

### DragTarget Widget

`DragTarget`是用来接收拖拽事件的控件，当把`Draggable`放到`DragTarget`里时，他会接收`Draggable`传递过来的值，然后用生成器改变组件状态。

- onAccept:当推拽到控件里时触发，经常在这里得到传递过来的值。
- builder: 构造器，里边进行修改child值。

```
DragTarget(onAccept: (Color color) {
  _draggableColor = color;
}, builder: (context, candidateData, rejectedData) {
  return Container(
    width: 200.0,
    height: 200.0,
    color: _draggableColor,
  );
}),

```

### 实例代码DEMO

main.dart 文件：

```
import 'package:flutter/material.dart';
import 'draggable_demo.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'Flutter Demo',
      theme:ThemeData(
        primarySwatch: Colors.blue
      ),
      home:DraggableDemo()
    );
  }
}
```

draggable_demo.dart 文件

```
import 'package:flutter/material.dart';

import 'draggable_widget.dart';

class DraggableDemo extends StatefulWidget {
  @override
  _DraggableDemoState createState() => _DraggableDemoState();
}

class _DraggableDemoState extends State<DraggableDemo> {
  Color _draggableColor = Colors.grey;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(
      children: <Widget>[
        DraggableWidget(
          offset: Offset(80.0, 80.0),
          widgetColor: Colors.tealAccent,
        ),
        DraggableWidget(
          offset: Offset(180.0, 80.0),
          widgetColor: Colors.redAccent,
        ),
        Center(
          child: DragTarget(onAccept: (Color color) {
            _draggableColor = color;
          }, builder: (context, candidateData, rejectedData) {
            return Container(
              width: 200.0,
              height: 200.0,
              color: _draggableColor,
            );
          }),
        )
      ],
    ));
  }
}
```

draggable_widget.dart 文件

```
import 'package:flutter/material.dart';

class DraggableWidget extends StatefulWidget {
  final Offset offset;
  final Color widgetColor;
  const DraggableWidget({Key key, this.offset, this.widgetColor}):super(key:key);
  _DraggableWidgetState createState() => _DraggableWidgetState();
}

class _DraggableWidgetState extends State<DraggableWidget> {
  Offset offset = Offset(0.0,0.0);
  @override
  void initState() {
    super.initState();
    offset = widget.offset;
  }

  @override
  Widget build(BuildContext context) {
   return Positioned(
     left: offset.dx,
     top:offset.dy,
     child: Draggable(
       data:widget.widgetColor,
       child: Container(
         width: 100,
         height: 100,
         color:widget.widgetColor,
       ),
       feedback:Container(
         width: 100.0,
         height: 100.0,
         color: widget.widgetColor.withOpacity(0.5),
       ),
       onDraggableCanceled: (Velocity velocity, Offset offset){
         setState(() {
            this.offset = offset;
         });
       },
     ),
   );
  }
}
```

这个案例做完，我们这篇文章就算结束了，我也希望你能有所收获。但是看一遍肯定什么都学不会，关键的是自己动手作一下，才可以有所收获。我在文章和课程中反复强调，希望小伙伴们真的能学会。




















