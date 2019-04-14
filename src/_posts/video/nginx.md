---
category: 视频教程
tags:
  - Nginx
date: 2018-10-05
title: 一个前端必会的 Nginx免费教程  (共11集)
vssue-title: Nginx
---



由于前端技术的蓬勃发展和你自身的不断努力，很多小伙伴已经打通了任督二脉，做到了前后端通吃。你们就是自己程序世界里的神，在这里你们无所不能，创造世界，制定规则和逻辑。当一个属于你的世界做好后，你需要展示给朋友，发布于众人，让爱你的人欣赏。这时候我们需要一个强有力的服务器作为容器，而Nginx可以满足你的一切幻想。

<!-- more -->

## 课程说明：

课程详细讲解Nginx的使用和配置，包括文字教程和视频教程。当然你不用花费一分钱，这一切都是免费的，你只要记住`http://jspang.com` 这个网址就可以看这个教程。

>本文首发[http://jspang.com](http://jspang.com),如果转载，请带上这句话。


**教程更新说明**

本人并不是职业讲师，白天需要到公司上班，还在一线写程序，所以更新频率不是很快。

每周更新三集视频。

因为本人能力有限，所以里边的知识不敢保证完全正确，如有错误，敬请指正。



## 第01节:初识Nginx和环境准备

作为一个前端，我相信你一定听说过Nginx。因为它在最近两年实在是太火了，作为一个前端如果不会Nginx，都不敢跟别人说自己是大前端。那Nginx到底是什么？我们还是引用官方的介绍吧：

>  "Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。"

<iframe width="100%"  frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=m0735ujw8u6" allowFullScreen="true"></iframe>


**Nginx的优点**

- 支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。
- 内存消耗少：在主流的服务器中Nginx目前是内存消耗最小的了，比如我们用Nginx+PHP，在3万并发链接下，开启10个Nginx进程消耗150M内存。
- 免费使用可以商业化：Nginx为开源软件，采用的是2-clause BSD-like协议，可以免费使用，并且可以用于商业。
- 配置文件简单：网络和程序配置通俗易懂，即使非专业运维也能看懂。


当然它的有点还有很多，比如反向代理功能，负载均衡功能，我们会在文章中一一介绍，我这里就不跟大家赘述了。

**现在Nginx非常火** ：我们可以通过`https://w3techs.com/` 这个网站看到，Nginx在服务器中排在第二位，但是是上升最快的网站，占有率达到39.7%。

![alt](http://jspang.com/static/upload/20181005/vwknjv9sBYAayGpxkMKOXPB4.jpg)

**为什么要学习这篇文章**

作为一个前端，或多或少都会对Nginx有一些经验，那为什么还要学习那？
不系统：以前可能你只会配置某项功能（网上搜集），都是碎片化的知识，不没有形成系统化。这样就导致你服务出现问题时，根本不知道从哪里下手来解决这些问题。

那这篇文章我努力做到分功能，分层次的给大家系统的进行讲解，让大家能基本胜任Nginx的配置和运维工作。

** 学习环境 **

学习环境你可以有三种选择：
- **自己找个电脑搭建**：需要自己有闲置电脑或者服务器，优点是稳定性高，可控能力强，学习更方便。
- **购买阿里云ECS**：需要花些小钱，我选用的是阿里云学生ECS，每月9.5元。
- **使用虚拟软件**：这个如果电脑配置高，可以安装虚拟软件，缺点是麻烦，影响电脑性能，而且配置也比较多。

我选择阿里云的ECS，纯属个人懒省事，但是我认为这是最高效的。

下面是群里的小伙伴提供的一个阿里云的优惠价格。
>玩转校园生态 ，只要9.5元一个月 ,你们可以酌情购买。
https://promotion.aliyun.com/ntms/act/campus2018.html

（Linux的知识我这里不做过多的介绍，如果你对这个不熟悉自己去恶补一下吧）

我用的操作系统是CentOS 7.4 64位版本。

**用yum进行安装必要程序**

如果你Linux用的很熟练的话，我想这些程序你一定已经用`yum`安装过了，但是如果你还不熟悉Linux，你可以直接用yum进行安装就可以了。（然后自己百度一下这些东西的用处，这里不做过多的介绍了，只要照做就可以了）

```
yum -y install gcc gcc-c++ autoconf pcre-devel make automake
yum -y install wget httpd-tools vim
```

**建立目录**

其实这个目录你是可以不建立的，但是那样你的系统会很乱，不利于以后的运维。所以我这里根据本人的喜好建立如下目录。

步骤如下(此步骤根据自己喜欢建立)：
1. 进入系统后，在目录下建立了一个`jspang`的文件夹。
2. 进入 jspang文件夹  ,命令是 `cd jspang`。
3. 分别使用mkdir建立 `app`,`backup`,`download`,`logs`,`work`文件夹。

这节课我们就先作到这里，下节课我们开始安装我们Nginx。


## 第02节:Nginx的快速搭建

我的文章多是注重于动手操作，而轻理论的，因为技术胖这个半吊子还没能力把理论知识讲的比书好，所以理论部分你可以自行百度查阅或者看书学习（需要说明的是技术胖并不是说理论不重要）。

<iframe frameborder="0" width="100%" src="https://v.qq.com/txp/iframe/player.html?vid=e0738193yd4" allowFullScreen="true"></iframe>

**Nginx版本说明**

- Mainline version ：开发版,主要是给广大Nginx爱好者，测试、研究和学习的，但是不建议使用于生产环境。
- Stable version : 稳定版,也就是我们说的长期更新版本。这种版本一般比较成熟，经过长时间的更新测试，所以这种版本也是主流版本。
- legacy version : 历史版本，如果你需要以前的版本，Nginx也是有提供的。

明白了这三种版本的区别后，就可以明明白白的使用了。

**基于Yum的方式安装Nginx**

我们可以先来查看一下yum是否已经存在，命令如下：

```
yum list | grep nginx
```
如果出现类似下面的内容，说明yum源是存在的。
![alt](http://www.jspang.com/static/upload/20181007/ljnFrPYc23562AtUSLvSIYpQ.png)

(细心的小伙伴可以发现系统原来的源只支持1.1.12版本，这版本有些低)

如果不存在，或者不是你需要的版本，那我们可以自行配置yum源，下面是官网提供的源，我们可以放心大胆的使用。

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/
gpgcheck=0
enabled=1
```

复制上面的代码，然后在终端里输入：

```
vim /etc/yum.repos.d/nginx.repo
```
然后把代码复制进去，这里你可能需要一些Vim的操作知识，如果不熟悉，可以自行学习一下，当然我视频中也是有讲解的。

赋值完成后，你需要修改一下对应的操作系统和版本号，因为我的是centos和7的版本，所以改为这样。

```
baseurl=http://nginx.org/packages/centos/7/$basearch/
```
你可以根据你的系统或需要的版本进行修改。

如果都已经准备好了，那就可以开始安装了，安装的命令非常简单：
```
yum install nginx
```
安装完成后可以使用命令，来检测Nginx的版本。
```
nginx -v
```
如果出现下面图片的内容，说明Nginx就安装成功了。

![alt](http://www.jspang.com/static/upload/20181007/P6eXf6G5kJJ8L2mKDEZbHg1O.png)


到这里你就把最新版本的Nginx安装到了Linux系统中，也算是一个非常好的开始。小伙伴一定要动手作一下哦，听是听不会的，你需要动手作一下。

## 第03节：Nginx基本配置文件详讲

现在Nginx已经顺利安装完成了，之后的任务就是要学习配置和使用它了。个人是比较享受这个过程的，这就好像有一匹充满野性的汗血宝马，你现在要做的就是驯服它。无论是结果和 过程都那么美好。
<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=j0748tj46zh" allowFullScreen="true"></iframe>

**查看Nginx的安装目录**

在使用`yum`安装完Nginx后，需要知道系统中多了那些文件，它们都安装到了那里。可以使用下面的命令进行查看：

```
rpm -ql nginx
```
rpm 是linux的rpm包管理工具，-q 代表询问模式，-l 代表返回列表，这样我们就可以找到nginx的所有安装位置了。


列表列出的内容还是比较多的，我们尽量给大家进行讲解，我们这节先来看看重要的文件。



**nginx.conf文件解读**

nginx.conf 文件是Nginx总配置文件，在我们搭建服务器时经常调整的文件。

进入etc/nginx目录下，然后用vim进行打开
```
cd /etc/nginx
vim nginx.conf
```
下面是文件的详细注释，我几乎把每一句都进行了注释，你可以根据你的需要来进行配置。
```
#运行用户，默认即是nginx，可以不进行设置
user  nginx;
#Nginx进程，一般设置为和CPU核数一样
worker_processes  1;   
#错误日志存放目录
error_log  /var/log/nginx/error.log warn;
#进程pid存放位置
pid        /var/run/nginx.pid;


events {
    worker_connections  1024; # 单个后台进程的最大并发数
}


http {
    include       /etc/nginx/mime.types;   #文件扩展名与类型映射表
    default_type  application/octet-stream;  #默认文件类型
    #设置日志模式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;   #nginx访问日志存放位置

    sendfile        on;   #开启高效传输模式
    #tcp_nopush     on;    #减少网络报文段的数量

    keepalive_timeout  65;  #保持连接的时间，也叫超时时间

    #gzip  on;  #开启gzip压缩

    include /etc/nginx/conf.d/*.conf; #包含的子配置项位置和文件
```
**default.conf 配置项讲解**
我们看到最后有一个子文件的配置项，那我们打开这个include子文件配置项看一下里边都有些什么内容。

进入conf.d目录，然后使用`vim default.conf`进行查看。
```
server {
    listen       80;   #配置监听端口
    server_name  localhost;  //配置域名

    #charset koi8-r;     
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;     #服务默认启动目录
        index  index.html index.htm;    #默认访问文件
    }

    #error_page  404              /404.html;   # 配置404页面

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;   #错误状态码的显示页面，配置后需要重启
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}

```

明白了这些配置项，我们知道我们的服务目录放在了` /usr/share/nginx/html`下，可以使用命令进入看一下目录下的文件。
```
cd /usr/share/nginx/html
ls 
```
可以看到目录下面有两个文件，50x.html 和 index.html。我们可以使用vim进行编辑。

学到这里，其实可以预想到，我们的nginx服务器已经可以为html提供服务器了。我们可以打开浏览器，访问ip地址试一试。

**阿里云的安全组配置**

如果你使用的是阿里云，记得到ECS实例一下打开端口。

步骤如下：
1.  进入阿里云控制台，并找到ECS实例。
2.  点击实例后边的“更多”
3.  点击“网络和安全组” ，再点击“安全组配置”
4. 右上角添加“安全组配置”
4. 进行80端口的设置，具体设置如图就好。

![alt](http://jspang.com/static/upload/20181009/N3bF8FMGxljMydjEdTztVw7g.png)


到这里我们就可以浏览到程序的页面了。本节就到这里，看到如下图片页面，说明你都配置成功了。

![alt](http://jspang.com/static/upload/20181009/J_qLKrvR7WHBcmCbWauHKK78.png)

## 第04节：Nginx服务启动、停止、重启 


经过前3节的学习，已经安装好了nginx，在维护的时候，我们作的最多的操作就是Nginx的启动、重启和停止。这节课我们就把Nginx的这些最常用操作讲一下。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=k0749uqdbh6" allowFullScreen="true"></iframe>

**启动Nginx服务**

默认的情况下，Nginx是不会自动启动的，需要我们手动进行启动，当然启动Nginx的方法也不是单一的。

**nginx直接启动**

在CentOS7.4版本里（低版本是不行的），是可以直接直接使用`nginx`启动服务的。
```
nginx
```

**使用systemctl命令启动**

还可以使用个Linux的命令进行启动，我一般都是采用这种方法进行使用。因为这种方法无论启动什么服务，都是一样的，只是换一下服务的名字（不用增加额外的记忆点）。

```
systemctl start nginx.service
```

输入命令后，没有任何提示，那我们如何知道Nginx服务已经启动了哪？可以使用Linux的组合命令，进行查询服务的运行状况。

```
ps aux | grep nginx
```
如果启动成功会出现如下图片中类似的结果。

![alt](http://jspang.com/static/upload/20181010/UnbGynSf4ZkthKJDfdxcobjf.png)

有这三条记录，说明我们Nginx被正常开启了。

**停止Nginx服务的四种方法**

停止Nginx 方法有很多种，可以根据需求采用不一样的方法，我们一个一个说明。

- 立即停止服务

```
nginx  -s stop
```
这种方法比较强硬，无论进程是否在工作，都直接停止进程。

- 从容停止服务

```
nginx -s quit
```
这种方法较stop相比就比较温和一些了，需要进程完成当前工作后再停止。

- killall 方法杀死进程

这种方法也是比较野蛮的，我们直接杀死进程，但是在上面使用没有效果时，我们用这种方法还是比较好的。
```
killall nginx
```
- systemctl 停止

```
systemctl stop nginx.service
```

**重启Nginx服务**

有时候我们需要重启Nginx服务，这时候可以使用下面的命令。

```
systemctl restart nginx.service
```

**重新载入配置文件**

在重新编写或者修改Nginx的配置文件后，都需要作一下重新载入，这时候可以用Nginx给的命令。
```
nginx -s reload
```

**查看端口号**

在默认情况下，Nginx启动后会监听80端口，从而提供HTTP访问，如果80端口已经被占用则会启动失败。我么可以使用`netstat -tlnp`命令查看端口号的占用情况。

**总结:**这节课的内容虽然简单，但都是我们在工作中经常使用的，希望小伙伴们多多联系，我把课程分的如此细致，一个主要的原因也是希望可以方便在工作中进行查阅。

---- 

## 第05节：自定义错误页和访问设置

一个好的网站会武装到牙齿，任何错误都有给用户友好的提示。比如当网站遇到页面没有找到的时候，我们要提示页面没有找到，并给用户可返回性。错误的种类有很多，所以真正的好产品会给顾客不同的返回结果。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=p07521mg88n" allowFullScreen="true"></iframe>


**多错误指向一个页面**

在/etc/nginx/conf.d/default.conf 是可以看到下面这句话的。

```
error_page   500 502 503 504  /50x.html;
```

error_page指令用于自定义错误页面，500，502，503，504 这些就是HTTP中最常见的错误代码，/50.html 用于表示当发生上述指定的任意一个错误的时候，都是用网站根目录下的/50.html文件进行处理。

**单独为错误置顶处理方式**

有些时候是要把这些错误页面单独的表现出来，给用户更好的体验。所以就要为每个错误码设置不同的页面。设置方法如下：
```
error_page 404  /404_error.html;
```

然后到网站目录下新建一个404_error.html 文件，并写入一些信息。
```
<html>
<meta charset="UTF-8">
<body>
<h1>404页面没有找到!</h1>
</body>
</html>
```
然后重启我们的服务，再进行访问，你会发现404页面发生了变化。

**把错误码换成一个地址**

处理错误的时候，不仅可以只使用本服务器的资源，还可以使用外部的资源。比如我们将配置文件设置成这样。

```
error_page  404 http://jspang.com;
```
我们使用了技术胖的博客地址作为404页面没有找到的提示，就形成了，没有找到文件，就直接跳到了技术胖的博客上了。

**简单实现访问控制**

有时候我们的服务器只允许特定主机访问，比如内部OA系统，或者应用的管理后台系统，更或者是某些应用接口，这时候我们就需要控制一些IP访问，我们可以直接在`location`里进行配置。

可以直接在default.conf里进行配置。
```
 location / {
        deny   123.9.51.42;
        allow  45.76.202.231;
    }

```
配置完成后，重启一下服务器就可以实现限制和允许访问了。这在工作中非常常用，一定要好好记得。

## 第06节：Nginx访问权限详讲

上节课我们已经简单接触了Nginx访问简单用法，简单的知道了，deny是禁止访问，allow是允许访问。但Nginx的访问控制还是比较复杂的，我们这节课就详细介绍一下。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=c0763b9rtg8" allowFullScreen="true"></iframe>


**指令优先级**

我们先来看一下代码：
```
 location / {
        allow  45.76.202.231;
        deny   all;
    }
```
上面的配置表示只允许`45.76.202.231`进行访问，其他的IP是禁止访问的。但是如果我们把`deny all`指令，移动到 `allow 45.76.202.231`之前，会发生什么那？会发现所有的IP都不允许访问了。**这说明了一个问题：就是在同一个块下的两个权限指令，先出现的设置会覆盖后出现的设置（也就是谁先触发，谁起作用）**。


**复杂访问控制权限匹配**

在工作中，访问权限的控制需求更加复杂，例如，对于网站下的img（图片目录）是运行所有用户访问，但对于网站下的admin目录则只允许公司内部固定IP访问。这时候仅靠deny和allow这两个指令，是无法实现的。我们需要location块来完成相关的需求匹配。

上面的需求，配置代码如下：
```
    location =/img{
        allow all;
    }
    location =/admin{
        deny all;
    }
```
`=`号代表精确匹配，使用了`=`后是根据其后的模式进行精确匹配。这个直接关系到我们网站的安全，一定要学会。

**使用正则表达式设置访问权限**

只有精确匹配有时是完不成我们的工作任务的，比如现在我们要禁止访问所有php的页面，php的页面大多是后台的管理或者接口代码，所以为了安全我们经常要禁止所有用户访问，而只开放公司内部访问的。

代码如下：
```
 location ~\.php$ {
        deny all;
    }
```
这样我们再访问的时候就不能访问以php结尾的文件了。是不是让网站变的安全很多了那？

## 第07节：Nginx设置虚拟主机

虚拟主机是指在一台物理主机服务器上划分出多个磁盘空间，每个磁盘空间都是一个虚拟主机，每台虚拟主机都可以对外提供Web服务，并且互不干扰。在外界看来，虚拟主机就是一台独立的服务器主机，这意味着用户能够利用虚拟主机把多个不同域名的网站部署在同一台服务器上，而不必再为简历一个网站单独购买一台服务器，既解决了维护服务器技术的难题，同时又极大地节省了服务器硬件成本和相关的维护费用。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=d07635xbcfx" allowFullScreen="true"></iframe>

配置虚拟主机可以基于端口号、基于IP和基于域名，这节课我们先学习基于端口号来设置虚拟主机。


**基于端口号配置虚拟主机**

基于端口号来配置虚拟主机，算是Nginx中最简单的一种方式了。原理就是Nginx监听多个端口，根据不同的端口号，来区分不同的网站。

我们可以直接配置在主文件里`etc/nginx/nginx.conf`文件里， 也可以配置在子配置文件里`etc/nginx/conf.d/default.conf `。我这里为了配置方便，就配置在子文件里了。当然你也可以再新建一个文件，只要在conf.d文件夹下就可以了。

修改配置文件中的server选项，这时候就会有两个server。

```
server{
        listen 8001;
        server_name localhost;
        root /usr/share/nginx/html/html8001;
        index index.html;
}
```
编在`usr/share/nginx/html/html8001/`目录下的index.html文件并查看结果。

```
<h1>welcome port 8001</h1>
```
最后在浏览器中分别访问地址和带端口的地址。看到的结果是不同的。


然后我们就可以在浏览器中访问`http://112.74.164.244:8001`了，当然你的IP跟这个肯定不一样，这个IP过几天就会过期的。

**基于IP的虚拟主机**

基于IP和基于端口的配置几乎一样，只是把`server_name`选项，配置成IP就可以了。

比如上面的配置，我们可以修改为：

```
server{
        listen 80;
        server_name 112.74.164.244;
        root /usr/share/nginx/html/html8001;
        index index.html;
}
```
这种演示需要多个IP的支持，由于我们的阿里ECS只提供了一个IP，所以这里就不给大家演示了，如果工作中用到，只要安装这种方法配置就可以了。



## 第08节：Nginx使用域名设置虚拟主机

在真实的上线环境中，一个网站是需要域名和公网IP才可以访问的。这也是比较真实的一节课，我们在实际工作中配置最多的就是设置这种虚拟主机。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=i0763rsf4f4" allowFullScreen="true"></iframe>

如果你还没有域名，我希望你也能注册一个，你可以注册一个以你名字全拼的域名，这类域名资源还是比较丰富的。一年才几十元钱，这不仅仅是为了学习这篇课程，更重要是有一个域名会对你的职业发展有很多好处。比如你自己作的程序想展示给别人看，你自己要建立一个博客，或者是你要进行一个程序测试，这些都需要域名的支持。所以如果你是一名程序员，我强烈建议你能申请一个自己的域名。

我这里就使用自己的博客域名作例子了。

先要对域名进行解析，这样域名才能正确定位到你需要的IP上。
我这里新建了两个解析，分别是:
- nginx.jspang.com  :这个域名映射到默认的Nginx首页位置。
- nginx2.jspang.com : 这个域名映射到原来的8001端口的位置。

**配置以域名为划分的虚拟主机**

我们修改`etc/nginx/conf.d`目录下的default.conf 文件，把原来的80端口虚拟主机改为以域名划分的虚拟主机。代码如下：
```
server {
    listen       80;
    server_name  nginx.jspang.com;
```
我们再把同目录下的`8001.conf`文件进行修改，改成如下：
```
server{
        listen 80;
        server_name nginx2.jspang.com;
        location / {
                root /usr/share/nginx/html/html8001;
                index index.html index.htm;
        }
}
```
然后我们用平滑重启的方式，进行重启，这时候我们在浏览器中访问这两个网页。


其实域名设置虚拟主机也非常简单，主要操作的是配置文件的server_name项，还需要域名解析的配合。小伙伴们一定要进行练习一下。后面的课程可能就没有这么简单了。


##  第09节：Nginx反向代理的设置

虚拟主机学习完成了，作为一个前端必会的一个技能是反向代理。大家都知道，我们现在的web模式基本的都是标准的CS结构，即Client端到Server端。那代理就是在Client端和Server端之间增加一个提供特定功能的服务器，这个服务器就是我们说的代理服务器。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=b0765hcbz35" allowFullScreen="true"></iframe>

**正向代理：**如果你觉的反向代理不好理解，那先来了解一下正向代理。我相信作为一个手速远超正常人的程序员来说，你一定用过翻墙工具（我这里说的不是物理梯子），它就是一个典型的正向代理工具。它会把我们不让访问的服务器的网页请求，代理到一个可以访问该网站的代理服务器上来，一般叫做proxy服务器，再转发给客户。我还是画张图帮助大家理解吧。

![alt](http://jspang.com/static/upload/20181024/wxDZWDrFC_o9Xf5e2j-mRc2g.png)

简单来说就是你想访问目标服务器的权限，但是没有权限。这时候代理服务器有权限访问服务器，并且你有访问代理服务器的权限，这时候你就可以通过访问代理服务器，代理服务器访问真实服务器，把内容给你呈现出来。

**反向代理：**反向代理跟代理正好相反（需要说明的是，现在基本所有的大型网站的页面都是用了反向代理），客户端发送的请求，想要访问server服务器上的内容。发送的内容被发送到代理服务器上，这个代理服务器再把请求发送到自己设置好的内部服务器上，而用户真实想获得的内容就在这些设置好的服务器上。

![alt](http://jspang.com/static/upload/20181024/5AwF_4MfkSxPtmre19xfPLgK.png)

通过图片的对比，应该看出一些区别，这里proxy服务器代理的并不是客户端，而是服务器,即向外部客户端提供了一个统一的代理入口，客户端的请求都要先经过这个proxy服务器。具体访问那个服务器server是由Nginx来控制的。再简单点来讲，一般代理指代理的客户端，反向代理是代理的服务器。

**反向代理的用途和好处**

- 安全性：正向代理的客户端能够在隐藏自身信息的同时访问任意网站，这个给网络安全代理了极大的威胁。因此，我们必须把服务器保护起来，使用反向代理客户端用户只能通过外来网来访问代理服务器，并且用户并不知道自己访问的真实服务器是那一台，可以很好的提供安全保护。
- 功能性：反向代理的主要用途是为多个服务器提供负债均衡、缓存等功能。负载均衡就是一个网站的内容被部署在若干服务器上，可以把这些机子看成一个集群，那Nginx可以将接收到的客户端请求“均匀地”分配到这个集群中所有的服务器上，从而实现服务器压力的平均分配，也叫负载均衡。

**最简单的反向代理**

现在我们要访问`http://nginx2.jspang.com`然后反向代理到`jspang.com`这个网站。我们直接到`etc/nginx/con.d/8001.conf`进行修改。

修改后的配置文件如下：
```
server{
        listen 80;
        server_name nginx2.jspang.com;
        location / {
               proxy_pass http://jspang.com;
        }
}
```

一般我们反向代理的都是一个IP，但是我这里代理了一个域名也是可以的。其实这时候我们反向代理就算成功了，我们可以在浏览器中打开`http://nginx2.jspang.com`来测试一下。（视频中有详细的演示）

**其它反向代理指令**

反向代理还有些常用的指令，我在这里给大家列出：
- proxy_set_header :在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。

- proxy_connect_timeout:配置Nginx与后端代理服务器尝试建立连接的超时时间。
- proxy_read_timeout : 配置Nginx向后端服务器组发出read请求后，等待相应的超时时间。
- proxy_send_timeout：配置Nginx向后端服务器组发出write请求后，等待相应的超时时间。
- proxy_redirect :用于修改后端服务器返回的响应头中的Location和Refresh。



##  第10节：Nginx适配PC或移动设备

现在很多网站都是有了PC端和H5站点的，因为这样就可以根据客户设备的不同，显示出体验更好的，不同的页面了。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=l0766yunosm" allowFullScreen="true"></iframe>

这样的需求有人说拿自适应就可以搞定，比如我们常说的bootstrap和24格布局法，这些确实是非常好的方案，但是无论是复杂性和易用性上面还是不如分开编写的好，比如我们常见的淘宝、京东......这些大型网站就都没有采用自适应，而是用分开制作的方式。

那分开制作如何通过配置Nginx来识别出应该展示哪个页面那？我们这节课就来学习一下。

**$http_user_agent的使用：**

Nginx通过内置变量`$http_user_agent`，可以获取到请求客户端的userAgent，就可以用户目前处于移动端还是PC端，进而展示不同的页面给用户。

操作步骤如下：

1. 在/usr/share/nginx/目录下新建两个文件夹，分别为：pc和mobile目录
```
cd /usr/share/nginx
mkdir pc
mkdir mobile
```
2. 在pc和miblic目录下，新建两个index.html文件，文件里下面内容
```
<h1>I am pc!</h1>
```
```
<h1>I am mobile!</h1>
```

3. 进入`etc/nginx/conf.d`目录下，修改8001.conf文件，改为下面的形式:
```
server{
        listen 80;
        server_name nginx2.jspang.com;
        location / {
         root /usr/share/nginx/pc;
         if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
            root /usr/share/nginx/mobile;
         }
         index index.html;
        }
}
```
这段代码我会在视频中详细讲解，如果感兴趣就来看视频吧，视频全部免费哦。

##  第11节：Nginx的Gzip压缩配置

Gzip是网页的一种网页压缩技术，经过gzip压缩后，页面大小可以变为原来的30%甚至更小。更小的网页会让用户浏览的体验更好，速度更快。gzip网页压缩的实现需要浏览器和服务器的支持。

<iframe width="100%" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=u0770gdr7t0" allowFullScreen="true"></iframe>

![alt](http://jspang.com/static/upload/20181028/Kt1ecAV6mSyPKRL1JG9Tot_Q.png)

从上图可以清楚的明白，gzip是需要服务器和浏览器同事支持的。当浏览器支持gzip压缩时，会在请求消息中包含Accept-Encoding:gzip,这样Nginx就会向浏览器发送听过gzip后的内容，同时在相应信息头中加入Content-Encoding:gzip，声明这是gzip后的内容，告知浏览器要先解压后才能解析输出。


**gzip的配置项**

Nginx提供了专门的gzip模块，并且模块中的指令非常丰富。

- gzip : 该指令用于开启或 关闭gzip模块。
- gzip_buffers : 设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。
- gzip_comp_level : gzip压缩比，压缩级别是1-9，1的压缩级别最低，9的压缩级别最高。压缩级别越高压缩率越大，压缩时间越长。
- gzip_disable : 可以通过该指令对一些特定的User-Agent不使用压缩功能。
- gzip_min_length:设置允许压缩的页面最小字节数，页面字节数从相应消息头的Content-length中进行获取。
- gzip_http_version：识别HTTP协议版本，其值可以是1.1.或1.0.
- gzip_proxied : 用于设置启用或禁用从代理服务器上收到相应内容gzip压缩。
- gzip_vary : 用于在响应消息头中添加Vary：Accept-Encoding,使代理服务器根据请求头中的Accept-Encoding识别是否启用gzip压缩。


**gzip最简单的配置**

```
http {
   .....
    gzip on;
    gzip_types text/plain application/javascript text/css;
   .....
}
```
`gzip  on`是启用gizp模块，下面的一行是用于在客户端访问网页时，对文本、JavaScript
和CSS文件进行压缩输出。

配置好后，我们就可以重启Nginx服务，让我们的gizp生效了。

如果你是windows操作系统，你可以按F12键打开开发者工具，单机当前的请求，在标签中选择Headers，查看HTTP响应头信息。你可以清楚的看见`Content-Encoding`为gzip类型。

![alt](http://jspang.com/static/upload/20181028/bxWU2NIWFrC4gRJp3fW_M_Yu.png)


看到这个，说明我们成功开启了gzip。

