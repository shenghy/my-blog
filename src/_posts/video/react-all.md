---
category: 视频教程
tags:
  - React
date: 2017-10-22
title: React项目构建和路由 免费视频教程 (共10集)
vssue-title: react-all
---

**文章前言:**

这套课程不是从零开始的，你需要React基础知识，在我的博客中是有写的，我会在前言最后给出链接。因为我还是一线奋战的程序员，也经常加班，所以更新不会很快，但只少会保证一周三集的更新，本教材包括视频都可以在我的博客（jspang.com）免费观看。

<!-- more -->

**说明：因为学识和见识有限，文章中难免会有错误，还请大家指正，技术胖俯首拜谢。**

博客采用图文教程+视频教程的形式:你可以先看视频，然后在使用时查询这篇文章，作为备忘笔记使用。文章中会讲解到一下内容：

- React环境构建：讲解用工具构建和webapck自行构建两种方法进行。
- React路由：大概4-5节课，全面讲解react路由的知识。

学习教程前需要一定的React和webpack基础知识,可以学习下面这三篇文章：

- 《React免费视频教程-入门和组件》
- 《React免费视频教程-表单的应用》
- 《webpack3.x版 成神之路》

## 第01节：构建：create-react-app 快速脚手架

很高兴又跟大家见面了，其实react项目的搭建在实际工作中是很简单的，因为FaceBook官方发布了一个无需配置的、用于快速构建开发环境的脚手架工具create-react-app。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=g0566ytwh88&tiny=0&auto=0" allowfullscreen></iframe>

我们可以直接访问它的官网：https://github.com/facebookincubator/create-react-app

**creat-react-app优点**

- 无需配置：官方的配置堪称完美，几乎不用你再配置任何东西，就可以上手开发项目。
- 高集成性：集成了对React，JSX，ES6和Flow的支持。
- 自带服务：集成了开发服务器，你可以实现开发预览一体化。
- 热更新：保存自动更新，让你的开发更简单。
- 全兼容性：自动处理CSS的兼容问题，无需添加-webkit前缀。
- 自动发布：集成好了发布成品功能，编译后直接发布，并且包含了sourcemaps功能。

**create-react-app的安装**

安装需要在命令行中进行,在安装create-react-app前，你需要安装node。然后在命令行中输入下面的命令：

windows系统下：

```
npm install -g create-react-app
```
Liunx和Mac电脑下：

```
sudo npm install -g create-react-app
```
这里的 -g 是全局安装的意思。

**创建React项目**

我们安装好create-react-app之后，就可以创建我们的React目录了，命令如下：

```
create-react-app my-app
```
这里是有个小坑的，就是你的目录名不要使用大写，这样作只要是为了严谨性，因为在Linux下是严格区分大小写的。

**启动服务**

直接在命令行中输入：
```
npm start
```
**总结：**在实际开发中，你使用脚手架就是这么简单，并没有什么门槛。让我们在快速搭建开发环境，上手项目。所以说React的生态还是很庞大和完美的。记住：听懂不等于学会，一定要动手作一作。

## 第02节：构建：generator-react-webpack

react的生态圈非常庞大，第三方的构建工具也有很多种，这节课介绍一个在业内比较流行的构建工具generator-react-webpack，它是需要yeoman的支持的。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=a0566j2nt71&tiny=0&auto=0" allowfullscreen></iframe>

**优点介绍：**

- 基于webpack构建，可以很容易的配置自己需要的webpack。
- 支持ES6，集成了Babel-Loader。
- 支持不同风格的CSS（sass，less，stylus）。
- 支持PostCSS转换样式。
- 集成了esLint功能。
- 可以轻松配置单元测试，比如Karma和Mocha

**安装**

安装还是在命令行用npm进行安装，不过在全局安装generator-react-webpack之前，你可以先安装yeoman。命令如下：

```
npm install -g yo
npm install -g generator-react-webpack
```

**创建目录**

我们先用命令自行创建一个文件：`new-react-demo`

```
mkdir new-react-demo
```
进入这个文件夹

```
cd new-react-demo
```
用生成器生成我们的项目目录
```
yo react-webpack
```

用npm start就可以查看效果了。

我们在视频中还讲解了目录结构，让你更好的掌握`generator-react-webpack`.

**总结：**`generator-react-webpack`更容易配置webpack，让你适应你的实际项目，并且有很强的扩展功能。一般我们团队都会使用这个脚手架来生产react的目录结构，但也有缺点，就是要依靠yeoman来生成。

## 第03节：构建：webpack一步一步构建01

如果你对webpack很精通，完全可以自己随心所欲的用webpack自己构建一个React的开发环境,这节从头开始自己构建一个简单的React开发环境。学习这节课前，你要会基本的webpack的开发。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=g0567kd5vai&tiny=0&auto=0" allowfullscreen></iframe>

**安装webpack**

在安装webpack之前，我们先建立一个文件夹并进入，当然你可以用其他方法，我这里就用命令了。

```
mkdir react-webpack
cd react-webpack
```
进入文件夹后对我们的webpack项目进行初始化，命令如下：
```
npm n init
```

初始化成功后可以在项目根目录下看到package.json文件。如果你一路按回车感觉有些麻烦，你可以直接加一个-y参数，这样npm就直接给我们生成了。

```	
npm n init -y
```
package.json文件建立好以后，你可以安装webpack了

```
npm install --save-dev webpack
```
建议使用cnpm来进行安装，这样速度会快很多。安装好后，你会在package.json里看到你安装的版本号。这样我们webpack就安装好了。

**配置webpack.config.js**

在项目根目录建立webpack.config.js文件，这个文件是进行webpack配置的，先建立基本的入口和出口文件。

```
var path =require('path');
module.exports = {
    //入口文件
    entry:'./app/index.js',
    //出口文件
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist')
    }
}
```
上边的代码只定义了入口文件和出口文件，如果你对这些还看不懂，那请学习我的《webpack3.x版 成神之路》 。文件配置好后，我们要根据文件的结构改造我们的项目目录，我们在根目录下新建app和dist文件夹，然后进入app文件夹，新建一个index.js文件。

**新建index.html文件**

在根目录新建index.html文件，并引入webpack设置中的出口文件，代码如下。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React全家桶-jspang</title>
</head>
<body>
    
</body>
<!--引入出口文件-->
<script src="./dist/index.js"></script>
</html>
```

**测试webpack配置**

通过上面的步骤，配置好了wbpack，现在可以测试一下我们webpack配置是否有问题。在路口文件中写入下面的代码，并进行打包测试。

/app/index.js文件

```
function component(){
    var element = document.createElement('div');
    element.innerHTML = ('Hello JSPang');
    return element;
}
 
document.body.appendChild(component());
```

这段代码非常简单，不作过多的解释。如果你对这个代码看不懂，再去啃两边犀牛或者红宝书。

加入打包命令

打开package.json文件，在scripts属性中加入build命令。
```
"scripts": {
    "build": "webpack"
  },
```

在终端中输入npm run build ，就可以看到打包结果了。如果没有出现错误，在浏览器中打开，可以看到我们的编写结果。到这部为止，我们正确安装了webpack，并进行了出入口的配置，也看到了webpack的输出结果。

**开发服务器配置**

你会很容易的发现，我们现在缺少一个实时更新的服务，那动手马上配置一个。

在命令行安装webpack-dev-server,在终端中输入下面的命令。

```
cnpm install --save-dev webpack-dev-server
```
安装完成后，配置webpack.config.js文件。

```
devServer:{
    contentBase:'./',
    host:'localhost',
    compress:true,
    port:1717
}
```
配置好后再packeage.json里增加一个scripts命令，我们起名叫server。

```
"scripts": {
    "build": "webpack",
    "server": "webpack-dev-server --open"
  },
```
这里的–open是直接打开浏览器的意思。这些都配置完成后，就可以在终端输入npm run server 看到结果了。

**自动刷新浏览器**

在我们修改代码时，现在并不能自动刷新浏览器，不会立即呈现我们编写的代码结果，而时要再次npm run build才可以。其实只要在出口文件配置中加一个publicPath:’temp/’,然后在index.html引入JS时写这个temp地址就可以实时预览了。

```
output:{
    filename:'index.js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'temp/'
},
```

index.html文件引入JS

```
<script src="./temp/index.js"></script>
```

总结：这节课主要是先设置好webpack的基本配置，这些配置其实在以前的课程中都已经讲过，但是我们还是需要重新配置一遍，因为如果你不配置，你下面的课程将没办法继续操作。

## 第04节：构建：webpack一步一步构建02

节已经对webpack进行了基本配置，而且已经能打包到页面中了，这节主要针对我们的ES6和React进行配置。在学习之前，请保证你上节课的内容已经配置完成，如果你没有配置完成，这节课将不能继续下去。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=b0567nv1uim&tiny=0&auto=0" allowfullscreen></iframe>

**Babel安装配置**

在webpack中配置Babel需要先加入babel-loader，这里我们继续使用npm来进行安装，但是我们一般还需要支持es2015和React，所以要安装四个包。

```
cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```
这里安装四个包的安装，这个四个包不能省略。安装后你会在package.json里看到这些包的版本。
```
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-preset-es2015": "^6.24.1",
  "babel-preset-react": "^6.24.1",
  "webpack": "^3.8.1",
  "webpack-dev-server": "^2.9.3"
}
```

**配置module**

在安装完成后，可以到webpack.config.js里配置module，也就是配置我们常说的loader。

```
module:{
    loaders:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loaders:"babel-loader",
            query:{
                presets:['es2015','react']
            }
        }
    ]
}
```

具体每项参数的作用，请观看视频讲解，这里不作过多介绍。

**编写React**

webpack通过上边的步骤，基本已经配置完成了，这里我们写一个React文件来进行测试一下。在进行编写React文件前，要记得安装React和React-dom这两个包。

安装React和React-dom

```
cnpm install --save react  react-dom
```
安装完成后，我们改写app/index.js文件，把原来原生的JavaScript代码改成React代码。

index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
 
ReactDOM.render(
    <div>Hello JSPang</div>,
    document.getElementById("app")
);
```
因为上边我们加了一个app的选择器，所以在index.html中增加一个div标签，并把id设置成app。

index.html

```
<div id="app"></div>
```

都配置完了，我们可以用之前配置好的npm run server 命令进行预览了。如果在浏览器中看到了Hello JSPang 这段文字，说明我们的配置成功了，以后就可以愉快的进行开发了。

**总结：**其实自己配置React开发环境在实际工作中也并不多，因为我们的配置毕竟不是很成熟，而且支持较少。这里学习只是为了你更好的掌握React构建过程和设置参数，实际工作中尽量使用合适的脚手架工具。

## 第05节：路由：Hello React路由

通过四节课的学习，相信你已经可以顺利构建React的基本开发环境了，这节课开始我们将用几节课时间，全面了解一下React Router。路由在开发中时刻都会用到，它是SPA（单页应用）的基础，可以说不会路由系统基本就无法用React进行编程。其实路由可以简单的看作我们平时访问的网址或者路径，这样看有助于你的理解，但是并不正确。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=b05004qjh8x&tiny=0&auto=0" allowfullscreen></iframe>

**Router包安装:**

安装包还是要打开命令行工具，使用npm来进行安装。

```
npm install --save react-router react-router-dom
```

- react-router：是基本的router包，里边函的内容较多，但是在网页开发中有很多用不到，现在的市面上的课程讲的基本都是这个包的教程。

- react-router-dom：随着react生态环境的壮大，后出现的包，这个包比react-router包轻巧了很多。

注意：其实安装了react-router包就不用安装了react-router-dom包了，这里我们只是为了讲课方便所以安装了两个包。在实际开发中，请根据需要进行安装。安装时使用 – -save，因为这是要在生产环境中使用的。

**复习component**

以前学习过React的组件如何编写，这里简单复习一下。我们作一个A页面的组件（还是接着上节课的程序继续作），我们在/app文件夹下新建一个jspang.js页面。然后引进React包，并编写一个A页面的组件。请看下面的代码。

jspang.js

```
import React from 'react';
export default class jspang extends React.Component{
    render(){
        return(
            <div>A默认页面</div>
        );
    }
}
```

这里我们采用了ES6的类语法，这也是现在React推荐使用的，如果使用老语法会有一条黄色的警告。

写好组件后，引入index.js页面，在头部加入引入语句，并改写渲染代码。

```
import React from 'react';
import ReactDOM from 'react-dom';
import Jspang from './jspang';
 
ReactDOM.render(
    <Jspang/>,
    document.getElementById("app")
);
```
引入完成后，预览可以看到我们写的A页面的组件。通过上边基本的练习，我们有了一定经验，那么接下来我们仿照上面的方法制作两个新组件,Jspangb和JSPangc。代码如下：

jspangb.js

```
import React from 'react';
export default class jspangb extends React.Component{
    render(){
        return(
            <div>B页面</div>
        );
    }
}
```
jspangc.js
```
import React from 'react';
export default class jspangc extends React.Component{
    render(){
        return(
            <div>C页面</div>
        );
    }
}
```
写完三个页面组件以后，我们把这三个页面都引入到index.js文件里边。
```
import Jspang from './jspang';
import Jspangb from './jspangb';
import Jspangc from './jspangc';
```
**引入和书写路由**

三个页面都已经作好，现在就需要路由来切换他们了，先用import引入我们的路由包，这里我们用两个模块，一个是Router（我自己叫它路由器），另一个是Route（我自己叫它路由）。

	
importi  {BrowserRouter as Router , Route} from 'react-router-dom';

然后我们改写文件，增加路由设置。

```
ReactDOM.render(
    <Router>
        <div>
            
            <Route exact path="/" component={Jspang} />
            <Route  path="/Jspangb" component={Jspangb} />
            <Route  path="/Jspangc" component={Jspangc} />
        </div>
    </Router>,
    document.getElementById("app")
);
```

注意：这里的exact是精确匹配的意思，比如我们有多层路由进行嵌套时，exact可以帮助我们精确匹配到你想跳转的路由。

我们路由已经设置完毕了，但是我们现在还不能进行切换，那我们就做个切换的组件，命名为<nav/>

**制作Nav组件**

在app文件夹下新建一个nav.js的文件，先引入React和react-router-dom两个包。
```
import React from 'React';
import {NavLink} from 'react-router-dom';
```

编写基本的nav组件，具体解说看视频里会进行讲解。

```
const NavBar = () =>(
<div>
    <div>
        <NavLink exact to='/'>Jspanga</NavLink> |&nbsp;
        <NavLink to='/Jspangb'>Jspangb</NavLink> |&nbsp;
        <NavLink to='/Jspangc'>Jspangc</NavLink>
    </div>
</div>
)
   
export default NavBar;
```
组件编写完成后，引入index.js，并添加<Nav/>标签到代码里。

```
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Jspang from './jspang';
import Jspangb from './jspangb';
import Jspangc from './jspangc';
import Nav from './nav';
 
ReactDOM.render(
    
    <Router>
        <div>
         <Nav/>
            <Route exact path="/" component={Jspang} />
            <Route  path="/Jspangb" component={Jspangb} />
            <Route  path="/Jspangc" component={Jspangc} />
        </div>
    </Router>,
    document.getElementById("app")
```
现在可以进行预览了，也可以顺利的切换页面内容了，说明路由已经起作用了。当然这只是路由最简单的用法，下节课我们会继续学习路由的知识。

##  第06节：路由：NavLink中常用选项

上节课我们初识了React的路由，并制作了一个小案例。这节课主要了解一下NavLink标签上的选项。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=p0500r08fta&tiny=0&auto=0" allowfullscreen></iframe>

**Route和NavLink的exact选项**

在上节课视频中我把exact说成了默认选项，这个是错误的，在这里给大家赔礼道歉，希望大家谅解。

这个时精确匹配使用，一般而言React会匹配所有能匹配的路由组阶，exact可以使我们的匹配更精确。exact的值为bool型，为true是表示严格匹配，为false时为正常匹配。

```
 <Route  path="/" component={Jspang} />
 <Route  path="/Jspangb" component={Jspangb} />
 //这种情况下，输入路由"/Jspangb",会把Jspang组件也展示出来
```
所以我们经常使用exact来解决这个问题。

```
<Route  exact  path="/"  component={Jspang} />
<Route  path="/Jspangb" component={Jspangb} />
```
在多层路由（路由嵌套）时也会出现这个问题，所以要多使用exact来解决精确匹配问题。

**NavLink使用样式**

如果我们想给路由一个样式，这时候我们写了一个CSS文件，我们如何才能使用在NavLink上？其实这并不难，不过要配置一下`webpack.config.js`文件。

先写一个CSS文件，并放在和nav.js一个文件夹下,命名为`nav.css`。

**nav.css**
```
.blue{
    color:blue;
}
```
然后用es6的import方法引入到nav.js组件里。

nav.js
```
import  './nav.css';
```
这时还不能正确出现效果，因为webpack还不能对CSS文件进行正确的解析，需要我们加入CSS的loader。我们先用npm安装style-loader和css-loader。

```
npm install --save-dev style-loader css-loader
```
安装好后，在webpack.config.js里配置CSS的loader。代码如下：

webpack.config.js

```
{
    test:/\.css$/,
    loader:['style-loader','css-loader']
}
```
配置好后，需要重新启动一下服务器，才可以正确解析。这时候我们就可以在NavLink上加 className指定CSS类了。

```
<NavLink exact to='/' className="blue">Jspanga</NavLink> |&nbsp;
```
现在可以打开浏览器看一下我们配置的结果了。

**直接在NavLink上写样式**

除了这种用CSS文件的方式写样式，还可以更直接和玻璃，这节在NavLink上写样式，看下面的代码。

```
<NavLink exact to='/' style={{color:'red',fontSize:'50px'}}>Jspanga</NavLink>
```

这种方法虽然直观好用，但是不建议在实际开发中使用，这增加了代码的耦合度，不是一种好的编程方式。

**activeClassName**

作为一个链接是用激活状态的，激活状态就是当我们处在这个链接时。activeClassName就是设置激活状态的样式，它接受一个类名，我们现在nav.css顶一个active的类，把字体设置为红色。

nav.css
```
.blue{
    color:blue;
}
.active{
    color:red;
}
```

然后改写NavLink标签。

nav.js

```
import React from 'React';
import {NavLink} from 'react-router-dom';
import './nav.css';
 
const NavBar = () =>(
<div>
    <div>
        <NavLink exact to='/' className="blue">Jspanga</NavLink> |&nbsp;
        <NavLink to='/Jspangb' activeClassName='active'>Jspangb</NavLink> |&nbsp;
        <NavLink to='/Jspangc' activeClassName='active'>Jspangc</NavLink>
    </div>
</div>
)
   
export default NavBar;
```

总结：这节课的内容虽然简单，但是都时实际工作中经常用到的小技巧，例如activeClassName的使用和我们的className,还有我们的webpack配置也必须掌握，所以赶快动手练习一下吧。

## 第07节：路由：404设置和跳转设置

项目中都要设置404页面，也就是当找不到这个路由时我们要跳转的页面。React中的404主要靠Switch组件来完成。这节课来学习一下Switch相关的知识和有关跳转的知识。由于这节课知识点比较散，所以建议你观看视频后再看文章，要不很容易懵。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=z0502lutgz0&tiny=0&auto=0" allowfullscreen></iframe>

**Switch组件的使用**

在index.js页面中，在引入路由的地方，我们加入Switch的引入。

```
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
```

**编写404页面**

现在需要一个统一的404页面，这里在app文件夹下新建一个error.js文件。然后封装成组件，方便路由进行调用。

error.js
```
import React from 'react';
export default class error extends React.Component{
    render(){
        return(
            <h2>404</h2>
        );
    }
}
```
在nav.js页面中加入一个不存在的链接NavLink，为的时让它在错误的时候能自动跳转到404页面上。

nav.js

```
<NavLink to='/react' activeClassName='active'>404</NavLink>
```
下面该主角Switch上场了，改写我们的index.js页面，改为下面的样子。

```
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Jspang from './jspang';
import Jspangb from './jspangb';
import Jspangc from './jspangc';
import Nav from './nav';
import Error from './error';
 
ReactDOM.render(
    
    <Router>
        <div>
         <Nav/>
            <Switch>
                <Route  exact  path="/"  component={Jspang} />
                <Route  path="/Jspangb" component={Jspangb} />
                <Route  path="/Jspangc" component={Jspangc} />
                <Route  component={Error} />
            </Switch>
            
        </div>
    </Router>,
    document.getElementById("app")
);
```

然后到浏览器中进行预览，你会看到当点击404链接时，因为链接地址是我们瞎写的，但是它跳到了error.js页面。注意顺序：错误页面应该在最后面。

**Redirect组件使用**

有时候我们开发中希望在程序中根据业务逻辑进行跳转，或者一个链接点击后直接跳转到其它链接。这时候可以使用Redirect组件解决。

**引入Redirect组件**

在index.js中引入Redirect组件

```
import {BrowserRouter as Router , Route , Switch ,Redirect} from 'react-router-dom';
```
**加入跳转链接**

在nav.js里加入一个准备跳转的链接，代码如下。

```
<NavLink to='/redirect' activeClassName='active'>Redirect</NavLink>
```

这时候点击这个链接，会跳转到404页面，但是我们希望跳转到jspangb页面。

加入`<Redirect>`标签

在index.js文件中，加入`<Redirect>`标签。

```
 <Redirect from="/redirect" to="/Jspangb" />
```

- from：表示来自于什么链接，也就是当链接是redirect时，我们触发跳转命令。

- to：表示要跳转到的链接，这里是跳转到Jspangb的组件中。

写完后你可以在浏览器中查看这个跳转效果了。

**总结:**设置404和跳转都要先加入Switch的支持，在制作404时一定记得要把404的Route设置到所有路由的后边。跳转时使用Redirect标签，这个很容易实现。

## 第08节：路由：通过路由传值的方法

在开发中路由之间的传值是必不可少的，虽然React有更优雅的方式，但这里还是用一节课来学习一下路由如何传值。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=k05036p4nfx&tiny=0&auto=0" allowfullscreen></iframe>

**最常见的传值**

传值是比较简单的。在传值时，主要依靠props进行接收，在基础课程中已经讲过组件之间传值的方法。路由和页面之间的传值也很类似。代码还是接着上节课的进行编写。

先在nav.js页面传送值，看下面的代码，传送的值为ILoveWeb。
```
<NavLink  to="/Jspangc/ILoveWeb" activeClassName="bbb">Jspang-c</NavLink>|&nbsp;
```
我们设置了传值，如果不在路由里告诉路由，它是捕获不到的，所以还需要在路由里进行设置，这里用冒号（：）来通知路由。

```
<Route  path="/Jspangc/:param" component={Jspangc} />
```

在输出参数前，我们在jspangc.js页面的声明周期里看一下，这时候的props里都有什么值，了解之后，我们再进行输出。

```
import React from 'react';
export default class jspangc extends React.Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div>C页面</div>
        )
    }
}
```
我们可以在match下的params发现我们的参数，这时候我们就可以打印在页面上了。打印代码如下。

```
import React from 'react';
export default class jspangc extends React.Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div>C页面,参数:{this.props.match.params.param}</div>
        )
    }
}
```
如果我们想再传一个HelloJSPang过来，也可以用同样的方式。（视频中演示，多参数传值）

## 第09节：路由：Router中的属性和路由模式

现在我们已经掌握了React路由导航的基本方法，这节课学习一下标签上的属性和用法。这节课还有一个重点就是路由的5种模式讲解。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=v0503b2gj2l&tiny=0&auto=0" allowfullscreen></iframe>

**basename属性**

basename的作用是个我们增加一级导航目录，比如以前的导航目录是：http://localhost:1717/Jspangb  现在想访问同一个页面，但是路径变成http://localhost:1717/demo/Jspangb。这时候就可以使用basename属性来设置。basename属性是放在<router>标签里边的。

index.js
```
 <Router basename="demo">
        <div>
         <Nav/>
            <Switch>
                <Route  exact  path="/"  component={Jspang} />
                <Route  path="/Jspangb" component={Jspangb} />
                <Route  path="/Jspangc/:param" component={Jspangc} />
                <Redirect from="/redirect" to="/Jspangb" />
                <Route  component={Error} />
            </Switch>
            
        </div>
    </Router>,
```
设置好后，这时所有的导航路径都加入了demo层级。但是要注意，此时设置的是全局增加，如果是单个路由增加你需要特殊个性设置。

**forceRefresh属性**

这个属性的作用是开启或者关闭React Router，也就是说如果你把forceRefresh的值设置成真，它将关闭React路由系统，而真实的去服务器端请求信息。

现在我们把forceRefresh设置成true，你会发现路由已经不能使用了。

```
<Router basename="demo" forceRefresh={true}>
    <div>
        <Nav/>
        <Switch>
            <Route  exact  path="/"  component={Jspang} />
            <Route  path="/Jspangb" component={Jspangb} />
            <Route  path="/Jspangc/:param" component={Jspangc} />
            <Redirect from="/redirect" to="/Jspangb" />
            <Route  component={Error} />
        </Switch>
        
    </div>
</Router>,
```

这个操作经常使用在大型项目，在服务器跳转和ReactRouter切换时使用。比如作一个APP活动页面，第一次请求时我们到服务器端请求整个页面，然后请求后，整个页面DOM进行本地缓存，生成React Router实现本地单页应用。 只要设置我们的forceRefresh就可以了。

**5种路由方式**

我们一直在使用的路由方式是BrowserRouter，也就是浏览器的路由方式，其实React还有几种路由方式：

- BrowserRouter：浏览器的路由方式，也是我们一直在学习的路由方式，在开发中最常使用。
- HashRouter：在路径前加入#号成为一个哈希值。Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径了。
- MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。
- NativeRouter：经常配合ReactNative使用，多用于移动端，以后ReactNative课程中会详细讲解。
- StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用。

每种模式都有自己的优缺点，根据项目的需求选择适合项目的就可以。

要想使用HashRouter或者MemoryRouter模式，我们必须先用import引入。

```
import {BrowserRouter as Router ,HashRouter,MemoryRouter, Route , Switch ,Redirect} from 'react-router-dom';

```
HashRouter设置代码：

```
<HashRouter basename="demo" >
    <div>
        <Nav/>
        <Switch>
            <Route  exact  path="/"  component={Jspang} />
            <Route  path="/Jspangb" component={Jspangb} />
            <Route  path="/Jspangc/:param" component={Jspangc} />
            <Redirect from="/redirect" to="/Jspangb" />
            <Route  component={Error} />
        </Switch>
        
    </div>
</HashRouter>,
```
MemoryRouter设置代码：
```
<MemoryRouter basename="demo" >
    <div>
        <Nav/>
        <Switch>
            <Route  exact  path="/"  component={Jspang} />
            <Route  path="/Jspangb" component={Jspangb} />
            <Route  path="/Jspangc/:param" component={Jspangc} />
            <Redirect from="/redirect" to="/Jspangb" />
            <Route  component={Error} />
        </Switch>
        
    </div>
</MemoryRouter>,
```
总结：这节课重点是路由的方式，这在项目开始时就应该根据需求选择好，也是我们应该重点掌握的一个技能。有很多小伙伴都是因为这里没学好，在上手项目中遇到坑。

## 第10节：路由：prompt用法讲解

在很多网站应用中，当你想离开页面时都会弹出一个提示框（alert），让你选择是否残忍离开。React路由也为我们准备了这样的组件，就是prompt。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=w05030314i9&tiny=0&auto=0" allowfullscreen></iframe>

**`<Prompt>`**标签

要使用`<Prompt>`标签先要用import进行引入，我们在Jspangb.js里引入。

```
import {Prompt} from 'react-router-dom';
```
引入后可以在render()方法里直接使用。看完整代码如下：

```
import React from 'react';
import {Prompt} from 'react-router-dom';
export default class jspangb extends React.Component{
    render(){
        return(
            <div>
                B页面
                <Prompt message="残忍离开？"/>
            </div>
        )
    }
}
```

需要注意的是，如果你用`MemoryRouter`路由模式，`<Prompt>`不起作用。

**`<Prompt>`标签有两个属性：**

- message：用于显示提示的文本信息。
- when：传递布尔值，相当于标签的开关，默认是true，设置成false时，`<Prompt>`失效。

那我们如何动态该改变when的状态那，这里做一个小实例：写一个按钮，然后设置一个power状态，通过点击按钮改变状态，来控制`<Prompt>`标签的启用和关闭。（详细编程思路我会在视频中讲解）

```
import React from 'react';
import {Prompt} from 'react-router-dom';
export default class jspangb extends React.Component{
 
 
    constructor(props){
        super(props);
        this.state={
            power:false
        }
        this.changePower=this.changePower.bind(this);
    }
    changePower(){
        alert('已经开启');
        this.setState({
            power:true
        })
    }
 
    render(){
        return(
            <div>
                <p> B页面</p>
                <Prompt message="残忍离开？" when={this.state.power}/>
                <button onClick={this.changePower}>启用</button>
            </div>
        )
    }
}
```

其实我们复习了一些关于状态机的知识，因为我们下面的课程要开始使用。下节课开始讲Flux。

 

本打算把Flux和Redux也加入到课程中，但是Redux的官网已经写的很好（而且有中文有视频），无力超越。作也是照搬文档，而且是重复造轮子，所以视频到此结束。

官方文档地址：https://redux.js.org/

中文文档地址：http://cn.redux.js.org/
