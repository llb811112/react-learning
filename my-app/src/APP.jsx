import { useState } from "react";
function APP(){
    const[value,setValue] = useState('')
 return (
    <div>
     <input
     type="text"
     value={value}
     onChange={(e)=>setValue(e.target.value)}
     />
     <p>{value}</p>
  
    </div>
)   
}
export default APP;