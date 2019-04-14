---
category: 视频教程
tags:
  - Vue
date: 2017-02-24
title: 【第二季】Vue2.0视频教程-全局API(共9集)
vssue-title: vue2-2
---

测试一下

<!-- more -->




GitHub源码地址：
[https://github.com/shenghy/VueDemo](https://github.com/shenghy/VueDemo)

我们在第一季中学习了Vue的内部指令，在你掌握了第一季内容后，你可以学习本教程，第二季的教程会比第一季要难一些，组件的编写。

## 第1节：Vue.directive 自定义指令

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=m0384airhhe&tiny=0&auto=0" allowfullscreen></iframe>

### 一、什么是全局API？
全局API并不在构造器里，而是先声明全局变量或者直接在Vue上定义一些新功能，Vue内置了一些全局API，比如我们今天要学习的指令Vue.directive。说的简单些就是，在构造器外部用Vue提供给我们的API函数来定义新的功能。

### 二、Vue.directive自定义指令

我们在第一季就学习了内部指令，我们也可以定义一些属于自己的指令，比如我们要定义一个v-jspang的指令，作用就是让文字变成绿色。

在自定义指令前我们写一个小功能，在页面上有一个数字为10，数字的下面有一个按钮，我们每点击一次按钮后，数字加1.

你不妨模仿下面的功能，在自己本地先写出这个效果。我用JSRun提供了预览和代码展示功能，你也可以在线调试。
<iframe width="100%" height="300" src="//jsrun.net/GBpKp/embedded/all/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

写好了这个功能，我们现在就自己定义一个全局的指令。我们这里使用Vue.directive( );

```
Vue.directive('jspang',function(el,binding,vnode){
        el.style='color:'+binding.value;
});
```

<iframe width="100%" height="300" src="//jsrun.net/5BpKp/embedded/all/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

可以看到数字已经变成了绿色，说明自定义指令起到了作用。可能您看这个代码还是有些不明白的，比如传入的三个参数到底是什么。

### 三、自定义指令中传递的三个参数

- el: 指令所绑定的元素，可以用来直接操作DOM。
- binding:  一个对象，包含指令的很多信息。
- vnode: Vue编译生成的虚拟节点。

### 四、自定义指令的生命周期
自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind
1. bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。
2. inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。
3. update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
4. componentUpdated:被绑定元素所在模板完成一次更新周期时调用。
5. unbind:只调用一次，指令与元素解绑时调用。

```
bind:function(){//被绑定
     console.log('1 - bind');
},
inserted:function(){//绑定到节点
      console.log('2 - inserted');
},
update:function(){//组件更新
      console.log('3 - update');
},
componentUpdated:function(){//组件更新完成
      console.log('4 - componentUpdated');
},
unbind:function(){//解绑
      console.log('1 - bind');
}
```
## 第2节：Vue.extend构造器的延伸

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=c0385r6df45&tiny=0&auto=0" allowfullscreen></iframe>

### 一、什么是Vue.extend

Vue.extend 返回的是一个“扩展实例构造器”,也就是预设了部分选项的Vue实例构造器。经常服务于Vue.component用来生成组件，可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂载到自定义元素上。

由于我们还没有学习Vue的自定义组件，所以我们先看跟组件无关的用途。

### 二、自定义无参数标签

我们想象一个需求，需求是这样的，要在博客页面多处显示作者的网名，并在网名上直接有链接地址。我们希望在html中只需要写`<author></author> `，这和自定义组件很像，但是他没有传递任何参数，只是个静态标签。

我们的Vue.extend该登场了，我们先用它来编写一个扩展实例构造器。代码如下：

```
var authorExtend = Vue.extend({
    template:"<p><a :href='authorUrl'>{{authorName}}</a></p>",
    data:function(){
    return{
          authorName:'JSPang',
          authorUrl:'http://www.jspang.com'
          }
    }
});
```

这时html中的标签还是不起作用的，因为扩展实例构造器是需要挂载的，我们再进行一次挂载。
```
new authorExtend().$mount('author');
```
这时我们在html写`<author><author>`就是管用的。我们来看一下全部代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>vue.extend-扩展实例构造器</title>
</head>
<body>
    <h1>vue.extend-扩展实例构造器</h1>
    <hr>
    <author></author>
 
    <script type="text/javascript">
       var authorExtend = Vue.extend({
           template:"<p><a :href='authorUrl'>{{authorName}}</a></p>",
           data:function(){
               return{
                   authorName:'JSPang',
                   authorUrl:'http://www.jspang.com'
               }
           }
       });
       new authorExtend().$mount('author');
    </script>
</body>
</html>

```
最终实现结果：
<iframe width="100%" height="300" src="//jsrun.net/AMpKp/embedded/all/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### 三、挂载到普通标签上

还可以通过HTML标签上的id或者class来生成扩展实例构造器，Vue.extend里的代码是一样的，只是在挂载的时候，我们用类似jquery的选择器的方法，来进行挂载就可以了。

```
new authorExtend().$mount('#author');
```

## 第3节：Vue.set全局操作

Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。
<iframe frameborder="0" width="100%" src="https://v.qq.com/txp/iframe/player.html?vid=x0385c8atil" allowFullScreen="true"></iframe>

### 一、引用构造器外部数据：

什么是外部数据，就是不在Vue构造器里里的data处声明，而是在构造器外部声明，然后在data处引用就可以了。外部数据的加入让程序更加灵活，我们可以在外部获取任何想要的数据形式，然后让data引用。
看一个简单的代码：
```
//在构造器外部声明数据
 var outData={
    count:1,
    goodName:'car'
};
var app=new Vue({
    el:'#app',
    //引用外部数据
    data:outData
})
```
二、在外部改变数据的三种方法：

1、用Vue.set改变
```
function add(){
       Vue.set(outData,'count',4);
 }
```
2、用Vue对象的方法添加
```
app.count++;
```

3、直接操作外部数据
```
outData.count++;
```
其实这三种方式都可以操作外部的数据，Vue也给我们增加了一种操作外部数据的方法。

### 三、为什么要有Vue.set的存在?

由于Javascript的限制，Vue不能自动检测以下变动的数组。
 - 当你利用索引直接设置一个项时，vue不会为我们自动更新。
 - 当你修改数组的长度时，vue不会为我们自动更新。

看一段代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Vue.set 全局操作</title>
</head>
<body>
    <h1>Vue.set 全局操作</h1>
    <hr>
    <div id="app">
        <ul>
            <li v-for=" aa in arr">{{aa}}</li>
        </ul>
       
    </div>
    <button onclick="add()">外部添加</button>
 
    <script type="text/javascript">
     
        function add(){
            console.log("我已经执行了");
           app.arr[1]='ddd';
           //Vue.set(app.arr,1,'ddd');
        }
        var outData={
            arr:['aaa','bbb','ccc']
        };
        var app=new Vue({
            el:'#app',
            data:outData
        })
    </script>
</body>
</html>
```

这时我们的界面是不会自动跟新数组的，我们需要用Vue.set(app.arr,1,’ddd’)来设置改变，vue才会给我们自动更新，这就是Vue.set存在的意义。

## 第4节：Vue的生命周期（钩子函数）

Vue一共有10个生命周期函数，我们可以利用这些函数在vue的每个阶段都进行操作数据或者改变内容。
<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=s03857oon1o&tiny=0&auto=0" allowfullscreen></iframe>

其实在Vue的官网有一张图已经很好的诠释了生命周期，我在这里就不再多讲了，直接贴图，然后上程序代码。
![](http://7xjyw1.com1.z0.glb.clouddn.com/vue-lifecycle.png)

我们直接来看一段代码：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>构造器的声明周期</title>
</head>
<body>
    <h1>构造器的声明周期</h1>
    <hr>
    <div id="app">
        {{message}}
        <p><button @click="jia">加分</button></p>
    </div>
        <button onclick="app.$destroy()">销毁</button>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:1
            },
            methods:{
                jia:function(){
                    this.message ++;
                }
            },
            beforeCreate:function(){
                console.log('1-beforeCreate 初始化之后');
            },
            created:function(){
                console.log('2-created 创建完成');
            },
            beforeMount:function(){
                console.log('3-beforeMount 挂载之前');
            },
            mounted:function(){
                console.log('4-mounted 被创建');
            },
            beforeUpdate:function(){
                console.log('5-beforeUpdate 数据更新前');
            },
            updated:function(){
                console.log('6-updated 被更新后');
            },
            activated:function(){
                console.log('7-activated');
            },
            deactivated:function(){
                console.log('8-deactivated');
            },
            beforeDestroy:function(){
                console.log('9-beforeDestroy 销毁之前');
            },
            destroyed:function(){
                console.log('10-destroyed 销毁之后')
            }
 
        })
    </script>
</body>
</html>
```

## 第5节：Template 制作模版

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=y0386s4tmjw&tiny=0&auto=0" allowfullscreen></iframe>

### 一、直接写在选项里的模板

直接在构造器里的template选项后边编写。这种写法比较直观，但是如果模板html代码太多，不建议这么写。

javascript代码：

```
var app=new Vue({
     el:'#app',
     data:{
         message:'hello Vue!'
      },
     template:`
        <h1 style="color:red">我是选项模板</h1>
     `
})

```
这里需要注意的是模板的标识不是单引号和双引号，而是，就是Tab上面的键。

### 二、写在template标签里的模板

这种写法更像是在写HTML代码，就算不会写Vue的人，也可以制作页面。

```
   <template id="demo2">
             <h2 style="color:red">我是template标签模板</h2>
    </template>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            template:'#demo2'
        })
    </script>
```
### 三、写在script标签里的模板

这种写模板的方法，可以让模板文件从外部引入。
```
<script type="x-template" id="demo3">
        <h2 style="color:red">我是script标签模板</h2>
    </script>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            template:'#demo3'
        })
    </script>
```
这节课我们学习了Template的三种写法，以后学习到vue-cli的时候还会学到一种xxx.vue的写法。

## 第6节：Component 初识组件

前言（废话）：component组件是Vue学习的重点、重点、重点，重要的事情说三遍。所以你必须学好Vue component。其实组件就是制作自定义的标签，这些标签在HTML中是没有的。比如：<jspang></jspang>，那我们就开始学习这种技巧吧。
<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=n0386ac6z3e&tiny=0&auto=0" allowfullscreen></iframe>

### 一、全局化注册组件

全局化就是在构造器的外部用Vue.component来注册，我们注册现在就注册一个<jspang></jspang>的组件来体验一下。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-1</title>
</head>
<body>
    <h1>component-1</h1>
    <hr>
    <div id="app">
        <jspang></jspang>
    </div>
 
    <script type="text/javascript">
        //注册全局组件
        Vue.component('jspang',{
            template:`<div style="color:red;">全局化注册的jspang标签</div>`
        })
        var app=new Vue({
            el:'#app',
            data:{
            }
        })
    </script>
</body>
</html>
```

我们在javascript里注册了一个组件，在HTML中调用了他。这就是最简单的一个组件的编写方法，并且它可以放到多个构造器的作用域里。

### 二、局部注册组件局部
局部注册组件局部注册组件和全局注册组件是向对应的，局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-1</title>
</head>
<body>
    <h1>component-1</h1>
    <hr>
    <div id="app">
      <panda></panda>
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">局部注册的panda标签</div>`
                }
            }
        })
    </script>
</body>
</html>
```
从代码中你可以看出局部注册其实就是写在构造器里，但是你需要注意的是，构造器里的components 是加s的，而全局注册是不加s的。
### 三、组件和指令的区别
组件注册的是一个标签，而指令注册的是已有标签里的一个属性。在实际开发中我们还是用组件比较多，指令用的比较少。因为指令看起来封装的没那么好，这只是个人观点。

## 第7节：Component 组件props 属性设置

props选项就是设置和获取标签上的属性值的，例如我们有一个自定义的组件<panda></panda>,这时我们想给他加个标签属性写成<panda here=’China’></panda> 意思就是熊猫来自中国，当然这里的China可以换成任何值。定义属性的选项是props。
<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=y0386354ef3&tiny=0&auto=0" allowfullscreen></iframe>

### 一、定义属性并获取属性值
定义属性我们需要用props选项，加上数组形式的属性名称，例如：props:[‘here’]。在组件的模板里读出属性值只需要用插值的形式，例如{{ here }}.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-2</title>
</head>
<body>
    <h1>component-2</h1>
    <hr>
    <div id="app">
      <panda here="China"></panda>
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">Panda from {{ here }}.</div>`,
                    props:['here']
                }
            }
        })
    </script>
</body>
</html>
```
上面的代码定义了panda的组件，并用props设置了here的属性值，在here属性值里传递了China给组件。
最后输出的结果是红色字体的Panda from China.

### 二、属性中带’-‘的处理方式

我们在写属性时经常会加入’-‘来进行分词，比如：<panda   from-here=”China”></panda>，那这时我们在props里如果写成props:[‘form-here’]是错误的，我们必须用小驼峰式写法props:[‘formHere’]。

html文件：

```
<panda from-here="China"></panda>
```
javascript文件：

```
 var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">Panda from {{ here }}.</div>`,
                    props:['fromHere']
                }
            }
        })
```
PS：因为这里有坑，所以还是少用-为好

### 三、在构造器里向组件中传值

把构造器中data的值传递给组件，我们只要进行绑定就可以了。就是我们第一季学的v-bind:xxx.

我们直接看代码:

Html文件：
```
<panda v-bind:here="message"></panda>
```
javascript文件：

```
 var app=new Vue({
            el:'#app',
            data:{
               message:'SiChuan' 
            },
            components:{
                "panda":{
                    template:`<div style="color:red;">Panda from {{ here }}.</div>`,
                    props:['here']
                }
            }
        })
```
## 第8节：Component 父子组件关系
在实际开发中我们经常会遇到在一个自定义组件中要使用其他自定义组件，这就需要一个父子组件关系。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=z0387mbtivz&tiny=0&auto=0" allowfullscreen></iframe>

### 一、构造器外部写局部注册组件
上面上课我们都把局部组件的编写放到了构造器内部，如果组件代码量很大，会影响构造器的可读性，造成拖拉和错误。

我们把组件编写的代码放到构造器外部或者说单独文件。

我们需要先声明一个对象,对象里就是组件的内容。

```
var jspang = {
   template:`<div>Panda from China!</div>`
}
```
声明好对象后在构造器里引用就可以了。

```javascript
components:{
    "jspang":jspang
}

```
html中引用
```
 <jspang></jspang>
```
二、父子组件的嵌套
我们先声明一个父组件，比如叫jspang，然后里边我们加入一个city组件，我们来看这样的代码如何写。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-3</title>
</head>
<body>
    <h1>component-3</h1>
    <hr>
    <div id="app">
      <jspang></jspang>  
    </div>
    <script type="text/javascript">
       var city={
           template:`<div>Sichuan of China</div>`
       }
        var jspang = {
            template:`<div>
                    <p> Panda from China!</p>
                    <city></city>
            </div>`,
            components:{
                "city":city
            }
        }
        var app=new Vue({
            el:'#app',
            components:{
                "jspang":jspang
            }
           
        })
    </script>
</body>
</html>

```

## 第9节：Component 标签
<component></component>标签是Vue框架自定义的标签，它的用途就是可以动态绑定我们的组件，根据数据的不同更换不同的组件。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=a0386mu7rw4&tiny=0&auto=0" allowfullscreen></iframe>

1.我们先在构造器外部定义三个不同的组件，分别是componentA,componentB和componentC.

```
 var componentA={
     template:`<div>I'm componentA</div>`
}
 var componentB={
      template:`<div>I'm componentB</div>`
}
var componentC={
    template:`<div>I'm componentC</div>`
}
```
2.我们在构造器的components选项里加入这三个组件。
```
components:{
    "componentA":componentA,
    "componentB":componentB,
    "componentC":componentC,
}
```
3.我们在html里插入component标签，并绑定who数据，根据who的值不同，调用不同的组件。

```
<component v-bind:is="who"></component>
```
这就是我们的组件标签的基本用法。我们提高以下，给页面加个按钮，每点以下更换一个组件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-4</title>
</head>
<body>
    <h1>component-4</h1>
    <hr>
    <div id="app">
       <component v-bind:is="who"></component>
       <button @click="changeComponent">changeComponent</button>
    </div>
 
    <script type="text/javascript">
        var componentA={
            template:`<div style="color:red;">I'm componentA</div>`
        }
        var componentB={
            template:`<div style="color:green;">I'm componentB</div>`
        }
        var componentC={
            template:`<div style="color:pink;">I'm componentC</div>`
        }
       
        var app=new Vue({
            el:'#app',
            data:{
                who:'componentA'
            },
            components:{
                "componentA":componentA,
                "componentB":componentB,
                "componentC":componentC,
            },
            methods:{
                changeComponent:function(){
                    if(this.who=='componentA'){
                        this.who='componentB';
                    }else if(this.who=='componentB'){
                        this.who='componentC';
                    }else{
                        this.who='componentA';
                    }
                }
            }
        })
    </script>
</body>
</html>

```