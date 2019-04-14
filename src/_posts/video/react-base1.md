---
category: 视频教程
tags:
  - React
date: 2017-08-15
title: React免费视频教程-入门和组件 (共11集)
vssue-title: react-1
---

这节课是通过微信群里的小伙伴投票的最终结果，这是一整套视频，包括React基础、React全家桶、React Native，都会讲到，但是会分开文章，这样大家可以更容易的查找。

本文的基础视频是全部免费观看的，只要你登录jspang.com官方网站就可以免费观看视频，视频教程放在腾讯视频上，如果你想看离线版本（百度网盘）和小伙伴们一起交流React学习知识，可以进行打赏进微信群（打赏方法看网站右侧），群公告里有网盘地址。

<!-- more -->

## 第01节：React课程介绍

**课程前言：**

这节课是通过微信群里的小伙伴投票的最终结果，这是一整套视频，包括React基础、React全家桶、React Native，都会讲到，但是会分开文章，这样大家可以更容易的查找。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=w0538nsqryt&tiny=0&auto=0" allowfullscreen></iframe>

本文的基础视频是全部免费观看的，只要你登录jspang.com官方网站就可以免费观看视频，视频教程放在腾讯视频上，如果你想看离线版本（百度网盘）和小伙伴们一起交流React学习知识，可以进行打赏进微信群（打赏方法看网站右侧），群公告里有网盘地址。

**更新频率：**

由于录课只能在下班后进行，并不是专职的老师，一节课从备课到录制完成，上传网络大概需要5个小时左右。

所以一周只能更新2-3集（每节课程10-20分钟），希望小伙伴们多谅解。

** 教程特点 **

我们常看到的React教程，上来就是构建复杂的环境，webpack，ES2015技术等繁华的技术所遮掩，其实React的核心是简单和简洁的。我们教程也会从最简朴的方式开始教学，让大家了解React的基本思想和方法。只有了解这些，你在实际工作中才可以减少出错，增加排查错误的能力。

**前置知识：**

如果你想学习本套课程还是有一定的门槛的，你需要有下面两个个基础知识。

- HTML+CSS：你需要会基本的html和css知识，如果你做过一年的布局工作，学习起来会更加容易。
- JavaScript：需要扎实的JS功底，因为在React中的组件都会用到JS编写，所以你JS基础越好，学习起来越容易。

** React简介： **

React起源于Facebook的内部项目，该公司积极尝试引入HTML5技术用来架设Instagram网站，开发中发现HTML5的性能下降明显，达不到预期的效果。他们就自己开发了React框架。

ReactJS官方地址：[https://facebook.github.io/react/](https://facebook.github.io/react/)

GitHub地址：[https://github.com/facebook/react](https://github.com/facebook/react)

**react特点：**

- 虚拟DOM: React也是以数据驱动的，每次数据变化React都会扫码整个虚拟DOM树，自动计算与上次虚拟DOM的差异变化，然后针对需要变化的部分进行实际的浏览器DOM更新。
- 组件化： React可以从功能角度横向划分，将UI分解成不同组件，各组件都独立封装，整个UI是由一个个小组件构成的一个大组件，每个组件只关系自身的逻辑，彼此独立。
- 单项数据流：React设计者认为数据双向绑定虽然便捷，但在复杂场景下副作用也是很明显，所以React更倾向于单向的数据流动-从父节点传递到子节点。（使用ReactLink也可以实现双向绑定，但不建议使用）

## 第02节：环境搭建和HelloWorld程序

如果不考虑工程化的问题，React的运行基础环境非常简单，只需要在HTML文件中引入两个js文件（react.min.js和react-dom.min.js）即可开始工作

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=y0539nxjptf&tiny=0&auto=0" allowfullscreen></iframe>

** 搭建开发环境**

**下载所需文件**

首先我们访问` https://facebook.github.io/react/`,在页面中单击网页左上角的React版本（课程录制时是v15.6.1）。点击后下载两个文件。

- react.js：实现React核心逻辑，且于具体的渲染引擎无关，从而可以跨平台公用。如果应用要迁移到React Native，这一部分逻辑是不需要改变的。
- react-dom.js：包含了具体的DOM渲染更新逻辑，以及服务端渲染的逻辑，这部分就是与浏览器相关的部分了。

下载时你需要有科学上网环境，这里不作过多介绍。如果你不会科学上网，可以直接在我网站上进行下载( 点击下载)。下载好后，你只需要在你HTML中引入这两个文件就可以编写React代码了。

**Hello World程序**

按照国际惯例，学习一个新程序知识都要写HelloWorld的。我们先动手把这个程序敲出来，然后再讲解。建立工程文件夹，这里假定为d:/react_demo.视频中使用的代码编辑工具是VSCode，你可以用其它你习惯的编辑器（如果你是前端新手，建议使用和视频中一样的编辑器，这样可以保证操作一致）。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="reactContainer"></div>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script>
        var HelloComponent =React.createClass({
            render:function(){
                return React.createElement('h1',null,'Hello world');
            }
        });
 
        ReactDOM.render(
            React.createElement(HelloComponent,null),
            document.getElementById('reactContainer')
        )
    </script>
</body>
</html>
```

**React.createClass**

它的作用是注册一个组件类HelloComponent,这个组件类只包含一个render函数，该函数通过调用React.createElement实现了以下HTML内容：

```
<h1>Hello world</h1>
```

**ReactDOM.render()**

ReactDOM.render是React的最基本方法，用于将模板转为HTML语言，并插入指定的DOM节点。

**总结：**听完视频或者看完文章，一定要动手做出我们的Hello World程序。有个好的开始，下节课我们将学习JSX的知识。

## 第03节：初识JSX语法

JSX即Javascript XML，它使用XML标记来创建虚拟DOM和声明组件。第02节的HelloWorld程序从本质上能完成所有的工作。只是有一些开发效率问题，比如JavaScript代码与标签混写在一起、缺乏模板支持等。而使用JSX，则可以有效解决这些问题。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=h05408kjv1a&tiny=0&auto=0" allowfullscreen></iframe>

**加入JSX语法支持**

如果要使用JSX语法的支持，你可以使用Babel来进行转换，但是为了讲解方便我们这里直接引入Babel的核心文件 browser.min.js。你可以去网上提供的静态资源库引用（`http://www.bootcdn.cn/`），也可以自己下载。

**重写HelloWorld**

上节课写的HelloWorld程序，这节课我们用JSX的方式进行重写。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
   
    
</head>
<body>
    <div id="reactContainer"></div>
   
   
    <script type="text/babel">
        var HelloComponent =React.createClass({
            render:function(){
                return <h1>Hello World</h1>;
            }
        });
 
        ReactDOM.render(
            <HelloComponent/>,
            document.getElementById('reactContainer')
        )
    </script>
</body>
</html>
```

通过上边的代码你可以发现JSX的好处。

- 可以使用熟悉的语法仿照HTML来定义虚拟DOM。
- 程序代码更加直观。
- 于JavaScript之间等价转换，代码更加直观。

- JSX中的表达式
JSX是支持表达式的，你只要使用{}括号，就可以使用表达式了。我们把HelloWorld程序改写成使用表达式的。

我们把上边的程序改写成带表达式的形式。

```
var HelloComponent =React.createClass({
    render:function(){
        return <h1>Hello {this.props.name?this.props.name:'world'}</h1>;
    }
});
 
ReactDOM.render(
    <HelloComponent name="jspang"/>,
    document.getElementById('reactContainer')
)
```
需要注意的是表达式不支持if…else这样的语句，但是支持三元运算符和二元运算符。

## 第04节：进阶JSX语法

上节课我们已经对JSX语法有了一定的了解，这节课我们再深入了解一下，作两个复杂一点的例子。目的是大家充分理解JSX的知识，并加以练习和熟悉。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=r0540g490uu&tiny=0&auto=0" allowfullscreen></iframe>

**JSX上的数组输出**

使用JSX输出数组是有些小坑需要迈过的，在两年前我自学React时，没人指导，那时候中文的教程也很少，所以会迈一些坑，我觉的我教程的价值也是帮助大家卖坑，有些坑你在看文档是经常会跌入迈不出来。

```
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
 
<body>
    <div id="reactContainer"></div>
 
 
    <script type="text/babel">
        let names = ['JSPang','技术胖','React']; var HelloComponent =React.createClass({ render:function(){ return
        <div>
            { names.map(function(name){ return
            <div key={name}>Hello,{name}!</div>
            }) }
        </div>
        } }); ReactDOM.render(
        <HelloComponent name="jspang" />, document.getElementById('reactContainer') )
    </script>
</body>
 
</html>
```
上边的代码，我们使用了ES6的语法maps来进行进行循环，循环时需要注意的是，新版本的React需要使用key，如果没有key虽然会出来效果，但是控制台会包错。key的作用是生成虚拟DOM时，需要使用key来进行标记,DOM更新时进行比较。

**数组中的JSX **

我们上边的例子是循环数组的内容到JSX中，其实在数组中可以直接使用JSX语法，看下面的例子。

```
let arr=[
    <h1 key="1">Hello world!</h1>,
    <h2 key="2"> React is awesome</h2>
];
ReactDOM.render(
<div>{arr}</div>, document.getElementById('reactContainer') )
```

JSX允许直接在模版插入JavaScript变量。如果这个变量是一个数组，则会展开这个数组的所有成员。

总结：通过两节课的我们对JSX有了初步认识，虽然React可以不使用任何其他插件，但是JSX的好处太多，React也鼓励使用，在实际工作中也是百分百使用的，所以以后的课程中我们都会使用JSX。

## 第05节：React组件：state成员

从前面的课程中，已经初步认识了组件，但是并没有进行详细讲解，从这节课开始用3-5节课的时间，具体讲一下React组件的作用。React组件可以把它看作带有props属性集合和state状态集合并且构造出一个虚拟DOM结构的对象。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j05410xilpv&tiny=0&auto=0" allowfullscreen></iframe>

**state成员**

组件总是需要和用户互动的。React的一大创新，就是将界面组件看成一个状态机，用户界面拥有不同状态并根据状态进行渲染输出，用户界面和数据始终保持一致。开发者的主要工作就是定义state，并根据不同的state渲染对应的用户界面。

**setState( )**

通知React组件数据发生变化的方法是调用成员函数setState(data,callback)。这个函数会合并data到this.state,并重新渲染组件。渲染完成后，调用可选的callback回调。（大部分情况下不需要调用回调，因为React会负责把界面更新到最新状态）

**动手敲个小例子**

我们用一个小例子来了解一下状态机的机制。该例子包含一个文本框和一个按钮，单击按钮可以改变文本框的编辑状态：禁止编辑或允许编辑。

```
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
 
<body>
    <div id="reactContainer"></div>
 
 
    <script type="text/babel">
        var  TextBoxComponent = React.createClass({
            getInitialState:function(){
                return {enable:false}
            },
            handleClick:function(event){
                this.setState({enable:!this.state.enable})
            },
            render:function(){
                return (
                    <p>
                        <input type="text" disabled={this.state.enable} />
                        <button onClick={this.handleClick}>改变textbox状态</button>
                    </p>
                )
            }
        });
 
        ReactDOM.render(<TextBoxComponent/>,document.getElementById("reactContainer"));
    </script>
</body>
 
</html>
```

程序中需要注意的点

1. getInitialState函数必须有返回值，可以是null,false,一个对象。
2. 访问state数据的方法是”this.state.属性名”。
3. 变量用{}包裹，不需要再加双引号。

## 第06节：React组件：props和render成员

props是组件固有属性的集合，其数据由外部传入，一般在整个组件的生命周期中都是只读的。属性的初识值通常由React.createElement函数或者JSX中标签的属性值进行传递，并合并到组件实例对象的this.props中。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=p0542zdnpr8&tiny=0&auto=0" allowfullscreen></iframe>

**props实例**

这里一点点写一个真实的props程序，并让大家更加了解如何定义props。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React-props</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
<body>
    <div id="demo"></div>
    <script type="text/babel">
        let HelloBox=React.createClass({
            render:function(){
                return <div>{'Hello '+this.props.myattr}</div>;
            }
        })
        ReactDOM.render(<HelloBox myattr="world"/>,document.getElementById("demo"));
    </script>
</body>
</html>
```

我们不应该修改props中的值。事实上，如果要在组件外更改也是一个很麻烦的事，需要找到组件实例，这没有必要。在设计组件时，就要想好组件哪些使用state，哪些使用props集合，那些使用state集合。通常固定的组件内只读的、应由父组件传递进来的属性适合放在props集合中，如组件的类名、颜色、字体、事件响应回调函数等。

**props与state的区别**

props不能被其所在的组件修改，从父组件传递进来的属性不会在组件内部更改；state只能在所在组件内部更改，或在外部调用setState函数对状态进行间接修改。

**render成员函数**
首先说render是一个函数，它对于组件来说，render成员函数是必需的。render函数的主要流程是检测this.props和this.state,再返回一个单一组件实例。

render函数应该是纯粹的，也就是说，在render函数内不应该修改组件state，不读写DOM信息，也不与浏览器交互。如果需要交互，应该在生命周期中进行交互。

## 第07节：React组件：生命周期

一个组件完整的生命周期包含实例化阶段、活动阶段、销毁阶段三个阶段。每个阶段又由相应的方法管理。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=a05437wdlzp&tiny=0&auto=0" allowfullscreen></iframe>

过程中涉及三个主要的动作术语：

- mounting:表示正在挂接虚拟DOM到真实DOM。
- updating:表示正在被重新渲染。
- unmounting:表示正在将虚拟DOM移除真实DOM。

每个动作术语提供两个函数：

- omponentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()

**实例编写**

通过一个简单的实例，来看React组件的生命周期。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React-props</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
<body>
    <div id="demo"></div>
    <script type="text/babel">
       var AddCount=React.createClass({
           getInitialState:function(){
               console.log('1...getInitialSate');
               return {count:1};
           },
           componentWillMount:function(){
            console.log('2...componentWillMount');
           },
           componentDidMount:function(){
               console.log('3...componentDidMount');
           },
           componentWillUpdate:function(){
               console.log('4...componentWillUpdate');
           },
           componentDidUpdate:function(){
               console.log('4...componentDidUpdate');
           },
           handleClick:function(event){
               this.setState({count:this.state.count+1})
           },
 
           render:function(){
               return(
                   <p>
                    {this.state.count}<br/>
                    <button onClick={this.handleClick}>Add</button>
                   </p>
               )
           }
       })
 
       ReactDOM.render(
           <AddCount/>,
            document.getElementById("demo")
       );
    </script>
</body>
</html>
```

这个案例在每个生命周期里都加入了输出语句，我们可以打开控制台看代码的执行过程。

## 第08节：React组件小实例-必做练习

在了解了基本的钩子函数后，我们再作一个跟生命周期有关的小效果，进一步了解生命周期的用途。练习这个案例还可以对React的State和props有更深入的了解。这个案例是自定义一个组件，并把组件进行不断闪烁，形成一种动画形式。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=z0543c459ii&tiny=0&auto=0" allowfullscreen></iframe>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>生命周期案例</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
<body>
    <div id="demo"></div>
    <script type="text/babel">
      var Hello = React.createClass({
          getInitialState:function(){
              return {
                  opacity:1.0
              }
          },
          componentDidMount: function () {
            setInterval(function () {
                var opacity = this.state.opacity;
                opacity -= .05;
                if (opacity < 0.1) {
                    opacity = 1.0;
                }
                this.setState({
                    opacity: opacity
                });
                }.bind(this), 100);
          },
 
          render:function(){
              return (
                  <div style={{opacity:this.state.opacity}}>
                       <h2>Hello {this.props.name}</h2> 
                  </div>
              )
          }
      });
      ReactDOM.render(
          <Hello name="world"/>,
          document.getElementById('demo')
      )
    </script>
</body>
</html>
```

## 第09节：React组件：this.props.children

this.props对象的属性与组件的属性一一对应，但有一个例外，就是this.props.children属性。它表示组件的所有子节点。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=c0544deyc0w&tiny=0&auto=0" allowfullscreen></iframe>

**子节点**

组件经常会写入很多子属性，就像我们HTML当中的`<ul>`下，一定有很多`<li>`标签。这种子属性的需求，就要用到this.props.children属性。

```
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React-props</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
 
<body>
    <div id="demo"></div>
    <script type="text/babel">
        var NotesList=React.createClass({ render:function(){ return(
        <ol>
            { React.Children.map(this.props.children,function(child){ return(
            <li>{child}</li>) }) }
        </ol>
        ) } }); ReactDOM.render(
        <NotesList>
            <span>hello</span>
            <span>world</span>
        </NotesList>, document.getElementById("demo") );
 
    </script>
</body>
 
</html>
```

上面代码的NoteList组件有两个span子节点，他们都可以通过this.props.children读取。这里需要注意，this.props.children的值有三种可能，如果当前组件没有子节点，他就是undfined；如果有一个子节点，数据类型是object；如果有多个子节点，数据类型就是array。所以处理this.proprs.children的时候要小心。

## 第10节：React组件：props属性验证

组件的属性是可以接收任何值的，但有时候我们希望对外界父级组件传递进来的属性数据进行限定，比如希望name属性不能缺少、onClick属性必须是函数类型等，这对确保组件被正确使用非常有意义。为此React引入了propTypes机制。React.PropTypes提供各种验证器（validator）来验证传入数据的有效性。当向props传入无效数据时，React会在JavaScript控制台抛出警告。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=p054439coes&tiny=0&auto=0" allowfullscreen></iframe>

**PropsTypes **

我们来作一个小列子，看一下PropTypes的用法。

```
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React-props</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
 
<body>
    <div id="demo"></div>
    <script type="text/babel">
       var MyTitle = React.createClass({
           propTypes:{
                title:React.PropTypes.string.isRequired,
           },
 
           render:function(){
               return <h2>{this.props.title}</h2>
           }
       })
       var data=123;
       ReactDOM.render(<MyTitle title={data}/>,document.getElementById('demo'));
 
    </script>
</body>
 
</html>
```

上面的代码，我们创建了一个组件，组件里有一个title属性。PropTypes告诉React，这个title属性是必须的，而且它的值必须是字符串。而我们在程序中却给它设置为数值。打开浏览器控制台你可以看到报错信息。

更多的PropTypes的设置，可以查看官方文档。

**getDefaultProps默认值设置**

使用getDefaultProps方法可以用来设置组件属性的默认值。

```
var MyTitle = React.createClass({
    
    getDefaultProps:function(){
        return {
            title:'Hello JSPang'
        }
    },
 
    render:function(){
        return <h2>{this.props.title}</h2>
    }
})
 
ReactDOM.render(<MyTitle/>,document.getElementById('demo'));
```

浏览器这时候显示的是Hello World。

## 第11节：React组件：获取真实DOM节点

React中的DOM也是虚拟DOM（virtual DOM），这点跟我们以前讲的Vue非常类似。只有当它插入文档以后，才会变成真实的DOM。React也是在虚拟DOM发生变化时，进行比对后，只渲染变化的部分，它是React极高性能的主要原因之一。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j0545qknjt8&tiny=0&auto=0" allowfullscreen></iframe>

但是有时候我们需要从组件中获取真实的DOM节点，来进行业务逻辑的编写，React为我们提供了ref属性。下面我们通过一个实例来了解Ref的用法。

```
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React-props</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
 
<body>
    <div id="demo"></div>
    <script type="text/babel">
        var MyComponent = React.createClass({
            handleClick:function(){
                this.refs.myTextInput.focus();
            },
            render:function(){
                return(
                    <div>
                        <input type="text" ref="myTextInput" />
                        <input type="button" value="Focus the text input" onClick={this.handleClick}/>
                    </div>
                )
            }
        });
 
        ReactDOM.render(
            <MyComponent/>,
            document.getElementById("demo")
        )
 
    </script>
</body>
 
</html>
```

这个案例很简单，就是有一个文本框，当你点击按钮时，光标定位到文本框里。这时就必须获取真实的DOM节点，虚拟DOM是拿不到用户输入的。为了做到这一点，文本框必须有一个ref属性，用this.refs.xxx就可以返回真实的DOM节点。

**注意：**

由于`this.refs.[refName]`属性获取的是真实DOM，所以必须得到虚拟DOM插入文档以后，才能使用这个属性，否则会报错。


