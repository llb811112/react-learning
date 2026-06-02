// 使用Context机制跨层级组件通信;
// app嵌套a A嵌套B
import { createContext ,useContext} from 'react';

const SomeContext = createContext()
function APP(){
    const msg = 'this is app'
    return(
   <SomeContext.Provider value={msg}>
   <div>我是APP</div>
        <A />
        </SomeContext.Provider>
    )
}

function A(){
   return(
    <>
    <B />
    <div>this is A</div>
    </>
   )
}

function B(){
   const msg= useContext(SomeContext)
    return(
        <>
        <div>this is B   {msg}</div>
        </>
    )
}
export default APP;
