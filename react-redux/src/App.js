 import { useSelector, useDispatch } from 'react-redux'
import { increment,incrementByAmount} from './store/modules/counterStore.js'
import { useEffect } from 'react'
// 具名导入，加大括号                   
import { fetchChannelList } from './store/modules/channelStore.js'
function App() {
     const dispatch = useDispatch()  // 获取 dispatch 函数
     useEffect(()=>{
    dispatch(fetchChannelList())
     },[dispatch])
  const count  = useSelector(state => state.counter.value)
const { channelList = [] } = useSelector(state => state.channel)
  console.log(channelList)
  return (
    <div className="App">
       我是中国人
       <button onClick={()=>{dispatch(increment())}}> 
 {count}
       </button>
  <button onClick = {()=>dispatch(incrementByAmount(10))}>{count}</button>
 <ul>
 {(channelList || []).map(item => <li key={item.id}>{item.name}</li>)}
 </ul>


    </div>
  );
}

export default App;
