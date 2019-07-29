---
category: 视频教程
tags:
  - React
date: 2019-06-20
title: Redux免费视频教程（共24集）
vssue-title: redux-base
---

![Redux免费视频教程](https://jspang.com/images/Redux_index.png)

通过React基础教程的学习，我相信你一定对React有了很好的了解，也可以制作出一些简单的React项目（注意我这里说的是简单的项目）。为什么你只能做出一些简单的项目那?因为React就是一个简单的轻量级的视图层框架。

React当中的组件通信和状态管理是特别繁琐的，比如子组件和父组件通信改变值，要通过父组件的方法。这就好比恋爱，要先认识女孩，再牵手，再接吻，最后你才能为所欲为。这种形式肯定不符合现在人的习惯，所以就有了很多快餐服务，通宵服务，极大的方便了现代人的需求。在开发中同样，公司最讲的就是效率，效率就需要把事情变简单，那只有React肯定不符合大型项目和快速开发。需要视图层框架+数据层框架，两个相互结合，就可以实现大型的开发项目了。

`Redux`是目前React生态中，最好的数据层框架，所以单独拿出一个文章来系统的讲解Redux。

博主才疏学浅，不保知识点无误，敬请指正，我也会小心求证，力保知识的正确。

<!-- more -->

这里先给出这个课程的基本大纲，也是你可以学会的知识。
![Redux免费视频教程](https://jspang.com/images/Redux_list.png)

## P01:基础-认识Redux和文章介绍


其实能搜到这篇文章，证明对`Redux`也算有一个基本认识，这篇文章适合初级前端开发者阅读，会详细讲解Redux的基础知识，在了解基础知识后，会逐步增加Redux高级内容。

> 课程内容参照了《深入浅出React和Redux》但是都是从新编排和加入了自己的理解，作者如有异议或要求删除，可以联系博主。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=98253773&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

(1.5倍新世界)


### 自我介绍

有很多老朋友，也有一些新朋友。所以先作一下自我介绍，我网名“技术胖”,作程序有11年多了，没有做出什么改变世界的产品，也不是什么领域专家。最近2年一直保持写博客的习惯，目标就是出1000集免费视频，来帮助刚步入前端程序的新人。目前还是一个每天搬砖的程序员，我热爱我目前的工作，也梦想成为一个全职讲师，并且一直为着梦想不断努力着。

我每周都会出3集左右的前端免费视频教程，所以你可以一直跟着我一起学习。

如果你愿意和技术胖一起学习React的相关知识，可以进入QQ群：159579268


### Redux介绍

Redux是一个用来管理管理数据状态和UI状态的JavaScript应用工具。随着JavaScript单页应用（SPA）开发日趋复杂，JavaScript需要管理比任何时候都要多的state（状态），Redux就是降低管理难度的。（Redux支持React，Angular、jQuery甚至纯JavaScript）

可以通过一张图，看出Redux如何简化状态管理的（图片来自“前端记录”网站，如有侵权，请联系删除）

![Redux简化图](https://jspang.com/images/redux001.jpg)


从图中可以看出，如果不用Redux，我们要传递state是非常麻烦的。Redux中，可以把数据先放在数据仓库（store-公用状态存储空间）中，这里可以统一管理状态，然后哪个组件用到了，就去stroe中查找状态。如果途中的紫色组件想改变状态时，只需要改变`store`中的状态，然后其他组件就会跟着中的自动进行改变。

### Flux和Redux的关系

有很多小伙伴都会问我讲不讲Flux？这里我可以明确的回答你，不讲。

因为在我看来Redux就是Flux的升级版本，早期使用React都要配合Flux进行状态管理，但是在使用中，Flux显露了很多弊端，比如多状态管理的复杂和易错。所以Redux就诞生了，现在已经完全取代了Flux，过时的东西就不再讲解了。

如果你说公司还在用Flux，你可以试着学会Redux后，进行升级，抛弃Flux，其实前端的知识就是更新淘汰的这么迅速，要时刻保持学习的习惯。


这就好比，我跟女神出去已经用液体避孕喷液了，你还用胶皮套套，那我们爽的程度能一样吗？一起使用Redux，让我们嗨起来。


### 更新频率

我也是一个程序员，每天都要上班，也会有通宵加班，所以每周视频更新三集左右。加入QQ群可以第一时间得到更新信息。让我们一起学习吧。

## P02:基础-Redux工作流程

这节课要学习的知识非常重要，你只有学会了`Redux`工作流程，你才能对`Redux`有个通透的了解。如果你只官方的图或者自己看文档，还是有一点难度的。但是如果你红尘接触的多或者跟胖哥一样，是一个喜欢小姐姐的人，那这个流程就很简单了。（看视频）

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=98877621&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

(1.5倍新世界)


### redux官方图片

先来看一下官方给的图片，我也试着解说一下，不好勿怪。因为这东西本来就不太好了解，官方有很抽象。

![Redux简化图](https://jspang.com/images/redux_flow.png)

这个的解读看视频吧，写起来还是挺麻烦的。其实我觉的这个图完全是个已经回Redux的人看的，至少是一个入门Redux的人看的，完全不符合一个初学者的视角。

### 我画的理解图

我就以多年老司机的身份给你们讲解一下这个图，这个图你完全可以理解为一次大宝剑的过程，如果你经验不多，或者你是女孩子，我可以理解为借书的过程。当然我还是拿宝剑为例(图是我自己画的，很丑无怪).

![Redux简化图](https://jspang.com/images/rudex_flow_me.png)

`React Components`就相当于大官人，然后我们去作“大宝剑”，我们先见到的是`Action Creators`“妈妈桑”,我们说我要找小红，我是熟客了。"妈妈桑"就回到了`Store`，然后让`Reducer`看看"小红“忙不忙（现在的状态），如果不忙就让她过来配大官人。

我还为女孩子和处世未深的小朋友准备了图书管理员版本。


![Redux简化图](https://jspang.com/images/redux_flow_book.png)


这个版本我就在视频中进行讲解了，文字上不作过多介绍。

**总结**：Redux的实现过程虽然简单，但是如果你看官方的图不容易理解，你可以把它和周围身边的事情联系起来，就简单很多。需要特别声明的是，你一定要弄明白这个工作流程，这对于你这个Redux的学习非常重要。

## P03: 基础-`Ant Design`介绍和环境初始化

`Ant Design`是一套面向企业级开发的UI框架，视觉和动效作的很好。阿里开源的一套UI框架，它不只支持`React`，还有`ng`和`Vue`的版本，我认为不论你的前端框架用什么，`Ant Design`都是一个不错的选择。习惯性把`AntDesign`简称为`antd`。 目前有将近5万Star，算是React UI框架中的老大了。

> 官网为:https://ant.design/index-cn

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=99049216&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 初始化项目

这里我默认你已经看过我的“React16免费视频教程”了，所以我认为你这个过程已经了解了知识点，我只是带着你作一遍。

1. 如果你没有安装脚手架工具，你需要安装一下：
  ```
  npm install -g create-react-app
  ```
2. 直接用脚手架工具创建项目
  ```
    D:  //进入D盘
    mkdir ReduxDemo   //创建ReduxDemo文件夹
    cd ReduxDemo      //进入文件夹
    create-react-app demo01  //用脚手架创建React项目
    cd demo01   //等项目创建完成后，进入项目目录
    npm  start  //预览项目
  ```
这样项目就制作好了，我们删除一下没用的文件，让代码结构保持最小化。删除SRC里边的所有文件，只留一个`index.js`,并且index.js文件里也都清空。

### 快速生成基本代码结构

编写`index.js`文件,这个文件就是一个基础文件，基本代码也都是一样的。

```javascript
import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './TodoList'

ReactDOM.render(<TodoList/>,document.getElementById('root'))
```

编写`TodoList.js`文件,这个文件可以用`Simple React Snippets`快速生成。
先输入`imrc`,再输入`ccc`

代码如下：

```js
import React, { Component } from 'react';
class TodoList extends Component {
    render() { 
        return ( 
            <div>Hello World</div>
         );
    }
}
export default TodoList;
```

做完这个，算是项目基本构建完成，可以打开浏览器看一下效果。接下来就可以安装`Ant Design`UI框架了。


### 安装`AntDesign`

这里使用`npm`来进行安装，当然你有可以用`yarn`的方式进行安装.

```
npm install antd --save
```

`yarn`的安装方式是:

```
yarn add antd
```

如果你的网络情况不好，最好使用`cnpm`来进行安装。等待程序安装完以后，就可以进行使用了。这个我家里的网络安装起来非常耗时，所以就等待安装完成后，再下节课学习一下如何使用吧。




## P04:基础-用`Ant Design`制作UI界面

已经完成了基本开发环境和`AntDesign`的安装。这节课用`Ant Design`制作一下TodoList的界面。本文不会对`Ant Design`深入讲解，只是为了让课程的界面好看一点，如果你对它有强烈的学习需要或愿望，可以看一下`Ant Design`官方文档,文档都是中文，没有什么难度。图片就是这节课最后要做出的样式。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=99415096&page=4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


![Redux案例](https://jspang.com/images/reduxDemo01.png)


### 引入CSS样式

在使用`Ant Design`时，第一件事就是先引入CSS样式，有了样式才可以让UI组件显示正常。可以直接在`/src/TodoList.js`文件中直接用`import`引入。

```javascript
import 'antd/dist/antd.css'
```

### 编写Input框

引入CSS样式之后，可以快乐的使用`antd`里的`<input>`框了，在使用的时候，你需要先引入`Input`组件。全部代码如下:

```javascript
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd'

class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Input placeholder='jspang' style={{ width:'250px'}}/>
                </div>
            </div>
         );
    }
}
export default TodoList;

```

在`Input`组件里，我们设置了`style`，注意设置这个时不带单引号或者双引号的。

写完后就可以简单的看一下效果了。

### 编写Button按钮

`Ant Design`也提供了丰富好看的按钮组件，直接使用最简单的`Primary`按钮。使用按钮组件前也需要先引入,为了让组件更好看，还加入了一些`Margin`样式，代码如下:

```javascript
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button } from 'antd'

class TodoList extends Component {
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='Write something' style={{ width:'250px', marginRight:'10px'}}/>
                    <Button type="primary">增加</Button>
                </div>
            </div>
         );
    }
}
export default TodoList;

```

### List组件制作列表

同样用`Ant Desgin`制作todoList的列表，在制作前，我们先在`class`外部声明一个data数组，数组内容可以随便写。

```js

const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

```
然后引入List组件，代码如下:

```js
import { Input , Button , List } from 'antd'
```

最后就是使用这个List组件了。
```js
<div style={{margin:'10px',width:'300px'}}>
    <List
        bordered
        dataSource={data}
        renderItem={item=>(<List.Item>{item}</List.Item>)}
    />    
</div>
```
为了方便学习，我给出了全部代码，如果你作起来有难度，可以直接复制下面的代码。

```javascript
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='write someting' style={{ width:'250px', marginRight:'10px'}}/>
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
}
export default TodoList;

```

**总结**:这节课主要用`Ant Design`制作了todoList的界面，使用了`<Input>`，`<Button>`和`<List>`组件，因为这个课程是讲`Redux`的，所以这些组件的使用方法并没有展开讲，主要是制作一个UI界面，为以后的课程作铺垫。如果你对`Ant Design`非常感兴趣，你可以去官方网站阅读文档。

## P05:基础-创建Redux中的仓库-store和reducer

这节开始，算是正式进入了`Redux`的编码阶段，你也要集中注意力进行学习了。开始编码前，你应该再熟悉一下以前讲的redux的工作流程。所以我也把图片放到了文字下方，方便你的预习。
从图片中可以看出，`Redux`工作流程中有四个部分，最重要的就是`store`这个部分，因为它把所有的数据都放到了`store`中进行管理。在编写代码的时候，因为重要，所以要优先编写`store`。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=99594762&page=5" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

![Redux简化图](https://jspang.com/images/redux_flow.png)


### 编写创建`store`仓库

在使用`Redux`之前，需要先用`npm install`来进行安装,打开终端，并进入到项目目录，然后输入。（如果你之前安装过了，就不用再次安装了）

```shell
npm install --save redux
```
安装好`redux`之后，在`src`目录下创建一个`store`文件夹,然后在文件夹下创建一个`index.js`文件。

`index.js`就是整个项目的`store`文件，打开文件，编写下面的代码。

```js
import { createStore } from 'redux'  // 引入createStore方法
const store = createStore()          // 创建数据存储仓库
export default store                 //暴露出去
```

这样虽然已经建立好了仓库，但是这个仓库很混乱，这时候就需要一个有管理能力的模块出现，这就是`Reducers`。这两个一定要一起创建出来，这样仓库才不会出现互怼现象。在`store`文件夹下，新建一个文件`reducer.js`,然后写入下面的代码。

```js
const defaultState = {}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    return state
}
```

- `state`: 是整个项目中需要管理的数据信息,这里我们没有什么数据，所以用空对象来表示。

这样`reducer`就建立好了，把reducer引入到`store`中,再创建store时，以参数的形式传递给store。

```js
import { createStore } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
const store = createStore(reducer) // 创建数据存储仓库
export default store   //暴露出去
```

### 在store中为todoList初始化数据

仓库`store`和`reducer`都创建好了，可以初始化一下`todoList`中的数据了，在`reducer.js`文件的`defaultState`对象中，加入两个属性:`inputValue`和`list`。代码如下

```js
const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{
    return state
}
```
这就相当于你给`Store`里增加了两个新的数据。


### 组件获得`store`中的数据

有了store仓库，也有了数据，那如何获得stroe中的数据那？你可以在要使用的组件中，先引入store。
我们todoList组件要使用store，就在`src/TodoList.js`文件夹中，进行引入。这时候可以删除以前写的data数据了。

```js
import store from './store/index'
```

当然你也可以简写成这样:
```js
import store from './store'
```
引入`store`后可以试着在构造方法里打印到控制台一下，看看是否真正获得了数据，如果一切正常，是完全可以获取数据的。
```js
constructor(props){
    super(props)
    console.log(store.getState())
}
```
这时候数据还不能在UI层让组件直接使用，我们可以直接复制给组件的`state`，代码如下(我这里为了方便学习，给出全部代码了).

```js
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store'



class TodoList extends Component {
constructor(props){
    super(props)
    //关键代码-----------start
    this.state=store.getState();
    //关键代码-----------end
    console.log(this.state)
}
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    
                    <Input placeholder={this.state.inputValue} style={{ width:'250px', marginRight:'10px'}}/>
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
}
export default TodoList;
```
通过上面的步骤，我们从仓库里取出了数据，并用在组件的UI界面上，也算是一个小小的进步了。
这节课我们讲了如何创建`store`，`reduce`和如何使用`store`中的数据。这节课的知识也算redux思想的一个精髓，也非常重要，可以多学习两遍。


## P06:基础-Redux Dev Tools的安装

上节课已经制作了Redux中state仓库，也可以从仓库中取出数据了。接下来我们需要在控制台调试这些仓库里的数据，需要使用`Redux DevTools`。安装这个是需要科学上网的，所以你需要先找一个好梯子。
<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=100377332&page=6" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 安装`Redux DevTools`

我使用`Chrome`浏览器安装插件，在浏览器右上角有三个点，然后点击"更多工具",再点击"扩展程序"，再点击右侧的"打开Chrome网上商店",然后搜索`Redux DevTools`，可以看到下面这个插件，直接安装就可以了。

![ReduxDevTools](https://www.jspang.com/images/reduxTools.png)

安装完成后，你在控制台中就可以看到`Redux`标签了，有了这个标签也说明安装成功了。

### 配置`Redux Dev Tools`

这也算是小伙伴经常问我的一个问题，就是如何配置这个`Redux Dev Tools`插件，其实网站上已经说的非常清楚了，现在通过插件，打开这个网站。根据网站提示，我们把上节课的`index.js`代码改为下面的样子。

```js
import { createStore } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // 创建数据存储仓库
export default store   //暴露出去
```

其实就是加了这样一句话.
```js
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```
这句话的意思就是看window里有没有这个方法，有则执行这个方法（不要被大写的方法名吓到）。

这步完成后，就可以启动项目测试一下了，你会发现State数据变的一目了然，以后再进行Redux调试，就会变的非常简单了。

那这节课就先到这里，下节课我们继续学习如何通过创建`Action`来改变`Redux`里`State`的值。



## P07:基础-通过Input体验Redux的流程

这节课要作的就是通过`Input`的改变，体验一下`Redux`的整体流程，是如何编写代码的。我们要实现的是在`TodoList`的Demo中,只要文本框中的值改变就`redux`中`store`的值就跟着改变，并且随着`Redux`中的`state`值改变，组件也跟着改变。整个流程就是以前讲过的这个图，

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=100562422&page=7" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


![Redux简化图](https://jspang.com/images/redux_flow.png)

### 增加Input响应事件

如果想`Input`改变，`redux`也跟着改变，需要在`Input`组件上增加`onChange`响应事件，
打开`src`目录下的`ToDolist.js`文件，修改具体代码如下：

```javascript
<Input 
    placeholder={this.state.inputValue} 
    style={{ width:'250px', marginRight:'10px'}}
    //---------关键代码----start
    onChange={this.changeInputValue}
    //---------关键代码----end
/>
```
写完这一步，还要记得在`constructor`进行`this`的绑定，修改`this`的指向。
```javascript
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
}
```
这步完成后，就可以编写`changeInputValue`方法的代码了。我们先在控制台打印出文本框的变化，代码如下：

```javaScript
changeInputValue(e){
    console.log(e.target.value)
}
```
然后打开浏览器，按`F12`看一下控制台的结果。这里给出目前的全部代码:

```javascript
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store'



class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.changeInputValue}
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }

    changeInputValue(e){
        console.log(e.target.value)
    }
}
export default TodoList;
```
下面需要作的事就是改变`Redux`里的值了，我们继续向下学习。

### 创建`Action`

想改变`Redux`里边`State`的值就要创建`Action`了。Action就是一个对象，这个对象一般有两个属性，第一个是对`Action`的描述，第二个是要改变的值。
```js
changeInputValue(e){
    const action ={
        type:'change_input_value',
        value:e.target.value
    }
}
```
action就创建好了，但是要通过`dispatch()`方法传递给`store`。我们在action下面再加入一句代码。
```js
changeInputValue(e){
    const action ={
        type:'changeInput',
        value:e.target.value
    }
    store.dispatch(action)
}

```
这是`Action`就已经完全创建完成了，也和`store`有了联系。

### `store`的自动推送策略

前面的课程，我已经说了`store`只是一个仓库，它并没有管理能力，它会把接收到的`action`自动转发给`Reducer`。我们现在先直接在`Reducer`中打印出结果看一下。打开`store`文件夹下面的`reducer.js`文件，修改代码。

```javascript
export default (state = defaultState,action)=>{
    console.log(state,action)
    return state
}
```
讲到这里，就可以解释一下两个参数了：

- **state**: 指的是原始仓库里的状态。
- **action**: 指的是action新传递的状态。

通过打印你可以知道，`Reducer`已经拿到了原来的数据和新传递过来的数据，现在要作的就是改变store里的值。我们先判断`type`是不是正确的，如果正确，我们需要从新声明一个变量`newState`。（**记住：Reducer里只能接收state，不能改变state。**）,所以我们声明了一个新变量，然后再次用`return`返回回去。

```js
export default (state = defaultState,action)=>{
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    return state
}

```

### 让组件发生更新

现在store里的数据已经更新了，但是组件还没有进行更新，我们需要打开组件文件`TodoList.js`，在`constructor`，写入下面的代码。

```js
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
    //----------关键代码-----------start
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态
    //----------关键代码-----------end
}

```
当然我们现在还没有这个`storeChange`方法，只要写一下这个方法，并且重新`setState`一次就可以实现组件也是变化的。在代码的最下方，编写`storeChange`方法。

```js
 storeChange(){
     this.setState(store.getState())
 }
```

现在浏览器中预览，可以看到组件和Redux中都同步进行了改变。这节课的内容比较多，把Redux的流程都走了一遍，如果这节课你能独立作下来，也就算Redux入门了。你可以把这节课的视频多看两遍，保证把基础知识打扎实。我真的是苦口婆心的说哦，你一定要动手作，不然你真的学不会的。

## P08:基础-Redux制作ToDoList列表

通过上节课的知识，我们用同样的方法和流程，再开发一遍toDoList里边的列表功能，具体来说就是当点击添加按钮时，ToDoList组件的列表会增加。知识其实我们都已经会了，缺少的是熟练度。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=100760962&page=8" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 编写按钮添加响应事件和Action

先来编写按钮点击后的响应事件，打开`TodoList.js`文件，然后在按钮的地方加入`onClick`事件，记得要进行绑定哦。

```js
<Button 
    type="primary"
    onClick={this.clickBtn}
>增加</Button>
```
然后在`constructor`里进行绑定，代码如下:

```js
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    //关键代码------------start----------
    this.clickBtn = this.clickBtn.bind(this)
    //关键代码------------end----------
    store.subscribe(this.storeChange) //订阅Redux的状态
}
```
绑定之后就可以编写`clickBtn()`方法了，这里先用一个打印语句代替业务内容。
```js
clickBtn(){
    console.log('jspang.com')
}

```

这时候预览一下，点击"增加按钮"，在控制台就可以输出`jspang.com`了。说明我们的事件添加成功了。

### 创建Action并用`dispatch()`传递给`store`

在`clickBtn`方法里增加Action，然后用`dispatch()`方法传递给store，代码如下:

```js
clickBtn(){
   const action = { type:'addItem'}
   store.dispatch(action)
}
```
这时候已经把action传递给了`store`，然后去`Reducer`里编写业务逻辑就可以了。

### 编写Reducer的业务逻辑

打开`reducer.js`文件，先编写代码判断`type`是不是`addItem`，如果向redux的list中插入新值。

```js
export default (state = defaultState,action)=>{
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //关键代码------------------start----------
    //state值只能传递，不能使用
    if(action.type === 'addItem' ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
     //关键代码------------------end----------
    return state
}

```

因为上节课已经编写了订阅方法，所以到这里就可以打开浏览器进行预览了。你可以试着添加一些新的东西进来。这节课到这里就结束了，虽然没有什么新的知识点，但是这个`Redux`的流程你必须要熟练掌握，因为在工作中编写Redux程序，我几乎每天都在和这个流程打交道，实现界面的快速响应。

## P09:基础-用Redux实现ToDoList的删除功能

这节再来走一遍`Redux`的流程，用Redux来制作一下删除功能。其实就是在点击ToDoList中的列表子项时，删除对应的子项。如果你觉的对Redux的流程已经掌握，可以停下看文章或者视频，自己先尝试着作一遍，然后再来进行对比。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=101033236&page=9" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 绑定子项响应事件

打开src目录下的`TodoList.js`文件，然后找到`List`组件的`renderItem`属性，编写代码如下:

```jsx
<div style={{margin:'10px',width:'300px'}}>
    <List
        bordered
        dataSource={this.state.list}
        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
    />    
</div>
```
然后编写这个`deleteItem()`方法，记得它需要接收一个`index`参数。

```js
deleteItem(index){
    console.log(index)
}
```
这时候我们到浏览器预览一下，按F12打开控制台，可以看到点击按钮时可以看到控制台输出了对应的数组下标。


### 在方法里编写Redux的Action

写完绑定方法就可以写`action`了，在编写时，我们要传递index过去，代码如下：

```js
deleteItem(index){
    const action = {
        type:'deleteItem',
        index
    }
    store.dispatch(action)
}
```

### reducer业务逻辑的实现

编写和传递完`action`就可以到`reducer.js`来编写相关的业务逻辑了。其实要作的就是删除数组下标的对应值。

```js
if(action.type === 'deleteItem' ){ 
    let newState = JSON.parse(JSON.stringify(state)) 
    newState.list.splice(action.index,1)  //删除数组中对应的值
    return newState
}
```

这时候就做完了这个TodoList组件的基本功能，当然，这个案例还是有很多不足的，我们需要学习更多的知识来完善它，这节课先到这里，下节课继续学习了。

## P10:基础-工作中写Redux的小技巧-1

上面的`ToDoList Demo`如果已经能熟练掌握了，说明你Redux已经入门了，可以先奖励自己一下了。但是你可能是一个已经走上工作岗位的老手，那你这样写Redux就稍微有点lowe了，你需要作合理的分离让层次更清晰。这节课和下节课我们来讲两个Redux实际开发中的小技巧。
<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=101159791&page=10" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 把Action Types 单度写入一个文件

写`Redux Action`的时候，我们写了很多Action的派发，产生了很多`Action Types`，如果需要`Action`的地方我们就自己命名一个`Type`,会出现两个基本问题：
- 这些Types如果不统一管理，不利于大型项目的服用，设置会长生冗余代码。
- 因为`Action`里的`Type`，一定要和`Reducer`里的`type`一一对应在，所以这部分代码或字母写错后，浏览器里并没有明确的报错，这给调试带来了极大的困难。


那我司中会把`Action Type`单独拆分出一个文件。在`src/store`文件夹下面，新建立一个`actionTypes.js`文件，然后把Type集中放到文件中进行管理。
```js
export const  CHANGE_INPUT = 'changeInput'
export const  ADD_ITEM = 'addItem'
export const  DELETE_ITEM = 'deleteItem'
```

### 引入Action中并使用

写好了`ationType.js`文件，可以引入到`TodoList.js`组件当中，引入代码如下：

```js
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
```
引入后可以在下面的代码中进行使用这些常量代替原来的`Type`值了.

```js
changeInputValue(e){
    const action ={
        type:CHANGE_INPUT,
        value:e.target.value
    }
    store.dispatch(action)
}
clickBtn(){
    const action = { type:ADD_ITEM }
    store.dispatch(action)
}
deleteItem(index){
    const action = {  type:DELETE_ITEM, index}
    store.dispatch(action)
}
```

### 引入Reducer并进行更改

也是先引入`actionType.js`文件，然后把对应的字符串换成常量，整个代码如下：

```js
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    return state
}
```
这样就完成了分离，那你可能要问，我们又多了一个文件，代码看起来更加晦涩难懂了，这有什么意义那？其实我课程开始的时候说了，这样就实现了服用，比如说增删改查，那查不可能用一次，可能很多地方都会用到，这样我们直接引入文件使用就可以了，可以避免冗余代码。还有就是这样如果我们写错了常量名称，程序会直接在浏览器和控制台报错，可以加快开发效率，减少找错时间。

## P11:基础-工作中写Redux的小技巧-2

这节课继续看一下Redux在工作中的一些优化技巧，在学完了基础之后，那就是不断打磨自己的编写模式，让自己的代码更加适合企业级开发的需求。精益求精，才是一个匠人应该有的精神。其实程序员最重要的一个精神，就是匠人精神，不断打磨自己的代码。 目前`ToDoList`组件里有很多Action，并且分散才程序的各个地方，如果庞大的工程，这势必会造成严重的混乱，那这节课就把所有的`Redux Action`放到一个文件里进行管理。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=101678424&page=11" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### 编写`actionCreators.js`文件

在`/src/store`文件夹下面，建立一个心的文件`actionCreators.js`，先在文件中引入上节课编写`actionTypes.js`文件。

```js
import {CHANGE_INPUT}  from './actionTypes'
```
引入后可以用`const`声明一个`changeInputAction`变量，变量是一个箭头函数，代码如下：

```js
import {CHANGE_INPUT}  from './actionTypes'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

```

### 修改todoList中的代码

有了文件，就可以把`actionCreatores.js`引入到`TodoLisit`中。

```js
import {changeInputAction} from './store/actionCreatores'
```
引入后，可以把`changeInputValue()`方法，修改为下面的样子。

```js
changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
```
然后再浏览器中打开程序，进行测试，也是完全正常的。


### 修改另两个Action方法

安装上面的例子，修改另两个方法，`actionCreatores.js`全部代码如下:

```js
import {CHANGE_INPUT , ADD_ITEM,DELETE_ITEM}  from './actionTypes'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})


```

这个文件写完，可以把`TodoList.js`文件里的所有action都改为直接调用方法的模式。代码如下：

```js
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store'
//关键代码-------------start
import {changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreatores'
//关键代码------------end

class TodoList extends Component {
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
}
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button 
                        type="primary"
                        onClick={this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
    storeChange(){
        console.log('store changed')
        this.setState(store.getState())
    }
    //--------关键代码------start
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    //--------关键代码------end
}
export default TodoList;
```

都写完了，我们就可以到浏览器中进行查看了，功能也是完全可以的。这节课我们实现`Redux Action`和业务逻辑的分离，我觉的这一步在你的实际工作中是完全由必要作的。这样可打打提供程序的可维护性。

## P12:加餐-Redux填三个小坑

到这里`Redux`基础部分也就快结束了，但是我有必要再拿出一节课，把平时你容易犯的错误总结一下。这节课的知识点你可能都已经知道，也可以省略不看。我总结了三个React新手最容易范的错误。

- `store`必须是唯一的，多个`store`是坚决不允许，只能有一个`store`空间
- 只有`store`能改变自己的内容，`Reducer`不能改变
- `Reducer`必须是纯函数

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=102026652&page=12" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### `Store`必须是唯一的

现在看`TodoList.js`的代码，就可以看到，这里有一个`/store/index.js`文件，只在这个文件中用`createStore()`方法，声明了一个store，之后整个应用都在使用这个`store`。
下面我给出了`index.js`内容，可以帮助你更好的回顾。

```js
import { createStore } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // 创建数据存储仓库
export default store   //暴露出去
```

### 只有`store`能改变自己的内容，`Reducer`不能改变

很多新手小伙伴会认为把业务逻辑写在了`Reducer`中，那改变state值的一定是`Reducer`，其实不然，在Reducer中我们只是作了一个返回，返回到了`store`中，并没有作任何改变。我这个在上边的课程中也着重进行了说明。我们再来复习一下Reducer的代码，来加深印象。

`Reudcer`只是返回了更改的数据，但是并没有更改`store`中的数据，`store`拿到了`Reducer`的数据，自己对自己进行了更新。

```js

import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    return state
}
```


### `Reducer`必须是纯函数

先来看什么是纯函数，纯函数定义：

> 如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。

这个应该是大学内容，你可能已经忘记了，其实你可以简单的理解为返回的结果是由传入的值决定的，而不是其它的东西决定的。比如下面这段`Reducer`代码。

```js
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    return state
}
```

它的返回结果，是完全由传入的参数`state`和`action`决定的，这就是一个纯函数。这个在实际工作中是如何犯错的？比如在`Reducer`里增加一个异步ajax函数，获取一些后端接口数据，然后再返回，这就是不允许的（包括你使用日期函数也是不允许的），因为违反了调用参数相同，返回相同的纯函数规则。

接下来我还会给大家继续讲解`Redux`的进阶部分，让大家对`Redux`的使用更加精通和深入，我是技术胖，一个作免费前端视频的博主，我们一起加油。

## P13:进阶-组件UI和业务逻辑的拆分方法

Redux的基础知识都学完了，但是你离高手还差一点东西，就是如何拆分UI部分和业务逻辑，让项目更容易维护。你可能会问了除了更容易维护，还有没有其它好处，肯定是有的。能拆分了，就代表能更多人协作，实现超大型项目的开发和快速上线。比如两个人同时写一个模块，一个写UI部分，一个写业务逻辑部分，之后两个人在一起整合。也许小公司你觉的这样的优势不明显，因为公司的财力或者开发人员不足，使得这种开发方法大大受到了限制。但是大公司，不缺钱，不缺人，抢的就是时间，这时候这种开发模式就可以解决问题。这也是我为什么强烈推荐你去大公司的原因，虽然技术都一样，但是大公司和小公司开发的模式是完全不一样的。有点跑题了，言归正传，看看到底如何把一个组件的UI和业务逻辑拆分出来。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=102575200&page=13" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 拆分UI组件

可以看到`TodoList.js`组件是UI和业务逻辑完全耦合在一起的，这时候在`src`目录下新建一个文件叫`TodoListUI.js`,快速生成页面的基本结构.

```js
import React, { Component } from 'react';
class TodoListUi extends Component {
    
    render() { 
        return ( <div>123</div> );
    }
}
 
export default TodoListUi;
```
然后去`TodoList.js`里把`JSX`的部分拷贝过来， 现在的代码如下(当然现在是不可以使用的，好多东西我们还没有引入，所以会报错):
```js
import React, { Component } from 'react';
class TodoListUi extends Component {
    
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button 
                        type="primary"
                        onClick={this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
}
 
export default TodoListUi;

```

要想可用，第一步是需要引入`antd`的相关类库，这时候你可以拷贝`TodoList.js`的相关代码，把`antd`的CSS和用到的组件都拷贝过来，进行引入。

```js
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
```
但是这并没有`TodoListUI.js`组件所需要的`state`(状态信息)，接下来需要改造父组件进行传递值。

### `TodoList.js`文件的修改

`TodoList.js`里就不需要这么多`JSX`代码了，只要引入`TodoListUI.js`。

```js
import TodoListUI from './TodoListUI'
```
引入之后render函数就可以写成下面这个样子。
```jsx
render() { 
    return ( 
        <TodoListUI />
    );
}
```
这样就算做完UI和业务分离的第一步了，剩下的就是改变`TodoListUI.js`里边的属性了，也就是两个组件的整合。

### UI组件和业务逻辑组件的整合

其实整合就是通过属性传值的形式，把需要的值传递给子组件，子组件接收这些值，进行相应的绑定就可以了。这个步骤比较多，还是看视频学习吧。

TodoList.js的render部分
```js
render() { 
    return ( 
        <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            deleteItem={this.deleteItem}
        />
    );
}
```
你还需要在`constructor`(构造函数里)对`deleteItem`方法进行重新绑定`this`，代码如下。

```js
this.deleteItem = this.deleteItem.bind(this)
```
修改完`TodoList.js`文件，还要对UI组件进行对应的属性替换，所有代码如下。

```js
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
class TodoListUi extends Component {
    
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input  
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue}
                    />
                    <Button 
                        type="primary"
                        onClick={this.props.clickBtn}
                    >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
}
 
export default TodoListUi;
```
需要注意的是在`List`组件的删除功能,需要用箭头函数的形式，代替以前方法，并在箭头函数里使用属性的方法，调用出啊你过来的方法。

```js
<List
    bordered
    dataSource={this.props.list}
    renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
/>    
```

这些都做完了，你就已经把组件进行了拆分，其实这节课学习的目的不是拆分的步骤，而是拆分的思想，你可以反复几次来加深对UI和业务逻辑拆分的理解。前端免费课程就找技术胖，下节课再见。

## P14:进阶-填坑和Redux中的无状态组件

上节课程序写完，有一个小错误，当时我并没注意到，还是VIP群里的小伙伴告诉我的，无意中给大家留了一个坑，跟大家说对不起了。这节课我们先解决这个遗留问题，再讲一下无状态组件。无状态组件其实就是一个函数，它不用再继承任何的类（class），当然如名字所一样，也不存在`state`（状态）。因为无状态组件其实就是一个函数（方法）,所以它的性能也比普通的`React`组件要好。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=102875527&page=14" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 胖哥翻车填坑

上节课写完UI和业务分离后，在删除`TodoList`的项目时，是有一个错误的，这个错误属于业务逻辑错误，并不是语法错误。就是在删除item时，正序删除是没有问题的，但是倒叙删除是有问题的。
主要是我们的`index`出现了重新声明的问题。

原来的错误代码是这样的：
```js
<List
    bordered
    dataSource={this.props.list}
    renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
/>   

```

只要改成下面这样就正确了。

```js
 <List
    bordered
    dataSource={this.props.list}
    renderItem={
        (item,index)=>(
            <List.Item onClick={()=>{this.props.deleteItem(index)}}>
                {item}
            </List.Item>
        )
    }
/>    
```

### 无状态组件的改写

把UI组件改成无状态组件可以提高程序性能，具体来看一下如何编写。

1. 首先我们不在需要引入React中的`{ Component }`，删除就好。
2. 然后些一个`TodoListUI`函数,里边只返回`JSX`的部分就好，这步可以复制。
3. 函数传递一个`props`参数，之后修改里边的所有`props`，去掉`this`。

这里给出最后修改好以后的无状态组件代码，这样的效率要高于以前写的普通`react`组件。

```js
import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUi = (props)=>{
    return(
        <div style={{margin:'10px'}}>
            <div>
                <Input  
                    style={{ width:'250px', marginRight:'10px'}}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item,index)=>(
                            <List.Item onClick={()=>{props.deleteItem(index)}}>
                                {item}
                            </List.Item>
                        )
                    }
                />    
            </div>
        </div>
    )
   
}

export default TodoListUi;
```

总结:这节课主要学习了`React`中的无状态组件，如果是以前没有`Redux`的时候，实现分离是比较困难的，但是现在我们作项目，一定想着找个组件是否可以作成无状态组件。如果能做成无状态组件就尽量作成无状态组件，毕竟性能要高很多。


## P15:进阶-Axios异步获取数据并和Redux结合

这节课是最近几天小伙伴问我比较多的问题，就是从后端接口获取了数据，如何可以放到`Redux`的`store`中，很多小伙伴被这个困难卡住了。这节课就来学习一下如何从后台取得数据，并和`Redux`结合，实现想要的业务逻辑。比如以前我们的列表数据是在`Reducer`里写死的，这节课使用`Axios`从后台获取数据。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=103134905&page=15" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 利用easy-mock创建模拟数据

这个在基础课程中已经讲过了，我就不作过多的介绍了，如果你还不会，就直接看基础课程吧，反复讲也没什么意思。如果你说我也懒得新建一个，你也可以使用我的模拟数据，我在这里给出地址。

> 地址：https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList

JSON的基本格式，如果上面的接口不管用了，你可以用`Easy mock`自己作一个这样的接口:

```json
{
  "data": {
    "list": [
      '早上4点起床，锻炼身体',
      '中午下班游泳一小时',
      '晚上8点到10点，学习两个小时'
    ]
  }
}
```


### 安装并使用`Axios`

因为在`Redux`的学习中，我们使用了新的项目和目录，所以要重新安装`Axios`插件（以前安装的不能再使用了）。直接使用`npm`进行安装。

```
npm install --save axios
```
安装完成后，就可以在`TodoList.js`中，引入并进行使用了。

```js
import axios from 'axios'
```
引入后，在组件的声明周期函数里`componentDidMount`获取远程接口数据。

```js
componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
        console.log(res)
    })
}
```

做完这一步骤后，可以在浏览器中打开，预览下是否控制台(console)获取数据，如果可以获取，说明完全正常。


### 获取数据后跟`Redux`相结合（重点）

接下来就可以把得到的数据放到`Redux`的`store`中了，这部分和以前的知识都一样，我就尽量给出代码，少讲理论了。
先创建一个函数，打开以前写的`store/actionCreatores.js`函数，然后写一个新的函数，代码如下：
```js
export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})

```
这时候保存会显示找不到`GET_LIST`,我们再到`actionTypes.js`文件中加入一个常量，然后引入到`actionCreatores.js`中

```js
export const  GET_LIST = 'getList'
```
引入到`actionCreatores.js`中

```js
import {CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST}  from './actionTypes'
```

这步完成后，回到`TodoList.js`文件，继续编写`axios`中的回调内容，在写之前，记得先把`getListAction`进行引入。

```js
import {changeInputAction , addItemAction ,deleteItemAction,getListAction} from './store/actionCreatores'
```

```js
componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{    
        const data = res.data
        const action = getListAction(data)
        store.dispatch(action)
    })
}
```
现在数据已经通过`dispatch`传递给`store`了，接下来就需要`reducer`处理业务逻辑了。打开`reducer.js`代码如下(详细步骤在代码中作了注释)：

```js
//----关键代码--------start --------引入GET_LIST
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
//----关键代码--------end 
const defaultState = {
    inputValue : 'Write Something',
    //----关键代码--------start --------删除原来的初始化代码，减少冗余
    list:[]
}
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM ){ 
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    //----关键代码--------start --------
    if(action.type === GET_LIST ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list = action.data.data.list //复制性的List数组进去
        return newState
    }
    //----关键代码--------en'd --------

    return state
}
```

这样就完成了一次从后台请求数据，然后和Redux结合的过程。希望小伙伴都能练习一下，我们的程序员越来越像真实的开发了，小伙伴也要在练习中不断熟悉这种开发模式。


## P16:进阶-Redux-thunk中间件的安装和配置

通过学习，你已经对`Redux`的基本流程有了全面的了解，也许你已经在项目中开始使用。其实咱们一起学完了大部分的Redux知识，但是我还是决定继续讲解一下`Redux-thunk`这个Redux最常用的插件。什么时候会用到这个插件那？比如在`Dispatch`一个`Action`之后，到达`reducer`之前，进行一些额外的操作，就需要用到`middleware`（中间件）。在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由。 这个中间件可以使用是`Redux-thunk`来进行增强(当然你也可以使用其它的)，它就是对Redux中`dispatch`的加强，这节课我们先来学习一下安装和配置（特别是配置的使用很多小伙伴都配置不成功）。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=103582284&page=16" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

![Redux-thunk](https://jspang.com/images/redux_action.png)


### 安装`Redux-thunk`组件

`Redux-thunk`并不在`Redux`基础组件中，也就是说需要进行新安装。安装使用`npm`就可以了。

```
npm install --save redux-thunk
```

在终端命令行输入上面的命令，就可以进行安装了，根据网络不同安装的时间也会有些不同，我办公室的网是秒按，家里的宽带需要10分钟左右。

### 配置`Redux-thunk`组件

安装作起来很容易，但是配置就要稍微注意一下了，这里边还是有几个小坑的，如果你完全按照官方文档是配置不成功的。
需要在创建store的地方引入`redux-thunk`，对于我们的目录来说，就是`/store/index.js`文件。

1.引入`applyMiddleware`,如果你要使用中间件，就必须在redux中引入`applyMiddleware`.

```js
import { createStore , applyMiddleware } from 'redux' 
```
2.引入`redux-thunk`库

```js
import thunk from 'redux-thunk'
```
如果你按照官方文档来写，你直接把thunk放到`createStore`里的第二个参数就可以了，但以前我们配置了`Redux Dev Tools`，已经占用了第二个参数。

官方文档给的方法:

```js
const store = createStore(
    reducer,
    applyMiddleware(thunk)
) // 创建数据存储仓库
```
这样写是完全没有问题的，但是我们的`Redux Dev Tools`插件就不能使用了，如果想两个同时使用，需要使用**增强函数**。使用增加函数前需要先引入`compose`。

```js
import { createStore , applyMiddleware ,compose } from 'redux' 
```
然后利用`compose`创造一个增强函数，就相当于建立了一个链式函数，代码如下:
```js
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
```

有了增强函数后，就可以把`thunk`加入进来了，这样两个函数就都会执行了。

```js
const enhancer = composeEnhancers(applyMiddleware(thunk))
```
这时候直接在`createStore`函数中的第二个参数，使用这个`enhancer`变量就可以了，相当于两个函数都执行了。
```js
const store = createStore( reducer, enhancer) // 创建数据存储仓库
```
也许你对增加函数还不能完全理解，其实你完全把这个想成固定代码，直接使用就好，我在这里给出全部代码，方便你以后学习使用。

```js
import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
import thunk from 'redux-thunk'

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store   //暴露出去
```

这样就算把`Redux`的中间件配置好了，可以运行项目，到浏览器看一下结果和看一下`Redux Dev Tools`插件了。

## P17:进阶-Redux-thunk的使用方法

这节课我们把向后台请求数据的程序放到中间件中，这样就形成了一套完整的Redux流程，所有逻辑都是在Redux的内部完成的，这样看起来更完美，而且这样作自动化测试也会变动简单很多，所以工作中你还是要尽量按照这种写法来写。现在就开始学习吧。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=103810576&page=17" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 在`actionCreators.js`里编写业务逻辑

以前`actionCreators.js`都是定义好的action，根本没办法写业务逻辑，有了`Redux-thunk`之后，可以把`TodoList.js`中的`componentDidMount`业务逻辑放到这里来编写。也就是把向后台请求数据的代码放到`actionCreators.js`文件里。那我们需要引入`axios`,并写一个新的函数方法。（以前的action是对象，现在的action可以是函数了，这就是`redux-thunk`带来的好处）

```js
import axios from 'axios'
...something...
export const getTodoList = () =>{
    return ()=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            console.log(data)
        })
    }
}
```
现在我们需要执行这个方法，并在控制台查看结果，这时候可以修改`TodoList.js`文件中的`componentDidMount`代码。
```js
//先引入getTodoList
import {getTodoList , changeInputAction , addItemAction ,deleteItemAction,getListAction} from './store/actionCreatores'
---something---
componentDidMount(){
    const action = getTodoList()
    store.dispatch(action)
}

```
然后我们到浏览器的控制台中查看一下，看看是不是已经得到了后端传给我们的数据，如果一切正常，应该是可以得到。得到之后，我们继续走以前的Redux流程就可以了。

```js
export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
            
        })
    }
}
```
这个函数可以直接传递`dispatch`进去，这是自动的，然后我们直接用`dispatch(action)`传递就好了。现在我们就可以打开浏览器进行测试了。

这时候还会有一些警告，主要是我们引入了并没有使用，我们按照警告的提示，删除没用的引入就可以了。


也许你会觉的这么写程序很绕，其实我刚开始写Redux的时候也会这么想，但是随着项目的越来越大，你会发现把共享`state`的业务逻辑放到你`Redux`提示当中是非常正确的，它会使你的程序更加有条理。而在自动化测试的时候，可以直接对一个方法进行测试，而对生命周期测试是困难的。我目前接触的大公司都是要求这样写的，如果现在还不能理解里边的好处，也不用纠结，先按照这种形式进行编写。等你写过2至3个项目后，你就能理解这种写法的好处了。

## P18:进阶-Redux-saga的安装和配置

先来说明一点，我们这里讲的中间件不是`React`的中间件，而是`Redux`的中间件，这一点你要明白，否则工作中会出大问题的，你的`React`知识架构也会出现偏差。其实`Redux`的中间件不仅仅只有`Redux-thunk`，还有一个比较出名的是`Redux-saga`.当然这个中间件我们公司并没有使用，只是自己研究，所以可能讲解有不足的地方。目前国内的IT企业一般都在使用这两个中间件，使用其它的很少，这个就像可口可乐和百事可乐，所以很有必要学习一下。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=104289320&page=18" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### redux-saga的安装

你可以直接使用`npm`来进行安装，当然用`yarn`也是没有问题的，根据自己的喜好吧。我这里使用了`npm`来进行安装。

```
npm install --save redux-saga
```

这里给出github地址，方便你更好的学习。
> https://github.com/redux-saga/redux-saga

### 引入并创建`Redux-saga`

安装好后，就可以使用了，直接在`/src/store/index.js`里引入`redux-saga`,并创建一个`sagaMiddleware`，代码如下:

```js
import createSagaMiddleware from 'redux-saga'   //引入saga
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件

```
创建好后，还是用Redux的增强函数进行传递。也就是把原来的`Redux-thunk`替换成`saga`中间件（注意去掉原来不用的`redux-thunk`引入）。
```js
import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'   
//------关键代码----start----------- 
import createSagaMiddleware from 'redux-saga' 
const sagaMiddleware = createSagaMiddleware();
//------关键代码----end-----------

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
//------关键代码----start-----------
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
//------关键代码----end-----------

const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store   //暴露出去

```
这步完成后，就把原来的`redux-thunk`替换成`redux-saga`了，当然，现在我们还不能使用，我们还需要继续配置`sagas.js`文件。

### 创建`sagas.js`文件并引入

`redux-saga`希望你把业务逻辑单独写一个文件，这里我们在`/src/store/`文件夹下建立一个`sagas.js`文件。

```js
function* mySaga() {} 
export default mySaga;

```
创建好以后直接引入到`index.js`里。
```js
import mySagas from './sagas' 
```
然后执行run方法，让`saga`运行起来。

```js
sagaMiddleware.run(mySagas)
```
为了方便你学习，这里给出`/src/store/index.js`的全部内容。

```js
import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'   
import createSagaMiddleware from 'redux-saga' 
import mySagas from './sagas' 

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore( reducer, enhancer) 
sagaMiddleware.run(mySagas)


export default store  

```

现在已经完全替换成`redux-saga`了，所以以前在`TodoList.js`中的代码需要删除，不删除就会报错。主要删除`componentDidMount`声明周期函数里的代码。
这样`redux-saga`的安装和配置就算完成了，之后我们就可以编写中间件了。其实这个配置一般在项目中也只需要作一次，你完全可以收藏网页，然后需要时回来看一下就可以了。


## P19:进阶-用Redux-saga获取TodoList列表

上节课已经完成了`redux-saga`的安装和基本配置，这篇文章就用`Redux-saga`来完成TodoList的列表获取。其实`redxu-saga`是比`redux-thunk`要复杂的，它多出了很多API需要学习，至少是学习成本增加了。但是有的人说`saga`更适合于大型项目，本人不予表态，也不想引战，如果你的公司用了`saga`，这两篇文章足可以让你入门了。话不多说，我们继续学习。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=104710945&page=19" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 编写`TodoList.js`文件

我们先来改造`TodoList.js`文件，现在`componentDidMount`里边是空的，所以我们要进行redux的基本操作，这个流程我不再多作介绍了，已经练习了10几遍了。

当然可以先引入一个`action`，当然这个action还没有，我们一会再进行编写，给它起名叫做`getMyListAction`(你可以起任何名字，记住就好，因为下面我们要不断使用)

```js
import {getMyListAction, changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreatores'
```
然后顺势在`actionCreators.js`文件里把这个action创建出来。
```js
export const getMyListAction = ()=>({
    type:GET_MY_LIST
})

```
写完你会发现`GET_MY_LIST`也没有，需要先引入，再到`actionTypes.js`里进行定义

```js
import {GET_MY_LIST,CHANGE_INPUT , ADD_ITEM,DELETE_ITEM,GET_LIST}  from './actionTypes'
```
actionTypes.js文件定义`GET_MY_LIST`
```js
export const  GET_MY_LIST = 'getMyList'
```

之后就可以回到`TodoList.js`文件，编写`componentDidMount`里的内容了。
```js
componentDidMount(){
    const action =getMyListAction()
    store.dispatch(action)
    console.log(action)
}
```

测试完成，可以删除`console.log()`,保持代码的简洁和没有冗余代码。

### 编写sagas.js文件(也是业务逻辑)

用`saga`的中间件业务逻辑，就都写在这个`sagas.js`文件里，文件里我们用`mySaga`来作为入口函数。在入口函数中捕获传递过来的`action`类型，根据类型不同调用不同的方法。

```js
import { takeEvery } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    console.log('jspang')
}
  
export default mySaga;
```

写完上面的代码，我们看一下是否可以正确在浏览器的控制台打印出结果，如果可以顺利的打印出来，说明到目前为止制作正确。然后接下来我们就要用`axios`来请求结果了。

这里给出`sagas.js`的所有内容，然后详细的意思在视频中进行讲解。

```js
import { takeEvery ,put } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreatores'
import axios from 'axios'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    //这段代码我就不删除了。
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)
        
    // })
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const action = getListAction(res.data)
    yield put(action)
}
  
export default mySaga;
```

总结：这就是`Redux-saga`的基本使用方法，其实saga还有其它一些API，但是我工作中用的也不是很多，所以这里也只能保证你达到入门的水平，至于深入，你可以自己探索。至于`redux-thunk`和`redux-saga`哪个好的问题，这里不作争论，用网上流行的话说，小孩子才做选择题，技术老鸟全都学。

## P20:进阶-React-Redux介绍和安装

`React-Redux`这是一个React生态中常用组件，它可以简化`Redux`流程，这节课我们就重新建立一个项目`Demo02`，然后会利用几节课的时间用`React-redux`把之前的`TodoList`案例重新实现一遍。如果你公司不用这个插件，其实没必要耗费时间学。但是作为一篇文章，必须保证知识尽可能完整。（需要注意的是概念：React、Redux、React-redux是三个不同的东西）

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=104996624&page=20" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

### `React`项目初始化

因为以前已经安装了脚手架工具`creat-react-app`，所以现在直接在项目的终端中输入下面的命令。

```
create-react-app demo02
cd demo02
npm start
```
经过上面的三个命令，应该可以在浏览器中出现下面的界面（出现画面说明我们项目初始化完成）。

![react-redux课程](https://jspang.com/images/react-redux001.png)

安装完成后，删除一些没有必要的样式和代码，在`/src`目录下，只留一个`index.js`文件，其余的全部删除，这时候项目已经不能启动起来了，这很正常。

```js
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));
```


### 安装`react-redux`

项目初始化好后，直接使用`npm`在命令行安装`React-redux`，这个网络的不同安装时间也有所不同。
```js
npm install --save react-redux
```
视频录制视时安装的版本是`7.1.0`版本，你学习的时候可能跟我有所不同，如有不同，可以到Github上查询最新API文档。


### 修改代码，让他跑起来

目前项目还是没办法跑起来的，需要建立一个`TodoList.js`的组件。项目代码如下:

```js
import React, { Component } from 'react';
class TodoList extends Component {
    render() { 
        return ( <div>JSPang</div> );
    }
}
export default TodoList;
```
有了`TodoList.js`后，我们引入到`index.js`文件下，然后修改代码如下:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
ReactDOM.render(<TodoList />, document.getElementById('root'));
```
这时候再在浏览器中预览，就会只输出一个`JSPang`的字样。虽然很丑，但是项目已经跑起来了。接下来我们编写一下`render`函数中的JSX页面（为了节省大家的时间，就不再使用`antd`了）。

```js
render() { 
    return (
        <div>
            <div><input /><button>提交</button></div>
            <ul>
                <li>JSPang</li>
            </ul>
        </div>
        );
}
```
这时候界面应该发生了一点变化,这样基本的项目我们就算初始化完成了，接下来我们按原来的`Redux`方式作一个`store`出来。

### `Redux`的安装和使用（复习）

先在终端中安装`Redux`包，因为是一个新项目，所以需要重新安装。

```
npm install --save redux
```


首先创建一个`store`文件夹，在`/store`下创建一个`index.js`文件,并写入下面代码：

```js
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
```
目前我们还没有`reducer`，所以我们要创建`reducer.js`文件，代码如下:

```js
const defalutState = {
    inputValue : 'jspang',
    list :[]
}

export default (state = defalutState,action) =>{
    return state
}
```
然后再`TodoList.js`中的构造函数`constructor`中使用。

```js
import React, { Component } from 'react';
//-----关键代码--------start
import store from './store'
//-----关键代码--------end
class TodoList extends Component {
    //-----关键代码--------start
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    //-----关键代码--------end
    render() { 
        return (
            <div>
                <div>
                    //-----关键代码--------start
                    <input value={this.state.inputValue} />
                    //-----关键代码--------end
                    <button>提交</button>
                </div>
                <ul>
                    <li>JSPang</li>
                </ul>
            </div>
            );
    }
}
 
export default TodoList;

```

写完这段，到浏览器中保存看一下，应该就得到`store`中的值了，到目前为止，我们只是安装了`React-Redux`,但是还并没有进行使用，这节课只要是把基本的环境搭建好和复习一下以前的知识。下节课我们再逐步学习`React-Redux`的知识，小伙伴们先不要着急，先把开发环境搭建好吧。

 ## P21:进阶-React-redux中的Provider和connect

 上节课已经完成了`React-redux`开发`TodoList`组件的基本环境。现在就可以开心的学习`React-redux`了，这节课主要学习一下`Provider`和`connect`这两个知识点。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=105232883&page=21" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

 ### `<Provider>`提供器讲解

 `<Provider>`是一个提供器，只要使用了这个组件，组件里边的其它所有组件都可以使用`store`了，这也是`React-redux`的核心组件了。有了`<Provider>`就可以把`/src/index.js`改写成下面的代码样式，具体解释在视频中介绍了。

 ```js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
//---------关键代码--------start
import { Provider } from 'react-redux'
import store from './store'
//声明一个App组件，然后这个组件用Provider进行包裹。
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
//---------关键代码--------end
ReactDOM.render(App, document.getElementById('root'));
 ```

 写完这个，我们再去浏览器中进行查看，发现代码也是可以完美运行的。需要注意的是，现在还是用传统方法获取的`store`中的数据。有了`Provider`再获取数据就没有那么麻烦了。

 ### `connect`连接器的使用

 现在如何简单的获取`store`中数据那？先打开`TodoList.js`文件，引入`connect`，它是一个连接器（其实它就是一个方法），有了这个连接器就可以很容易的获得数据了。

 ```js
 import {connect} from 'react-redux'  //引入连接器
 ```
这时候暴露出去的就变成了`connect`了，代码如下。

```js
export default connect(xxx,null)(TodoList);
```
这里的`xxx`代表一个映射关系，目前还没有制作这个映射关系。

### 映射关系的制作

映射关系就是把原来的state映射成组件中的`props`属性，比如我们想映射`inputValue`就可以写成如下代码。

```js
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue
    }
}
```
这时候再把`xxx`改为`stateToProps`
```js
export default connect(stateToProps,null)(TodoList)
```
然后把`<input>`里的`state`标签，改为`props`,代码如下:
```js
 <input value={this.props.inputValue} />
```
为了方便你学习，我这里给出所有的`TodoList.js`的所有代码。
```js
import React, { Component } from 'react';
import store from './store'
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() { 
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>JSPang</li>
                </ul>
            </div>
            );
    }
}

const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue
    }
}
 
export default connect(stateToProps,null)(TodoList);
```

写完之后再到浏览器中查看一下，发现我们映射的关系也是可以用的。这节课就是`React-Redux`插件的使用重点，你需要多写几遍，把这个流程记在心里。先到这里，下节课我们继续实现`TodoList`组件。

 ## P22:进阶-React-redux的数据修改

上节课已经可以用`React-redux`顺利的拿到`Store`中数据了。这节课学习如何改变`Store`中的数据。也就是当我们修改`<input>`中的值时，去改变`store`数据，UI界面也随之进行改变。

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=105477337&page=22" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 编写`onChange`响应事件

打开`TodoList.js`文件，然后在`<button>`上注册`onChange`事件,这里我就偷懒直接绑定`this`了。

```jsx
 <input value={this.props.inputValue} onChange={this.inputChange.bind(this)} />
```
有了事件需要编写对应的方法,这里先写一个最简单的`inputChange`方法。

```js
inputChange(e){
    console.log(e.target.value)
}
```
然后到浏览器中的控制台就不再有报错，而且输入时可以打印出值，这书名我们的绑定成功了。这步完成我们要改为`react-redux`的了。

### 编写`DispatchToProps`

要使用`react-redux`，我们可以编写另一个映射`DispatchToProps`,先看下面这段代码，你会发现有两个参数，第二个参数我们用的是`null`。

```js
export default connect(stateToProps,null)(TodoList);
```

`DispatchToProps`就是要传递的第二个参数，通过这个参数才能改变`store`中的值。

```js
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            console.log(e.target.value)
        }
    }
}
```
有了这个参数之后可以把响应事件改成下面的代码.
```js
 <input value={this.props.inputValue} onChange={this.props.inputChange} />
```
然后把connect第二个参数传递过去。
```js
export default connect(stateToProps,dispatchToProps)(TodoList);
```
这时候原来的`inputChange`方法就没用了，可以删除掉。
目前整体的代码就改为下面的样子了，我们在浏览器中预览也是可以看到效果的。此步骤成功说明映射关系支持成功。
```js
import React, { Component } from 'react';
import store from './store'
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() { 
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>JSPang</li>
                </ul>
            </div>
            );
    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            console.log(e.target.value)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);
```

### 派发`action`到store中

映射关系已经做好了，接下来只要进行`action`的派发和`reducer`对业务逻辑的编写就可以了。派发action和以前的流程一样，我就直接给出代码了。

```js
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        }
    }
}
```

派发后就需求在`reducer`里边，编写对应的业务逻辑了。

```js
const defalutState = {
    inputValue : 'jspang',
    list :[]
}
export default (state = defalutState,action) =>{
    if(action.type === 'change_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}
```
这样就算整个修改过程完成了，到浏览器中查看一下，应该就实现了改变input框的效果。这个流程你刚开始学会觉的很绕，但是你作的多了，你就会发现它很简单，就是一个模式，而且会降低程序出错的机率。建议这个流程你至少要写5遍以上，据我所知，几乎所有公司用react都会用到react-redux，所以这个流程重要性不次于`Redux`的流程，一定要熟练掌握。


 ## P23:进阶-React-redux增加List数据

 这节课主要学习一下如何用`React-Redux`增加列表数据，如果你上节课的流程练习熟练了，这节课就不是很难了。这节课要实现的效果，就是点击提交按钮时，可以在列表中进行增加。

 <iframe src="//player.bilibili.com/player.html?aid=56213747&cid=105700812&page=23" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


### 给`<button>`按钮增加点击事件

直接在`/src/TodoList.js`里的`Button`增加一个`onClick`事件，代码如下:

```js
<button onClick={this.props.clickButton}>提交</button>
```
注意这里依然使用的`props`，也就是说还需要把方法写在`dispatchToProps`里。我们这里先写一个测试，看看是否绑定上了。

```js
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            console.log('111111111')
        }
    }
}
 
```
写完`clickButton`方法后，在浏览器中预览，打开浏览器的控制台看一下结果，应该在点击时，可以看到显示`111111111`。
这步完成，就是用`dispatch`派发`action`了。
```js
clickButton(){
    let action = { type:'add_item' }
    dispatch(action)
}
```

### 编写`Reducer`的业务逻辑

派发完成后,到`Reducer`编写业务逻辑，这一步和一起的操作基本一样。

```js
const defalutState = {
    inputValue : 'jspang',
    list :[]
}

export default (state = defalutState,action) =>{
    if(action.type === 'change_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    //----关键代码------start---------
    if(action.type === 'add_item'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    //----关键代码------end---------
    return state
}
```
### 页面UI部分的制作

这步完成后，我们到`TodoList.js`中进行`JSX`部分的编写，编写前需要先把`stateToProps`的映射关系做好。

```js
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}
```
有了映射关系，就可以再界面中用属性的方式，进行显示，代码如下：

```js
<ul>
    {
        this.props.list.map((item,index)=>{
            return (<li key={index}>{item}</li>)
        })
    }
</ul>
```
这样就实现了增加`TodoList`的列表项，这里给出`TodoList.js`的代码，方便学习使用.
```js
import React, { Component } from 'react';
import store from './store'
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() { 
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                    <button onClick={this.props.clickButton}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            let action = {
                type:'add_item'
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);
```

还有一个删除功能我就不浪费大家时间继续制作了，如果你自己有兴趣可以试着作一下。下节课我们主要讲一下目前代码的优化，这样让你在工作中看起来更专业些。   

 ## P24:加餐-React-redux程序优化(完结)

 这节课把现在写的代码优化一下，作程序的都应该有一些代码洁癖，才能写出让人称赞的程序。写完业务逻辑后作代码优化，也是程序员的本质工作之一。
 <iframe src="//player.bilibili.com/player.html?aid=56213747&cid=106034541&page=24" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>


 ### 用结构复制精简代码

 现在代码中有好几处`this.props`都是重复的，这时候就可以用`javascript`的解构赋值方法，来精简代码。修改`TodoList.js`中的`Render`函数，把原来带代码修改为下面的代码:

```jsx
    render() { 
        let {inputValue ,inputChange,clickButton,list} = this.props;
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={inputChange} />
                    <button onClick={clickButton}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item,index)=>{
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }

```

### 把`TodoList`改为UI组件-提高性能

可以看到，现在的`TodoList`组件里没有任何的业务逻辑，只有一个`Render`方法，这时候就可以把它改为UI组件(无状态组件)，UI组件就是一个方法，减少很多冗余操作，从而提高程序运行性能。这时候重新声明一个`TodoList`的变量，然后把render函数里的东西复制过来，只要稍加修改，就可以得到下面的代码：

```js
const TodoList =(props)=>{
    let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}
```
代码写完后，我们删除一些不用的引入，然后就可以到浏览器中进行预览了。

```js
import React from 'react';
import {connect} from 'react-redux'
```
为了更好的学习，我在这里给出目前`TodoList.js`的所有代码。

```js
import React from 'react';
import {connect} from 'react-redux'


const TodoList =(props)=>{
    let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}


const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            let action = {
                type:'add_item'
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);
```
那我们反过来，再来理解一下最后一句话代码的意思。

```js
export default connect(stateToProps,dispatchToProps)(TodoList);
```
`connect`的作用是把UI组件（无状态组件）和业务逻辑代码的分开，然后通过connect再链接到一起，让代码更加清晰和易于维护。这也是`React-Redux`最大的有点。

`Redux`的教程和视频到这里就结束了，下套课程我会讲解`React-router`，请小伙伴们持续关注博客，获得的最新的学习视频。

