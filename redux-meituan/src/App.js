import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'
import { useEffect } from 'react'

 import { useSelector, useDispatch } from 'react-redux'
import { fetchTakeawayList } from './store/modules/takeaway.js'
 

const App = () => {
    const dispatch = useDispatch()  // 获取 dispatch 函数
     useEffect(()=>{
    dispatch(fetchTakeawayList())
     },[dispatch])
const { takeawayList = [],tableIndex} = useSelector(state => state.takeaway)
console.log(takeawayList)
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {takeawayList.map((item,index) => {
                return (
                  tableIndex === index &&  
                  <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App
