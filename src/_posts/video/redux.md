---
top: true
category: 视频教程
tags:
  - React
date: 2019-06-20
title: Redux免费视频教程（更新第5集）
vssue-title: redux-base
---

![Redux免费视频教程](https://jspang.com/images/Redux_index.png)

通过React基础教程的学习，我相信你一定对React有了很好的了解，也可以制作出一些简单的React项目（注意我这里说的是简单的项目）。为什么你只能做出一些简单的项目那?因为React就是一个简单的轻量级的视图层框架。

React当中的组件通信和状态管理是特别繁琐的，比如子组件和父组件通信改变值，要通过父组件的方法。这就好比恋爱，要先认识女孩，再牵手，再接吻，最后你才能为所欲为。这种形式肯定不符合现在人的习惯，所以就有了很多快餐服务，通宵服务，极大的方便了现代人的需求。在开发中同样，公司最讲的就是效率，效率就需要把事情变简单，那只有React肯定不符合大型项目和快速开发。需要视图层框架+数据层框架，两个相互结合，就可以实现大型的开发项目了。

`Redux`是目前React生态中，最好的数据层框架，所以单独拿出一个文章来系统的讲解Redux。

博主才疏学浅，不保知识点无误，敬请指正，我也会小心求证，力保知识的正确。

<!-- more -->

## P01:认识Redux和文章介绍


其实能搜到这篇文章，证明对`Redux`也算有一个基本认识，这篇文章适合初级前端开发者阅读，会详细讲解Redux的基础知识，在了解基础知识后，会逐步增加Redux高级内容。
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

## P02:Redux工作流程

这节课要学习的知识非常重要，你只有学会了`Redux`工作流程，你才能对`Redux`有个通透的了解。如果你只官方的图或者自己看文档，还是有一点难度的。但是如果你红尘接触的多或者跟胖哥一样，是一个喜欢小姐姐的人，那这个流程就很简单了。（看视频）

<iframe src="//player.bilibili.com/player.html?aid=56213747&cid=98877621&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

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

## P03: `Ant Design`介绍和环境初始化

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




## P04:用`Ant Design`制作UI界面

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

## P05:创建Redux中的仓库-store和reducer

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
