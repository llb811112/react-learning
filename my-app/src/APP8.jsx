// 父传子
function Son(props){
    return (
        <>
        <div>{props.name}</div>
        <div>this is son</div>

        <div>{props.children}</div>  
        {/* 传过去的直接就是 <div>this is children</div> */}
        </>
    )
}
//  ## 父传子-基础实现;
function APP(){
    const name = 'this is app'
    return (
        <>
        <Son name={name}/> 
        {/* 父传子 - 特殊的prop children; */}
        <Son>
            <div>this is children</div>
        </Son>
        </>
    )
}
//  ***实现步骤:***

// 1.父组件传递数据-在子组件标签上绑定属性 

// 2.子组件接收数据-子组件通过props参数接收数据
export default APP;