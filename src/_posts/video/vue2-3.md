---
category: 视频教程
tags:
  - Vue
date: 2017-03-26
title: 【第三季】Vue2.0视频教程-选项（共6集）
vssue-title: vue2-3
---

前言：Vue2.0视频教程已经出了两季，这些都是基础，为的就是能让新手快速进入。这一季讲的是基础中的选项，选项就是在Vue构造器里的配置功能的前缀（Vue已经给我们定义好了），Vue有很多选项，我们将在这一级教程中一一介绍。
<!-- more -->

## 第1节：propsData Option  全局扩展的数据传递

propsData 不是和属性有关，他用在全局扩展时进行传递数据。先回顾一下全局扩展的知识，作一个<header></header>的扩展标签出来。实际我们并比推荐用全局扩展的方式作自定义标签，我们学了组件，完全可以使用组件来做，这里只是为了演示propsData的用法。
<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=c0387wtdk8e&tiny=0&auto=0" allowfullscreen></iframe>

代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>PropsData Option Demo</title>
</head>
<body>
    <h1>PropsData Option Demo</h1>
    <hr>
    <header></header>
 
    <script type="text/javascript">
       var  header_a = Vue.extend({
           template:`<p>{{message}}</p>`,
           data:function(){
               return {
                   message:'Hello,I am Header'
               }
           }
       }); 
       new header_a().$mount('header');
    </script>
</body>
</html>
```
扩展标签已经做好了，这时我们要在挂载时传递一个数字过去，我们就用到了propsData。
我们用propsData三步解决传值：
1.在全局扩展里加入props进行接收。propsData:{a:1}
2.传递时用propsData进行传递。props:[‘a’]
3.用插值的形式写入模板。{{ a }}
完整代码：
```javascript
var  header_a = Vue.extend({
    template:`<p>{{message}}-{{a}}</p>`,
    data:function(){
        return {
            message:'Hello,I am Header'
        }
    },
    props:['a']
}); 
new header_a({propsData:{a:1}}).$mount('header');
```
总结：propsData在实际开发中我们使用的并不多，我们在后边会学到Vuex的应用，他的作用就是在单页应用中保持状态和数据的。

## 第2节：computed Option  计算选项

computed 的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号……。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=t0387ucvtjh&tiny=0&auto=0" allowfullscreen></iframe>

### 一、格式化输出结果：

我们先来做个读出价格的例子：我们读书的原始数据是price:100    但是我们输出给用户的样子是（￥100元）。
主要的javascript代码：

```javascript
computed:{
    newPrice:function(){
        return this.price='￥' + this.price + '元';
    }
}
```
全部代码:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Computed Option 计算选项</title>
</head>
<body>
    <h1>Computed Option 计算选项</h1>
    <hr>
    <div id="app">
        {{newPrice}}
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                price:100
            },
            computed:{
                newPrice:function(){
                    return this.price='￥' + this.price + '元';
                }
            }
        })
    </script>
</body>
</html>
```
现在输出的结果就是：￥100元。

### 二、用计算属性反转数组

例如：我们得到了一个新闻列表的数组，它的顺序是安装新闻时间的顺序正序排列的，也就是早反生的新闻排在前面。这是反人类的，我们需要给他反转。这时我们就可以用到我们的计算属性了。

没有排序的新闻列表，是安装日期正序排列的。

```javascript
var newsList=[
    {title:'香港或就“装甲车被扣”事件追责 起诉涉事运输公司',date:'2017/3/10'},
    {title:'日本第二大准航母服役 外媒：针对中国潜艇',date:'2017/3/12'},
    {title:'中国北方将有明显雨雪降温天气 南方阴雨持续',date:'2017/3/13'},
    {title:'起底“最短命副市长”：不到40天落马，全家被查',date:'2017/3/23'},
];
```


我们希望输出的结果：


- 起底“最短命副市长”：不到40天落马，全家被查-2017/3/23
- 中国北方将有明显雨雪降温天气 南方阴雨持续-2017/3/13
- 日本第二大准航母服役 外媒：针对中国潜艇-2017/3/12
- 香港或就“装甲车被扣”事件追责 起诉涉事运输公司-2017/3/10
我们的在computed里的javascript代码：我们用js原生方法给数组作了反转。

```javascript
computed:{
    reverseNews:function(){
        return this.newsList.reverse();
    }
}

```
总结：computed 属性是非常有用，在输出数据前可以轻松的改变数据。所以说这节课的代码必须要多敲几遍，加深印象。

## 第3节：Methods Option  方法选项

在以前的学习中，已经大量的使用了构造器里的methods选项，但是并没有仔细和系统的讲解过，这节课我们用点时间把methods这个选项涉及的东西都讲一讲。

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=w0388d4eq9l&tiny=0&auto=0" allowfullscreen></iframe>

我们还是复习一下最简单的使用方法，一个数字，每点击一下按钮加1.（做过很多次了，你们可以先不看代码和视频自己试着写一下）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>methods Option</title>
</head>
<body>
    <h1>methods Option</h1>
    <hr>
    <div id="app">
        {{ a }}
        <p><button @click="add">add</button></p>
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                a:1
            },
            methods:{
                add:function(){
                    this.a++
                }
            }
        })
    </script>
</body>
</html>
```
### 一、methods中参数的传递

使用方法和正常的javascript传递参数的方法一样，分为两部：

- 在methods的方法中进行声明，比如我们给add方法加上一个num参数，就要写出`add:function(num){}`.
- 调用方法时直接传递，比如我们要传递2这个参数，我们在button上就直接可以写。`<button @click=”add(2)”></button>`.

现在知道了加参数的方法，看一段完整的代码，代码中给add添加了num参数，并在按钮上调用传递了。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>methods Option</title>
</head>
<body>
    <h1>methods Option</h1>
    <hr>
    <div id="app">
        {{ a }}
        <p><button @click="add(2)">add</button></p>
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                a:1
            },
            methods:{
                add:function(num){
                    if(num!=''){this.a+=num}
                    else{this.a++}
                }
            }
        })
    </script>
</body>
</html>

```

这时，再点击按钮是每次加2个数字。
### 二、methods中的$event参数

传递的$event参数都是关于你点击鼠标的一些事件和属性。我们先看看传递的方法。

传递：
```
<button @click=”add(2,$event)”>add</button> 。
```

我们这时候可以打印一下，看看event到底是个怎样的对象。你会发现，它包含了大部分鼠标事件的属性。
![](http://7xjyw1.com1.z0.glb.clouddn.com/web20170326113703.png)

### native  给组件绑定构造器里的原生事件。

在实际开发中经常需要把某个按钮封装成组件，然后反复使用，如何让组件调用构造器里的方法，而不是组件里的方法。就需要用到我们的.native修饰器了。

现在我们把我们的add按钮封装成组件：

声明btn对象：

```javascript
var btn={
    template:`<button>组件Add</button>`     
}
```

在构造器里声明：

```javascript
components:{
    "btn":btn
 }
```

用.native修饰器来调用构造器里的add方法

```html
<p><btn @click.native="add(3)"></btn></p>
```

### 四、作用域外部调用构造器里的方法

这种不经常使用，如果你出现了这种情况，说明你的代码组织不够好。

```html
  <button onclick="app.add(4)" >外部调用构造器里的方法</button>
```

## 第4节：Watch 选项 监控数据

数据变化的监控经常使用，我们可以先来看一个简单的数据变化监控的例子。例如天气预报的穿衣指数，它主要是根据温度来进行提示的，当然还有其它的，咱们就不考虑了。
<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=o0388g4s6xb&tiny=0&auto=0" allowfullscreen></iframe>

### 一、看一个监控变化的案例

温度大于26度时，我们建议穿T恤短袖，温度小于26度大于0度时，我们建议穿夹克长裙，温度小于0度时我们建议穿棉衣羽绒服。

先来模拟一个温度变化的情况：我们使用按钮来加减温度。

二、用实例属性写watch监控

有些时候我们会用实例属性的形式来写watch监控。也就是把我们watch卸载构造器的外部，这样的好处就是降低我们程序的耦合度，使程序变的灵活。

```javascrip
app.$watch('xxx',function(){})
```

还是上边的案例我们改成实例方法的模式。

```javascript
app.$watch('temperature',function(newVal,oldVal){
    if(newVal>=26){
        this.suggestion=suggestion[0];
    }else if(newVal<26 && newVal >=0)
    {
        this.suggestion=suggestion[1];
    }else{
        this.suggestion=suggestion[2];
    }
 
})
```

效果和上面是一样的。

## 第5节：Mixins 混入选项操作

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=a038878er31&tiny=0&auto=0" allowfullscreen></iframe>

Mixins一般有两种用途：
1. 在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。
2. 很多地方都会用到的公用方法，用混入的方法可以减少代码量，实现代码重用。

### 一、Mixins的基本用法

我们现在有个数字点击递增的程序，假设已经完成了，这时我们希望每次数据变化时都能够在控制台打印出提示：“数据发生变化”.

代码实现过程:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Mixins Option Demo</title>
</head>
<body>
    <h1>Mixins Option Demo</h1>
    <hr>
    <div id="app">
        <p>num:{{ num }}</p>
        <P><button @click="add">增加数量</button></P>
    </div>
 
    <script type="text/javascript">
        //额外临时加入时，用于显示日志
        var addLog={
            updated:function(){
                console.log("数据放生变化,变化成"+this.num+".");
            }
        }
        var app=new Vue({
            el:'#app',
            data:{
                num:1
            },
            methods:{
                add:function(){
                    this.num++;
                }
            },
            mixins:[addLog]//混入
        })
    </script>
</body>
</html>
```
### mixins的调用顺序

从执行的先后顺序来说，都是混入的先执行，然后构造器里的再执行，需要注意的是，这并不是方法的覆盖，而是被执行了两边。

在上边的代码的构造器里我们也加入了updated的钩子函数：

```
updated:function(){
      console.log("构造器里的updated方法。")
},
```

这时控制台输出的顺序是：

```shell
mixins数据放生变化,变化成2.
构造器里的updated方法。
```
PS：当混入方法和构造器的方法重名时，混入的方法无法展现，也就是不起作用。

### 三、全局API混入方式

我们也可以定义全局的混入，这样在需要这段代码的地方直接引入js，就可以拥有这个功能了。我们来看一下全局混入的方法：
```javascritp
Vue.mixin({
    updated:function(){
        console.log('我是全局被混入的');
    }
})
```

PS：全局混入的执行顺序要前于混入和构造器里的方法。

## 第6节：Extends Option  扩展选项

通过外部增加对象的形式，对构造器进行扩展。它和我们上节课讲的混入非常的类似。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=l03884omoq0&tiny=0&auto=0" allowfullscreen></iframe>

### 一、extends我们来看一个扩展的实例。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Extends Optin Demo</title>
</head>
<body>
    <h1>Extends Optin Demo</h1>
    <hr>
    <div id="app">
        {{message}}
        <p><button @click="add">add</button></p>
    </div>
 
    <script type="text/javascript">
        var bbb={
            created:function(){
                console.log("我是被扩展出来的");
            },
            methods:{
                add:function(){
                    console.log('我是被扩展出来的方法！');
                }
            }
        };
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            methods:{
                add:function(){
                    console.log('我是原生方法');
                }
            },
            extends:bbb
        })
    </script>
</body>
</html>
```
### 二、delimiters 选项

因为这节课内容比较少，所以我们把要讲的最后一个选项一起讲了。delimiters的作用是改变我们插值的符号。Vue默认的插值是双大括号{{}}。但有时我们会有需求更改这个插值的形式。

```
delimiters:['${','}']
```

现在我们的插值形式就变成了${}。这季的内容就这些了，我们下季见吧。
