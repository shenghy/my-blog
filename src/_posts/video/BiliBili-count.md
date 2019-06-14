---
category: 视频教程
tags:
  - 视频目录
date: 2019-6-6
title: 30元自制B站粉丝计数器
vssue-title: BiliBili-count
---

![B站粉丝计数器](https://jspang.com/images/bilibili_count.jpg)

把视频放到BiliBili.com也有半年时间了，从开始以点也不懂B站，到现在喜欢上B站。好像找到了一个宅男的欢乐地，可以学习可以娱乐。自己也当上了UP主，开始关心自己的粉丝数。在咸鱼上搜索了一下，发现有卖B站粉丝计数器的，于是打算自己作一个。





<!-- more -->


<iframe src="//player.bilibili.com/player.html?aid=54740141&cid=95754564&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%"> </iframe>

可以帮网友免费制作：你自己出设备费用和快递费哦。

### 需要的设配清单

1. **ESP8266开发板-20元**：相当于电脑，这个板子有两种尺寸，只要带wifi的都是可以的（cp2102和CH340G）.
2. **MAX7219点阵式模块-18元**:这个就相当于显示器，这个屏的好处是不用焊接，而且还带了五根杜邦线（就不用自己买了），因为我的焊接技术真的是不怎么样，买了小屏幕的自己回来焊不上。

![B站粉丝计数器](https://jspang.com/images/b_count_1.jpg)


防止有人说我作广告，都自己去淘宝搜索吧。其实有这两样设备就可以进行制作了。如果你要装饰的好看，那就需要你自己买些锁塑料壳了，网上也有3D打印的。


### 需要下的软件和URL地址

- **Arduino开发软件**：`https://www.arduino.cc/` 这个就相当于我们`VSCode`,当然没有VSode好用，但是只能用这个,因为我们要用这个把程序烧到开发板里。
- **ESP8266开发板驱动**:`https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers`,我这里直接用的windows版，这个按照好后，可以把开发板插到电脑上测试一下，如果在设备管理器中可以找到，说明驱动成功。
-  **附件开发板管理地址**: `http://arduino.esp8266.com/stable/package_esp8266com_index.json`,这个需要在`Arduino`开发软件的首选项里进行设置。
-  **点阵屏B站粉丝计数器源码**:`https://github.com/mascg/Bilibili_LEDMatrix_Fans_Monitor`,这个也是B站UP主`咸鱼Cosmos`开源的。我在作这个的时候不会接线，他也给了我很多帮助，在这里再表示一下感谢。


### 开发板和点阵屏连线说明

我买的是cp2102,小的开发板,这个线序一定要弄对，如果弄错了，点阵屏所有点都会亮，也可能烧坏。

- 点阵屏 ---------- 开发板 
- VCC---------------3v3
- GND--------------GND
- DataIn-------------D8
- LOAD/CS----------D7
- CLK----------------D6


这个在网上很不好找，我也是研究了好几个小时，所以这个连线一定要接好。




### 制作流程

这个流程你熟练后可以变换顺序，但是如果你是新手，还是按照这个流程来作比较好，成功率也会很高。
1. 下载`esp8266开发板`驱动：`https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers`，下载好后，要把开发板链接电脑，然后在设备管理器里查看是否已经有这个设备了。有说明你的开发板和驱动都是正确的，如果没有，可能是板子或线有问题。

2. 下载`Arduino开发软件`:`https://www.arduino.cc/`这个下载如果慢，可以科学上网一下。

3. 设置`附件开发板管理网址`: 打开`Arduino开发软件`,然后选择“文件”-“首选项”,在“附加开发板管理器网址中”，加入下面的url`http://arduino.esp8266.com/stable/package_esp8266com_index.json`.

4. 安装`ArduinoJson`：在`Arduino开发软件`中打开“工具”-“库管理器”，然后搜索`json`,然后安装`ArduinoJson`,版本选择`5.13.2`,最新版本会直接报错，烧入失败。
 
5. 在Arduino中安装开发板管理：在`Arduino开发软件`中打开“工具”-“开发板 Arduino yun”-“开发板管理器”，搜索`ESP82665`,然后选择版本`2.4.2`。这里需要说的是，如果你没有配置`附件开发板管理网址`，这部你是搜索不到的。

6. 选择开发板为`NodeMCU 1.0`,这个是要选对的。

7. 然后选择端口，这个端口要和你在`设备管理器`中看到的一致，这样就可以实现把代码烧录到开发板中了。

8. 到Github上下载源代码：`https://github.com/mascg/Bilibili_LEDMatrix_Fans_Monitor`,然后把其中的三个文件`Bilibili_LEDMatrix_V1.ino`、`fonts.h`、`max7219.h`拷贝到一个文件夹里。

9. 修改你的配置文件，把下面的代码换成你自己的,这里现在是我的
```javascript
const char* ssid     = "Tenda_091D08";                 // WiFi名
const char* password = "xxxx";            //WiFi密码
String channelId = "165659472";                   //bilibili UID
long utcOffset = 8;                              //时区，默认 +8 为东八区（中国北京）
```

10. 开始进行烧板，当显示100%的时候，就烧完了，然后你就可以快乐的DIY外壳了。