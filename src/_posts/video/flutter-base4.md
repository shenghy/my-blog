---
category: 视频教程
tags:
  - Flutter
date: 2019-02-01
title: Flutter免费视频第四季-页面导航和其他
vssue-title: Flutter-base04
---

到目前位置，作一个页面已经没有什么问题了，接下来需要学习一下页面间的跳转，学会了这一季内容，就可以从一个单页面的应用制作一个项目了。

不过提前跟小伙伴们说一下，其实这章也是有难度的，因为这跟前端的导航或者说超链接有所不同。如果你能有空杯心态，学习来会容易一点。

不过你不要害怕，其实也不难，大不了多练习几遍，熟练一下就好。

学习这个视频，你最好先把Flutter的前三季给看了，否则你可能看蒙圈。

- 第一季Flutter视频教程地址：[http://jspang.com/post/flutter1.html](http://jspang.com/post/flutter1.html)


- 第二季Flutter视频教程地址：[http://jspang.com/post/flutter2.html](http://jspang.com/post/flutter2.html)

- 第三季Flutter视频教程地址：[http://jspang.com/post/flutter3.html](http://jspang.com/post/flutter3.html)

<!-- more -->

>学习讨论QQ群：806799257  

>入群问题：Flutter出自于哪个公司？

>入群答案：google


## 第01节：一般页面导航和返回

![alt](http://jspang.com/static/upload/20181213/pvA-e9vkrNiXVFUm6xXMO9zf.jpg)

导航的使用在任何程序里都至关重要，这也是一个程序的灵魂。那这节我们就开始学习导航的知识。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=66380305&page=20" scrolling="no" width="100%" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### RaisedButton按钮组件

它有两个最基本的属性：
- child：可以放入容器，图标，文字。让你构建多彩的按钮。
- onPressed：点击事件的相应，一般会调用`Navigator`组件。

我们在作页面导航时，大量的使用了`RaisedButton`组件，这个组件的使用在实际工作中用的也比较多。

### Navigator.push 和 Navigator.pop

- `Navigator.push`：是跳转到下一个页面，它要接受两个参数一个是上下文`context`，另一个是要跳转的函数。

- `Navigator.pop`：是返回到上一个页面，使用时传递一个context（上下文）参数，使用时要注意的是，你必须是有上级页面的，也就是说上级页面使用了`Navigator.push`。

### 写一个Demo

我们现在就来作一个简单的案例，我们打开一个页面，页面上只有一个简单的按钮，按钮写着“查看商品详情页面”，然后点击后进入下一个页面，页面有一个按钮，可以直接返回。

![alt](http://jspang.com/static/upload/20181213/BYN5e6kWp08BM9k6oQpEMilD.jpg)

代码如下，一定要动手敲一敲哦。

```
import 'package:flutter/material.dart';

void main(){
  runApp(MaterialApp(
    title:'导航演示1',
    home:new FirstScreen()
  ));
}

class FirstScreen extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return new Scaffold(
      appBar: AppBar(title:Text('导航页面')),
      body:Center(
        child:RaisedButton(
          child:Text('查看商品详情页面'),
          onPressed: (){
            Navigator.push(context,new  MaterialPageRoute(
              builder:(context) =>new SecondScreen())
            );
          },
        )
      )
    );
  }
}

class SecondScreen extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar:AppBar(title:Text('技术胖商品详情页')),
      body:Center(child:RaisedButton(
        child:RaisedButton(
          child:Text('返回'),
          onPressed: (){
            Navigator.pop(context);
          },
        )
      ))
    );
    
  }
}

```

填坑，如果是1.0以下版本，热更新的时候会有时不能实现导航，这个需要你重新启动一下虚拟机。

## 第02节：导航参数的传递和接收（1）

这节主要学习页面跳转的时候参数的传递和接受。什么是参数的传递和接受那？就是比如我们来到了娱乐场所，然后进来一队漂亮的服务人员，这时候我们需要挑选，服务人员身上的号码或者名称就是我们的参数，当我们把号码告诉给领班，这个小姐姐就可以为我们服务了。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=66380305&page=21" scrolling="no" width="100%" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

这个挑选小姐姐的过程就是参数的传递和接受，用在程序上解释就是比如你进入一个商品选择列表，当你想选择一个商品的具体信息的时候，你就要传递商品编号，详细页面接受到编号后，显示出不同的内容。


### Awesome Flutter snippets组件的使用

因为这节课我们的代码有些多，这时候我们要加快敲代码的速度，可以使用VSCode 中的`Awesome Flutter snippets`插件。它可以帮忙我们快速生成常用的Flutter代码片段。

比如输入`stlss`就会给我们生成如下代码：
```
class name extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: child,
    );
  }
}

```
安装完成后，我们可以看这个插件的说明，可以快速生成很多代码片段，我就不一个个给大家试了，小伙伴们可以自己测试。熟练掌握后，能大大加快我们的代码编写速度。


### 声明数据结构类

Dart中可以使用类来抽象一个数据，比如我们模仿一个商品信息，有商品标题和商品描述。我们定义了一个Product类，里边有两个字符型变量，title和description。

- title:是商品标题。
- description: 商品详情描述

代码如下:

```
class Product{
  final String title;  //商品标题
  final String description;  //商品描述
  Product(this.title,this.description);
}
```

### 构建一个商品列表

作一个商品的列表，这里我们采用动态的构造方法，在主方法里传递一个商品列表（List）到自定义的Widget中。

先来看看主方法的编写代码:

```
void main(){
  runApp(MaterialApp(
    title:'数据传递案例',
    home:ProductList(
      products:List.generate(
        20, 
        (i)=>Product('商品 $i','这是一个商品详情，编号为:$i')
      ),
    )
  ));
}
```
上面的代码是主路口文件，主要是在home属性中，我们使用了ProductList，这个自定义组件，而且时候会报错，因为我们缺少这个组件。这个组件我们传递了一个products参数，也就是商品的列表数据，这个数据是我们用`List.generate`生成的。并且这个生成的List原型就是我们刚开始定义的Product这个类（抽象数据）。

ProductList自定义组件的代码：

```
class ProductList extends StatelessWidget{
  final List<Product> products;
  ProductList({Key key,@required this.products}):super(key:key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text('商品列表')),
      body:ListView.builder(
        itemCount:products.length,
        itemBuilder: (context,index){
          return ListTile(
            title:Text(products[index].title),
            onTap:(){
            }
          );
        },
      )
    );
  }
}
```

先接受了主方法传递过来的参数，接受后用`ListView.builder`方法，作了一个根据传递参数数据形成的动态列表。


## 第03节：导航参数的传递和接收（2）

接着上节课的代码讲解，上节课已经有了商品列表，下面要做的就是把商品数据传递过去，然后显示商品详情页面。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=66380305&page=22" scrolling="no" width="100%" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


### 导航参数的传递
我们还是使用`Navigator`组件，然后使用路由`MaterialPageRoute`传递参数，具体代码如下。

```
Navigator.push(
  context, 
  MaterialPageRoute(
    builder:(context)=>new ProductDetail(product:products[index])
  )
);
```
这段代码要写在onTap相应事件当中。这时候`ProductDetail`会报错，因为我们还没有生命这个组件或者说是类。

### 子页面接受参数并显示

现在需要声明`ProductDetail`这个类（组件），先要作的就是接受参数，具体代码如下。

```
class ProductDetail extends StatelessWidget {
  final Product product;
  ProductDetail({Key key ,@required this.product}):super(key:key);


  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title:Text('${product.title}'),
      ),
      body:Center(child: Text('${product.description}'),)
    );
  }
}
```

先接受了参数，并把数据显示在了页面中。





### Demo全部代码如下 

为了更好的帮助大家学习，我把所有的传递参数和接受参数的代码附在了下面。

```
import 'package:flutter/material.dart';

//传递的数据结构,也可以理解为对商品数据的抽象
class Product{
  final String title;  //商品标题
  final String description;  //商品描述
  Product(this.title,this.description);
}

void main(){
  runApp(MaterialApp(
    title:'数据传递案例',
    home:ProductList(
      products:List.generate(
        20, 
        (i)=>Product('商品 $i','这是一个商品详情，编号为:$i')
      ),
    )
  ));
}

class ProductList extends StatelessWidget{
  final List<Product> products;
  ProductList({Key key,@required this.products}):super(key:key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text('商品列表')),
      body:ListView.builder(
        itemCount:products.length,
        itemBuilder: (context,index){
          return ListTile(
            title:Text(products[index].title),
            onTap:(){
              Navigator.push(
                context, 
                MaterialPageRoute(
                  builder:(context)=>new ProductDetail(product:products[index])
                )
              );
            }
          );
        },
      )
    );
  }
}

class ProductDetail extends StatelessWidget {
  final Product product;
  ProductDetail({Key key ,@required this.product}):super(key:key);


  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title:Text('${product.title}'),
      ),
      body:Center(child: Text('${product.description}'),)
    );
  }
}

```

## 第04节：页面跳转并返回数据


这节课学一下页面跳转后，当我们返回页面时返回结果到上一个页面（也就是父页面）。这样的场景经常用于，我们去子页面选择了一项选项，然后把选择的结果返回给父级页面。

这节课要作的例子是这样的，要去找小姐姐，当进入房间后，找到自己喜欢的小姐姐，然后小姐姐给了我们电话，我们这时候就在主页面显示出选择的小姐姐电话。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=67489625&page=23" width="100%"  scrolling="no" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 异步请求和等待

Dart中的异步请求和等待和ES6中的方法很像，直接使用async...await就可以实现。比如下面作了一个找小姐姐的方法，然后进行跳转，注意这时候是异步的。等待结果回来之后，我们再显示出来内容。具体代码如下：

```
  _navigateToXiaoJieJie(BuildContext context) async{ //async是启用异步方法

    final result = await Navigator.push(//等待
      context, 
      MaterialPageRoute(builder: (context)=> XiaoJieJie())
      );
      
      Scaffold.of(context).showSnackBar(SnackBar(content:Text('$result')));
  }
}
```

### SnackBar的使用

`SnackBar`是用户操作后，显示提示信息的一个控件，类似`Tost`，会自动隐藏。`SnackBar`是以`Scaffold`的`showSnackBar`方法来进行显示的。

```
Scaffold.of(context).showSnackBar(SnackBar(content:Text('$result')));
```

### 返回数据的方式

返回数据其实是特别容易的，只要在返回时带第二个参数就可以了。

```
 Navigator.pop(context,'xxxx');  //xxx就是返回的参数
```

### 找小姐姐Demo代码

这节课的代码其实挺多的，我把所有代码都放到下面，你可以在看完视频后，照着练习。

```
import 'package:flutter/material.dart';

void main(){
  runApp(MaterialApp(
    title:'页面跳转返回数据',
    home:FirstPage()
  ));
}

class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(title:Text("找小姐姐要电话")),
      body:Center(
        child: RouteButton(),
      )
    );
  }
}

//跳转的Button
class RouteButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed:(){
          _navigateToXiaoJieJie(context);
      },
      child: Text('去找小姐姐'),
    );
  }

  _navigateToXiaoJieJie(BuildContext context) async{ //async是启用异步方法

    final result = await Navigator.push(//等待
      context, 
      MaterialPageRoute(builder: (context)=> XiaoJieJie())
      );

      Scaffold.of(context).showSnackBar(SnackBar(content:Text('$result')));
  }
}

class XiaoJieJie extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title:Text('我是小姐姐')
      ),
      body:Center(
        child:Column(
          children: <Widget>[
            RaisedButton(
              child: Text('大长腿小姐姐'),
              onPressed: (){
                Navigator.pop(context,'大长腿:1511008888');
              },
            ) ,
            RaisedButton(
              child: Text('小蛮腰小姐姐'),
              onPressed: (){
                Navigator.pop(context,'大长腿:1511009999');
              },
            ) ,
          ],
        ) 
      ) ,
    );
  }
}
```

## 第05节：静态资源和项目图片的处理

我们讲图片组件的时候，多使用了网络图片进行讲解，所以造成了小伙伴不会使用项目资源图片，这是我的锅，所以在这里给大家补上。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=67628784&page=24" width="100%"  scrolling="no" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


### pubspec.yaml 文件

如果想配置项目资源文件，就需要使用`pubspec.yaml`文件，需要把资源文件在这里声明。

比如在项目根目录下新建了一个`images`文件夹，文件夹下面放了一个图片，图片的名称叫做`blogtouxiang.jpg`，那我们在`pubspec.yaml`文件里就要写如下代码进行声明。

```
  assets:
    - images/blogtouxiang.jpg
```

### 使用项目图片资源

有了声明后，我们就可以直接在项目中引用这个文件了。这里使用最简单的代码结构，只用了一张图片。代码如下:

```
import 'package:flutter/material.dart';

void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Image.asset('images/blogtouxiang.jpg'),
    );
  }
}
```

这时候已经在项目中引入成功了，可以预览看一下效果。当然样子很丑，这里主要时学知识，就不做过多的修饰了。

## 第06节：Flutter客户端打包

到现在为止，我相信小伙伴都能做出一些漂亮的页面了，也有了难道朋友面前显一显的冲动。想要安装到手机上，我们必须要进行打包，这节课我们就学学Android客户端如何打包apk。

<iframe src="//player.bilibili.com/player.html?aid=35800108&cid=67489625&page=24" width="100%"  scrolling="no" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

其实这个打包的坑还是比较多的，官方文档显然是站在大神级程序员的角度写的，所以如果你看文档，特别是前端，那基本是打不成功的。

不要怕，我这里就详细的把打包的过程和坑给大家演示一下。

### 配置APP的图标


想配置APP的图片，你需要找到下面的目录：

> 项目根目录/android/app/src/main/res/

进入之后你会看到很多mipmap-为前缀命名的文件夹，后边的是像素密度，可以看出图标的分辨率。

- mdpi (中)   ~160dpi
- hdpi （高） ~240dip 
- xhdpi （超高） ~320dip 
- xxhdpi （超超高） ~480dip 
- xxxhdpi （超超超高） ~640dip 

将对应像素密度的图片放入对应的文件夹中,图片记得用png格式，记得名字要统一，才能一次性进行配置。

### AndroidManifest.xml 文件

这个文件主要用来配置APP的名称、图标和系统权限，所在的目录在:
> 项目根目录/android/app/src/main/AndroidManifest.xml

```
android:label="flutter_app"   //配置APP的名称，支持中文
android:icon="@mipmap/ic_launcher" //APP图标的文件名称
```

### 生成 keystore

这里的坑挺多的，小伙伴一定要注意。官方写的非常简单，只要在终端运行如下代码就可以成功,但事实是报错。

```
keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```
报错截图如下：

![alt](http://jspang.com/static/upload/20181217/5xuQKZ9PfP4YniYgWcNR53j4.png)

根本找不到这个目录，真的很坑，其实我们只是没有配置环境变量。但是为了一个包配置环境变量是不知道的。

这时候可以用下面的命令找到keytool.exe的位置。

```
flutter doctor -v
```

![alt](http://jspang.com/static/upload/20181217/cHrgJ3SdAqFk1Ivta82vIP7g.png)

这时候你直接拷贝命令并进行输入，但这里也有个坑，就是如果文件夹中间带有空空，你需要用带引号扩上。

```
D:\Program\Android\'Android Studio'\jre\bin\keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```
这就可以了吗？那你就太天真了，还是会报错。

![alt](http://jspang.com/static/upload/20181217/7dTEF6Pshi4qew0-p-MWXNtX.png)

这个错误的主要问题是目录不存在和没有写权限，所以我们要更换一个有写权限的目录。我们把命令改成了下面的形式。

```
 D:\Program\Android\'Android Studio'\jre\bin\keytool -genkey -v -keystore D:\key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```
这时候就可以创建成功了。你的D盘下面就会有一个Jks的文件，记住这个文件不能共享给任何人。

有了这个key.jks文件后，可以到项目目录下的`android`文件夹下，创建一个名为key.properties的文件，并打开粘贴下面的代码。

```
storePassword=<password from previous step>    //输入上一步创建KEY时输入的 密钥库 密码
keyPassword=<password from previous step>    //输入上一步创建KEY时输入的 密钥 密码
keyAlias=key
storeFile=<E:/key.jks>    //key.jks的存放路径
```
我的文件最后是这样的：
```
storePassword=123123
keyPassword=123123
keyAlias=key
storeFile=D:/key.jks
```
这个工作中也不要分享出去哦，这个Key就算生成成功了。

###  配置key注册

key生成好后，需要在build.gradle文件中进行配置。这个过程其实很简单，就是粘贴复制一些东西，你是不需要知道这些文件的具体用处的。

第一项：

进入项目目录的/android/app/build.gradle文件，在`android{`这一行前面,加入如下代码：

```
def keystorePropertiesFile = rootProject.file("key.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
```
把如下代码进行替换
```
buildTypes {
    release {
        signingConfig signingConfigs.debug
    }
}
```
替换成的代码：

```
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile file(keystoreProperties['storeFile'])
        storePassword keystoreProperties['storePassword']
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}
```

### 生成apk

直接在终端中输入：

```
flutter build apk
```

这时候就打包成功了，剩下的安装过程我就省略，不作过多的介绍了。