// import { useState } from 'react'
    const boxStyle = {
    width:300,
    height:80,
    border:'1px solid red',
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
// function APP(){
//     const [show,setShow] = useState(true)

//     return (
//         <>
//         {/* 自定义函数实现点击按钮控制框 */}
//       {show &&  <div style={ boxStyle}> this is div </div>}
//         <button onClick={()=>{setShow(!show)}}>toggle</button>
//         </>
//     )
// }
// export default APP;

// 自定义hook
// 1.声明一个以use打头的函数
// 2.在函数体内封装可复用的逻辑(只要是可复用的逻辑)
// 3.把组件中用到的状态或者回调return出去(以对象或者数组
// 4.在哪个组件中要用到这个逻辑,就执行这个函数,解构出来状态和回调进行使用
import { useState } from 'react'
function isShow () {
     const [show,setShow] = useState(true)
     
     const toggle = () => setShow(!show)

     return {
        show,
        toggle
     }
}
function APP(){
    const { show,toggle } = isShow()

    return (
        <>
        {/* 自定义函数实现点击按钮控制框 */}
      {show &&  <div style={ boxStyle}> this is div </div>}
        <button onClick={toggle}>toggle</button>
        </>
    )
}
export default APP;