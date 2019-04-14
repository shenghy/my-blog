---
category: 视频教程
tags:
  - MongoDB
date: 2017-12-16
title: 挑战全栈 MongoDB基础视频教程 (共21集)
vssue-title: mongodb
---

上套课程讲了Koa2，挑战全栈就必须和数据库打交道，个人觉的作为一个前端开发人员，操作MongoDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句，而且里边的用法都是JSON对象的形式。所以我们在Koa2的课程中间查了MongoDB的课程，等会操作数据库后，我们再返回去学Koa2的数据库连接和操作，最后技术胖会带着大家作个小实战。


<!-- more -->

**这里学的是最新的MongoDB版本，现在是3.6版本。**


**说明：**课程每周更新2-3节，每节课12分钟左右，因为我觉的我每次听课只能保持12-15分钟的注意力(一般都是早上4点起床，开始更新，比别人笨就要比别人努力)，以视频配合图文的形式进行更新.

技术胖不是专职讲师，还是一个一线程序员，所以课程中难免有错误和纰漏，希望小伙伴们在留言中指出，让我们共同进步。课程参照了《MongoDB权威指南 第2版》。

## 第01节：认识和安装MongoDB

都知道MongoDB是非关系型数据库，要了解非关系型数据库就必须先了解关系型数据库，关系数据库，是建立在关系模型基础上的数据库。比较有名气的关系型数据库，比如Oracle、DB2、MSSQL、Mysql。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=u0524vwp6x3&tiny=0&auto=0" allowfullscreen></iframe>


**非关系数据库和关系型数据库的区别是什么？**

- 实质：非关系型数据库的实质：非关系型数据库产品是传统关系型数据库的功能阉割版，通过减少用不到或很少用的功能，来大幅度提高产品性能。
- 价格：目前的非关系型数据库基本都是免费的，而比较有名气的关系型数据库都是收费的，比如：Oracle、DB2、MSSQL。MySql虽然是免费的，但是处理大型数据还是要提前作很多工作的。
- 功能：实际开发中，很多业务需求，其实并不需要完整的关系型数据库功能，非关系型数据库的功能就足够使用了。这种情况下，使用性能更高、成本更低的非关系型数据库当然是更明智的选择。

了解关系型数据库和非关系型数据库的区别后，需要有一点的取舍，比较复杂和大型的项目不建议使用非关系型数据库，但是如果你想作个博客，CMS系统这类业务逻辑不复杂的程序，MongoDB是完全可以胜任的。

**MongoDB简介：**

>MongoDB是一个基于分布式文件存储的数据库，由C++语言编写。目的是为WEB应用提供扩展的高性能的数据存储解决方案。MongoDB是一个介于关系型数据库和非关系型数据库之间的产品，是非关系型数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

 

**安装MongoDB：**

MongoDB的安装分为Windows下的安装和Mac的安装（Liunx和Mac趋同）。这里我们只讲解windows的安装（别问我为什么，你们都知道的，我没Mac电脑）。

**安装步骤：**

1. 去官网下载MongoDB，https://www.mongodb.com/,在网站中找到Download按钮。下载会有点忙，国外的服务器，你懂的。
2. 下载后进行安装，安装没什么难度，但是对于新手建议选择默认安装，而不选择自己配置。等我们完全熟悉后再定制式配置。
3. 安装时如果有安全软件，会报一些拦截，一律允许就好，不允许会安装失败的。
4. 安装完成后，需要配置“环境变量”，目的是再命令行中直接使用，而不需要输入很长的路径了。（此步骤观看视频）

**运行MongoDB服务端：**

安装好MongoDB数据库后，我们需要启用服务端才能使用。启用服务的命令是：Mongod。

1. 打开命令行:先打开运行（快捷键win+R），然后输入cmd后回车，就可以打开命令行工具。
2. 执行mongod:在命令中直接输入mongod，但是你会发现服务并没有启动，报了一个exception，服务停止了。
3. 新建文件夹:出现上边的错误，是因为我们没有简历Mongodb需要的文件夹，一般是安装盘的根目录，建立data/db,这两个文件夹。
4. 运行mongod：这时候服务就可以开启了，链接默认端口是27017。

**链接服务：**

服务端开启后，我们可以使用命令行来链接服务端，链接命令是mongo。重新打开一个命令行工具，然后输入mongo命令。也许你在链接时会报几个warning（警告），我们先不用管它，以后我们再慢慢学习。

查看存在数据库命令：show dbs

查看数据库版本命令：db.version()

如果这两条命令都可以正常的显示出结果，证明我们的MongoDB数据库已经安装成功了，以后我们就可以愉快的开始学习了。想学习的小伙伴学完后自己动手安装一下吧，只有自己动手才能真正学会。

## 第02节：Mongo基本命令-1

接下来的几节直接上手Mongo命令，先让小伙伴对MongoDB的基本命令会使用，算是快速上手。快速上手后，我们再用以后的课程把这些命令细化和升级，形成一套完整的MongoDB知识体系。小伙伴们不要着急，让我们开始学习吧。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=p0524y7tuco&tiny=0&auto=0" allowfullscreen></iframe>

mongo shell
如果以前接触过数据库一定知道每个数据库都有自己独特的命令，MSSQL和MYsql用的都是Sql命令，MongoDB的操作命令就是前端最熟悉的JavaScript命令。看到这里作为前端你一定会小激动一下，这对前端来说那是极好的。

先来一个常用的赋值和输出命令，熟悉一下。（操作前你需要打开Mongo服务器和链接到服务器-也就是我们上节课讲的mongod命令和mongo命令）在命令行中输入以下代码。

```
var x='Hello World'
print(x)
```
需要注意的是这里的输出不再使用console.log(‘巴拉巴拉’),而是使用print(‘巴拉巴拉’),这个稍有区别。

还可以定义函数：

```
function jspang(){
    return 'JSPang';
}
```
学到这里，我们用的都是JavaScript的语法，这些我们可以信手拈来，非常容易。

**MongoDB的存储结构**
以前我们的关系型数据库的数据结构都是顶层是库，库下面是表，表下面是数据。但是MongoDB有所不同，库下面是集合，集合下面是文件，可以看下面这张图进行了解一下。

![alt](http://59.110.165.66/static/upload/20180824/j1ZWi5on7n8hoDodtVFt.png)

在学习中我们可以对比记忆，这样才能更好的了解这些名词，其实数据表就是集合，数据行就是文件，当然这只是为了记忆，实质还是有区别的。

**基础Shell命令：**

了解存储结构后，就可以开始学习我们的基础Shell命令了，因为这些命令比较基础，我会以列表形式展现，具体使用方法可以到视频中进行观看。

- show dbs :显示已有数据库，如果你刚安装好，会默认有local、admin(config)，这是MongoDB的默认数据库，我们在新建库时是不允许起这些名称的。
- use admin： 进入数据，也可以理解成为使用数据库。成功会显示：switched to db admin。
- show collections: 显示数据库中的集合（关系型中叫表，我们要逐渐熟悉）。
- db:显示当前位置，也就是你当前使用的数据库名称，这个命令算是最常用的，因为你在作任何操作的时候都要先查看一下自己所在的库，以免造成操作错误。

**总结：**这节课的学习已经让我们进入了MongoDB的世界，你会感觉使用起来还是比较简单的，都是些基本的命令，敲入回车就可以使用，但是大家还是要进行多联系。这节课的重点是要转变以前数据库存储结构的思想，掌握MongoDB的存储结构。

## 第03节：Mongo基本命令-2

这节课继续学习MongoDB的基础命令，上节课我们学了一些最简单的查看命令，比如查看数据库，查看集合，显示当前位置。这节课我们开始真实的操作一下数据，学会基本的数据增删改查。直接看视频开始学习吧。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=o0525rp80hf&tiny=0&auto=0" allowfullscreen></iframe>

**数据操作基础命令：**

- use db（建立数据库）：use不仅可以进入一个数据库，如果你敲入的库不存在，它还可以帮你建立一个库。但是在没有集合前，它还是默认为空。
- db.集合.insert( ):新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据。Demo：db.user.insert({“name”:”jspang”})
- db.集合.find( ):查询所有数据，这条命令会列出集合下的所有数据，可以看到MongoDB是自动给我们加入了索引值的。Demo：db.user.find()
- db.集合.findOne( ):查询第一个文件数据，这里需要注意的，所有MongoDB的组合单词都使用首字母小写的驼峰式写法。
- db.集合.update({查询},{修改}):修改文件数据，第一个是查询条件，第二个是要修改成的值。这里注意的是可以多加文件数据项的，比如下面的例子。

```
db.jspang.update({"name":"jspang"},{"name":"jspang","age":"32"})
```
- db.集合.remove(条件)：删除文件数据，注意的是要跟一个条件。Demo:db.user.remove({“name”:”jspang”})
- db.集合.drop( ):删除整个集合，这个在实际工作中一定要谨慎使用，如果是程序，一定要二次确认。
- db.dropDatabase( ):删除整个数据库，在删除库时，一定要先进入数据库，然后再删除。实际工作中这个基本不用，实际工作可定需要保留数据和痕迹的。

总结：这节课都是对数据或者库的操作，这些虽然简单，但是你每天都要用到，所以建议反复练习，增强记忆。

## 第04节：用js文件写mongo命令

在命令行中写mongo的命令（shell）实在是太麻烦了（反正技术胖是无法忍受windows系统的这种命令行的），急需一种更好的方式来进行工作，这节课我们就学一下用JS文件来写shell命令和执行。在JS里写mongo的Shell命令大部分是相同的，只有小部分不一样。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=e05277cgurg&tiny=0&auto=0" allowfullscreen></iframe>

把命令写入JS中：
现在模拟一个用户登录日志表的信息，用JS进行编写。新在一个新建的目录下，比如D:/mongoShell/，新建一个goTask.js文件。文件内容如下：

**goTask.js文件**

```
var userName="jspang";    //声明一个登录名             
var timeStamp=Date.parse(new Date());     //声明登录时的时间戳  
var jsonDdatabase={"loginUnser":userName,"loginTime":timeStamp}; //组成JSON字符串
var db = connect('log');   //链接数据库
db.login.insert(jsonDdatabase);  //插入数据
 
print('[demo]log  print success');  //没有错误显示成功
```

如果上边这个基础的代码你看起来还不是那么容易，那我建议你先停下这门课的学习，去学一下JS的基础知识，只有基础打牢了，学习起来才会快速。

**执行JS文件**

写好了JS文件，需要执行起来，看一下文件是否存在问题，能否顺利的插入数据到MongoDB中。

执行其实很简单，只要使用mongo xxx.js(xxx就是我们写的goTask.js文件)。
```
mongo goTask.js
```
然后我们可以在命令行看到已经执行成功，可以到终端中进行查看插入结果。

总结：这节课很好的解决了在终端中写命令行的难题，虽然大部分Shell和在命令行中写法一样，但是也稍有不同，希望小伙伴们可以轻松掌握。

## 第05节：批量插入的正确方法

前4节课，我们都是简单讲解了MongoDB的使用方法，目的是快速入门。从这节课开始，我们要详细深入的讲解MongoDB的各项操作，难度也开始逐渐提高。需要提示如果前边的课程还没有联系熟练，那先练习一下，否则接下来学习会稍有困难。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=q0528zgx9m2&tiny=0&auto=0" allowfullscreen></iframe>

在操作数据库时要注意两个能力：

- 第一个是快速存储能力。
- 第二个是方便迅速查询能力。

**批量插入：**

批量数据插入是以数组的方式进行的（如果写错，可以3个回车可以切出来）。我们现在命令行中敲入下面的代码，我们可以看到数据顺利插入了。

```
db.test.insert([
    {"_id":1},
    {"_id":2},
    {"_id":3}
])
```

老版本MongoDB（3.2以前的版本基本都需要）是需要在Insert前加一个batch单词的，如下代码。

```
db.test.batchInsert([
    {"_id":1},
    {"_id":2},
    {"_id":3}
])
```

注意一次插入不要超过48M，向.zip和大图片什么的尽量用静态存储，MongoDB存储静态路径就好，这也算是一个规则。

**批量插入性能测试**

刚学了批量插入，那是循环插入快？还是批量插入快那？在一般人的认知里肯定是批量插入更快（其实这毋庸置疑），但我们要拿出极客精神，探个究竟，试着写一个小Shell，来验证一下结果。

先写一个循环插入方法：
```
var startTime = (new Date()).getTime(); //得到开始时间
var  db = connect('log');  //链接数据库
//开始循环
for(let i=0;i<1000;i++){
    db.test.insert({num:i});
}
 
var runTime = (new Date()).getTime()-startTime;//计算时间差
print ('This run this is:'+runTime+'ms');//打印出来
```

我测试的时间507ms，这个速度虽然和电脑性能有关，但还是不太理想，1000条数据用了将近半秒，组长会发飙的。

批量插入代码：
```
var startTime = (new Date()).getTime();
var  db = connect('log');
 
 
var tempArray = []              //声明一个数组
for(let i=0;i<1000;i++){        //循环向数组中放入值
    tempArray.push({num:i});
}
db.test.insert(tempArray)       //批量一次插入
 
var runTime = (new Date()).getTime()-startTime;
print ('This run this is:'+runTime+'ms');
```

这次用了17ms，性能远远超过循环插入。

总结：在工作中一定要照顾数据库性能，这也是你水平的提现，一个技术会了很简单，但是要作精通不那么简单。学完这节，记得在工作中如果在循环插入和批量插入举起不定，那就选批量插入吧，它会给我们更优的性能体验。

## 第06节：修改：Update常见错误

这节课开始我们要说一说Update的详细操作，我们先来看一下常见错误，我们知道了困难或者说问题在哪里，我们再提出解决方案。这节课我会先演示一些错误的Update方法，然后再说正确的方法。希望不要误导小伙伴。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=t0531fcgg1f&tiny=0&auto=0" allowfullscreen></iframe>

**错误1：只update修改项**

如果你有过关系型数据库的经验，你会很容易犯只修改需要改变的一项，因为在关系型数据库中就是这样作的。先来准备一些数据，这些数据模拟了一个软件开发小组的组成（当然这不能当真）。
```
var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        SkillTwo:'JavaScript',
        SkillThree:'PHP'
    },
    regeditTime:new Date()
}
 
var workmate2={
    name:'ShengLei',
    age:30,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        SkillTwo:'J2EE',
        SkillThree:'PPT'
    },
    regeditTime:new Date()
}
 
var workmate3={
    name:'MinJie',
    age:20,
    sex:1,
    job:'UI设计',
    skill:{
        skillOne:'PhotoShop',
        SkillTwo:'UI',
        SkillThree:'Word+Excel+PPT'
    },
    regeditTime:new Date()
}
 
var db=connect('company')
var workmateArray=[workmate1,workmate2,workmate3]
db.workmate.insert(workmateArray)
print('[SUCCESS]: The data was inserted successfully.');
```

上面的代码，我们以文件的形式向数据库中插入了3条数据。

这时候我突然发现UI职位的性别出现了错误，本来人家是个美女，这里缺写成了男，我们需要修改这条数据，但是经常会这样写。

这样写的问题是，我们的最后一条数据变成了只有sex:0，其它数据全部丢失了，这肯定不是我们想要的。这是新手在操作数据库修改时经常犯的一个错误，就是只修改变动的数据。

**正确修改方法:**

可以声明一个变量，然后把要改变数据的全部信息放入变量，最后执行修改操作。

```
var db=connect('company')
 
var workmate3={
    name:'MinJie',
    age:20,
    sex:0,
    job:'UI设计',
    skill:{
        skillOne:'PhotoShop',
        SkillTwo:'UI',
        SkillThree:'Word+Excel+PPT'
    },
    regeditTime:new Date()
}
db.workmate.update({name:'MinJie'},workmate3)
 
 
print('[update]: The data was updated successfully');
```
这时候你需要删除（db.workmate.drop()）表中的数据，因为MinJie这个用户已经不在数据库中了，然后重新使用load方法载入插入数据再进行修改。
```
//执行命令如下:
db.workmate.drop()
load('./demo02.js')
load('./demo03.js')
```

现在这种方法才是正确的，数据修改正常了，但是你会发现写起来非常麻烦，而且特别容易写错。下节课我们会介绍update修改器，可以很好的解决这个问题。

## 第07节：修改：初识update修改器

上节课的修改用起来实在是不够优雅，这是我们一个伟大的前端不能接受的，所以我们要学习新知识update修改器，来解决这个问题。update修改器可以帮助我们快速和简单的修改数据，让我们的操作更简单方便。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=m0532b6i4jl&tiny=0&auto=0" allowfullscreen></iframe>

**$set修改器**

用来修改一个指定的键值(key),这时候我们要修改上节课的sex和age就非常方便了，只要一句话就可以搞定。

```
dbd .workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})
```
修改好后，我们可以用db.workmate.find()来进行查看，你会发现数据已经被修改。

**修改嵌套内容(内嵌文档)**

比如现在的UI的技能发生了变化，说她不会作PPT而是word作的很好，需要进行修改。这时候你会发现skill数据是内嵌的，这时候我们可以属性的形式进行修改，skill.skillThree。具体看下面的代码。

```
db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})
```
这样就可以简单的修改内嵌文档了。

**$unset用于将key删除**

它的作用其实就是删除一个key值和键。一般女孩子都是不希望看到自己的年龄的，所以要求我们把年龄删除。这时候我们就可以使用$unset的形式。

```
db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})
```

当你删除后，想加回来可以直接用set进行添加。

**$inc对数字进行计算**

它是对value值的修改，但是修改的必须是数字，字符串是不起效果的。我们现在要对MiJie的年龄减去2岁，就可以直接用$inc来操作。
```
db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})
```
**multi选项**

现在领导说了，你要把每个人的爱好也加入进来，但是如果你直接写会只加一个，比如下面这种形式。
```
db.workmate.update({},{$set:{interset:[]}})
```

这时候你用db.workmate.find()查找，你会发现只改变了第一个数据，其他两条没有改变。这时候我们想改变就要用到multi选项。

```
db.workmate.update({},{$set:{interset:[]}},{multi:true})
```

这时候每个数据都发生了改变，multi是有ture和false两个值，true代表全部修改，false代表只修改一个（默认值）

**upsert选项**

upsert是在找不到值的情况下，直接插入这条数据。比如我们这时候又来了一个新同事xiaoWang，我们这时候修改他的信息，age设置成20岁，但集合中并没有这条数据。这时候可以使用upsert选项直接添加。

```
db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})
```

upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。

总结：这节课的内容非常多，主要学习了update修改器有关的一些东西。一定要课下多练习几遍，否则很快就会忘记的。

## 第08节：修改：update数组修改器

已经会了一些基础的修改器，这节课我们主要学习一下数组修改器的操作，当然也可以修改内嵌文档，也就是对象形式的数据。让我们努力学习吧。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=i0533t2c2iu&tiny=0&auto=0" allowfullscreen></iframe>

** $push追加数组/内嵌文档值**

$push的功能是追加数组中的值，但我们也经常用它操作内嵌稳文档，就是{}对象型的值。先看一个追加数组值的方式，比如我们要给小王加上一个爱好(interset)为画画（draw）：

```
db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})
```
当然$push修饰符还可以为内嵌文档增加值，比如我们现在要给我们的UI，增加一项新的技能skillFour为draw，这时候我们可以操作为：
```
db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})
```

$push修饰符在工作中是最常用的，因为我们的数据一般都会涉及数组和内嵌文档的操作，一定要掌握。

**$ne查找是否存在**

它主要的作用是，检查一个值是否存在，如果不存在再执行操作，存在就不执行，这个很容易弄反，记得我刚学的时候就经常弄反这个修改器的作用，给自己增加了很多坑。

例子：如果xiaoWang的爱好（interest）里没有palyGame这个值，我们就加入Game这个爱好。
```
db.workmate.update({name:'xiaoWang',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})
```

**总结：没有则修改，有则不修改。**

**$addToSet 升级版的$ne**

它是$ne的升级版本（查找是否存在，不存在就push上去），操作起来更直观和方便，所以再工作中这个要比$en用的多。

例子：我们现在要查看小王(xiaoWang)兴趣(interest)中有没有阅读（readBook）这项，没有则加入读书(readBook)的兴趣.

```
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:"readBook"}})
```

**$each 批量追加**

它可以传入一个数组，一次增加多个值进去，相当于批量操作，性能同样比循环操作要好很多，这个是需要我们注意的，工作中也要先组合成数组，然后用批量的形式进行操作。

例子：我们现在要给xiaoWang,一次加入三个爱好，唱歌（Sing），跳舞（Dance），编码（Code）。

```
var newInterset=["Sing","Dance","Code"];
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:{$each:newInterset}}})
```

**$pop 删除数组值**

$pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1和-1。

- 1：从数组末端进行删除
- -1：从数组开端进行删除

例子：现在要删除xiaoWang的编码爱好（code）。

```
db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})
```

**数组定位修改**

有时候只知道修改数组的第几位，但并不知道是什么，这时候我们可以使用interest.int 的形式。

例子，比如我们现在要修改xiaoWang的第三个兴趣为编码（Code），注意这里的计数是从0开始的。
```
db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})
```
总结：这节课主要讲了于数组和内嵌文档有关的update修改器，内容很多，都需要不断熟练记忆。当然如果你记不住，你至少记住这个博客网址，因为技术胖把笔记已经给你整理好了。

## 第09节：修改：状态返回与安全

在操作数据库时，对数据的修改是需要有足够的安全措施的，其实在实际工作中，我们用db.collections.update的时候不多，在修改时我们都会用findAndModify，它可以给我们返回来一些必要的参数，让我们对修改多了很多控制力，控制力的加强也就是对安全的强化能力加强了。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=a0534hy1b8o&tiny=0&auto=0" allowfullscreen></iframe>

**应答式写入：**

在动手学习代码之前，我们先来了解一个概念：应答式写入。在以前的文章中，我们的操作都是非应答式写入，就是在操作完数据库后，它并没有给我们任何的回应和返回值，而是我们自己安慰自己写了一句话（print(‘[update]:The data was updated successfully’);）。这在工作中是不允许的，因为根本不能提现我们修改的结果。

应答式写入就会给我们直接返回结果（报表），结果里边的包含项会很多，这样我们就可以很好的进行程序的控制和安全机制的处理。有点像前端调用后端接口，无论作什么，后端都要给我一些状态字一样。

**db.runCommand( ):**

它是数据库运行命令的执行器，执行命令首选就要使用它，因为它在Shell和驱动程序间提供了一致的接口。（几乎操作数据库的所有操作，都可以使用runCommand来执行）现在我们试着用runCommand来修改数据库，看看结果和直接用db.collections.update有什么不同。

```
db.workmate.update({sex:1},{$set:{money:1000}},false,true)
var resultMessage=db.runCommand({getLastError:1})
printjson(resultMessage);
```

上边的代码，我们修改了所有男士的数据，每个人增加了1000元钱(money)，然后用db.runCommand()执行，可以看到执行结果在控制台返回了。

```
{
        "connectionId" : 1,
        "updatedExisting" : true,
        "n" : 2,
        "syncMillis" : 0,
        "writtenTo" : null,
        "err" : null,
        "ok" : 1
}

```

- false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
- true：true是multi的简写，代表修改所有，这两个我们在前边课程已经学过。
- getLastError:1 :表示返回功能错误，这里的参数很多，如果有兴趣请自行查找学习，这里不作过多介绍。
- printjson：表示以json对象的格式输出到控制台。

db.listCommands( ):查看所有的Commad命令，内容很多，本套课程只讲解工作中经常使用的内容。

比如我们要查看是否和数据库链接成功了，就可以使用Command命令。

```
db.runCommand({ping:1})
```
返回ok：1就代表链接正常。

**findAndModify:**

从名字上就可以看出，findAndModify是查找并修改的意思。配置它可以在修改后给我们返回修改的结果。我们先看下面的代码：

```
var myModify={
    findAndModify:"workmate",
    query:{name:'JSPang'},
    update:{$set:{age:18}},
    new:true    //更新完成，需要查看结果，如果为false不进行查看结果
}
var ResultMessage=db.runCommand(myModify);
 
printjson(ResultMessage)
```

findAndModify的性能是没有直接使用db.collections.update的性能好，但是在实际工作中都是使用它，毕竟要商用的程序安全性还是比较重要的。

**findAndModify属性值：**

- query：需要查询的条件/文档
- sort:    进行排序
- remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
- new:[boolean]返回更新前的文档还是更新后的文档。
- fields：需要返回的字段
- upsert：没有这个值是否增加。
 

总结：这节课讲了一些跟安全有关的操作，但这不是全部，我们随着课程的深入还会继续学习更多的知识。工作中尽量使用findAndModify来进行更新数据，这样会更安全和直观，这点性能的损失是值得的。

## 第10节：查询：find的不等修饰符

MongoDB的查找操作我们会分几节课来讲，因为内容还是比较多的，而且在开发中查找是应用最多的操作，几乎每个模块都会用到，所以查找的部分将是本套课的重中之重。这节课我们先来看看简单的查询条件，也了解一下find基础用法。如果你以前操作过关系型数据库，比如MySql，你会对`>`大于)，`<`(小于),`=`(等于)这些东西很熟悉，但是非关系型数据库不能直接使用这些符号，稍有区别。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=p0536u4yh72&tiny=0&auto=0" allowfullscreen></iframe>

**构造数据：**

我们需要构造更多的数据到集合中，这样我们才能很好的讲解查询条件，下面代码你可以直接复制进行添加。当然你也可以自己随意加一些数据到集合中，只要方便我们学习就可以了。

```
var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate2={
    name:'ShengLei',
    age:31,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'J2EE',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate3={
    name:'MinJie',
    age:18,
    sex:0,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate4={
    name:'XiaoWang',
    age:25,
    sex:1,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate5={
    name:'LiangPeng',
    age:28,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate6={
    name:'HouFei',
    age:25,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate7={
    name:'LiuYan',
    age:35,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate8={
    name:'DingLu',
    age:20,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate9={
    name:'JiaPeng',
    age:29,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate10={
    name:'LiJia',
    age:26,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var db=connect('company');
var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
db.workmate.insert(workmateArray);
print('[SUCCESS]：The data was inserted successfully');
```
**简单查找：**

比如我们现在要查找数据中技能一会HTML+CSS的所有人。那我们直接进行查找加条件就可以了。

```
db.workmate.find({"skill.skillOne":"HTML+CSS"})
```
这时候我们不能使用load来载入了，以后我会给大家讲使用的方法，这里先用比较笨的方法，使用粘贴复制的方法执行。

**筛选字段**

现在返回来的数据项太多，太乱，有时候我们的程序并不需要这么多选项。比如我们只需要姓名和技能就可以了。这时候我们需要写第二个参数，看下面的代码。

```
db.workmate.find(
    {"skill.skillOne":"HTML+CSS"},
    {name:true,"skill.skillOne":true}
)
```
你会在终端中看到如下结果：

```
{ "_id" : ObjectId("5a611350c4e36dee6008987a"), "name" : "JSPang", "skill" : { "skillOne" : "HTML+CSS" } }
{ "_id" : ObjectId("5a611350c4e36dee6008987b"), "name" : "ShengLei", "skill" : { "skillOne" : "HTML+CSS" } }
{ "_id" : ObjectId("5a611350c4e36dee6008987e"), "name" : "LiangPeng", "skill" : { "skillOne" : "HTML+CSS" } }
{ "_id" : ObjectId("5a611350c4e36dee6008987f"), "name" : "HouFei", "skill" : { "skillOne" : "HTML+CSS" } }
{ "_id" : ObjectId("5a611350c4e36dee60089882"), "name" : "JiaPeng", "skill" : { "skillOne" : "HTML+CSS" } }
{ "_id" : ObjectId("5a611350c4e36dee60089883"), "name" : "LiJia", "skill" : { "skillOne" : "HTML+CSS" } }
```
细心的小伙伴会发现还不够完美，多了一个ID字段，这个也不是我们想要的，这时候只要把_id:false就可以了。当然这里的false和true，也可以用0和1表示。
```
db.workmate.find(
    {"skill.skillOne":"HTML+CSS"},
    {name:true,"skill.skillOne":true,_id:false}
)
```
这时候你在终端中查看结果，已经是我们想要的了。

```
{ "name" : "JSPang", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "ShengLei", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "LiangPeng", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "HouFei", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "JiaPeng", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "LiJia", "skill" : { "skillOne" : "HTML+CSS" } }
```
其实这些查找操作，都是在作等于的阶段，但是不光只有等于查询，我们需要更多的查询条件。

**不等修饰符**
- 小于($lt):英文全称less-than
- 小于等于($lte)：英文全称less-than-equal
- 大于($gt):英文全称greater-than
- 大于等于($gte):英文全称greater-than-equal
- 不等于($ne):英文全称not-equal
我们现在要查找一下，公司内年龄小于30大于25岁的人员。看下面的代码。

```
db.workmate.find(
    {age:{$lte:30,$gte:25}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)
```

**日期查找**

MongoDB也提供了方便的日期查找方法，现在我们要查找注册日期大于2018年1月10日的数据，我们可以这样写代码。

```
var startDate= new Date('01/01/2018');
db.workmate.find(
    {regeditTime:{$gt:startDate}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)
```

我们先生命了一个日期变量，然后把使用大于符进行筛选。

总结：这节课内容并不多，但如果你是个DBA（数据库管理员）工作中每天都会用到，所以这节课的内容练习是必须的，如果你懒得动手，那接下来的课程你可能无法学会。

## 第11节：查询：find的多条件查询

很多时候我们需要查询的值不只是有一个简单的条件，比如我们现在要查询一下同事中是33岁和25岁的，还比如我们要查询同事中大于30岁并且会PHP技能的。MongoDB在这方面也支持的很好，我们来学习一下。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=a05379dvt3s&tiny=0&auto=0" allowfullscreen></iframe>

**$in修饰符**

in修饰符可以轻松解决一键多值的查询情况。就如上面我们讲的例子，现在要查询同事中年龄是25岁和33岁的信息。

```
db.workmate.find({age:{$in:[25,33]}},
    {name:1,"skill.skillOne":1,age:1,_id:0}
)
```
于$in相对的修饰符是$nin，就是查询除了$in条件以为的指，小伙伴们可以自己进行练习一下，这里我就不作过多的演示了。

**$or修饰符**

它用来查询多个键值的情况，就比如查询同事中大于30岁或者会做PHP的信息。主要区别是两个Key值。$in修饰符是一个Key值，这个需要去比较记忆。

```
db.workmate.find({$or:[
    {age:{$gte:30}},
    {"skill.skillThree":'PHP'}
]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)
```
or很好理解，就是或者的意思，我们查出来的结果也是一样的，查出了年龄大于30岁的，或者会做PHP的信息。相对应的还有$nor修饰符，这里不作演示了，自己试验一下。

**$and修饰符**

$and用来查找几个key值都满足的情况，比如要查询同事中大于30岁并且会做PHP的信息，这时需要注意的是这两项必须全部满足。当然写法还是比较简单的。只要把上面代码中的or换成and就可以了。

```
db.workmate.find({$and:[
    {age:{$gte:30}},
    {"skill.skillThree":'PHP'}
]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)
```
**$not修饰符**

它用来查询除条件之外的值，比如我们现在要查找除年龄大于20岁，小于30岁的人员信息。需要注意的是$not修饰符不能应用在条件语句中，只能在外边进行查询使用。

```
db.workmate.find({
    age:{
        $not:{
            $lte:30,
            $gte:20
        }
    }
},
{name:1,"skill.skillOne":1,age:1,_id:0}
)
```

总结：这节课的知识比较简单，但是要区分记忆，很容易搞混。幸运的是这里已经为你准备好了学习笔记。当你忘记的时候过来看看吧。

## 第12节：查询：find的数组查询

这节主要学习数组的查询，在学习update时就花了重墨去讲数组的操作，可见数组的操作在MongoDB中很受重视，因为稍微大型一点的项目，设计的数据集合都复杂一些，都会涉及数组的操作。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=r0537vacjun&tiny=0&auto=0" allowfullscreen></iframe>

**完善数据**

以前的我们的workmate集合对数组涉及还很少，现在在数据中加入了兴趣（interest），并且给每个人加入了一些兴趣，比如有写代码，做饭，看电影…..

当然这些数据你可以自己随意构建，但是如果你不想自己费事费脑，这里也为你准备好了数据，你只要把以前的表删除（drop）掉，重新载入(load)就可以了。
```
var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:['看电影','看书','吃美食','钓鱼','旅游']
}
 
var workmate2={
    name:'ShengLei',
    age:31,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'J2EE',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['篮球','看电影','做饭']
}
 
var workmate3={
    name:'MinJie',
    age:18,
    sex:0,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['做饭','画画','看电影']
}
var workmate4={
    name:'XiaoWang',
    age:25,
    sex:1,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['写代码','篮球','画画']
}
var workmate5={
    name:'LiangPeng',
    age:28,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:['玩游戏','写代码','做饭']
}
 
var workmate6={
    name:'HouFei',
    age:25,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:['化妆','读书','做饭']
}
 
var workmate7={
    name:'LiuYan',
    age:35,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:['画画','聚会','看电影']
}
 
 
var workmate8={
    name:'DingLu',
    age:20,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:['美食','看电影','做饭']
}
 
var workmate9={
    name:'JiaPeng',
    age:29,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:['写代码','篮球','游泳']
}
 
var workmate10={
    name:'LiJia',
    age:26,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:['玩游戏','美食','篮球']
}
 
 
 
var db=connect('company');
var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
db.workmate.insert(workmateArray);
print('[SUCCESS]：The data was inserted successfully');
```
**基本数组查询**

比如现在我们知道了一个人的爱好是’画画’,’聚会’,’看电影’，但我们不知道是谁，这时候我们就可以使用最简单的数组查询（实际工作中，这种情况基本不常用，所以这种查询只作知识点储备就可以了）。

```
db.workmate.find({interest:['画画','聚会','看电影']},
    {name:1,interest:1,age:1,_id:0} 
)
```
在终端中运行后，我们得到了数据。这时候我们说，想查出看兴趣中有看电影的员工信息。按照正常逻辑，应该使用下面的代码。

```
db.workmate.find({interest:['看电影']},
    {name:1,interest:1,age:1,_id:0} 
)
```
运行后，并没有如我们所愿得到相应的人员数据，数据为空。那问题出现在哪里？问题就在于我们写了一个中括号([]),因为加上中括号就相当于完全匹配了，所以没有得到一条符合查询条件的数据。我们去掉中括号再看看结果。
```
db.workmate.find({interest:'看电影'},
    {name:1,interest:1,age:1,_id:0} 
)
```

这就是我们在数组中查询一项的方法，这也是数组查询的最简单用法。

**$all-数组多项查询**

现在我们的条件升级了，要查询出喜欢看电影和看书的人员信息，也就是对数组中的对象进行查询，这时候要用到一个新的查询修饰符$all。看下面的例子：

```
db.workmate.find(
    {interest:{$all:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
)
```

这时候找到了兴趣中既有看电影又有看书的人员。

**$in-数组的或者查询**

用$all修饰符，是需要满足所有条件的，$in主要满足数组中的一项就可以被查出来（有时候会跟$or弄混）。比如现在要查询爱好中有看电影的或者看书的员工信息。

```
db.workmate.find(
    {interest:{$in:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
)
```
**$size-数组个数查询**

$size修饰符可以根据数组的数量查询出结果。比如现在我们要查找兴趣的数量是5个人员信息，这时候就可以使用$size。

```
db.workmate.find(
    {interest:{$size:5}},
    {name:1,interest:1,age:1,_id:0} 
)
```

这时候是5项爱好的人员就会显示出来了。

**$slice-显示选项**

有时候我并不需要显示出数组中的所有值，而是只显示前两项，比如我们现在想显示每个人兴趣的前两项，而不是把每个人所有的兴趣都显示出来。

```
db.workmate.find(
    {},
    {name:1,interest:{$slice:2},age:1,_id:0} 
)
```
这时候就显示出了每个人兴趣的前两项，如果我们想显示兴趣的最后一项，可以直接使用slice:-1，来进行查询。

```
db.workmate.find(
    {},
    {name:1,interest:{$slice:-1},age:1,_id:0} 
)

```

总结：如果你只看视频一定学不会，程序这东西必须要动手练习，我在所有的视频中都反复强调，目的没有别的就是想让你们真的学会，并应用到工作中去。



## 第13节：查询：find的参数使用方法

前边已经讲了3节查询，都是在操作find方法的第一个参数（query）和第二个参数（fields）。find还有几个常用的参数，这些参数多用在分页和排序上。这节我们就把这些常用的选项说一说，理解后我们演示一个分页的效果。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=n0538h35mbb&tiny=0&auto=0" allowfullscreen></iframe>

find参数：

- query：这个就是查询条件，MongoDB默认的第一个参数。
- fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
- limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
- skip:跳过多少个显示，和limit结合可以实现分页。
- sort：排序方式，从小到大排序使用1，从大到小排序使用-1。

**分页Demo：**

明白了上面这些选项，现在可以作一个最简单的分页，我们把同事集合（collections）进行分页，每页显示两个，并且按照年龄从小到大的顺序排列。

```
dbd .workmate.find({},{name:true,age:true,_id:false}).limit(0).skip(2).sort({age:1});
```

**$where修饰符**

它是一个非常强大的修饰符，但强大的背后也意味着有风险存在。它可以让我们在条件里使用javascript的方法来进行复杂查询。我们先来看一个最简单的例子，现在要查询年龄大于30岁的人员。

```
db.workmate.find(
    {$where:"this.age>30"},
    {name:true,age:true,_id:false}
)
```

这里的this指向的是workmate（查询集合）本身。这样我们就可以在程序中随意调用。虽然强大和灵活，但是这种查询对于数据库的压力和安全性都会变重，所以在工作中尽量减少$where修饰符的使用。

---


## 第14节：查询：find如何在js文本中使用



前边使用find都是JS在文本中写完，然后复制到终端中执行，这样非常麻烦。在讲的过程中已经有很多小伙伴在问我如何像写update语句一样，在文本中直接运行。这节课我们就学习一下如何直接在文本中执行。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=h0539yctmzs&tiny=0&auto=0" allowfullscreen></iframe>

**hasNext循环结果**

想在文本中执行我们的find语句要用到游标和循环的操作，先看一下代码，代码中我已经对每一句进行了注释。
```
var db = connect("company")  //进行链接对应的集合collections
var result = db.workmate.find() //声明变量result，并把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
while(result.hasNext()){
    printjson(result.next())  //用json格式打印结果
}
```
写完后，现在你只需要在终端中进行load()就可以执行了，再也不用麻烦的复制粘贴了。

**forEach循环**

利用hasNext循环结果，需要借助while的帮助，MongoDB也为我们提供了forEach循环，现在修改上边的代码，使用forEach循环来输出结果。

```
var db = connect("company")  //进行链接对应的集合collections
var result = db.workmate.find() //声明变量result，并把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
result.forEach(function(result){
    printjson(result)
})
```

作为个人觉的forEach循环更为优雅。这两种方法都是非常不错的,凭借自己爱好进行选择吧。

总结：那我们MongoDB的基础部分就全部讲完了，我们学会了它的增、删、改、查，你也可以使用MongoDB进行一些操作了。需要注意的是，只是这篇文章的完结，下篇文章我们进行讲解MongoDB，开始讲解MongoDB的索引。

## 第15节：索引:构造百万级数据

索引的性能提现必须要有大量数据才能看出来，你说你有10条20条数据，这是根本看不出来效果的，这节课就通过随机数的方法，创造出一个百万级数据的数据库出来。（建议收看视频学习）。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=w0541o79gad&tiny=0&auto=0" allowfullscreen></iframe>

**安装Node**

为了课程调试代码方便，我们安装Node，用来在终端中执行js，查看结果。

Node下载地址：https://nodejs.org/en/ （直接下载LTS版本就可以了）

安装非常简单，只要会安装QQ，就应该可以安装上，一直下一步也是没有问题的。安装好后，是不用配置我们的环境变量的。

我们可以在终端中输入 node -v 来查看是否安装成功，出现版本号就是安装成功。

**制作随机数方法：**

我们要想生成一个百万级的数据集合，必须要有随机数的参与，我们需要写一个随机数的方法。下面的代码，创建了一个随机数方法。

```
//生成随机数
 
function GetRandomNum(min,max){
    let range = max-min;   //得到随机数区间
    let rand = Math.random(); //得到随机值
    return (min + Math.round(rand *range)); //最小值+随机数取整
}
 
console.log(GetRandomNum(10000,99999));
```

**制作随机用户名：**

有了随机数的方法，我们就可以制作一个随机生成的用户名。目的是存在不同的用户名，方便我们测试查询速度。

```
//生成随机数
 
function GetRandomNum(min,max){
    let range = max-min;   //得到随机数区间
    let rand = Math.random(); //得到随机值
    return (min + Math.round(rand *range)); //最小值+随机数取整
}
 
//console.log(GetRandomNum(10000,99999));
 
//生成随机用户名
function GetRadomUserName(min,max){
    let tempStringArray= "123456789qwertyuiopasdfghjklzxcvbnm".split("");//构造生成时的字母库数组
    let outPuttext = ""; //最后输出的变量
    //进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
    for(let i=1 ;i<GetRandomNum(min,max);i++){
        //随机抽取字母，拼装成需要的用户名
        outPuttext=outPuttext+tempStringArray[GetRandomNum(0,tempStringArray.length)]
    }
    return outPuttext;
}
 
console.log(GetRadomUserName(7,16))
```
**插入200万数据**

有了生成随机数和随机用户名的方法，就可以生产百万级数据了。此处代码会在视频中作详细讲解。代码如下：

```
var db = connect('company');
db.randomInfo.drop();
var  tempInfo = [];
for (let i=0;i<2000000;i++){
    tempInfo.push({
        username:GetRadomUserName(7,16),
        regeditTime:new Date(),
        randNum0:GetRandomNum(100000,999999),
        randNum1:GetRandomNum(100000,999999),
        randNum2:GetRandomNum(100000,999999),
        randNum3:GetRandomNum(100000,999999),
        randNum4:GetRandomNum(100000,999999),
        randNum5:GetRandomNum(100000,999999),
        randNum6:GetRandomNum(100000,999999),
        randNum7:GetRandomNum(100000,999999),
        randNum8:GetRandomNum(100000,999999),
        randNum8:GetRandomNum(100000,999999),
    })
}
 
db.randomInfo.insert(tempInfo);
```
这个过程可能2-3分钟，根据自己的电脑配置不同，会有差别。

插入完成后，我们可以使用 db.randomInfo.stats() 这个命令查看数据中的数据条数。

全部代码：

```
//生成随机数
 
function GetRandomNum(min,max){
    let range = max-min;   //得到随机数区间
    let rand = Math.random(); //得到随机值
    return (min + Math.round(rand *range)); //最小值+随机数取整
}
 
//console.log(GetRandomNum(10000,99999));
 
//生成随机用户名
function GetRadomUserName(min,max){
    let tempStringArray= "123456789qwertyuiopasdfghjklzxcvbnm".split("");//构造生成时的字母库数组
    let outPuttext = ""; //最后输出的变量
    //进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
    for(let i=1 ;i<GetRandomNum(min,max);i++){
        //随机抽取字母，拼装成需要的用户名
        outPuttext=outPuttext+tempStringArray[GetRandomNum(0,tempStringArray.length)]
    }
    return outPuttext;
}
 
// console.log(GetRadomUserName(7,16))
// var startTime=(new Date()).getTime();
var db = connect('company');
db.randomInfo.drop();
var  tempInfo = [];
for (let i=0;i<2000000;i++){
    tempInfo.push({
        username:GetRadomUserName(7,16),
        regeditTime:new Date(),
        randNum0:GetRandomNum(100000,999999),
        randNum1:GetRandomNum(100000,999999),
        randNum2:GetRandomNum(100000,999999),
        randNum3:GetRandomNum(100000,999999),
        randNum4:GetRandomNum(100000,999999),
        randNum5:GetRandomNum(100000,999999),
        randNum6:GetRandomNum(100000,999999),
        randNum7:GetRandomNum(100000,999999),
        randNum8:GetRandomNum(100000,999999),
        randNum8:GetRandomNum(100000,999999),
    })
}
 
db.randomInfo.insert(tempInfo);
```

总结：这节课主要是为讲解MongoDB的索引作准备，我们用随机数的方法构建了一个百万级的数据表，如果你有兴趣继续往下学习联系，这节课必须动手作一下。以后这篇文章的学习全是基于这个代码。

## 第16节：索引：索引入门

集合中已经有了200万条的数据，可以进行索引的操作了。我们先来建立一个索引，然后看看它的查询性能到底提升了多少倍。这节课的内容不会很难，主要掌握索引的建立方法即可。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=u0541sa23ho&tiny=0&auto=0" allowfullscreen></iframe>

**普通查询性能**

我们先制作一个普通查询，随便查找一个用户名，并计算出查询和打印的时间，因为有200万条数据，所以性能不会很高。

```
var startTime = new Date().getTime()  //得到程序运行的开始时间
var  db = connect('company')          //链接数据库
var   rs=db.randomInfo.find({username:"tfruhjy8k"})  //根据用户名查找用户
rs.forEach(rs=>{printjson(rs)})                     //循环输出
var  runTime = new Date().getTime()-startTime;      //得到程序运行时间
print('[SUCCESS]This run time is:'+runTime+'ms')    //打印出运行时间
```

上边的代码就是一个普通的查询，只不过是记录了时间。在终端运行后，可以得到大概的运行时间是0.8秒左右（电脑性能不同，有所不同），第一次无缓存的运行时间大概是3.5秒左右。这个时间是没办法满足我们的日常查询的。

**建立索引**

试着为用户名（username）建立索引。建立索引只需要一句话就可以了。

```
db.randomInfo.ensureIndex({username:1})
```

查看现有索引

```
db.randomInfo.getIndexes()
```
终端的结果，现在只有一个索引值:

```
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "company.randomInfo"
        }
]
```

那现在使用命令建立一下索引db.randomInfo.ensureIndex({uername:1})，我的电脑大概要50秒左右，建立好后我们重新使用db.randomInfo.getIndexes()，查看一下结果。

结果如下：已经变成了两条索引。


```
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "company.randomInfo"
        },
        {
                "v" : 2,
                "key" : {
                        "username" : 1
                },
                "name" : "uername_1",
                "ns" : "company.randomInfo"
        }
]
```

然后我们在来load一下demo07.js文件（load(‘./demo07.js’)），看一下现在多少秒可以查询出来。这时候查询的时间缩短到了4ms左右，查询性能提升了大概200倍左右。

总结：无论是在关系型数据库还是文档数据库，建立索引都是非常重要的。前边讲了，索引这东西是要消耗硬盘和内存资源的，所以还是要根据程序需要进行建立了。MongoDB也给我们进行了限制，只允许我们建立64个索引值。

## 第17节：索引：复合索引

这节课先来看看什么样的数据你使用索引会变慢，然后学习一下复合索引的使用和语法。通过这节课我们需要对所以使用的时机有所了解，避免画蛇添足，产生不必的麻烦。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=t0543meor6f&tiny=0&auto=0" allowfullscreen></iframe>

**索引中的小坑**

记得我刚学MongoDB时，学会了索引，我就到处想用，甚至几百条数据的集合(collections)，我也自作聪明的用一下，但结果往往是画蛇添足，走了不少弯路。通过实际开发和性能对比，我自己总结了几条不用索引的情况（不一定对，但是自己的经验之谈）。

- 数据不超万条时，不需要使用索引。性能的提升并不明显，而大大增加了内存和硬盘的消耗。
- 查询数据超过表数据量30%时，不要使用索引字段查询。实际证明会比不使用索引更慢，因为它大量检索了索引表和我们原表。
- 数字索引，要比字符串索引快的多，在百万级甚至千万级数据量面前，使用数字索引是个明确的选择。
- 把你经常查询的数据做成一个内嵌数据（对象型的数据），然后集体进行索引。

**复合索引**

好了上边我们讲了一大堆理论，现在来看复合索引。复合索引就是两条以上的索引。上节课我们已经把username字段建立了索引，我们现在把randNum0，这个字段也设置成索引。

```
db.randomInfo.ensureIndex({randNum0:1})
```

建立好后，我们再用查询索引状态命令进行查询。

```
db.randomInfo.getIndexes()
```
这时候已经是两个自建索引了，一共有三个索引。
```
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "company.randomInfo"
        },
        {
                "v" : 2,
                "key" : {
                        "username" : 1
                },
                "name" : "username_1",
                "ns" : "company.randomInfo"
        },
        {
                "v" : 2,
                "key" : {
                        "randNum0" : 1
                },
                "name" : "randNum0_1",
                "ns" : "company.randomInfo"
        }
]
```
**两个索引同时查询**

我们同时查询两个索引的值，看看效果是怎么样的。

```
var startTime=new Date().getTime();
var db = connect('company');
 
var  rs= db.randomInfo.find({username:'7xwb8y3',randNum0:565509});
 
rs.forEach(rs=>{printjson(rs)});
 
 
var runTime = new Date().getTime()-startTime;
print('[Demo]this run time is '+runTime+'ms');
```

从性能上看并没有什么特殊的变化，查询时间还是在4ms左右。MongoDB的复合查询是按照我们的索引顺序进行查询的。就是我们用db.randomInfo.getIndexes()查询出的数组。

**指定索引查询（hint）**

课程开始时，我说了数字的索引要比字符串的索引快，这就需要一个方法来打破索引表的查询顺序，用我们自己指定的索引优先查询，这个方法就是hint().

```
var  rs= db.randomInfo.find({username:'7xwb8y3',randNum0:565509}).hint({randNum0:1});
```
由于数据量和复杂成都还是不大，所以你看不出来明显的性能提升，但是要相信技术胖，等工作中遇到大数据时，一定会得到很好的效果的。

**删除索引**

当索引性能不佳或起不到作用时，我们需要删除索引，删除索引的命令是dropIndex().

```
db.randomInfo.dropIndex('randNum0_1');//索引的唯一ID
```
这里需要注意的是删除时填写的值，并不是我们的字段名称（key），而是我们索引查询表中的name值。这是一个小坑，希望小伙伴们不要踩中。

总结：这节主要内容还是操作索引，包括复合索引的建立，删除。和一些使用索引的小窍门。

## 第18节：索引：全文索引

有些时候需要在大篇幅的文章中搜索关键词，比如我写的文章每篇都在万字以上，这时候你想搜索关键字是非常不容易的，MongoDB为我们提供了全文索引。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=x0543hojp7b&tiny=0&auto=0" allowfullscreen></iframe>

**准备工作：**

这节我们先建立一个集合（collections）-info，然后插入一小段文章，作用就是为建立全文索引提供数据，当然我们不再建立百万级数据，我们只是看一下效果。

```
db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."}
```
当然这很简单，再次强调这只是文章需要，实际工作中这么简单的数据没必要建立全文索引。

建立全文索引

```
db.info.ensureIndex({contextInfo:'text'})
```

需要注意的是这里使用text关键词来代表全文索引，我们在这里就不建立数据模型了。

**全文索引查找**
建立好了全文索引就可以查找了，查找时需要两个关键修饰符:

- $text:表示要在全文索引中查东西。
- $search:后边跟查找的内容。

db.info.find({$text:{$search:"programmer"}})

** 查找多个词 **

全文索引是支持多个次查找的，比如我们希望查找数据中有programmer，family，diary，drink的数据（这是或的关系），所以两条数据都会出现。

```
db.info.find({$text:{$search:"programmer family diary drink"}})
```

如果我们这时候希望不查找出来有drink这个单词的记录，我们可以使用“-”减号来取消。

```	
dbd .info.find({$text:{$search:"programmer family diary -drink"}})
```

**转义符：**

全文搜索中是支持转义符的，比如我们想搜索的是两个词（love PlayGame和drink），这时候需要使用\斜杠来转意。
```
db.info.find({$text:{$search:"\"love PlayGame\" drink"}})
```
**总结：**全文索引在工作还是经常使用的，比如博客文章的搜索，长文件的关键词搜索，这些都需要使用全文索引来进行。这节课的知识并不难，还是那句话，你看是不可能学会的，一定要动手练习。当然索引还有很多知识，这里我们只讲最常用的知识，把小伙伴引入门就好，也就是常说的用20%的精力，学会80%的知识，然后在工作中进行迭代磨练。虽然MongoDB的索引文章结束了，但是MongoDB的文章还没有结束，下篇文章开始学习如何管理MongoDB。

## 第19节：管理:用户的创建、删除与修改

安装好MongoDB时，它为我们默认开了一个最高管理权限方便我们管理数据库，我们可以用mongo链接数据库，就是这个原理。但在实际开发中并一般不能使用这个用户，因为大家都知道和最高权限的原因，安全性和可靠性都不适合，所以要对MongoDB的用户进行管理。这节课我们就学习一下MongoDB的用户管理。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=n05476zlr5g&tiny=0&auto=0" allowfullscreen></iframe>

**创建用户：**

首先要进入我们的admin库中，进入方法是直接使用use admin 就可以。进入后可以使用show collections来查看数据库中的集合。默认是只有一个集合的（system.version）。

创建用户可以用db.createUser方法来完成，里边参数还是蛮多的，代码我写在下边，然后对每一项做出了解释。
```
db.createUser({
    user:"jspang",
    pwd:"123456",
    customData:{
        name:'技术胖',
        email:'web0432@126.com',
        age:18,
    },
    roles:['read']
})
```

当然我们还可以单独配置一个数据库的权限，比如我们现在要配置compay数据库的权限为读写：
```
db.createUser({
    user:"jspang",
    pwd:"123456",
    customData:{
        name:'技术胖',
        email:'web0432@126.com',
        age:18,
    },
    roles:[
        {
            role:"readWrite",
            db:"company"
        },
        'read'
    ]
})
```

内置角色：
1. 数据库用户角色：read、readWrite；
2. 数据库管理角色：dbAdmin、dbOwner、userAdmin;
3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；
4. 备份恢复角色：backup、restore；
5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
6. 超级用户角色：root
7. 内部角色：__system

**查找用户信息**

我们直接可以使用查找的方法，查找用户信息。命令很简单：
```
dbd .system.users.find()
```
**删除用户：**

删除名利也是非常简单，直接用remove就可以删除这个用户的信息和权限。

```
db.system.users.remove({user:"jspang"})
```

**建权：**

有时候我们要验证用户的用户名密码是否正确，就需要用到MongoDB提供的健全操作。也算是一种登录操作，不过MongoDB把这叫做建权。

```
db.auth("jspang","123456")
```

如果正确返回1，如果错误返回0。（Error：Authentication failed。）

**启动建权**

重启MongoDB服务器，然后设置必须使用建权登录。

```
mongod --auth
```
启动后，用户登录只能用用户名和密码进行登录，原来的mongo形式链接已经不起作用了。相应的用户权限也对应妥当。实际项目中我们启动服务器必须使用建权形式。

**登录**

如果在配置用户之后，用户想登录，可以使用mongo的形式，不过需要配置用户名密码：
```
mongom  -u jspang -p 123456 127.0.0.1:27017/admin
```
这时候我们就可以用给我们的权限对数据库操作了。

## 第20节：管理：备份和还原
作为一个数据库管理员，对数据库的备份和还原是比作的两项工作。其实用起来是相当简单的，就是mongodump和mongorestore两个命令。
<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=u054865atec&tiny=0&auto=0" allowfullscreen></iframe>

**数据备份**

先来看一下mongodump备份的基本格式，其实这就是条在终端中执行的命令。

```
mongodump
    --host 127.0.0.1
    --port 27017
    --out D:/databack/backup
    --collection myCollections
    --db test
    --username username
    --password password
```
比如现在我们备份所有MongoDB里的库到D盘的databack文件夹下，就可以把命令写成这样

```
mongodump --host 127.0.0.1 --port 27017 --out D:/databack/
```
数据恢复

备份好后，如果数据库有意外或者遭受到了攻击，我们要进行回复数据库，这时候就可以使用mongorestore命令。

还是先看一下它的基本格式

```
mongorestore
    --host 127.0.0.1
    --port 27017
    --username username
    --password password
    <path to the backup>
```
比如我们现在不小心删除了一个collections的数据，要进行恢复。现在删除randomInfo集合。

```
db.randomInfo.drop()
```
使用命令进行恢复

```
mongorestore --host 127.0.0.1 --port 27017 D:/databack/
```
总结：两个命令很简单，甚至你可以写成脚本和定时任务，让他每天自己执行。但是如果你真的使用了MongoDB数据库，这是一个最基本的操作，还是要会使用的。

## 第21节：管理：图形界面管理（完结）

这节课我们主要看看图形界面，图形界面相对比较简单，特别是我们已经会了很多终端的操作方法，所以我就不写文章了，大家直接看视频吧。

<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=u0550nawvm1&tiny=0&auto=0" allowfullscreen></iframe>

