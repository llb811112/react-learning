// 计数器
import { useState } from 'react';
 
function APP () {
    const [count, setCount] = useState(0);
   function handleClick(){
    setCount(count+1);
   }
    return  (
     <div>
          <button onClick= { handleClick}>{count}</button>
 
            </div>
    )
}
export default APP;
