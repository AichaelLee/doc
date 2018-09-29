(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{164:function(e,t,i){"use strict";i.r(t);var r=i(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),i("p",[e._v("Dyno是什么？")]),e._m(1),i("p",[e._v("什么是buildpack?")]),e._m(2),e._m(3),i("p",[e._v("1.当在GitHub上面克隆下一个工程或者搭建成功一个工程后，想和Heroku上面的应用进行绑定怎么办？")]),e._m(4),i("p",[e._v("2.本地开发时连接数据库的URL应该怎么获取？")]),e._m(5),i("p",[e._v("3.如何连接本地redis？出现Resource could not get from the pool是怎么回事？")]),i("blockquote",[i("p",[i("a",{attrs:{href:"https://github.com/eskimo220/utadahikaru/wiki/%E3%80%90Redis%E3%80%91-Redis%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%A8%E6%8E%A5%E7%B6%9A-20170901",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击此处"),i("OutboundLink")],1),e._v("查看本地redis配置；关掉代理重新登录。")])]),i("p",[e._v("5.云端redis的URL怎么获取？")]),e._m(6),i("p",[e._v("4.maven关联多个子项目的时候？")]),i("p",[e._v("5.是如何通信的？")]),e._m(7),i("p",[e._v("6.如何查看heroku上面的日志？")]),i("blockquote",[i("p",[e._v("安装了CLI后，可以直接在控制台输入：heroku logs进行查看，或"),i("a",{attrs:{href:"https://github.com/eskimo220/utadahikaru/wiki/%E3%80%90Log%E3%80%91Heroku%E5%B9%B3%E5%8F%B0%E4%B8%8A%E5%AE%9E%E7%8E%B0%E6%97%A5%E5%BF%97%E7%9A%84%E8%BE%93%E5%87%BA20170901",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击此处"),i("OutboundLink")],1),e._v("通过插件papertrail实现。")])]),i("p",[e._v("7.在Heroku上部署应用出现APP Crash可能的解决方法")]),e._m(8),i("p",[e._v("8.注意 环境搭建的过程中，maven和postgrel的环境变量一定要配置。")]),i("p",[e._v("框架篇：")]),i("p",[e._v("1.在本地IDE进行开发时，出现强转失败的castexception时怎么办？")]),e._m(9),i("p",[e._v("Git篇：")]),i("p",[e._v("1.git切换分枝：")]),e._m(10),i("p",[e._v("前台篇：")]),i("p",[e._v("1.什么是响应式的网页设计？")]),e._m(11),i("p",[e._v("1.Git中stage，working tree和index的区别是什么？")]),e._m(12),i("p",[e._v("2.git中如何查看远端仓库的日志？")]),e._m(13)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"问题总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 问题总结")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("blockquote",[i("p",[e._v("Heroku并没有将重心放在实例或应用程序上，而放在了基于Linux容器的dynos。如果你需要更多dynos来处理应用程序的额外请求，只需按需增加dynos的数量即可。如果dynos请求更多内存或处理能力，单个Dynos也可以扩充。 Dynos托管您的网站或后台处理代码，Heroku则处理余下的全部交互任务。 Heroku的服务机制，以dyno为运行单元进行服务的托管，可以轻松地配置服务器集群。"),i("code",[e._v("Heroku")]),e._v("使用名为"),i("code",[e._v("Dyno")]),e._v("的计算单元衡量用量,并以此为依据收取服务费用。最常用的"),i("code",[e._v("Dyno")]),e._v("类型是"),i("code",[e._v("Web Dyno")]),e._v(",表示一个"),i("code",[e._v("Web")]),e._v("服务器实例。程序可以通过使用更多的"),i("code",[e._v("Web Dyno")]),e._v("以增强其请求处理能力。另一种"),i("code",[e._v("Dyno")]),e._v("类型是"),i("code",[e._v("Worker Dyno")]),e._v(",用来执行后台作业或其他辅助任务。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Buildpacks负责将部署的代码转变为一个slug,然后在一个dyno上面运行。Buildpacks由一系列的脚本组成，根据选择的编程语言，脚本会检索依赖，然后输出生成的资源或编译过的代码等。输出的东西会被Slug编译器装配进slug。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"平台篇："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平台篇：","aria-hidden":"true"}},[this._v("#")]),this._v(" 平台篇：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("进入到你本地的目录下，使用命令行：heroku git:remote -a [你的应用名字]完成绑定\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("云端数据库的URL通过命令"),t("code",[this._v("heroku run echo $JDBC_DATABASE_URL")]),this._v("查询，然后配置到本地的环境变量中。")]),t("p",[this._v("连接本地数据库的URL格式是：jdbc:postgresql://127.0.0.1:5432/lizhizhong?user=lizhizhong&password=itec1234")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("heroku redis:credentials REDIS_URL")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("web dyno worker dyno")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("很大可能是maven的配置出现了问题，检查pom.xml中有没有特别的标签。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("创建文件：target/classes/META-INF/spring-devtools.properties 添加内容：restart.include.v=/shiro-*")]),t("p",[this._v("[点击此处](/ http://michael-j.net/2016/12/21/Spring-Boot反序列对象失败/)查看详细参考")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("git checkout -b lizhizhong")]),t("p",[this._v("git add .")]),t("p",[this._v('git commit -m "this is a comment"')]),t("p",[this._v("git push origin lizhizhong (还不太标准）")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("响应式网站设计(Responsive Web design)的理念是：页面的设计与开发应当根据用户行为以及设备环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整。具体的实践方式由多方面组成，包括弹性网格和布局、图片、CSS media query的使用等。无论用户正在使用笔记本还是iPad，我们的页面都应该能够自动切换分辨率、图片尺寸及相关脚本功能等，以适应不同设备；换句话说，页面应该有能力去自动响应用户的设备环境。响应式网页设计就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这样，我们就可以不必为不断到来的新设备做专门的版本设计和开发了。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("stage:如果指文件，是一个被Git管理起来的文件（被追踪的），修改但是还没有被commit的状态，如果指工作区，可以理解为暂存区，既有改动后，执行Gitstatus看到的绿色文件的部分")]),t("p",[this._v("working tree 工作树目录，即是克隆下一个库，在本地看到的以这个库为名字的目录，也是你要操作的目录")]),t("p",[this._v("index：索引文件，可以理解为Git中记录每一次操作变化的")]),t("p",[this._v("HEAD:当前最后一个提交")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Git查看远端仓库的日志：")]),t("p",[this._v("git log origin/master -n 3")])])}],!1,null,null,null);t.default=s.exports}}]);