---
category: 视频教程
tags:
  - Koa2
date: 2017-11-13
title: 挑战全栈 Koa2免费视频教程 (共13集)
vssue-title: koa2
---

Koa2是现在最流行的基于Node.js平台的web开发框架，它很小，但扩展性很强。Koa给人一种干净利落的感觉，体积小、编程方式干净。国内很多知名互联网公司都在使用，BAT（百度、阿里、腾讯）全部都在使用。



<!-- more -->

>使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。一个Koa应用就是一个对象，包含了一个middleware数组，这个数组由一组Generator函数组成。这些函数负责对HTTP请求进行各种加工，比如生成缓存、指定代理、请求重定向等等。这些中间件函数基于 request 请求以一个类似于栈的结构组成并依次执行。

  

看着这段话是不是有点懵了，这不要紧，如果你还不能完全了解这段话，就跟着技术胖一起学习吧，等学完后你在回来，会发现他很简单。

课程一周更新2-3节，技术胖不是专职讲师，还是一线程序员，加班也不少，没准还会封闭式开发。但技术胖会全力录课，谢谢大家的支持。

**前置知识：**

如果你JavaScript还不过关，那建议你先去敲一遍犀牛《Javascript权威指南》。

如果你ES6还不懂，那建议你先把技术胖的《技术胖带你玩转ES6视频教程》看了。

如果你还不会安装Node和使用npm，那去网上找个基础视频看一下。

## 第01节：Koa开发环境搭建

一个温暖舒适的家是每个人都非常向往的，程序也是一样，大家一个好的环境是后续的基础和保障，这节课我们就来搭建一个Koa的开发环境。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=v0505d1fjrj&tiny=0&auto=0" allowfullscreen></iframe>

**安装Node.js**

安装Node很简单，如果你会安装QQ，我相信安装Node你绝对自己能搞定。但是作Koa2的开发，Node.js是有要求的，它要求Node.js版本高于V7.6。因为node.js 7.6版本开始完全支持async/await,不需要再加flag，所以才能完全你支持我们的Koa2。

查看Node版本方法（windows版本）：

打开运行（快捷键：win+R），然后输入cmd打开命令行工具，在命令行里输入：

```
node -v
```
如果你的版本低于v7.6，那你需要升级，这一步一定要检查，要不会给以后的课程留下隐患。

**升级Node版本方法**

如果你的版本过低，还是windows系统，我告诉你一个最暴力的方法，直接下载新的安装包，重新安装，覆盖原来的安装位置。

安装位置查找方法，在命令行里输入:

```
where node
```

在工作中我不使用n包来更新的，因为n包需要sh的支持。我的录课电脑是windows，sh支持的不是很好。如果你是Mac电脑，完全可以使用n包来更新。

Mac更新方法：
```
sudo npm install -g n
sudo n stable
```
两行命令轻松搞定，你说前端程序员能不喜欢使用Mac开发吗？

**搭建环境**

找一个你喜欢的盘符，然后建立一个文件夹，我这里选择E盘下的code文件夹下的koa2文件夹。命令行下建立如下：

```
cd code  //进入code文件夹
mkdir koa2 //创建koa2文件夹
cd koa2  //进入koa2文件夹
```

进入之后，我们初始化生产package.json 文件

```
npm init -y
```
生成package.json后，安装koa包，我们这里使用npm来进行安装。

```
npm install --save koa
```

如果你安装错误，一般都是网速问题，可以使用cnpm来进行安装。

**HelloKoa2**

现在环境已经安装好了，我们就来练手我们的第一个程序吧。在文件夹跟目录下新建index.js文件，输入下面代码。具体代码在视频中讲解。

```
const Koa = require('koa')
const app = new Koa()
 
app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})
 
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
```
编写完成后在命令行中输入：
```
node index.js
```
然后在浏览器中输入：http://127.0.0.1:3000  就可以看到结果了。

## 第02节：async/await的使用方法

第一节课放出后，有很多小伙伴不太熟悉async/await的使用。如果不理解好这个语法，恐怕很难学好Koa，为了不给以后的课程留坑，让我们静下心来，搞清楚这个ES2017的语法。在学习async/await语法前你要对Promise有所理解，你可以看我的《技术胖带你玩转ES6视频教程》来进行补课。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=c0507rgyn55&tiny=0&auto=0" allowfullscreen></iframe>


**什么是async和await**

你要想理解语法，可以先从两个单词的基本意思来进行了解.async是异步的简写，而await可以堪称async wait的简写。明白了两个单词，就很好理解了async是声明一个方法是异步的，await是等待异步方法完成。注意的是await必须在async方法中才可以使用因为await访问本身就会造成程序停止堵塞，所以必须在异步方法中才可以使用。

**async到底起什么作用？**

async是让方法变成异步，这个很好理解，关键是他的返回值是什么？我们得到后如何处理？

根据以前的经验，我们希望用return直接返回async函数的值，但是如果真是这样，还有await什么作用，我们写段代码测试一下。
```
async function testAsync(){
    return 'Hello async';
}
const result = testAsync();
console.log(result);
```

在终端里用node执行这段代码，你会发现输出了Promise { ‘Hello async’ }，这时候会发现它返回的是Promise。

```
PS E:\code\BXShop> node test.js
Promise { 'Hello async' }
```

**await在等什么？**

await一般在等待async方法执行完毕，但是其实await等待的只是一个表达式，这个表达式在官方文档里说的是Promise对象，可是它也可以接受普通值。我们写一段代码来验证一下这个结果。在程序中我们有用async的方法，也有普通的方法。最后在控制台输出时，你会发现都可以直接输出。

```
function getSomething(){
    return 'something';
}
 
async function testAsync(){
    return 'Hello async';
}
 
async function test(){
    const v1=await getSomething();
    const v2=await testAsync();
    console.log(v1,v2);
}
 
test();
```

async/await同时使用

通过前面两个例子已经分别了解async和await，我们来作个虚假的例子，看一下等待问题。这只是一个虚假的，实际项目中多是去后台请求数据，等数据回来后进行执行。
```
function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}
 
async function test() {
    const v = await takeLongTime();
    console.log(v);
}
 
test();
```

总结：本节主要是为了给大家弥补以前的基础不足，现在我们对async和await都有了基本了解，为我们以后的学习扫清了障碍。但是如果你对Promise还不够熟悉，一定再花10多分钟去学习一下。

## 第03节：Get请求的接收

在前后端配合时，后端都会告知你的请求时GET/POST请求，我们对两种请求在前端也是非常熟悉的，比如作电商系统时，我们要得到一个商品的详细信息，需要传递GET形式的商品编号到后台，后台返回给我们数据。既然我们对请求都不陌生，那这节课来看一下这些请求Koa2是如何接受并处理的。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=d0508wgfol0&tiny=0&auto=0" allowfullscreen></iframe>

**query和querystring区别**

在koa2中GET请求通过request接收，但是接受的方法有两种：query和querystring。

- query：返回的是格式化好的参数对象。
- querystring：返回的是请求字符串。

先来写个简单的例子，看一下输出的结果。

demo1.js

```
const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url =ctx.url;
    let request =ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
 
    ctx.body={
        url,
        req_query,
        req_querystring
    }
 
});
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});
```

编写好后，在终端中使用node demo1.js启动服务。启动一切正常可在浏览器中使用http://127.0.0.1:3000?user=jspang&age=18来进行访问。我们在网页中可以得到一串JSON字符串，这是不是很想后端传给我们的接口。

```
{"url":"/?user=jspang&age=18","req_query":{"user":"jspang","age":"18"},"req_querystring":"user=jspang&age=18"}
```
我们可以使用浏览器插件-i’FormatTool，让内容更清晰。图片中我们可以清楚看到query是一个对象，而querystring就是一个普通的字符串。

![alt](http://59.110.165.66/static/upload/20180824/H4pSr2_Im0EovaTsy1T8.png)

**直接从ctx中获取Get请求**

除了在ctx.request中获取Get请求外，还可以直接在ctx中得到GET请求。ctx中也分为query和querystring。有了上边的联系，我们对它们的区别已经很熟悉，不再累述。接着上边的代码，我们看一下在ctx下直接获取GET请求的方式。

```
const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url =ctx.url;
 
    //从request中获取GET请求
    let request =ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
 
    //从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
 
    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
 
});
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});

```

**运行服务，在浏览器查看结果。**

总结：获得GET请求的方式有两种，一种是从request中获得，一种是一直从上下文中获得。获得的格式也有两种：query和querystring。大家要区分记忆，并根据实际需求进行灵活变换。

## 第04节：POST请求如何接收（1）

这节主要学习POST请求的接受方法。对于POST请求的处理，Koa2没有封装方便的获取参数的方法，需要通过解析上下文context中的原生node.js请求对象req来获取。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=c0509vqsfjt&tiny=0&auto=0" allowfullscreen></iframe>

**获取Post请求的步骤：**

1. 解析上下文ctx中的原生nodex.js对象req。
2. 将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
3. 将字符串转换成JSON格式。

**ctx.request和ctx.req的区别**

- ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
- ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。

**ctx.method 得到请求类型**

Koa2中提供了ctx.method属性，可以轻松的得到请求的类型，然后根据请求类型编写不同的相应方法，这在工作中非常常用。我们先来作个小例子，根据请求类型获得不同的页面内容。GET请求时得到表单填写页面，POST请求时，得到POST处理页面。

```
const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    //当请求时GET请求时，显示表单让用户填写
    if(ctx.url==='/' && ctx.method === 'GET'){
        let html =`
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body =html;
    //当请求时POST请求时
    }else if(ctx.url==='/' && ctx.method === 'POST'){
        ctx.body='接收到请求';
    }else{
        //其它请求显示404页面
        ctx.body='<h1>404!</h1>';
    }
})
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})
```
写好这段代码后你可以用node命令执行它，然后再浏览器中输入http://127.0.0.1:3000进行查看，第一次进入时给我们展现的是一个表单页面，我们点击提交后可以看到服务器接收到了我们的信息，但我们并没有做出任何处理。当我们下输入一个地址时，它会提示404错误。

**总结：**这节课从理论上讲解了如何获取POST请求参数，然后学习了ctx.method的用法，并编写了一个小案例。这节课的案例你必须自己敲一下，因为下节课我们会接着这个代码编写获取POST参数的代码。

## 第05节：POST请求如何接收（2）

上节课已经了解到解析Post参数的理论知识，这节课我们就具体解析一下。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=q0510yx6njs&tiny=0&auto=0" allowfullscreen></iframe>

**解析Node原生POST参数**

我们先声明一个方法，然后用Promise对象进行解析。这里我们使用了ctx.req.on来接收事件。难点是我们这里用了ES6的Promise来处理。

```
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            ctx.req.on('data',(data)=>{
                postdata += data
            })
            ctx.req.addListener("end",function(){
              
                resolve(postdata);
            })
        }catch(error){
            reject(error);
        }
    });
}

```
然后在上节课接收POST请求的处理方法里，修改代码如下。

```
let pastData=await parsePostData(ctx);
 ctx.body=pastData;
```

**POST字符串解析JSON对象**

现在成功输出了POST得字符串，但这样使用起来很不方便，一般我们都喜欢把字符串封装成JSON对象，然后在程序里使用。下面我们把写一个字符串封装JSON兑现对象的方法。

代码的解释和编程思路我会在视频中做出讲解。

```
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    } 
    return queryData
}
```
给出全部代码，供小伙伴们练习使用。

```
const Koa  = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    if(ctx.url==='/' && ctx.method==='GET'){
        //显示表单页面
        let html=`
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body=html;
    }else if(ctx.url==='/' && ctx.method==='POST'){
        let pastData=await parsePostData(ctx);
         ctx.body=pastData;
    }else{
        ctx.body='<h1>404!</h1>';
    }
 
});
 
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            ctx.req.on('data',(data)=>{
                postdata += data
            })
            ctx.req.addListener("end",function(){
                let parseData = parseQueryStr( postdata )
                resolve(parseData);
            })
        }catch(error){
            reject(error);
        }
    });
}
 
 
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    } 
    return queryData
}
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});
```

## 第06节：koa-bodyparser中间件

已经学会如何自己编写代码接收并解析POST请求，这样最基本的功能其实是不用我们自己写的，一定有造好的轮子让我们使用，koa-bodyparser就是一个造好的轮子。我们在koa中把这种轮子就叫做中间件。对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=k0510coeel4&tiny=0&auto=0" allowfullscreen></iframe>

**安装中间件**
使用npm进行安装，需要注意的是我们这里要用–save，因为它在生产环境中需要使用。

```
npm install --save koa-bodyparser@3
```

**引入使用**

安装完成后，需要在代码中引入并使用。我们在代码顶部用require进行引入。

```
const bodyParser = require('koa-bodyparser');
```
然后进行使用，如果不使用是没办法调用的，使用代码如下。

```
app.use(bodyParser());
```

在代码中使用后，直接可以用ctx.request.body进行获取POST请求参数，中间件自动给我们作了解析。

完整代码：

```
const Koa  = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
 
app.use(bodyParser());
 
app.use(async(ctx)=>{
    if(ctx.url==='/' && ctx.method==='GET'){
        //显示表单页面
        let html=`
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body=html;
    }else if(ctx.url==='/' && ctx.method==='POST'){
         let postData= ctx.request.body;
         ctx.body=postData;
    }else{
        ctx.body='<h1>404!</h1>';
    }
 
});
 
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});
```

**总结：**学完这节肯定会有小伙伴说，技术胖你完全没有讲上两节的意义，直接讲这个多简单。但是我认为学习这件事一定要透彻，不只会用，还要明白为什么人家的中间件就可以解析。

## 第07节：Koa2原生路由实现

如果你已经在前端 工作岗位奋战了几个月，你会清楚的知道路由对于编程的重要性，它就是前端的业务逻辑和思想。我们通过判断进行各种页面的展示效果。这节课在不借助中间件的情况下，我们用原生方法简单实现以下路由。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=p0511iabfm7&tiny=0&auto=0" allowfullscreen></iframe>

** ctx.request.url **

要想实现原生路由，需要得到地址栏输入的路径，然后根据路径的不同进行跳转。用ctx.request.url就可以实现。我们通过一个简单的例子了解一下如何获得访问路径。

```
const Koa = require('koa')
const app = new Koa()
 
app.use( async ( ctx ) => {
  let url = ctx.request.url
  ctx.body = url
})
app.listen(3000)
```

这时候访问http://127.0.0.1:3000/jspang/18 页面会输出/jspang/18。会了这个，我们就可以根据输出的不同，实现的页面结果。

**原生路由实现**

这节看视频吧，因为html部分的编写我就不打字了。

原生路由的实现需要引入fs模块来读取文件。然后再根据路由的路径去读取，最后返回给页面，进行渲染。我们看一个小例子进行学习。

```
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
 
function render(page){
   
   
        return  new Promise((resolve,reject)=>{
            let pageUrl = `./page/${page}`;
            fs.readFile(pageUrl,"binary",(err,data)=>{
                console.log(444);
                if(err){
                    reject(err)
                }else{
                    
                    resolve(data);
                }
            })
        })
    
}
 
async function route(url){
    
    let page = '404.html';
    switch(url){
        case '/':
            
            page ='index.html';
            break;
        case '/index':
            page ='index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break; 
    }
    let html = await render(page);
    
    return html;
}
 
app.use(async(ctx)=>{
    let url = ctx.request.url;
    let html = await route(url);
    
    ctx.body=html;
})
app.listen(3000);
console.log('starting at 3000');
```
总结：这节课我们了解了如何原生实现路由，也是一个基础，下节课我们再学习一般工作中的使用方法。

## 第08节：Koa-router中间件（1）入门

虽然现在我们可以自己编写Koa的路由了，但是我们自己写的不够优雅也不够完美，只是简单的实现了一个原理。如果你作的是测试的小程序，你可能还能顶上一阵子，但实际工作中是满足不了你的。这节课我们将使用中间件koa-router来完成路由的配置，koa的中间件生态环境足够强大，路由的中间件不只一种，我们只是抛砖引玉，希望通过koa-router学习让你更了解router机制。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=t05118wmqrv&tiny=0&auto=0" allowfullscreen></iframe>

安装koa-router中间件

```
npm install --save koa-router
```

安装完成后可以在package.json里查到，然后就可以在程序中引入并使用了。

**koa-router基础案例**

我们会把koa-router讲的详细些，所以会分成几节课来讲，我们先来看一个最基本的koa-router怎么写。

```
const Koa = require('koa');
const Router = require('koa-router');
 
const app = new Koa();
const router = new Router();
 
router.get('/', function (ctx, next) {
    ctx.body="Hello JSPang";
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());
  app.listen(3000,()=>{
      console.log('starting at port 3000');
  });
```

**多页面配置**

其实多页面的添加只要继续在下面填写get或者Post就可以了，比如我们再加一个todo的页面。

```
const Koa = require('koa');
const Router = require('koa-router');
 
const app = new Koa();
const router = new Router();
 
router.get('/', function (ctx, next) {
    ctx.body="Hello JSPang";
})
.get('/todo',(ctx,next)=>{
    ctx.body="Todo page"
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());
  app.listen(3000,()=>{
      console.log('starting at port 3000');
  });
```

总结：我们可以发现有了中间件进行配置路由非常简单，但是路由还是很复杂的，今天讲的只是koa-router最基本的用法，我们会在下面几节课中不断增加难度。

##  第09节：Koa-router中间件（2）层级

通过上节课的学习，已经对koa-router有了初步的了解，其实路由还是比较复杂的，也是构建系统的关键，所以我们还要继续学习。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=g0513x50shb&tiny=0&auto=0" allowfullscreen></iframe>

**设置前缀**

有时候我们想把所有的路径前面都再加入一个级别，比如原来我们访问的路径是http://127.0.0.1:3000/todo，现在我们希望在所有的路径前面都加上一个jspang层级，把路径变成http://127.0.0.1:3000/jspang/todo.这时候就可以使用层级来完成这个功能。路由在创建的时候是可以指定一个前缀的，这个前缀会被至于路由的最顶层，也就是说，这个路由的所有请求都是相对于这个前缀的。

```
const router = new Router({
      prefix:'/jspang'
})
```
写上这句代码，这时候你的访问路径就加了一个层级jspang。可以在浏览器中输入:http://127.0.0.1:3000/jspang/todo测试一下。

**路由层级**

此章节有些复杂，建议视频加文字进行学习。

设置前缀一般都是全局的，并不能实现路由的层级，如果你想为单个页面设置层级，也是很简单的。只要在use时使用路径就可以了。

例如这种写法装载路由层级，这里的router相当于父级：router.use(‘/page’, page.routes(), page.allowedMethods())。

通过这种写法的好处是并不是全局的，我们可以给不同的路由加层级。

代码如下：我们声明了两个路由，第一个是home,第二个是page.然后通过use赋予不同的前层级。

```
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
 
 
let home = new Router();
home.get('/jspang',async(ctx)=>{
    ctx.body="Home JSPang";
}).get('/todo',async(ctx)=>{
    ctx.body ='Home ToDo';
})
 
 
 
 
let page = new Router();
page.get('/jspang',async(ctx)=>{
    ctx.body="Page JSPang";
}).get('/todo',async(ctx)=>{
    ctx.body ='Page ToDo';
})
 
//装载所有子路由
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());
 
 
//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());
 
 
 
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});
```

## 第10节：Koa-router中间件（3）参数

通过两节koa-router的学习，对路由已经有了基本的了解，但是有些小伙伴还是给我留言说：不会传递参数。确实参数的传递在程序的编写中非常重要，是必会技能之一。这节课就学习一下如何通过koa-router传递参数并接收。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=t05164lr4zu&tiny=0&auto=0" allowfullscreen></iframe>

我们先来作一个最简单的路由。

```
const Koa = require('koa');
const Router = require('koa-router');
 
const app = new Koa();
const router = new Router();
 
router.get('/', function (ctx, next) {
    
 
    ctx.body="Hello JSPang";
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());
  app.listen(3000,()=>{
      console.log('starting at port 3000');
  });
```
然后我们回忆一下第三节课中学到的接收参数的方法，这里我们使用最易用的方法ctx.query来进行接收,修改为下面代码的第6行，这样就可以轻松接收get参数。

```
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
router.get('/', function (ctx, next) {
    ctx.body=ctx.query;
});
app
  .use(router.routes())
  .use(router.allowedMethods());
  app.listen(3000,()=>{
      console.log('starting at port 3000');
  });
```

总结:这节课的知识不算新知识，我们都是用原来的知识实现的，主要是把知识合起来使用也是一个技能，希望小伙伴要学以致用，融会贯通。

## 第11节：Koa2中使用cookie

开发中制作登录和保存用户信息在本地，最常用的就是cookie操作。比如我们在作一个登录功能时，希望用户在接下来的一周内都不需要重新登录就可以访问资源，这时候就需要我们操作cookie来完成我们的需求。koa的上下文（ctx）直接提供了读取和写入的方法。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=l0516wbnnft&tiny=0&auto=0" allowfullscreen></iframe>

- ctx.cookies.get(name,[optins]):读取上下文请求中的cookie。
- ctx.cookies.set(name,value,[options])：在上下文中写入cookie。

**写入Cookie操作：**

先来一个基本的写入cookie。

```
const Koa  = require('koa');
const app = new Koa();
 
app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'MyName','JSPang'
        );
        ctx.body = 'cookie is ok';
    }else{
        ctx.body = 'hello world'
    }
});
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})
```

写好后预览，打开F12可以在Application中找到Cookies选项。就可以找到我们写入的name和value了。

**Cookie选项**

比如我们要存储用户名，保留用户登录状态时，你可以选择7天内不用登录，也可以选择30天内不用登录。这就需要在写入是配置一些选项：

- domain：写入cookie所在的域名
- path：写入cookie所在的路径
- maxAge：Cookie最大有效时长
- expires：cookie失效时间
- httpOnly:是否只用http请求中获得
- overwirte：是否允许重写

```
const Koa  = require('koa');
const app = new Koa();
 
app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'MyName','JSPang',{
                domain:'127.0.0.1', // 写cookie所在的域名
                path:'/index',       // 写cookie所在的路径
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2018-12-31'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        );
        ctx.body = 'cookie is ok';
    }else{
        ctx.body = 'hello world'
    }
});
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})
```

**读取Cookie：**

上边讲了写入Cookie的具体操作，我们现在试着去读取Cookie。
```
const Koa  = require('koa');
const app = new Koa();
 
app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'MyName','JSPang',{
                domain:'127.0.0.1', // 写cookie所在的域名
                path:'/index',       // 写cookie所在的路径
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2018-12-31'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        );
        ctx.body = 'cookie is ok';
    }else{
        if( ctx.cookies.get('MyName')){
            ctx.body = ctx.cookies.get('MyName');
        }else{
            ctx.body = 'Cookie is none';
        }
      
    }
});
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})
```
## 第12节：Koa2的模板初识（ejs）

开发中不可能把所有的html代码全部卸载JS里，这显然不现实，也没办法完成大型web开发。必须借用模板机制来帮助我们开发，这节课我们就简单了解一下Koa2的模板机制，koa2的目标机制要依靠中间件来完成开发。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=b05186g5j2d&tiny=0&auto=0" allowfullscreen></iframe>

**安装中间件**

在koa2中使用模板机制必须依靠中间件，我们这里选择koa-views中间件，先使用npm来进行安装。

```
cnpm install --save koa-views
```

需要注意的是是koa-views 而不是koa-view，我第一次安装时就遇到了这个坑，导致一直不成功，希望小伙伴不要踩我这个简单低级的坑。

**安装ejs模板引擎**

ejs是个著名并强大的模板引擎，可以单独安装。很多开源软件都采用了ejs模板引擎。

```
npm install --save ejs
```
** 编写模板 **

安装好ejs模板引擎后，就可以编写模板了，为了模板统一管理，我们新建一个view的文件夹，并在它下面新建index.ejs文件。

views/index.ejs

```
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>http://jspang.com/wp-admin/post.php?post=2760&action=edit#
</head>
<body>
    <h1><%= title %></h1>
    <p>EJS Welcome to <%= title %></p>
</body>
</html>
```

详细解释在视频中讲解。

**编写koa文件**

有了模板文件，我们需要在js文件中配置并渲染。

```
const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
 
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
 
app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title
  })
})
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})
```
总结：这节课只是简单讲解了koa2的模板机制，起到抛砖引玉的作用，小伙伴不要着急，等以后我们出个实战，把这些知识点进行一个串联。

## 第13节：koa-static静态资源中间件
在后台开发中不仅有需要代码处理的业务逻辑请求，也会有很多的静态资源请求。比如请求js，css，jpg，png这些静态资源请求。也非常的多，有些时候还会访问静态资源路径。用koa2自己些这些静态资源访问是完全可以的，但是代码会雍长一些。所以这节课我们利用koa-static中间件来实现静态资源的访问。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=c051909ydll&tiny=0&auto=0" allowfullscreen></iframe>

安装koa-static：
使用npm进行安装中间件,讲课时使用的是4.0.2版本。

```
npm install --save koa-static
```

**新建static文件夹**
然后在static文件中放入图片，css和js文件。

使用koa-static中间件
我们新建一个demo12.js文件，引入koa-static中间件，并用app.use方法进行使用。

```
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
 
const app = new Koa()
 
 
const staticPath = './static'
 
app.use(static(
  path.join( __dirname,  staticPath)
))
 
 
app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})
 
app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})
```

**总结：**静态资源环境在服务端是非常常用的一种服务，我们必须要学会使用，小伙伴这节课还是看视频吧，文字有点水。

