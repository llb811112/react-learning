import { useEffect, useState } from 'react'

function APP(){
    const [count,setCount] = useState(0)
    const [content,setContent ] = useState(2)
 
    // useEffect( ()=>{{

    //         console.log('我是中国人')
        
    // }},[])
    //useEffect 没有依赖项 的时候会时实更新;
    //依赖项为空数组的时候 只初始的时候执行一次;
    useEffect( ()=>{{
setTimeout(() => {
      setContent(1) // num变 → 第2次打印
    }, 100)
            console.log('我是中国人')
        
    }},[content])
    return(
        <>
         <div>我是中国人</div>   
         <button onClick={()=>setCount(count+1)}>{count}</button>    
        </>
    )
}
export default APP;