---
category: 视频教程
tags:
  - React
date: 2017-09-07
title: React免费视频教程-表单的应用 (共4集)
vssue-title: react-2
---


在前端与用户发生最多的交互行为都产生在表单里，在React中表单组件不同于其他组件，因为它们会缓存用户的录入信息和录入状态，由此也带来了React对表单处理的一些特殊性。你是不是经常会在学习或者React中对于使用表单有所疑惑，有很多小伙伴会陷入表单的坑中，并走不出来。技术胖专门写一篇文章来讲述React中表单的使用。

在学习这节课之前，你必须学习我的上一套课程《React入门与组件》 。

<!-- more -->

## 第1节：表单的事件响应和bind复用

事件响应
表单组件可以通过设置`onChange()`回调函数来监听组件变化。当用户的交互行文导致一下变化时，`onChange()`被执行并通过浏览器做出响应。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=f0547xaf9nj&tiny=0&auto=0" allowfullscreen></iframe>

- `<input>`或`<textarea>`的`value`发生变化。
- `<input>`的`checked`状态改变。
- `<option>`的`selected` 状态改变。
bind复用
bind方法为事件相应函数增加一个参数，事件响应函数通过该参数识别事件源。


我们作一个文本框，并使用bind进行复用，我希望你自己可以亲自动手敲一下代码，加深对bind复用的理解。

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
       var  MyForm = React.createClass({
           getInitialState:function(){
            return{
                username:'',
                gender:'man',
                checked:true
            }
           },
           handleChange:function(name,event){
                var newState={};
                newState[name]=name=="checked"?event.target.checked:event.target.value;
                this.setState(newState);
                console.log(newState);
           },
           submitHandler:function(e){
               e.preventDefault();
               var is = this.state.checked?'是':'不是';
               var gender= this.state.gender == "man" ? "帅哥":"美女";
               alert(this.state.username+ is + gender +'.' );
           },
           render:function(){
               return (<form onSubmit={this.submitHandler}>
               <label htmlFor="username">情输入您的姓名：</label>
               <input type="text" name="username" onChange={this.handleChange.bind(this,"username")} value={this.state.username} id="username" />
               <br/>
               <label htmlFor="checkbox">是或否：</label>
               <input  type="checkbox" value="是否" name="checked" id="checkbox" onChange={this.handleChange.bind(this,"checked")} checked={this.state.checked} />
               <br/>
               <label htmlFor="username">请选择</label>
               <select name="gender" onChange={this.handleChange.bind(this,"gender")} value={this.state.gender}>
                    <option value="man">帅哥</option>
                    <option value="woman">美女</option>
               </select>
               <br/>
               <button type="submit">提交</button>
               </form>)
           }
       });
 
 
       ReactDOM.render(<MyForm/>,document.getElementById('demo'))
 
    </script>
</body>
 
</html>
```

上边的代码精髓就在handleChange里边，所以一定要注意里边的写法，因为在React中这非常常用。

```
handleChange:function(name,event){
                var newState={};
                newState[name]=name=="checked"?event.target.checked:event.target.value;
                this.setState(newState);
                console.log(newState);
           },
```
另外需要注意的是在`<label>`标签里的for不能在正常使用了，而是要写成`htmlFor`。

## 第2节：React表单name复用

>name复用方式直接读取表单的属性值，比bind写法少一个参数（React中事件响应函数会自动绑定this）。其原理是在所有的标签中设置统一的name属性，并将这个属性值对应为state属性，在事件响应函数中通过读取表单的name值获得state属性，从event.target.value获取用户输入的值（check控件稍有不同），要求所有相关的标签（包括input标签）都要统一设置name属性。–引用《React前端技术与工程实践》

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=u0548sppiw8&tiny=0&auto=0" allowfullscreen></iframe>

也许你会对上边的话不理解，其实这种方法看起来更简单，就是每个标签加一个name，然后判断name来进行state的更改。但是我不建议这样使用，因为为每个标签增加一个name属性值并不友好。下面我们修改昨天的代码把bind复用形式改为name复用形式。

其实改的就几个点：改变handleChange的方法，然后改变触发方法，直接写成this.handleChange。

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
       var  MyForm = React.createClass({
           getInitialState:function(){
            return{
                username:'',
                gender:'man',
                checked:true
            }
           },
           handleChange:function(event){
                var newState={};
                newState[event.target.name]=event.target.name=="checked"?event.target.checked:event.target.value;
                this.setState(newState);
                console.log(newState);
           },
           submitHandler:function(){
               e.preventDefault();
               var is = this.state.checked?'是':'不是';
               var gender= this.state.gender == "man" ? "帅哥":"美女";
               alert(this.state.username+ is + gender +'.' );
           },
           render:function(){
               return (<form onSubmit={this.submitHandler}>
               <label htmlFor="username">情输入您的姓名：</label>
               <input type="text" name="username" onChange={this.handleChange} value={this.state.username} id="username" />
               <br/>
               <label htmlFor="checkbox">是或否：</label>
               <input  type="checkbox" value="是否" name="checked" id="checkbox" onChange={this.handleChange} checked={this.state.checked} />
               <br/>
               <label htmlFor="username">请选择</label>
               <select name="gender" onChange={this.handleChange} value={this.state.gender}>
                    <option value="man">帅哥</option>
                    <option value="woman">美女</option>
               </select>
               <br/>
               <button type="submit">提交</button>
               </form>)
           }
       });
 
 
       ReactDOM.render(<MyForm/>,document.getElementById('demo'))
 
    </script>
</body>
 
</html>
```

通过两节课的学习，我们可以了解两种表单的操作方式，这两种方式尽量掌握，个人感觉第一种在项目中用的多一些。

##  第3节：React表单-可控组件

**可控组件和不可控组件：**

在React中的input标签是有些小坑的，input本身就有自己的缓存机制，然后React的State也有缓存机制。这两种缓存机制我们在编码中是要进行取舍的。将input中的value绑定到state的React组件就是可控组件，反之则是不可控组件。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=h0548yqk6uo&tiny=0&auto=0" allowfullscreen></iframe>

**可控组件：**

在render()函数中设置了value的`<input>`是一个功能受限的组件，渲染出来的HTML元素始终保持value属性的值，即使用户输入也不会改变。

```
var  MyForm = React.createClass({
    render:function(){
        return(
            <div>
            <input type="text" value="jspang" />
            </div>
        )
    }
});
```
这时候你在浏览器中打开的Jspang的值是不可变的，甚至连删除都删除不了，这是由React的渲染策略决定的。如果要写成功能正常和可用性组件，我们需要编写onChange事件，并将value绑定到state中。

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
        var  MyForm = React.createClass({
            getInitialState:function(){
                return {value:'jspang'}
            },
            handleChange:function(event){
                this.setState({value:event.target.value});
                console.log(this.state.value)
            },
            render:function(){
                return(
                    <div>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                )
            }
        });
 
 
       ReactDOM.render(<MyForm/>,document.getElementById('demo'))
 
    </script>
</body>
 
</html>
```
在情况允许的条件下，我们应该优先考虑编写可控组件。

可控组件的有点：

- 符合React单向数据流特性，即从state流向render输出的结果。
- 数据存储在state中，便于访问和处理。

## 第4节：React表单-不可控组件

在input标签中不把value绑定到state上的就是不可控组件，它的数据不合state对应，所以在开发时会给自己挖很多坑，但是不可控组件并不是不可掌控，就用一节课的时间，我们了解一下不可控组件的小技巧。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=j0548v121jo&tiny=0&auto=0" allowfullscreen></iframe>

我们先来做一个最简单的不可用组件。

```
var  MyForm = React.createClass({
    render:function(){
        return(
            <div>
                <input type="text"/>
            </div>
        )
    }
});
```

组件完成之后给它加上一个onChange事件，发现是可以监控到变化值的。如果要获得iput中的value值，需先拿到其DOM节点，然后获取其value值。

```
var  MyForm = React.createClass({
    handleChange:function(){
        var inputValue=ReactDOM.findDOMNode(this.refs.jspang).value;
        console.log(inputValue);
    },
    render:function(){
        return(
            <div>
                <input type="text" onChange={this.handleChange} ref="jspang"/>
            </div>
        )
    }
});
```
当然我们也可以给input加入默认值，但是不是value了，而是defaultValue。

```
 <input type="text" onChange={this.handleChange} ref="jspang" defaultValue='jspang'/>
```


