---
category: 视频教程
tags:
  - React
date: 2018-06-27
title: TypeScript免费视频教程 ，Deno前置知识 (共15集)
vssue-title: type-script
---



近日Node.js之父瑞安达尔（Ryan Dahl）发布新的开源项目 deno，从官方介绍来看，可以认为它是下一代 Node，使用 Go 语言代替 C++ 重新编写跨平台底层内核驱动，上层仍然使用 V8 引擎，最终提供一个安全的 TypeScript 运行时。

甚至Dahl在公开场合表示Node.js已经无力回天，Deno将是他的代替品。我相信前端小伙伴们一定都听说了这个消息。

<!-- more -->

>本文首发[http://jspang.com](http://jspang.com) ，转载请标明出处，开源不易，且行且珍惜。

## 第01节：初识TypeScript

###  Deno都要来了，还不学TypeScript？

近日Node.js之父瑞安达尔（Ryan Dahl）发布新的开源项目 deno，从官方介绍来看，可以认为它是下一代 Node，使用 Go 语言代替 C++ 重新编写跨平台底层内核驱动，上层仍然使用 V8 引擎，最终提供一个安全的 TypeScript 运行时。

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=k0703owxwxm&tiny=0&auto=0" allowfullscreen></iframe>

甚至Dahl在公开场合标识Node.js已经无力回天，Deno将是他的代替品。我相信前端小伙伴们一定都听说了这个消息。

Deno开始使用后用TypeScript变成了一个必会的技能，但是很多小伙伴们还不太熟悉TypeScript的用法。其实TypeScript现在用的已经很广泛了，无论你使用ng、React还是Vue都可以使用TypeScript来实现的你JavaScript代码。

小伙伴们快准备好你们的电脑，跟着技术胖一起学习吧。再不学习就被这个时代抛弃了，正如那句流行的话：

>时代抛弃你时，连一声再见都不会说。

TypeScript是什么？

TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，TypeScript 在 JavaScript 的基础上添加了可选的静态类型和基于类的面向对象编程。

其实TypeScript就是相当于JavaScript的增强版，但是最后运行时还要编译成JavaScript。TypeScript最大的目的是让程序员更具创造性，提高生产力，它将极大增强JavaScript编写应用的开发和调试环节，让JavaScript能够方便用于编写大型应用和进行多人协作。

### TypeScript和JavaScript的对比 

TypeScript 与JavaScript两者的特性对比，主要表现为以下几点：

- TypeScript是一个应用程序级的JavaScript开发语言。（这也表示TypeScript比较牛逼，可以开发大型应用，或者说更适合开发大型应用）
- TypeScript是JavaScript的超集，可以编译成纯JavaScript。这个和我们CSS离的Less或者Sass是很像的，我们用更好的代码编写方式来进行编写，最后还是有好生成原生的JavaScript语言。
- TypeScript跨浏览器、跨操作系统、跨主机、且开源。由于最后他编译成了JavaScript所以只要能运行JS的地方，都可以运行我们写的程序，设置在node.js里。
- TypeScript始于JavaScript，终于JavaScript。遵循JavaScript的语法和语义，所以对于我们前端从业者来说，学习前来得心应手，并没有太大的难度。
- TypeScript可以重用JavaScript代码，调用流行的JavaScript库。
- TypeScript提供了类、模块和接口，更易于构建组件和维护。



## 第02节：开发环境的安装


已经对TypeScript有了大概的了解，我的博客全是注重实际，所以不讲那么多理论了，直接开始上手。这节我们开始搭建TypeScript的开发环境。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=k0706x0q8su&tiny=0&auto=0" allowfullscreen></iframe>

### 1.安装Node.js

安装Node.js非常简单，只要到Node官网下载一个最新版本就可以了：https://nodejs.org/zh-cn/.在windows上的安装方法和安装QQ一样。我这里就不重复描述了。
安装好后，可以打开命令行工具，同时按下win+R，然后输入cmd就可以打开，打开后输入

```
node -v
npm -v
```
如果看到版本号说明已经安装成功了，看不到版本号就说明你的node.js没有安装成功。

### 2.安装TypeScript包

在刚才的命令行窗口继续输入如下命令：
```
npm install typescript -g
tsc --version
```
需要注意的是：如果你是mac电脑，要使用`sudo npm install typescript -g`指令进行安装

### 3.编写HelloWorld程序

1. 初始化项目：进入你的编程文件夹后，可以使用`npm init -y`来初始化项目，生成package.json文件。

2. 创建`tsconfig.json`文件，在终端中输入`tsc --init`：它是一个`TypeScript`项目的配置文件，可以通过读取它来设置`TypeScript`编译器的编译参数。

3. 安装@types/node,使用`npm install @types/node --dev-save`进行安装。这个主要是解决模块的声明文件问题。

4. 编写`HelloWorld.ts`文件，然后进行保存，代码如下。

```
var a:string = "HelloWorld"
console.log(a)
```

5. 在Vscode的任务菜单下，打开运行生成任务，然后选择tsc：构建-tsconfig.json，这时候就会生成一个`helloWorld.js`文件

6. 在终端中输入`node helloWorld.js`就可以看到结果了。

**总结：**这节课虽然简单，但是小伙伴们一定要动手操作，如果不操作，或者开发环境配置不好，下面的课程就不好学习了。

## 第03节：变量类型的那些事

这个文章很久没有更新了，很多小伙伴刚开始看就放下了（我对不起你们），也有很多人认为技术胖放弃了这篇文章。我是不会放弃的，让我们快复习一下前两节的课程后，继续学习吧。`TypeScript`最大的一个特点就是变量是强类型的，也就是说，在声明变量的时候，我们必须给他一个类型。比如：字符串、数字、布尔，枚举........ 就用这节课全面了解一下typeScript的声明类型。

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=u0769bpuyub&tiny=0&auto=0" allowfullscreen></iframe>

TypeScript中的数据类型有：
- Undefined :
- Number:数值类型;
- string : 字符串类型;
- Boolean: 布尔类型；
- enum：枚举类型；
- any :  任意类型，一个牛X的类型；
- void：空类型；
- Array : 数组类型;
- Tuple : 元祖类型；
- Null ：空类型。

### Undefined类型

在js中当你定义了一个变量，但没有给他赋予任何值的时候，他就是Undefined类型。这可能和你以前学的语言稍有不同，其他语言会有个类型的默认值。

我们现在来看一个例子，比如我们要声明一个年龄的变量`age`,我们要使用数值类型，也就是`Number`,但是我们不给他任何的值，我们只是在控制台给它输出，然后我们来看结果。

新建demo01.ts文件，下入下面代码：
```
//声明数值类型的变量age，但不予赋值
var age:number
console.log(age)
```
写完后保存代码，进行运行任务，然后生成demo01.js，在终端中使用`node demo01.js`来进行查看运行结果。控制台输出了`undefined`,跟我们预想的一模一样。

### Number类型

在TypeScript中，所有的数字都是Number类型，这不分是整数还是小数。比如下面我们声明一个年龄是18岁，身高是178.5厘米。

新建一个文件demo01_1.ts文件，写入下面代码：
```
var age:number = 18
var stature:number = 178.5
console.log(age)
console.log(stature)
```
然后执行转换，查看结果，我们可以在控制台看到结果已经顺利输出，没有任何意外。

**在TypeScrip中有几种特殊的Number类型** 我们需要额外注意一下：
- NaN：它是Not a Number 的简写，意思就是不是一个数值。如果一个计算结果或者函数的返回值本应该是数值，但是由于种种原因，他不是数字。出现这种状况不会报错，而是把它的结果看成了NaN。（这就好比我们去泰国外，找了一个大长腿、瓜子脸、水蛇腰的女神。房也开好了，澡也洗完了，发现跟我们的性别统一，我们只能吃个哑巴亏，你绝不会声张）
- Infinity :正无穷大。
- -Infinity：负无穷大。


### string类型
由单引号或者双引号括起来的一串字符就是字符串。比如：“技术胖”,'jspang.com'。看下面的代码：

demo01_2.ts
```
var jspang:string = "技术胖 jspang.com"
console.log(jspang)
```
这时候控制图就会乖乖的输出`技术胖 jspang.com`.

### boolean布尔类型

作任何业务逻辑判断都要有布尔类型的参与，通过对与错的判断是最直观的逻辑处理。boolean类型只有两种值，true和false。

```
var b:boolean = true
var c:boolean = false
```

### enum 类型

这个世界有很多值是多个并且是固定的，比如：
- 世界上人的类型：男人、女人、中性
- 一年的季节：春、夏、秋、冬 ，有四个结果。

这种变量的结果是固定的几个数据时，就是我们使用枚举类型的最好时机：

demo01_3.ts

```
enum REN{ nan , nv ,yao}
console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
```
如果我们想给这些枚举赋值，可以直接使用`=`,来进行赋值。
```
enum REN{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN.yao)  //返回了妖 这个字

```

### any类型
一个写惯了前端的人，有时候不自觉的就分不清类型了。这是个不好的习惯，也是前端的痛，就因为这个原因，JavaScript也多次被人诟病说大型项目不适合用JavaScript。但是习惯一旦养成，改是需要时间和磨练的。TypeScript友好的为我们提供了一种特殊的类型`any`，比如我们在程序中不断变化着类型，又不想让程序报错，这时候就可以使用any了。

```
var t:any =10 
t = "jspang"
t = true
console.log(t)
```

Null类型：

与 Undefined 类似，都代表空。Null 代表是引用类型为空。意义不大，但是有用。后续学习中会使用到。

注意：剩余的数组、元组、void 会在后续的章节中讲解。

## 第04节：TypeScript的函数



比如现在我们有个找小姐姐的需求：

- 找18岁的小姐姐
- 找28岁的小姐姐
- 找38岁的小姐姐

这个时候你会怎么作？难道要把代码写3遍吗？也许新手会这样作的，但是作为一个有多年开车经验的老司机，技术胖肯定会建立一个找小姐姐的机器，这就是函数。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=b0771lx7413&tiny=0&auto=0" allowfullscreen></iframe>



正经点说是：

我们可以把功能相近的需求封装成一个独立的代码块，每次传入不同的变量或参数，就可以实现不同的结果。

### 定义函数

函数就相当于一个工具，如果你想使用这个工具，就要先制作这个工具。这就是我们说的定义函数。在TypeScript里定义函数跟JavaScript稍微有些不同。我们来定义找小姐姐的函数吧。

```
function searchXiaoJieJie(age:number):string{
    return '找到了'+age+'岁的小姐姐' 
}
var age:number = 18
var result:string = searchXiaoJieJie(age)
console.log(result)
```
上面的程序，先用function关键字声明了一个`searchXiaoJieJie`的方法，然后我们使用了他，并返回了给我们结果。

需要注意的是：
 1. 声明（定义）函数必须加 function 关键字；
 2. 函数名与变量名一样，命名规则按照标识符规则；
 3. 函数参数可有可无，多个参数之间用逗号隔开；
 4. 每个参数参数由名字与类型组成，之间用分号隔开；
 5. 函数的返回值可有可无，没有时，返回类型为 void；
 6. 大括号中是函数体。

### 形参和实参

**形参的使用**

函数定义的时候写的参数是形参。从字面意义上我们可以看出，形参就是形式上的参数。我们定义了形参也就规定了此函数的参数个数和参数类型，规范了函数。
```
function searchXiaoJieJie(age:number):string{
    return '找到了'+age+'岁的小姐姐' 
}
```
比如这个函数，就定义了一个形参，它的类型是数值类型。


**实参的使用**

调用函数时传递的具体值就是实参。同样从字面理解，实参就是真实的参数，我们在使用的时候，具体真实传递过去的就是实参，比如18，20，22，这些具体的参数就是实参。

打个比方，我们去按摩，需要找技师，当我们还没有找的时候，这时候就是形参。当一个个技师站好了，让你选。你最终选择了一个，这就是实参。实参在真实使用时才传递。

```
var result:string = searchXiaoJieJie(age)
```

**注意**

在函数调用的时候，我们需要按照形参的规则传递实参，有几个形参就要传递几个实参，并且每一个实参的类型要与对应的形参类型一致。

### TypeScript语言中的函数参数

TypeScript的函数参数是比较灵活的，它不像那些早起出现的传统语言那么死板。在TypeScript语言中，函数的形参分为：可选形参、默认形参、剩余参数形参等。

**1.有可选参数的函数**

可选参数，就是我们定义形参的时候，可以定义一个可传可不传的参数。这种参数，在定义函数的时候通过`?`标注。

比如我们继续作找小姐姐的函数，这回不仅可以传递年龄，还可以选择性的传递身材。我们来看如何编写。

```
function searchXiaoJieJie2(age:number,stature?:string):string{

    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'

}

var result:string  =  searchXiaoJieJie2(22,'大长腿')
console.log(result)

```

**2.有默认参数的函数**

**有默认参数**就更好理解了，就是我们不传递的时候，他会给我们一个默认值，而不是`undefined`了。我们改造上边的函数，也是两个参数，但是我们把年龄和身材都设置默认值，这就相当于熟客，我们直接来一句**照旧**是一样的。

```
function searchXiaoJieJie2(age:number=18,stature:string='大胸'):string{

    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'

}

var result:string  =  searchXiaoJieJie2()
console.log(result)
```

**3.有剩余参数的函数**

有时候我们有这样的需求，我传递给函数的参数个数不确定。例如：我找小姐姐的时候有很多要求，个人眼光比较挑剔。这时候你不能限制我，我要随心所欲。

说的技术点，剩余参数就是形参是一个数组，传递几个实参过来都可以直接存在形参的数组中。

```
function searchXiaoJieJie3(...xuqiu:string[]):string{
    
    let  yy:string = '找到了'
    for (let i =0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'、'
        }
    }
    yy=yy+'的小姐姐'
    return yy

}

var result:string  =  searchXiaoJieJie3('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result)
```

有了这个参数形式，我们好像无所不能了，我爱编程，编程让我幸福。好吧，这节课我们就先到这里，下节课我们继续找小姐姐去。不是，不是，是继续学习。

## 第05节：三种函数的定义方式


上节课用参数的形式来区分了TypeScript里函数的定义方法，但这并不能完全包含所有的定义方法，所以再以声明的形式，而不是参数来总结几个方法。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=u0774o8wo8t&tiny=0&auto=0" allowfullscreen></iframe>



### 函数声明法

函数声明法创建函数是最常用的函数定义法。使用function关键字和函数名去定义一个函数。

```
function add(n1:number,n2:number):number{
    return n1+n2
}

```

###  函数表达式法

函数表达式法是将一个函数赋值给一个变量，这个变量名就是函数名。通过变量名就可以调用函数了。这种方式定义的函数，必须在定义之后，调用函数。下面例子中等号右边的函数没有函数名，称为匿名函数。

```
var add = function(n1:number,n2:number):number{
    return n1+n2
}

console.log(add(1,4))

```
 ###  箭头函数

箭头函数是 ES6 中新增的函数定义的新方式，我们的 TypeScript 语言是完全支持 ES6 语法的。箭头函数定义的函数一般都用于回调函数中。
```
var add = (n1:number,n2:number):number=>{
    return n1+n2
}

console.log(add(1,4))
```

## 第06节：函数中变量的作用域

通过两节对TypeScript的学习，再加上如果你以前JavaScript的知识很扎实，你一定知道函数类似于一个封闭的盒子。盒子里面的世界和外面的世界是不一样的。有点像人的外在表现和内在性格，虽然相辅相成，相生相克，但是完全不一样。定义在函数内部的变量与定义在函数外部的变量也是不一样的，他们起作用的范围也不一样。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=v07754wu694&tiny=0&auto=0" allowfullscreen></iframe>


>每个变量都有一个起作用的范围，这个范围就是变量的作用域。在TypeScript语言中变量作用域划分是以函数为标准的。

### 函数作用域演示

我们来举个例子，现在要制作一个整形的方法，然后在函数里用`var`定义一个`yangzi`的变量,我们再函数的外部读取这个变量，你会发现是读取不到的。
```
function zhengXing():void{
    var yangzi = '刘德华'
    console.log(yangzi)
}
zhengXing()
console.log(yangzi)
```

### 认识全局变量和局部变量

现在我们对函数的作用域有了一点了解，那么到底什么是全局变量，什么又是局部变量那？这个问题很多面试中都会提问，所以跟你的前途息息相关。

-  **局部变量**：函数体内定义的变量就是局部变量。
-  **全局变量**:  函数体外 定义的变量就是全局变量。

我们改造上边的程序，把`yangzi`办理移动到全局，然后再进行输出。

```
var yangzi = '刘德华'

function zhengXing():void{
    
    console.log('技术胖整形成了'+yangzi+'的样子')
}
zhengXing()
console.log(yangzi)
```

这时候`yangzi`变量是全局的，所以在函数内也可以调用，在函数外也可以调用。

### 局部变量和全局变量重名

当局部变量与全局变量重名的时候，在函数体内是局部变量起作用；如果重名，就有变量提升，这是一个坑，小伙伴们必须要注意

还是上边整形的例子，技术胖是想整形成刘德华，但是函数体内部声明了一个马德华。虽然一字之差，但是样子可是完全不同的。我们来看代码如何实现：
```
var yangzi:string = '刘德华'

function zhengXing():void{
    var yangzi:string = '马德华'

    console.log('技术胖整形成了'+yangzi+'的样子')
}
zhengXing()
console.log(yangzi)
```

这回你会发现，技术胖并没有变成刘德华而是变成了马德华。那你说我我想变成刘德华，我在函数没声明新变量前打印到控制台行不行？

```
var yangzi:string = '刘德华'

function zhengXing():void{
    console.log('技术胖整形成了'+yangzi+'的样子')
    var yangzi:string = '马德华'

    console.log('技术胖整形成了'+yangzi+'的样子')
}
zhengXing()
console.log(yangzi)
```
代码改造成了这样，但是你会发现，我们输出的结果如下：
```
技术胖整形成了undefined的样子
```
产生这个结果的原因就是变量提升，他的真实代码是这样的。
```
var yangzi:string = '刘德华'

function zhengXing():void{
    var  yangzi:string 
    console.log('技术胖整形成了'+yangzi+'的样子')
    yangzi = '马德华'

    console.log('技术胖整形成了'+yangzi+'的样子')
}
zhengXing()
console.log(yangzi)
```

也就是当内部声明了和全局的变量同名时，就会出现变量提升的效果，声明语句会提升到函数的第一句。这就是著名的变量提升效果。

### let关键字变量的作用域

在早期javascript的变量作用域只有全局和局部，并且是以函数划分的，但在其他语言中，作用域的划分是以一对大括号作为界限的。

所以，JavaScript就遭到了无数开发者的吐槽，甚至说javascript不适合开发大型语言，容易内存溢出。JavaScript团队意识到了这一点，在ES6中推出了let关键字。

使用let关键字的变量就是一个块级作用域变量。希望大家在实际工作中多使用let来声明你的变量，让你的程序更有条例。
来看一端程序：

```

function zhengXing():void{
   var yangzia:string = '刘德华'
   {
        let  yangzib:string = '小沈阳'
        console.log('技术胖整形成了'+yangzib+'的样子')
   }

    console.log('技术胖整形成了'+yangzia+'的样子')
    console.log('技术胖整形成了'+yangzib+'的样子')
}
zhengXing()

```

这时候编译后，我们运行，你会发现是可以执行的，并且打印到了控制台正确的结果。
这是因为ts编译成js，他自动给我们加了ES5的处理，ES5里是没有let关键字的，现在我们再改一下编译好的程序，你会发现`yangzib`这个关键字就找不到了（详情看视频吧）。

## 第07节:引用类型-数组

TypeScript中的数据分为值类型和引用类型。值类型我们前几节课讲的都是，但是引用类型我们在这套视频中还没有讲解。我们先来看一个引用类型的例子，来个初步印象。

<iframe frameborder="0"  width="100%"  src="https://v.qq.com/txp/iframe/player.html?vid=k07766g845j" allowFullScreen="true"></iframe>

### 初识引用类型

现在把“技术胖”虚拟成一个对象，然后来使用过它，具体看下面的代码：

```
let jspang = {
    name:'技术胖',
    website:'jspang.com',
    age:18,
    saySometing:function(){
        console.log('为了前端技术')
    }
}
console.log(jspang.name)
jspang.saySometing()
```
通过上面的案例，我们看到引用类型是一种复合的数据类型，引用类型中封装了很多对属性，每一对属性都有属性名和属性值。属性名是字符串，属性值是任意类型的数据。可以通过变量名和属性名获取属性的值或者调用属性的方法。


在TypeScript中也给我们提供了一些引用类型，例如：Array（数组）、String（字符串）、Date（日期对象）、RegExp（正则表达式）等。我们将用几节课的时间来学习这些用用类型，以及其中封装的常用方法和属性。

### 初始化数组的两种方法

你学习这个课程一定对js中的数组有所了解，要使用一个数组，首先要学会创建一个数组。创建数组时可以指定数组的容量，也可以直接向数组中存储数据。

**声明数组的方法**

声明数组跟声明一个普通变量是一样的，都是通过 var let 关键字实现的，只不过数组的类型说明符比较复杂而已。

```
let arr1:number[ ]     //声明一个数值类型的数组
let arr2:Array<string>  //声明一个字符串类型的数组
```

**给数组赋值**

数组是存储大量数据的集合，声明数组之后，需要给数组存储数据。这时候有两种方法：

- 字面量赋值法：直接使用“[ ]”对数组进行赋值。
- 构造函数赋值法：

** 字面量赋值法**

```
//定义一个空数组，数组容量为0
let arr1:number[] = [] 
//定义一个数组时，直接给数组赋值
let arr2:number[] = [1,2,3,4,5]
//定义数组 的同事给数组赋值
let arr3:Array<string> = ['jspang','技术胖','金三胖']
let arr4:Array<boolean> = [ true,false,false]

```

需要注意的是，在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。
```
//报错！ 必须存储number类型的数据
let arr5:number[] = [1,2,true]
```

**构造函数赋值法**

在 TypeScript 中使用 Array 这个引用类型来表示数组的，那么每一个数组都是 Array 类型的实例。那么，我们在创建数组的时候也可以使用构造函数来进行赋值。

```
let arr1:number[] = new Array()
let ara2:number[] = new Array(1,2,3,4,5)
let arr3:Array<string> = new Array('jspang','技术胖','金三胖')
let arr4:Array<boolean> = new Array(true,false,false)
```
这两种方法，都可以给数组进行赋值，在实际开发中使用哪种方法都是可以的。

### 认识元祖，一种特殊的数组

元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比如，你可以定义一对值分别为string和number类型的元祖。元祖在实际开发中使用的非常少，大家了解一下就可以了，不做过多介绍。

```
//声明一个元祖类型
let x : [string,number]
//正确的初始化
x = ['hello',10]
//错误的初始化方法
x = [10,'hello']
```

TypeScript中其它的数组知识跟JavaScript中的一样，我再这里就不磨磨唧唧的浪费大家时间了。感兴趣的可以写一下JS中的数组方法。

在实际项目中数组的使用还是非常非常多的，这也算是一种前端开发者的硬功夫，所以要多练习。


##  第08节:引用类型-字符串啊

通过上节学习你一定对引用类型有了一个很好的认识。在TypeScript中存在两种类型的字符串：基本类型字符串和引用类型字符串。
<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=b07782cio1h" allowFullScreen="true"></iframe>

### 字符串的两种类型

- 基本类型字符串：由单引号或者双引号括起来的一串字符串。
- 引用类型字符串：用new 实例化的 String类型。

那为什么会出现这种情况那，有的小伙伴会认为是不是当时JavaScript的开发人员脑子进水了。其实不是的，在前端开发，操作字符串是最普遍的一种操作。JavaScript的开发人员为了大家更容易的操作字符串，有了引用类型的字符串就可以给字符串增加一系列方法了。

```
let jspang:string = '技术胖'
let jspanga:String = new String("jspang.com")
console.log(jspang)
console.log(jspanga)
````
编译以后我们使用`node` 运行这段代码，你可以看到控制台输出了的结果，这可能跟你心里想的不太一样。

```
技术胖
[String: 'jspang.com']
```
**需要说明**的是这两种声明字符串的方法没有什么不同。基本类型的字符串可以直接使用引用类型的属性和方法。

### 字符串的长度length

使用length就可以来获取字符串的长度，当然作为一个男人知道自己的长度是非常有必要的.....不好意思，我又开始污了。那我们来看看下面获取长度的列子。
```
let jspang:string = '技术胖'
let jspanga:String = new String("jspang.com")
console.log(jspang.length)
console.log(jspanga.length)
```

### 字符串常用的方法

为了一些刚刚接触前端的小伙伴，我还是讲解一下字符串的常用方法，如果你已经有了很好的JS的基础，下面的内容可以完全跳过的。

**查找字符串**

从头部查找字符串直接使用indexOf就可以了。

基本语法：`str.indexOf(subStr)`

我们来一个找小姐姐的例子：现在我们写一段话，这段话当然是一个字符串，比如：“清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。”然后找出“小姐姐”的位置。

```
let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"
console.log(something.indexOf(xiaoJieJie))   //19
```
如果我们查找的字符串没有找到，则返回-1。

从字符串尾部开始查找字符串的位置，使用lastIndexOf( )
```
let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"
console.log(something.lastIndexOf(xiaoJieJie)) //19
```
需要注意的是，返回的都是字符串的下标。所以返回的值是相同的。并不是返回从后到前的下标位置。这个新手很容易采坑。

**截取字符串**

基本语法如下：
```
str.substring(startIndex,[endIndex])
```
参数 startIndex 表示开始下标，endIndex 表示结束下标，endIndex 参数是可选的。该方法的作用是从指定的开始下标开始截取字符串，截取到 endIndex 的下标之前，如果没有 endIndex，则截取到字符串结束。

我们还是上面的例子，现在我们截取不同的字符串。
```
let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"
console.log(something.substring(8))
console.log(something.substring(8,14))
```

**替换字符串**

基本语法如下：

```
str.replace(subStr,newstr);
```
substr 表示被替换的子串，newstr 表示要替换成的子串。该方法的作用是在 str 中从头部开始找 substr 子串，找到之后，把 substr 用 newstr 替换掉。需要注意的是如果 str 中有多个 substr 子串，只有第一个 substr 子串会被替换掉。

现在我们要把上面字符串里的小姐姐替换成小哥哥，我们看看具体代码的实现。

```
let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"
console.log(something.replace(xiaoJieJie,'小哥哥'))
```

就给大家讲这么多方法吧，如果你想了解更多操作，可以看javascript相关的书籍来进行学习。下节课我们来看看引用类型的-日期相关的操作。


##  第09节:引用类型-日期对象


TypeScript中使用Date这个引用类型来存储日期对象，如果你要声明一个日期变量时，记得也要注明它的类型是Date。

<iframe frameborder="0" width="100%" src="https://v.qq.com/txp/iframe/player.html?vid=y0779axpf32" allowFullScreen="true"></iframe>

**创建日期对象**

日期对象是Date的实例，可以使用构造函数的方法进行创建。并且构造函数中可以传递多种类型的参数。

### 1.不传递任何参数

构造函数中不传递参数时，Date（）构造函数将根据当前日期和时间创建一个Date对象。我们看下面的例子理解一下。
```
let d:Date = new Date()
console.log(d)
```
这时候运行`node`的结果如下：
```
2018-09-06T06:48:12.504Z
```

### 2.传递一个整数

传递一个整数，这个整数代表的是距离`1970-01-01 00:00:00`的毫秒数（具体为什么是这个时间，小伙伴可以自己百度一下）。例如：传入参数为1000，将创建一个表示`1970-01-01 00:00:01`的日期对象。

我们举个例子，传递一个整数，看一下结果。
```
let d:Date = new Date(1000)
let da:Date = new Date(2000)
console.log(d)  //1970-01-01T00:00:01.000Z
console.log(da) //1970-01-01T00:00:02.000Z
```

### 3.传递一个字符串

如果传递一个表示日期的字符串，就会生成相对应的日期对象。字符串的格式常用:`yyyy/MM/dd hh:mm:ss`，`yyyy-MM-dd hh:mm:ss`，`yyyy-MM-ddThh:mm:ss`等,具体可以参看下面的例子。

```
let d1:Date = new Date('2018/09/06 05:30:00')
let d2:Date = new Date('2018-09-06 05:30:00')
let d3:Date = new Date('2018-09-06T05:30:00')
console.log(d1)
console.log(d2)
console.log(d3)
```

当然，他们打印出来的结果时完全相同的，所以在开发中你不用太过于纠结使用哪种方式进行声明。

### 4.传递表示年月日时分秒的变量
```
let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);
```
- year 表示年份，4位数字。
- month表示月份，数值是0(1月)~11(12月)之间的整数。
- day 表示日期。数值是1~31之间的整数。
- hours 表示小时，数值是0-23之间的整数。
- minutes 表示分钟数，数值是0~59之间的整数。
- seconds 表示秒数，数值是0~59之间的整数。
- ms 表示毫秒数，数值是0~999之间的整数。


至于Date类型的方法，跟JavaScript完全一样，所以我就不在重复讲述了，要不就变成讲JavaScript了。

##  第10节:引用类型-正则表达式

前端对用户输入的信息进行验证，比如手机号，年龄，三围（我又要开始污了）。用于验证最好最强大的手段目前为止就是正则表达式。TypeScript的RegExp类表示正则表达式。这节我们就学习一下TypeScript里的正则表达式吧。

### 认识正则表达式

创建正则表达式和字符串犹如一对好基友（类似），创建正则表达式也提供了两种方法，一种是才采用new 关键字，另一种是采用字面量的方式。
<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=j0782fk1aeu" allowFullScreen="true"></iframe>

**构造函数法**

构造函数中可以传一个参数，也可以传递两个参数。一个是字符串描述，另一个是修饰符，比如g是全局修饰符，i是忽略大小写，m是多行模式。

举个例子：

```
let reg1:RegExp = new RegExp("jspang")  //表示字符串规则里含有jspang
console.log(reg1)
let reg2:RegExp = new RegExp("jspang",'gi')
console.log(reg2)
```
其实现在打印出来的就是字面量的赋值方法。我们可以在视频中看到输出的结果。


**字面量法**

其实构造函数的方法我个人用的是比较少的，我都会使用字面量法来声明正则表达式。
```
let reg3:RegExp = /jspang/
let reg4:RegExp = /jspang/gi
```

### RegExp中的常用方法

RegExp对象包含两个方法：test( )和exec( ),功能基本相似，用于测试字符串匹配。

-  **test(string)** ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
- **exec(string)** :  用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。

来看一个test的例子：
```
let reg1:RegExp =  /jspang/i
let website:string = 'jspang.com'
let result:boolean = reg1.test(website)
console.log(result)    //true
```
这时候控制台打印出来的是true，那么我们再来看一下`exec`的使用方法。
```
let reg1:RegExp =  /jspang/i
let website:string = 'jspang.com'
console.log(reg1.exec(website))
//[ 'jspang', index: 0, input: 'jspang.com' ]
```
输出的结果变为了`[ 'jspang', index: 0, input: 'jspang.com' ]`。

剩下的就是正则表达式的语法了，这个好像是学程序的都要进行学习。如果你还不属性，可以查看一下这篇文章：http://www.runoob.com/regexp/regexp-tutorial.html


正则在工作中的用法很多，需要你慢慢积累经验。

## 第11节: 面向对象编程-类的声明和使用

TypeScript提供了强大的类的支持，作为一个程序员一定要学会类的使用，因为只有会了`类`才可以new出对象来，否者可能会单身一辈子哦（开个玩笑） 。类的出现可以让前端程序员抽象层次、增加维护性和复用性。当然这一系列的类的操作，我们都叫他面向对象编程。TypeScript就是一个基于类的面向对象编程语言。
<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=h07836ifxmv" allowFullScreen="true"></iframe>

### 认识类与对象

>  类是对象具体事务的一个抽象，对象是类的具体表现。


举个例子，比如说，有人给你介绍对象，会问你的要求。那么，你的要求是：身高165以上，体型偏瘦，长头发，大眼睛。从事正当稳定的工作，会做饭等等。这些要求就是对你心中理想伴侣的一个抽象，就是类。介绍人按照你的要求给你找的这些女生，就是类的实例，就是对象。



### 类的定义

认识TypeScript基于类的面向对象编程，就需要从一个简单的类开始。

我们模拟一个小姐姐的类，小姐姐需要有年龄，有姓名，会说“小哥哥好”。

看下面的例子：
```
class XiaoJieJie{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age 
    }
    say(){
        console.log('小哥哥好')
    }
}
let jiejie:XiaoJieJie = new XiaoJieJie('范冰冰',18)
console.log(jiejie)
jiejie.say()
```

我们先用class关键字声明了一个类，并在里边声明了`name`和`age`属性。`constructor`为构造函数。构造函数的主要作用是给类中封装的属性进行赋值。

使用和定义类其实很简单，关键是理解类的思想。要有抽象逻辑的能力，这样才能复用和增强维护性。

## 第12节: 面向对象编程-修饰符
类中的修饰符是最常见的，TypeScript为我们准备了丰富的修饰符，小伙伴们可以和我一起学习一下修饰符。
<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=v0785kgzaih" allowFullScreen="true"></iframe>

### 访问修饰符

TypeScript语言和Java还有C#很像（因为我只会这两个面向对象的语言），类中属性的访问可以用访问修饰符来进行限制。访问修饰符分为：public、protected、private。

- public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
- protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
- private : 私有修饰符，只可以在类内使用private修饰的属性和行为。

我们还是写一个小姐姐的类，但是我们使用一些访问修饰符来修饰。

详细讲解，请看视频。

```
class XiaoJieJie2{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex=sex
        this.name=name
        this.age=age
    }
    public sayHello(){
        console.log('小哥哥好')
    }

    protected sayLove(){
        console.log('我爱你')
    }
}

var jiejie2:XiaoJieJie2 = new XiaoJieJie2('女','热巴',22)

console.log(jiejie2.sex)
console.log(jiejie2.name)   //报错
console.log(jiejie2.age)    //报错
jiejie2.sayHello()
jiejie2.sayLove()    //报错
```

你可以在写代码的时候，就会发现，编辑器已经给我们报错了。

### 只读属性修饰符

使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里被初始化（注意）。

我们声明一个man的抽象类，里边只有一个属性`sex`，并且是只读。
```
class Man{
    public readonly sex:string = '男'
}

var man:Man = new Man()
man.sex='女'
```
在编辑器里你就会发现报错了，我们就不强行编译了。


## 第13节: 面向对象编程-继承和重写

我录这节课的时候，炎热的夏天正好退去，秋高气爽，天蓝云白，又到了人类繁衍生息的季节(污是必须的)。那我们就讲讲繁衍的事情......继承和重写。
<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=y0701hgq182" allowFullScreen="true"></iframe>

### 类的继承

在使用TypeScript这门语言时，一个最重要基本功就是面向对象编程，那对类的扩展就变的格外重要，扩展经常使用的手段就是继承。

>继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以新建父类中没有的属性和方法。


我们先来创建一个父类，这个父类完全抽象了技术胖的特点。
```
class Jspang{
    public name:string
    public age : number
    public skill: string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let jspangObj:Jspang = new Jspang('技术胖',18,'web')
jspangObj.interest()
```

我作了一个我自己的抽象类，有姓名，有年龄，有技能，然后还有一个函数是兴趣。类创建好之后我们就进行了实例化。

现在技术胖要繁衍生息了，跟准备生个儿子（也就是我们说的子类）。那我的儿子一定要比我强啊，他不仅完全继承了我的基因，还增加了帅气的属性和赚钱的本领。

我们看看如何用程序实现。
```
class JsShuai extends Jspang{
    public xingxiang:string = '帅气'
    public zhuangQian(){
        console.log('一天赚了一个亿')
    }
}

let shuai = new JsShuai("技术帅",5,'演讲')
shuai.interest()
shuai.zhuangQian()
```

`extends`关键字就是继承的重点，它相当于我们扑倒女神，小蝌蚪从身体内迸发的一瞬间，所以我们一定要牢记这种感受.....不，是关键词.

但是有一点需要我们注意，TypeScript不支持多重继承。

### 类方法的重写

重写就是在子类中重写父类的方法。例如，我的儿子“技术帅”发现兴趣爱好是找小姐姐，完成不了“”一天赚一个亿“”的目标，它需要多个兴趣，开平台网站。这时候我们就用到了重写。看下面的列子代码：

```
class JsShuai extends Jspang{
    public xingxiang:string = '帅气'
    public interest(){
        super.interest()
        console.log('建立电商平台')
    }
    public zhuangQian(){
        console.log('一天赚了一个亿')
    }
}
```
先是继承了父类的方法，然后通过super关键字调用了父类的方法，实现了技能的增加。

这节课就到这里，希望小伙伴们听过之后都锻炼一下生孩子的技能。不是,是写代码的技能，实际写两遍。

## 第14节:面向对象编程-接口

作为一个前端，和后端最多的交流就是向后端要接口，而这些接口是如何定义的，有时候我们好像漠不关心。其实前端也有接口的定义，特别如果你要靠着前端技术作一个全栈，那接口的编写也是必不可少的一项技能。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=x0708c7x8sv" allowFullScreen="true"></iframe>

在通常情况下，接口是用来定义一些规范，使用这些接口，就必须实现按照接口中的规范来走。

> 在面向对象的语言中，术语interface经常被用来定义一个不包含数据和逻辑代码但是用来签名定义了行为的抽象类型。

### 认识接口

定义接口的关键字是`interface`。我们现在就来定义一个接口，这个接口是用来规范丈夫的。

```
interface Husband {
    sex:string
    interest:string
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务'}
console.log(myhusband)
```

我们通过接口，定义了一个找老公的接口，并且给他了两个必选项：性别和兴趣爱好.

### 可选参数的接口

对老公的标准如果我们有一些可选项，这些并不是都需要显示出来的，在有些情况下，我们只需要传入部分参数。我们可以使用问好的形式来设置可选参数。

比如现在我们还希望老公的标准，有一条是给我“买包包”，但是这个是隐喻的，不是直接显示出来的。我们修改我们的接口。

```
interface Husband {
    sex:string
    interest:string
    maiBaoBao?:Boolean
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务',maiBaoBao:true}
console.log(myhusband)
```
上面的代码`maiBaoBao`选项就是可选的，可以写也可以不写。那撇开程序不谈，你写成为丈夫的几率肯定要大一些。

### 规范函数类型接口

我们还可以使用接口来规范函数类型的接口，比如现在要找老公这件事，我们规定有一些资源，然后我们需要哪些资源，在函数中进行匹配，最后返回是否匹配成功。

```
interface  SearchMan{
    (source:string,subString:string):boolean
}

let mySearch:SearchMan

mySearch = function(source:string,subString:string):boolean{
    let flag =source.search(subString)
    return (flag != -1)
} 

console.log(mySearch('高、富、帅、德','胖')) //false
```

接口还可以规范类，但形式都和上满讲的差不多，我就不再这里浪费小伙伴的时间了。技术胖工作中利用接口就是规范程序标准化使用的，在大团队中经常使用。但是如果是小团队，我觉的接口使用的并不多。



## 第15节:面向对象编程-命名空间

在制作大型应用的时候，为了让程序更加有层次感和变量之间不互相干扰，我们可以使用命名空间来构建程序。举个小例子：比如“德华”这件事，帅哥也有叫德华的，二师兄也有叫德华的。那我们要如何区分那。这对于女孩子选老公来说非常重要啊。

<iframe frameborder="0" width="100%" src="https://v.qq.com/txp/iframe/player.html?vid=a071153hip4" allowFullScreen="true"></iframe>
### 命名空间的使用

当然命名空间就是解决这个问题的，命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象。我们来看一个例子：

```
namespace shuaiGe{
    export class Dehua{
        public name:string = '刘德华'
        talk(){
            console.log('我是帅哥刘德华')
        }
    }
}

namespace bajie{
    export class Dehua{
        public name:string = '马德华'
        talk(){
            console.log('我是二师兄马德华')
        }
    }
}

let dehua1:shuaiGe.Dehua   = new shuaiGe.Dehua()
let dehua2:shuaiGe.Dehua   = new bajie.Dehua()
dehua1.talk()
```

程序我会在视频中详细讲解，通过命名空间我们很好的把程序变的清晰了，各位小姐姐也再也不会刘德华和马德华傻傻分不清了。

如果你已经学到了这里，我建议你也学一下ES6的语法，因为Typescript的语法和ES6的有很多都一样，比如说promise，async/await所以我就不在这里讲述了。有兴趣的小伙伴可以学一下。好的，我们下套课程见了。




















