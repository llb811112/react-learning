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
