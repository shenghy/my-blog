---
category: 生活趣事
tags:
  - Raspberry
date: 2016-01-01
title: 树莓派学习笔记（自己学习使用）
vssue-title: Raspberry
---

这篇文章是自己学习树莓派的全过程，因为没有什么教程，所以全是自己摸索和百度的。本文是给自己看的，并不是对外分享的。

<!-- more -->

## 01.烧录树莓派系统



## 02.开启root用户的方法

在安装完系统后，树莓派的系统默认使用`pi`这个用户登录，而安装任何软件和修改文件都需要用`root`用户,所以需要自己手动开启`root`,先打开终端，输入下面的代码。

```shell
sudo passwd root
```
输入完回车后，会提示你输入两遍密码，这个密码就是你`root`用户的密码。输入完成后，还需要解锁`root`用户.
```shell
sudo passwd --unlock root
```
现在就已经解锁`root`用户了。解锁后可以使用`su`命令进行登录。

```shell
su root
```
输入后会要求你输入密码，输入正确后，就可以顺利进入`root`用户了。有了这个用户，你再使用树莓派就得心应手了，再也没有一些权限阻碍了。

## 03.安装JDK的正确知识

因为我的树莓派需要跑一个LED时钟的程序，所以需要JAVA环境，安装JDK中我也踩了坑，我直接使用下面的命令安装会报错。

```shell
apt-get install openjdk-8-jre
```
那正确的安装顺序应该是这样的。

```shell
sudo apt-get purge openjdk-8-jre-headless
sudo apt-get install openjdk-8-jre-headless
sudo apt-get install openjdk-8-jre
```
安装完成后，可以输入`java`进行查看一下，如果出现很多帮助命令，说明已经安装完成了。


## 04.更换国内软件源

由于我国的特殊原因树莓派系统自带的安装源很多东西无法正常访问，可以访问下载也会很慢，所以需要改为国内的源。我这里使用阿里云的源。

这个是中科大源的软件源。
```shell
deb http://mirrors.ustc.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi
```
更换之前需要先要进行备份，外衣不行了，还可以改回来。

```
cd /etc/apt

sudo cp sources.list sources.list.bak
```
然后用`nano`进行编辑，它是Raspberry推荐的命令行编辑器，如果对vi编辑器不熟悉的，可以使用这个。
```
nano sources.list
```
需要`Ctrl+O`进行保存，然后回车，`Ctrl+X`退出文件。

退出后需要更新源，执行命令如下:
```shell
sudo apt-get update
```

源更新完后，需要更新升级以安装的软件包，这个过程耗时比较长。
```
sudo apt-get upgrade
```

## 05.安装Nginx服务

在更换了国内的软件源以后，就可以安装Nginx服务了，没更换国内源时，我都是安装失败的。更换之后安装就非常简单了，只需要简单的几步就可以安装完成。

** 1.安装Nginx ** 

```
sudo apt-get install nginx
```

** 2.启动Nginx **

```js
sudo /etc/init.d/nginx start
```
直接访问IP地址测试一下Nginx是否安装成功了，如果能在网页中显示`Welcome to nginx!`,说明已经更新完成了。




