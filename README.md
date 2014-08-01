Data Visualization HTLM5 Mobile App
================================

本Demo使用了[Cordova](http://cordova.apache.org)的[Ionic](ionicframework.com)作为框架，
并用以[d3.js](d3js.org)和[nvd3.js](http://nvd3.org/)为基础的
[Angularjs-nvd3-directives](http://cmaurer.github.io/angularjs-nvd3-directives/)展示了基本的数据可视化功能。

# 1. 依赖安装与应用运行
## 开发环境部署
首先请安装[Node.js](http://nodejs.org/)，然后用npm安装Crodova和Ionic的命令行工具：
```shell
$ npm install -g cordova ionic
```

请参考Android和iOS平台开发的依赖安装说明：
* [Android](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide)
* [iOS](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide)

注意iOS平台的部署和测试仍然需要Mac OS X。

Windows下的配置可以参考[这里](http://learn.ionicframework.com/videos/windows-android/)。

## 运行dataviz应用
所有在代码库里的内容是已经编译好的，比如可以直接打开[DataViz.xcodeproj](dataviz/platforms/ios/dataviz.xcodeproj)查看iOS项目。

再修改了[www](dataviz/www)目录下的内容或者config.xml文件后，需要重新编译：

* 重新编译运行Android项目：
```shell
$ ionic build android
$ ionic run android #可以USB真机调试，否则效果和下一行一样
$ ionic emulate android
```

* 重新编译运行iOS项目（需要在Mac OS X上）：
```shell
$ ionic build ios
$ ionic emulate ios
```
或者直接用Xcode模拟运行或者部署。

如下为Demo在Android和iOS上运行的截图：

![Android](../images/android-pie-chart.png)
![iOS](../images/ios-discrete-bar.png)

# 2. 开发框架介绍
## Cordova
Apache Cordova提供了一系列Javascript API，让移动开发者可以使用设备的原生功能（比如照相机、加速器）。
结合恰当的UI框架，开发者可以使用HTML、CSS和Javascript开发移动应用。

这样开发者不需要编写Java、Objective-C等原生代码，直接调用Cordova封装的API即可。
可以这样理解：Cordova提供了本地的web host，将通过网页技术开发的内容直接展示出来。

由于封装API掩盖了平台差异，所以多平台开发也较为容易，并且有很多第三方插件可以使用。
最终Cordova将使用各种移动平台的SDK将应用打包，方便安装和发布。

Cordova目前支持平台有：iOS, Android, Blackberry, Windows Phone, Palm WebOS, Bada 和 Symbian。

## Ionic
和jQuery Mobile、Sencha Touch、Dojo Mobile类似，Ionic也是UI框架。其基于Cordova，并使用了Angular.js框架。

Ionic提供了不少美观可用的UI组件，让基于Cordova的UI设计和开发更加快捷。
已编译的Javascript和CSS，可选的SASS主题更改和Angular JS拓展，以及图标集和字体，提供了移动UI开发的高起点。

通过Ionic可以快速搭建应用原型，譬如Demo就是在如下指令建立的侧边栏应用上改进而成的：
```shell
$ ionic start dataviz sidemenu
$ cd dataviz/
$ ionic add platform android
$ ionic add platform ios
```

## Angular.js
AngularJS是一款开源JavaScript库，由Google维护，用来协助单一页面Web应用运行。
它的目标是用MVC模式来增强基于浏览器的应用，使开发和测试变得更加容易。

其读取包含附加自定义（标签属性）的HTML，遵从这些自定义属性中的指令（directives），并将页面中的输入或输出与由JavaScript变量表示的模型绑定起来。
这些JavaScript变量的值可以手工设置，或者从静态或动态JSON资源中获取。

Ionic本身包括AngularJS，在Demo的[index.html](dataviz/www/index.html)中的
```html
<!-- ionic/angularjs js -->
<script src="lib/ionic/js/ionic.bundle.js"></script>
```
就已经包含了AngularJS基本库。

## D3.js
对于数据可视化应用，D3.js是一个非常容易定制和使用的Javascript库。
不过由于AngularJS的MVC模式，使用D3.js需要一定的额外设置，可以选择：
* 自定义灵活的directives，可以参考[这里](http://www.ng-newsletter.com/posts/d3-on-angular.html)
* 使用封装好的JS库，灵活性较差但是可以快速上手，比如Demo中使用的[Angularjs-nvd3-directives](http://cmaurer.github.io/angularjs-nvd3-directives/)

# 3. 参考资料
* [Cordova Documentation](http://cordova.apache.org/docs/en/3.5.0/)
* [Ionic Documentation](http://ionicframework.com/docs/)
* [AngularJS](https://angularjs.org/)
* [D3JS](http://d3js.org/)
* [D3 and Angular](https://www.dashingd3js.com/d3-resources/d3-and-angular)
