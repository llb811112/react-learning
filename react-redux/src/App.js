 import { useSelector, useDispatch } from 'react-redux'
import { increment,incrementByAmount} from './store/modules/counterStore.js'

function App() {
     const dispatch = useDispatch()  // 获取 dispatch 函数
  const count  = useSelector(state => state.counter.value)
  return (
    <div className="App">
       我是中国人
       <button onClick={()=>{dispatch(increment())}}> 
 {count}
       </button>
  <button onClick = {()=>dispatch(incrementByAmount(10))}>
    {count}
  </button>
    </div>
  );
}

export default App;
