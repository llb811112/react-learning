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
1.使用引号传递字符串
2.使用JavaScript变量
3.函数调用和方法调用
4.使用JavaScript对象

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
