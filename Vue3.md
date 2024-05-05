# Vue3

1. 怎样import vue

   在doc之后的title下加入如下代码，使用CDN调用vue对应的版本（@后面跟版本号，如果是next代表是最新的）

   ```<script src="https://unpkg.com/vue@3.0.2"></script>```

2. 如何创建vue应用程序

   在js文件中使用：

   ```js
   const app = Vue.createApp({
     // something about the data and methods
   });
   
   app.mount('#app'); // 将app这个vue应用程序挂载到html的dom的特定位置（id为app的位置），可以在html的div标签使用为app的id进行调用
   ```

   在html文件的body内中使用：

   ```html
   	<div id="app">   <!-- this "app" should be the same as the name you mount-->
          <!--something you want to add into this div -->
       </div>
       <script src = "app.js"></script>
   ```

3. vue应用程序中如何添加数据部分和方法部分

   ```js
   const app = Vue.createApp({
       // 对于数据部分，使用data(){}包裹所有需要用到的数据，在vue应用程序实例化的使用data函数会被调用，从而初始化所有的数据与变量
       data() {
           return {
               url: 'https://www.google.com',
               title: 'The Final Empire',
               author: 'Brandon Sanderson',
               books:[
                   {title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true},
                   {title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                   {title: 'Good Omens', author: 'Terry Pratchett & Neil Gaiman', img: 'assets/3.jpg', isFav: true}
               ]
           }
       },
       // methods:{} 包裹的是所有可能用到的方法，虽然methods可以替换为其他的名称，但是这是vue.js的惯例
       methods: {
           // 函数部分与其他语言类似，可以传参，通过this. 访问自己类中的对象，和cpp很像，通过下标+dot的方式访问复合类型中的数据成员，也很类似
           changeTitle() {
               this.title = 'Words of Radiance'
           },
           toggleFav(book) {
               book.isFav = !book.isFav;
               book.isFav = !book.isFav
           }
       }
   });
   ```

4. 如何在html使用css

   使用link将css放置到另外的文件中，同样也是title下面，head之前

   ```<link rel="stylesheet" href="style.css">```

   

## 项目级别的vue使用

1. Vue CLI的安装与初始化：

   > Vue/CLI是Vue的命令行程序，可以便于项目级别的vue网站开发

   * 首先上node.js官网安装最新版本的node.js

   * 然后在cmd中运行```node -v```确保node成功安装

   * 再输入```node install -g @vue/cli```安装vue cli

     此处的-g代表在全局安装，所有位置都可以使用

   * 安装成功后，在想要创建项目的位置使用```vue create YOURPROJECTNAME```，将```YOURPROJECTNAME```替换为你的项目名称，Vue cli会创建一个名字为项目名称的目录，并在其中初始化所有的文件

2. 项目文件介绍

   1. node_modules：

      开发过程中基本不用管，是用来存储项目所有的依赖包的。在github上下载别人的项目后，应该先运行```npm install```会自动安装项目所需依赖。

   2. public：

      用来存储项目的index.html文件的，浏览器就是通过查看index.html来知道从哪里开始看起

   3. src：

      1. assets：

         资源文件，可以用来存储一些css样式文件或者一些图片

      2. components：

         用来放置其他的组件的

      3. App.vue：

         一般来说是整个项目的根应用（其实也是一个组件），所有其他的应用程序都是在此应用程序中嵌套的

      4. main.js：

         用来创建新的应用程序，并且挂载至dom的指定位置，目前学习过程中只创建了App.vue

   4. gitignore：

      用来使用git上传到github的时候忽略一些文件的，这些文件不会被上传至库中

   5. babel.config.js：

      未知

   6. jsconfig.json:

      未知

   7. package-lock.json：

      和8应该就是描述这个项目用到的包吧，但是-lock不知道是什么意思

   8. package.json

   9. README.md：

      项目的描述文件

   10. vue.config.js

       vue的配置文件，目前还不懂

## 如何开始？

主要的部分还是在src文件夹中编写的。每个.vue文件的结构都是分为三部分：

1. template：

   这一部分是类似于原本的html格式，用于控制前端显示的部分的，使用类似于```<div></div>```这样的标签进行编写。其中有几个功能比较有用和特殊：

   * 双括号：```{{ title }}```，可以使用双括号包裹由下面要介绍的script内定义的数据名称进行显示。如script中定义了一个数据名为title，那么这里就可以使用```{{ title }}``` 的形式引用它。这样的好处是可以动态的进行显示
   * ```v-on:```或者是```@```，这个是vue中提供的用于事件处理的机制，两者等价```@```只是一种简写的方式（因为太常用了）。使用的方式是在html的左标签内部、标签名后面紧跟@+时间名，如``` <button @click="handleClick">Change Title</button>```，这里的标签名是button，事件名称是click，处理事件的函数是handleClick，这个函数会在下面介绍的script中进行声明，Change Title是按钮上会显示的字符，后面是闭合标签。
   * ```v-if:```和```v-on```放置的位置类似，使用方式也类似，只不过引号内部跟的不是事件处理函数，而是一个变量，vue会检查这个变量的值是ture还是false，如果是true，那么就会在dom中插入这个标签以及其中的内容，如果是false，则不插入，可以用于条件显示或者条件处理。
   * ```v-show:```和```v-if```有时候可以相互替换使用，但是也有区别。```v-show```的性能更好，因为它只是修改了要显示的物件的css属性为可见与不可见，而```v-if```要操作dom，更慢。
   * ```v-for:```，举个例子：```<div v-for="book in books">{{book.title}}</div>``` ，这样就可以显示books列表里面的每一个book的titlle了

2. script：

   目前学习到的部分就是声明一些变量，使用data()函数，return中包裹变量以及其内容

   ```v
   <script>
   export default {
     name: 'App',
     data() {
       return {
         title: 'Hello, this is my first Vue App :)'
       }
     }
   }
   </script>
   ```

3. style：

   用于修饰应用程序的样式，后面会讲到一些高级用法，比如如何限制style生效的作用域，如果不限制那么会进行全局性的更改。

   可以针对每个应用程序中单独的一类标签进行样式的设置（之前没学过css，感觉这个应该是css的基本常识）

   ```css
   <style>
   #app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 60px;
   }
   h1 {
     border-bottom: 1px solid #ddd;
     display: inline-block;
     padding-bottom: 10px;
   }
   </style>
   ```

   