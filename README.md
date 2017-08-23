这是关于react的现成的架构。修改了Facebook官方的脚手架：create-react-app。
本架构集合技术栈：
  * `create-react-app`
  * `react-router 4`
  * `redux`
  * `antd`
  * `css-modules`
  * `immutable`
  * `chunk懒加载`
  * `devSeverver热更新`
  * `jest单元测试`

## 运行方法


下载了此仓库, 你需要:

### `npm install`

安装所需要的依赖库

### `npm start`

在游览器上运行，包含热更新.<br>
在游览器打开 [http://localhost:3000](http://localhost:3000).

你可以看到此项目的demo

### `npm test`

运行 App.test.js 进行单元测试

### `npm run build`

生产模式。打包chunk及抽离css，图片资源等

## 文件目录

下载后, 你的目录大概这样:

```
my-app/
  config
    jest  -----单元测试配置
      cssTransform.js
      fileTransform.js
    env.js  -----单元测试配置
    paths.js  -----公共path提取
    polyfills.js -----单元测试配置
    webpack.config.dev.js  -----dev的webpack配置
    webpack.config.prod.js  -----生产的webpack配置
    webpackDevServer.config.js  -----devServer的webpack配置
  node_modules/ -----下载的模块
  scripts  -----package.json的script模块加载配置
    build.js
    start.js
    test.js
  public/  ------公共资源库
    index.html
    favicon.ico
    manifest.json
  src/
    actions -----redux 的 action目录
    component  -----react展示组件目录
    container -----容器组件
    reducers  -----reduxcer 集合入口文件
    store -----store的配置
    utils
      asyncComponent.jsx -----chunk配置
      AsyncComponentFn.jsx  -----chunk的配置
      BaseComponent.jsx -----基于immutable的容器
      reducerType.js ----- action+redux的公用type
    App.js ------ 路由入口
    App.test.js  ----- 单元测试demo
    index.css  ----- rest.css hackcss
    index.js ------ 入口文件
  package.json ------ 配置文件
  README.md ------ 你正在阅读的文件。。。
```

**关于css模块**:

src目录中都用了css模块化。
node_modules 是普通的css-loader

```

## 联系方式
欢迎学习交流，有任何意见可以联系我：
email：704694231@qq.com
