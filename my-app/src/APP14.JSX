import { useState,useEffect } from 'react'

function B(){
    useEffect(()=>{
    const timer = setInterval(()=>{
     console.log("wszhgr")
        },1000)
        return ()=>{
            clearInterval(timer)
            console.log(111)
        }
    },[])
    return <div>this is Son</div>
}
function APP(){
    const [show,setShow] = useState(true)
    return (
        <>
  {show && <B/>}
  <button onClick = {()=>{setShow(false)}}>isshow</button>
        </>
    )
}

export default APP;