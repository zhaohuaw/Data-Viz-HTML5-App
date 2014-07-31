Data Visualization HTLM5 Mobile App
================================

本Demo使用了[Cordova](http://cordova.apache.org)的[Ionic](ionicframework.com)作为框架，并用以[d3.js](d3js.org)和[nvd3.js](http://nvd3.org/)为基础的[Angularjs-nvd3-directives](http://cmaurer.github.io/angularjs-nvd3-directives/)展示了基本的数据可视化功能。

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
所有在代码库里的内容是已经编译好的，比如可以直接打开DataViz.xcodeproj查看iOS项目。

再修改了www目录下的内容或者config.xml文件后，需要重新编译：

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

# 2. 开发框架介绍
