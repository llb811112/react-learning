# 从零开始构建一个React应用 [React](https://react.dev/) 文档;

## 步骤1 :安装构建工具;

用的是vite现在;

> npm create vite@latest my-app -- --template react-ts

项目的入口 : main.tsx ;

# 什么是JSX:

## 概念:

jsx是JavaScript和XML(HTML)的缩写,表示在js代码中编写HTML模板结构,它是React中编写UI模板的方式;

## 优势:

1. HTML的声明式模板写法;
2. JS的可编程能力;

## JSX的本质:

JSX 并不是标准的 JS 语法，它是 JS 的语法扩展，浏览器本身不能识别，需要通过解析工具做解析之后才能在浏览器中运行

**BABEL  -- 解析工具 [Babel](https://babeljs.io/repl#?config_lz=N4IgZglgNgpgdgQwLYxALhAJxgBygOgCsBnADxABoQdtiYAXY9AbWZHgDdLR6FMBzBkwwATGGAQBXKIwoACOAHt6ciDDkBGDfKUq1AfSSKARpo2UQRkdJjCJUOlWOT-kUrfT1MkmAF8AuhRs2AgAxvTcWJJw9BAo6CBS9IpICLGhIAFBIMS8ggC0AEyRYqGKmGnlxABqMJjEEIpwCYUADIUAzPlaFjgQODBQEHAwAAqYijiKxAhQCQAWYQDWmf6BOYqSmKEwACoAngMJVjaZQA&code_lz=DwEwlgbgfAsAUAFwBZgM4AI3vBewD0OUQA&lineWrap=true&version=7.29.4)**

## JSX中使用JS表达式:

在JSX中可以通过大括号语法{}识别JavaScript中的表达式,比如常见的变量、函数调用、方法调用等等

### 1.使用引号传递字符串;

```jsx
  {/* 1.使用引号传递字符串 */}
  {'111'}
```

### 2.使用JavaScript变量:

```jsx
const count = 111;
function App(){
return(
{/* 2.使用JavaScript变量` */}
  {count}
)
} 
```

### 3.函数调用和方法调用:

```jsx
  {getName()} {getName().toUpperCase()}
```

### 4.使用JavaScript对象

```jsx
  {/* 4.使用js对象 */}
  <div style={{color:'red'}}>111</div>
```

注意:if语句、switch语句、变量声明属于语句,不是表达式,不能出现在{}中

## JSX中实现列表渲染:

> 语法:在JSX中可以使用原生JS中的map方法遍历渲染列表
>
> map方法 核心key-value 键值对;

`map()`是数组的高阶函数，用于遍历数组并对每个元素执行回调函数，最终返回一个由回调函数结果组成的新数组。其核心特点包括：

* **不修改原数组** ：始终返回新数组，符合函数式编程的不可变性原则。
* **链式调用支持** ：可与其他数组方法（如 `filter()`、`reduce()`）组合使用。
* **简洁的转换逻辑** ：避免手动编写循环，提升代码可读性。

> 所以说foreach 不可以 因为没有返回值;
>
> * `map 循环哪个结构`：指用 `map` 遍历数据数组（比如 `list`），循环处理每一项数据；
> * `return结构`：指 `map` 的回调函数里，必须 `return` 要渲染的单个列表项的 JSX 结构（比如 `<div>`、自定义组件等）。

```jsx
{ list.map( item => <li key ={item.id}> {item.name} </li> )}
```

> `<li></li>` 里面是循环的内容 为列表中的每一个name  key值为id;

key的作用:React框架内部使用 提升更新性能的

## jsx中实现条件渲染;

语法:在React中,可以通过逻辑与运算符&&、三元表达式(?:)实现基础的条件渲染

### 1.通过逻辑与来控制某个元素的显示和隐藏; [一个元素]

```jsx
const isShow = true;
function APP(){
return (
        {/* 1.通过逻辑与来控制某个元素的显示和隐藏; */}
     { isShow && <div> 我显示出来了</div>}
)
}
```

### 2.三元运算符 来实现两个元素的分支切换显示;[两个元素]

> {isShow ? `<div>`我显示出来了 `</div>`: `<div>`我被隐藏了 `</div>`}

## JSX中实现复杂条件渲染;

需求:列表中需要根据文章状态适配三种情况,单图,三图,和无图三种模式

<img src="image/write/1779074291928.png" width="300" height="auto"/>

解决方案:自定义函数+if判断语句

# React 基础事件绑定;

## React 基础事件绑定;

语法: **on+事件名称={事件处理程序}**,整体上遵循驼峰峰命名法

```jsx
function HandleClick(){  
    alert("Button Clicked");
}   
function APP(){
    return(
        <div>
    <button onClick={HandleClick}>点击我</button>
        </div>

    )
}
export default APP;
```

我发现react里面onClick里面那个函数没有加括号 这个是因为 react JSX就是纯的JavaScript;

* **不加 `()`** ：传递函数本身，等待事件触发时才调用 ✅
* **加 `()`** ：立即执行函数，把返回值传给 onClick ❌

## 使用事件对象参数

语法:在事件回调函数中设置形参e

```jsx
     function HandleMouseOver(e){
        console.log("Mouse Over",e);
     }
```

然后一样调用;

## 传递自定义参数;

语法:事件绑定的位置改造成箭头函数的写法,在执行clickHandler实际处理业务函数的时候传递实参

```jsx
 function APP(){
    function ClickHandle(name){
        console.log("Button Clicked",name);
     }
     return(
    <button onClick = {()=>ClickHandle('我是中国人,我是React开发者')}>传递参数</button>
    )
}
export default APP;
```

注意:不能直接写函数调用,这里事件绑定需要一个函数引用

## 同时传透事件对象和自定义参数;

语法:在事件绑定的位置传递事件实参e和自定义参数,clickhHandler中声明形参,注意顺序对应

> <buttononClick = {(e)=>ClickHandle1('我是中国人',e)}>同时传透事件对象和自定义参数 `</button>`

# React中的组件;

## 组件是什么:

**概念:**一个组件就是用户界面的一部分,它可以有自己的为逻辑和外观,组件之间可以互相嵌套,也可以复用多次

## React组件:

在React中,一个组件就是首字母大写的函数,内部存放了组件的逻辑和视图UI,渲染组件只需要把组件当成标签书写即可

### 1.定义组件:

> function Button( ) {
>
> //组件内部逻辑
>
> return `<button>click me </button>`
>
> }

### 2.使用组件:

> function APP(){
>
> return
>
> <div>
>
> `<Button/>   或者 <Button></Button>`
>
> `</div>`
>
> }

! React 组件是常规的 JavaScript 函数，但  **组件的名称必须以大写字母开头** ，否则它们将无法运行！

! 组件可以渲染其他组件，但是  **请不要嵌套他们的定义** ：    组件嵌套组件 会非常慢 而且有可能出现bug;

# useState基础使用:

useState是一个React Hook(函数),它允许我们向组件添加一个状态变量,从而控制影响组件的渲染结果

本质:和普通JS变量不同的是,状态变量一旦发生变化组件的视图UI也会跟着变化(数据驱动视图)

`useState` 返回一个由两个值组成的数组：

1. 当前的 state。在首次渲染时，它将与你传递的 `initialState` 相匹配。
2. [`set` 函数](https://zh-hans.react.dev/reference/react/useState#setstate)，它可以让你将 state 更新为不同的值并触发重新渲染。

`useState` 返回的 `set` 函数允许你将 state 更新为不同的值并触发重新渲染。你可以直接传递新状态，也可以传递一个根据先前状态来计算新状态的函数

## 修改状态的规则:

### 状态不可变;

在React中,状态被认为是只读的,我们应该始终替换它而不是修改它,直接修改状态不能引发视图更新

> 调用 `set` 函数  **不能改变运行中代码的状态** ：
>
> 直接写 count++ 是没有效果的;

### 修改对象状态;

规则:对于对象类型的状态变量,应该始终传给set方法一个全新的对象来进行修改

# 组件基础样式方案:

React组件基础的样式控制有俩种方式:

## 1.行内样式;

> <div style = {{ color:'red'}}>this is div `</div>`

## 2.class类名控制;

> .app{...}
>
> import './index.css;
>
> 使用时用的是className属性;
>
> `<span className='app'> 111</span>`

# 案例-B站评论案例;

## 1.渲染评论列表:

核心思路:
1.使用useState维护评论列表
2.使用map方法对列表数据进行遍历渲染(别忘了加key)

## 2.删除评论实现:

需求:
1.只有自己的评论才显示删除按钮
2.点击删除按钮,删除当前评论,列表中不再显示需求:

> **核心思路**
> 1.删除显示-条件渲染
> 2.删除功能-拿到当前项id以id为条件对评论列表做filter过滤

> onClick={() => setContent(content.filter(i => i.rpid !== item.rpid))}
>
> * **onClick** ：绑定点击事件 
>
> * **setContent** ：修改列表状态
>
> * **filter** ：筛选数组，生成新数组
>
> * **i.rpid !== item.rpid** ：剔除当前点击项
>
> * **功能** ：点击删除列表对应条目

## 3.渲染导航Tab和高亮实现:

> **需求:**
> 点击哪个tab项,哪个做高亮处理
> **核心思路:**
> 点击谁就把谁的type(独一无二的标识)记录下来,然后和遍历时的每一项的type做匹配,谁匹配到就设置负责高亮的类名

## 4.评论列表排序功能实现;

> 需求:
> 点击最新,评论列表按照创建时间倒序排列(新的在前),,点击最热按照点赞数排序(多的在前)

核心思路:
把评论列表状态数据进行不同的排序处理,当成新值传给set函数重新渲染视图UI


# lodash

**1. 简化数据处理**

> 处理数组、对象、字符串、数字等，比如去重、排序、过滤、合并对象、深拷贝，用 Lodash 一行代码就能搞定，不用自己写复杂的循环和判断。

**2. 提供兼容性**

> 不同浏览器 / Node.js 版本对某些 JS 特性支持不一致，Lodash 帮你抹平这些差异，让代码在各种环境里都能稳定运行。

**3.提高开发效率**

> 它有上百个常用函数，都是经过优化的，不用你自己从零写工具函数，比如防抖、节流、类型判断、数据分组等。


# react中图片导入:

> react中 相对路径写法通常无法正确加载图片;
>
> **直接在 `src` 属性中使用字符串相对路径**
>
> `<img src="./assets/avatar.jpg" alt="avatar" />`  // ❌ 不生效

## React 中相对路径的规则：

### 1.图片放在 src 目录下,使用 import 导入;

```jsx
import avatarImg from './assets/avatar.jpg';  // 相对路径
<img src={avatarImg} alt="avatar" />
```

### 2.图片放在 public 目录下路径:

```jsx
<img src="/assets/avatar.jpg" alt="avatar" />  // 相对于 public
```

## 3.require 导入:

```jsx
// 直接使用
<img src={require('./assets/avatar.jpg')} alt="avatar" />

// 动态路径
const imgName = 'avatar';
<img src={require(`./assets/${imgName}.jpg`)} alt="avatar" />
```

## **4.使用 URL 构造函数:**

```jsx
import avatarUrl from './assets/avatar.jpg?url';
<img src={avatarUrl} alt="avatar" />
```

## 5.批量导入（导入整个文件夹）:

```jsx
// 创建 images/index.js
const images = {
  avatar: require('./avatar.jpg'),
  logo: require('./logo.png'),
  bg: require('./bg.jpg'),
};
export default images;

// 使用
import images from './images';
<img src={images.avatar} alt="avatar" />
```

## 6.动态导入(懒加载):

```jsx
import { useState, useEffect } from 'react';

function DynamicImage() {
  const [imgSrc, setImgSrc] = useState('');
  
  useEffect(() => {
    import('./assets/avatar.jpg').then(module => {
      setImgSrc(module.default);
    });
  }, []);
  
  return <img src={imgSrc} alt="avatar" />;
}
```

## 7.svg特殊处理:

```jsx
// 作为 React 组件导入
import { ReactComponent as Logo } from './logo.svg';
<Logo />

// 作为 URL 导入
import logoUrl from './logo.svg';
<img src={logoUrl} alt="logo" />
```
