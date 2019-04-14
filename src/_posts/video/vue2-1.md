---
category: 视频教程
tags:
  - Vue
date: 2017-02-23
title: 【第一季】Vue2.0视频教程-内部指令(共8集)
vssue-title: vue2-1
---

很高兴你能来学习这套Vue2.0视频课程，现在越来越多的小公司开始使用Vue来作为前端开发框架了，而且Vue的生态也越来越好，无论你是前端的老手还是新手，都有必要认真并系统的学习，有可能的话尽量在工作中使用它了。
<!-- more -->


## 第1节：走起我的Vue2.0

很高兴你能来学习这套Vue2.0视频课程，现在越来越多的小公司开始使用Vue来作为前端开发框架了，而且Vue的生态也越来越好，无论你是前端的老手还是新手，都有必要认真并系统的学习，有可能的话尽量在工作中使用它了。
<div class="video">


<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=v0378yw6ger&tiny=0&auto=0" allowfullscreen></iframe>



</video>
</div>

### 学习这套课程你需要的前置知识：
1. HTML的基础知识，你需要达到中级水平，写前端页面的结构代码完全没有问题。
2. CSS的基础知识，最好做过半年以上的切图和布局，最好了解CSS3的知识。
3. Javascript的基础知识，对基本语法掌握，这个要求不高，因为遇到难的我会在视频中讲解。
4. node.js初级知识，只需要会npm的使用和项目初始化就可以了

如果你对上面三个知识还不了解，建议不要冒进学习，会影响你的学习热情。但你已经是科班出身或者在培训班毕业后想继续学习，是完全没有难度的。

学习预期：这套视频会有很多季，每一季会有几集构成，像美国的电视剧一样，从最基础一直讲到项目实战，你学完这套视频就可以直接上手项目，也希望你能找到一份不错的工作。

学习方法：学完视频之后，一定要动手写一遍，如果不写你真的到项目中一定写错或者写不出来，要在学习时就不断采坑。

### 下载Vue2.0的两个版本：

官方网站：[](http://vuejs.org/)
- 开发版本：包含完整的警告和调试模式
- 生产版本：删除了警告，进行了压缩

### 项目结构搭建

这个部分要视频中有详细讲解。

### live-server使用
用npm进行全局安装
```shell
npm install live-server -g
```
在项目目录中打开
```
live-server
```

### 编写第一个HelloWorld代码：
```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Helloworld</title>
</head>
<body>
    <h1>Hello World</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            }
        })
    </script>
</body>
</html>
```

## 第2节：v-if  v-else  v-show 指令

通过上节课的学习，我们已经搭建好了开发环境，并且写出了一个简单的HelloWorld程序，我们今天主要学习v-if  v-else 和 v-show。其实我们这一季学习的都是Vue2.0的内部指令。
<div class="video">
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=b03780rmmvi&tiny=0&auto=0" allowfullscreen></iframe>
</div>


### v-if的使用：
v-if:是vue 的一个内部指令，指令用在我们的html中。

v-if用来判断是否加载html的DOM，比如我们模拟一个用户登录状态，在用户登录后现实用户名称。

关键代码：

```html
 <div v-if="isLogin">你好，JSPang！</div>
```
完整html代码：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>v-if & v-show & v-else</title>
</head>
<body>
    <h1>v-if 判断是否加载</h1>
    <hr>
    <div id="app">
        <div v-if="isLogin">你好：JSPang</div>
        <div v-else>请登录后操作</div>
 
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
               isLogin:false
            }
        })
    </script>
</body>
</html>
```
这里我们在vue的data里定义了isLogin的值，当它为true时，网页就会显示：你好：JSPang，如果为false时，就显示请登录后操作。

### 2.v-show的使用：
调整css中display属性，DOM已经加载，只是CSS控制没有显示出来。

```html
<div v-show="isLogin">你好：JSPang</div>

```

### v-if 和v-show的区别：
- v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。
- v-show：调整css dispaly属性，可以使客户端操作更加流畅。

## 第3节：v-for指令 ：解决模板循环问题

v-for指令是循环渲染一组data中的数组，v-for 指令需要以 item in items 形式的特殊语法，items 是源数据数组并且item是数组元素迭代的别名。

<div class="video">
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=o03798eqe6j&tiny=0&auto=0" allowfullscreen></iframe>
</div>

### 一、基本用法：
模板写法
```html
 <li v-for="item in items">
        {{item}}
</li>
```
js写法
```javascript
var app=new Vue({
     el:'#app',
     data:{
         items:[20,23,18,65,32,19,54,56,41]
     }
})

```

完整代码：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>V-for 案例</title>
</head>
<body>
    <h1>v-for指令用法</h1>
    <hr>
    <div id="app">
       <ul>
           <li v-for="item in items">
                {{item}}
           </li>
       </ul>
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                items:[20,23,18,65,32,19,54,56,41]
            }
        })
    </script>
</body>
</html>
```
这是一个最基础的循环，先在js里定义了items数组，然后在模板中用v-for循环出来，需要注意的是，你需要那个html标签循环，v-for就写在那个上边。

### 二、排序

我们已经顺利的输出了我们定义的数组，但是我需要在输出之前给数组排个序，那我们就用到了Vue的computed:属性。
```javascript
computed:{
    sortItems:function(){
          return this.items.sort();
    }
}
```
我们在computed里新声明了一个对象sortItems，如果不重新声明会污染原来的数据源，这是Vue不允许的，所以你要重新声明一个对象。

如果一切顺利的话，你已经看到了结果，但是这个小程序还是有个小Bug的，现在我把数组修改成这样。

```
items:[20,23,18,65,32,19,5,56,41]
```

我们把其中的54修改成了5，我们再看一下结果，发现排序结果并不是我们想要的。

我们可以自己编写一个方法sortNumber，然后传给我们的sort函数解决这个Bug。

```
function sortNumber(a,b){
            return a-b
  }
```
用法
```
computed:{
    sortItems:function(){
    return this.items.sort(sortNumber);
    }
 }
```
经过一番折腾，我们终于实现了真正的数字排序，这是在工作中非常常用的，一定要学好，记住。

### 三、对象循环输出

我们上边循环的都是数组，那我们来看一个对象类型的循环是如何输出的。

我们先定义个数组，数组里边是对象数据

```javascript
students:[
  {name:'jspang',age:32},
  {name:'Panda',age:30},
  {name:'PanPaN',age:21},
  {name:'King',age:45}
]

```
在模板中输出

```javascript
<ul>
   <li v-for="student in students">
       {{student.name}} - {{student.age}}
   </li>
</ul>
```
加入索引序号：

```javascript
//数组对象方法排序:
function sortByKey(array,key){
    return array.sort(function(a,b){
      var x=a[key];
      var y=b[key];
      return ((x<y)?-1:((x>y)?1:0));
   });
}
```
有了数组的排序方法，在computed中进行调用排序

```javascript

sortStudent:function(){
     return sortByKey(this.students,'age');
}

```
注意：vue低版本中 data里面的items和computed里面可以一样，但是高版本，是不允许相同名称。有很多小伙伴踩到了这个坑，这里提醒学习的小伙伴，根据自己版本的不同，请修改代码。（感谢网友：tannnb的指正）。

## 第4节：v-text & v-html

我们已经会在html中输出data中的值了，我们已经用的是{{xxx}},这种情况是有弊端的，就是当我们网速很慢或者javascript出错时，会暴露我们的{{xxx}}。Vue给我们提供的v-text,就是解决这个问题的。我们来看代码：
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=a0379qvloe5&tiny=0&auto=0" allowfullscreen></iframe>

```html
<span>{{ message }}</span>=<span v-text="message"></span><br/>
```
如果在javascript中写有html标签，用v-text是输出不出来的，这时候我们就需要用`v-html`标签了。
```html
<span v-html="msgHtml"></span>
```
双大括号会将数据解释为纯文本，而非HTML。为了输出真正的HTML，你就需要使用v-html 指令。
需要注意的是：在生产环境中动态渲染HTML是非常危险的，因为容易导致`XSS`攻击。所以只能在可信的内容上使用v-html，永远不要在用户提交和可操作的网页上使用。
完整代码：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>v-text & v-html 案例</title>
</head>
<body>
    <h1>v-text & v-html 案例</h1>
    <hr>
    <div id="app">
        <span>{{ message }}</span>=<span v-text="message"></span><br/>
        <span v-html="msgHtml"></span>
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!',
                msgHtml:'<h2>hello Vue!</h2>'
            }
        })
    </script>
</body>
</html>
```

## 第5节：v-on：绑定事件监听器

v-on 就是监听事件，可以用v-on指令监听DOM事件来触发一些javascript代码。

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=k0380uowbyd&tiny=0&auto=0" allowfullscreen></iframe>

一、使用绑定事件监听器，编写一个加分减分的程序。

![](http://7xjyw1.com1.z0.glb.clouddn.com/20170227091542.png)

程序代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>v-on事件监听器</title>
</head>
<body>
    <h1>v-on 事件监听器</h1>
    <hr>
    <div id="app">
       本场比赛得分： {{count}}<br/>
       <button v-on:click="jiafen">加分</button>
       <button v-on:click="jianfen">减分</button>
 
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                count:1
            },
            methods:{
                jiafen:function(){
                    this.count++;
                },
                jianfen:function(){
                    this.count--;
                }
            }
        })
    </script>
</body>
</html>
```


我们的v-on 还有一种简单的写法，就是用@代替。
```
<button @click="jianfen">减分</button>
```
我们除了绑定click之外，我们还可以绑定其它事件，比如键盘回车事件v-on:keyup.enter,现在我们增加一个输入框，然后绑定回车事件，回车后把文本框里的值加到我们的count上。
绑定事件写法：
```
<input type="text" v-on:keyup.enter="onEnter" v-model="secondCount">
```
javascript代码：
```javascript
onEnter:function(){
     this.count=this.count+parseInt(this.secondCount);
}

```
因为文本框的数字会默认转变成字符串，所以我们需要用`parseInt()函数`进行整数转换。

你也可以根据键值表来定义键盘事件：
![](http://7xjyw1.com1.z0.glb.clouddn.com/20170227001137.jpg)

## 第6节：v-model指令

这节课强烈建议你看视频，文字版你可能会看蒙！
<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=w03806bxv24&tiny=0&auto=0" allowfullscreen></iframe>

v-model指令，我理解为绑定数据源。就是把数据绑定在特定的表单元素上，可以很容易的实现双向数据绑定。

### 一、我们来看一个最简单的双向数据绑定代码：

html文件

```html
<div id="app">
    <p>原始文本信息：{{message}}</p>
    <h3>文本框</h3>
    <p>v-model:<input type="text" v-model="message"></p>
</div>
```
javascript代码：

```
var app=new Vue({
  el:'#app',
  data:{
       message:'hello Vue!'
  }
 })
```
### 二、修饰符

- .lazy：取代 imput 监听 change 事件。
- .number：输入字符串转为数字。
- .trim：输入去掉首尾空格。

### 三、文本区域加入数据绑定
```
<textarea  < cols="30" rows="10" v-model="message"></textarea>
```

### 四、多选按钮绑定一个值
```html
<h3>多选按钮绑定一个值</h3>
<input type="checkbox" id="isTrue" v-model="isTrue">
<label for='isTrue'>{{isTrue}}</label>
```

### 五、多选绑定一个数组
```html
<h3>多选绑定一个数组</h3>
       <p>
            <input type="checkbox" id="JSPang" value="JSPang" v-model="web_Names">
            <label for="JSPang">JSPang</label><br/>
            <input type="checkbox" id="Panda" value="Panda" v-model="web_Names">
            <label for="JSPang">Panda</label><br/>
            <input type="checkbox" id="PanPan" value="PanPan" v-model="web_Names">
            <label for="JSPang">PanPan</label>
            <p>{{web_Names}}</p>
       </p>
```

### 六、单选按钮绑定数据

```html
<h3>单选按钮绑定</h3>
<input type="radio" id="one" value="男" v-model="sex">
<label for="one">男</label>
<input type="radio" id="two" value="女" v-model="sex">
<label for="one">女</label>
<p>{{sex}}</p>
```

## 第7节：v-bind 指令
v-bind是处理HTML中的标签属性的，例如<div></div>就是一个标签，<img>也是一个标签，我们绑定<img>上的src进行动态赋值。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j0380r6d4pe&tiny=0&auto=0" allowfullscreen></iframe>

html文件：
```
<div id="app">
    <img v-bind:src="imgSrc"  width="200px">
</div>
```
在html中我们用v-bind:src=”imgSrc”的动态绑定了src的值，这个值是在vue构造器里的data属性中找到的。

js文件：
```
var app=new Vue({
    el:'#app',
    data:{
          imgSrc:'http://baidu.com/wp-content/uploads/2017/02/vue01-2.jpg'
     }
})
```
我们在data对象在中增加了imgSrc属性来供html调用。

### v-bind 缩写
```
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```
### 绑定CSS样式
在工作中我们经常使用v-bind来绑定css样式：

在绑定CSS样式是，绑定的值必须在vue中的data属性中进行声明。
1、直接绑定class样式

```html
<div :class="className">1、绑定classA</div>
```

2、绑定classA并进行判断，在isOK为true时显示样式，在isOk为false时不显示样式。
```html
<div :class="{classA:isOk}">2、绑定class中的判断</div>
```
3、绑定class中的数组
```
<div :class="[classA,classB]">3、绑定class中的数组</div>
```
4、绑定class中使用三元表达式判断
```
<div :class="isOk?classA:classB">4、绑定class中的三元表达式判断</div>
```
5、绑定style
```
<div :style="{color:red,fontSize:font}">5、绑定style</div>
```
6、用对象绑定style样式

```
<div :style="styleObject">6、用对象绑定style样式</div>
```

```javascript
var app=new Vue({
   el:'#app',
   data:{
       styleObject:{
           fontSize:'24px',
           color:'green'
            }
        }
})
```

## 第8节：其他内部指令(v-pre & v-cloak & v-once)

<iframe frameborder="0" width="100%"  src="https://v.qq.com/iframe/player.html?vid=y0380ywmwuf&tiny=0&auto=0" allowfullscreen></iframe>>

### v-pre指令
在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。

```
<div v-pre>{{message}}</div>
```
这时并不会输出我们的message值，而是直接在网页中显示{{message}}
### v-cloak指令
在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用，
```
[v-cloak] {
  display: none;
}
```
``` html
<div v-cloak>
  {{ message }}
</div>
```
### v-once指令

在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。

```
<div v-once>第一次绑定的值：{{message}}</div>
<div><input type="text" v-model="message"></div>
```
### 第一季总结：

第一季我们学习了Vue中的指令，这也是Vue中最容易理解的部分，以前我也只是使用Vue，通过这个课程的制作，我也对Vue指令有了全面和更深刻的了解。对于小伙伴们的学习，我想说的是，你看完视频后一定要动手去敲写代码，这样你才能理解并记住。我们第二季的课程也已经在准备中了，第二季我们将讲解Vue的全局API。
