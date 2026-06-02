// 使用状态提升实现兄弟组件通信;
import {useState} from 'react'

function APP(){  
    const [showText, setShowText] = useState('')
    const getContent = (content) =>   {
        console.log('父收到子的数据：', content)
        setShowText(content);

    }

    return(
        <>
        <A onGetContent = {getContent}/>
        <B showText= {showText}/>
        </>
    )
}
function A(props){
 const content = 'this is a'
    return(
        <>
        <button onClick = {()=>props.onGetContent(content)}>send</button>
        </>
    )
}

function B(props){
   
    return(
        <>
        
          <button>send</button>
          <div>从app传过来的数据:{props.showText}</div>
        </>
    )
}

export default APP;
