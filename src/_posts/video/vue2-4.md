---
category: 视频教程
tags:
  - Vue
date: 2017-04-09
title: 【第四季】Vue2.0视频教程-实例和内置组件（共4集）
vssue-title: vue2-4
---

概述：实例就是在构造器外部操作构造器内部的属性选项或者方法，就叫做实例？实例的作用就是给原生的或者其他javascript框架一个融合的接口或者说是机会，让Vue和其他框架一起使用。
<!-- more -->

##  第1节：实例入门-实例属性

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=e03918t5wy2&tiny=0&auto=0" allowfullscreen></iframe>

### Vue和Jquery.js一起使用
1、下载并引入jquery框架

下载可以去官网进行下载，我这里使用的版本是3.1.1，下载好后在需要的页面引入就可以了。当然你还有很多其它的方法引入jquery，只要可以顺利引入就可以了。

```html
	
<script < type="text/javascript" src="../assets/js/jquery-3.1.1.min.js"></script>
```
试着作一个案例，在DOM被挂载后修改里边的内容。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <script type="text/javascript" src="../assets/js/jquery-3.1.1.min.js"></script>
    <title>Early Examples Demo</title>
</head>
<body>
    <h1>Early Examples Demo</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            //在Vue中使用jQuery
            mounted:function(){
                $('#app').html('我是jQuery!');
            }
        })
    </script>
</body>
</html>

```
现在页面显示是：我是jQuery，而不是hello Vue了。

### 二、实例调用自定义方法

在Vue的构造器里我们写一个add方法，然后我们用实例的方法调用它。

构造器里的add方法：

```javascript
methods:{
    add:function(){
        console.log("调用了Add方法");
    }
}
```
实例调用：
```javascript
app.add();
```
PS：我们有可能把app.add()的括号忘记或省略，这时候我们得到的就是方法的字符串，但是并没有执行，所以必须要加上括号。

作业：利用console.log把app打印出来，看看里边到底包含了哪些属性和方法。因为里边的属性很多，这里只是简单的介绍。

## 第2节：实例方法

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=b0391n1b72x&tiny=0&auto=0" allowfullscreen></iframe>

### 一、$mount方法
$mount方法是用来挂载我们的扩展的，我们先来复习一下扩展的写法。

这里我们作了jspang的扩展，然后用$mount的方法把jspang挂载到DOM上，我们也生成了一个Vue的实例，直接看代码。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Examples Method Demo</title>
</head>
<body>
    <h1>Examples Method Demo</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>
    
    <script type="text/javascript">
      var jspang = Vue.extend({
          template:`<p>{{message}}</p>`,
          data:function(){
              return {
                  message:'Hello ,I am JSPang'
              }
          }
      })
      var vm = new jspang().$mount("#app")
    </script>
</body>
</html>

```
这段代码我们在学习extends的时候已经写过一次，这里就不作过多解释了。

### 二、$destroy() 卸载方法

用$destroy()进行卸载。

我写了一个button按钮，点击后卸载整个挂载。

html：
```html
<p><button onclick="destroy()">卸载</button></p>
```

javascript

```javascript
function destroy(){
   vm.$destroy();
}

```
PS:$destroy()后边必须要有括号，没有括号是无用的。

### 三、$forceUpdate() 更新方法

```javascript
vm.$forceUpdate()
```

### 四、$nextTick() 数据修改方法
当Vue构造器里的data值被修改完成后会调用这个方法，也相当于一个钩子函数吧，和构造器里的updated生命周期很像。

```javascript
function tick(){
    vm.message="update message info ";
    vm.$nextTick(function(){
        console.log('message更新完后我被调用了');
    })
}
```
### 安装Vue的控制台调试工具。

每个人的安装方法不同，不作太多的介绍，可能需要你科学上网。

## 第3节：实例事件

实例事件就是在构造器外部写一个调用构造器内部的方法。这样写的好处是可以通过这种写法在构造器外部调用构造器内部的数据。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=z0391czz0qp&tiny=0&auto=0" allowfullscreen></iframe>

我们还是写一个点击按钮，持续加1的例子。

一、$on  在构造器外部添加事件。

```javascript
app.$on('reduce',function(){
    console.log('执行了reduce()');
    this.num--;
});

```
$on接收两个参数，第一个参数是调用时的事件名称，第二个参数是一个匿名方法。

如果按钮在作用域外部，可以利用$emit来执行。

```javascript
//外部调用内部事件
function reduce(){
    app.$emit('reduce');
}
```

二、$once执行一次的事件

```javascript
app.$once('reduceOnce',function(){
    console.log('只执行一次的方法');
    this.num--;
 
});
```
三、$off关闭事件

```javascript
//关闭事件
function off(){
   app.$off('reduce');
}
```
## 第4节：内置组件 -slot讲解

slot是标签的内容扩展，也就是说你用slot就可以在自定义组件时传递给组件内容，组件接收内容并输出。
<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=y0391yc4zvx&tiny=0&auto=0" allowfullscreen></iframe>

先来定义一个<jspang></jspang>的组件，这个组件用来显示博主的一些信息。

我们在Vue 构造器里的data中给出了信息，信息如下：（博客地址，网名，使用技能）

```javascript
data:{
    jspangData:{
        bolgUrl:'http://jspang.com',
        netName:'技术胖',
        skill:'Web前端'
    }
},

```

我们用`<template></template>`标签的方式定义了组件：

```html
<template id="tmp">
    <div>
        <p>博客地址：</p>
        <p>网名：</p>
        <p>技术类型：</p>
        
    </div>
</template>
```

我们现在就可以用slot功能让组件接收传递过来的值，并在模板中接收显示。

slot的使用需要两步：
1、在HTML的组件中用slot属性传递值。

```html

<jspang>
    <span slot="bolgUrl">{{jspangData.bolgUrl}}</span>    
    <span slot="netName">{{jspangData.netName}}</span>    
    <span slot="skill">{{jspangData.skill}}</span>    
</jspang>
```
2、在组件模板中用<slot></slot>标签接收值。

```html

<template id="tmp">
    <div>
        <p>博客地址：<slot name="bolgUrl"></slot></p>
        <p>网名：<slot name="netName"></slot></p>
        <p>技术类型：<slot name="skill"></slot></p>
        
    </div>
</template>
```
我们贴出这个案例的全部代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Slot content extend Demo</title>
</head>
<body>
    <h1>Slot content extend Demo</h1>
    <hr>
    <div id="app">
    <jspang>
        <span slot="bolgUrl">{{jspangData.bolgUrl}}</span>    
        <span slot="netName">{{jspangData.netName}}</span>    
        <span slot="skill">{{jspangData.skill}}</span>    
    </jspang>
    </div>
 
 
<template id="tmp">
    <div>
        <p>博客地址：<slot name="bolgUrl"></slot></p>
        <p>网名：<slot name="netName"></slot></p>
        <p>技术类型：<slot name="skill"></slot></p>
        
    </div>
</template>
 
    <script type="text/javascript">
        var jspang={
            template:'#tmp'
        }
 
        var app=new Vue({
            el:'#app',
            data:{
               jspangData:{
                   bolgUrl:'http://jspang.com',
                   netName:'技术胖',
                   skill:'Web前端'
               }
            },
            components:{
                "jspang":jspang
            }
        })
    </script>
</body>
</html>

```

