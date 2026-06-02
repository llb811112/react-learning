import { useState,useRef } from "react";
function APP(){
    const[value,setValue] = useState('')
    const inputRef = useRef(null);
    const showValue = () =>{
      console.log(inputRef.current.value);
    }
 return (
    <div>
     <input
     type="text"
     value={value}
     onChange={(e)=>setValue(e.target.value)}
     />
     <p>{value}</p>
    <input ref={inputRef} type="text" />
   <button onClick={()=>showValue()}>Show Value</button>
    </div>
)
 
}
export default APP;