import classNames from 'classnames'
import { useDispatch} from 'react-redux'
import Count from '../Count'
import './index.scss'
import { useSelector} from 'react-redux'
import { useState } from 'react';
import { Modal } from 'antd'
import{increaseCount,decreaseCount,clearCart} from '../../store/modules/takeaway'
const Cart = () => {
  const dispatch = useDispatch()
  const { cartList } = useSelector(state => state.takeaway)
 console.log(cartList)
   // 点击清空前弹窗确认
const handleClear = () => {
  if(cartList.length>0)
  Modal.confirm({
    title: '清空购物车',
    content: '确定要清空所有购物车商品吗？',
    okText: '确认清空',
    cancelText: '取消',
    okType: 'danger',
    onOk: () => {
      dispatch(clearCart())
    }
  })
}
 //计算总价 
 const totalPrice = cartList.reduce((a,c)=> a + c.price * c.count,0)
 const [popupShow , setPopuShow ] = useState(false)
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={classNames('cartOverlay')}
      />
      <div className={classNames('cart', { fill: cartList.length > 0 })}>
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
      <div className="icon" onClick = {()=>setPopuShow(!popupShow)}>
          <svg
            className="cartIconSvg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2ZM6.2 6l.94 2h10.71c.84 0 1.46.82 1.22 1.62l-1.35 4.91A1.5 1.5 0 0 1 16.3 15H8.53c-.67 0-1.28-.4-1.53-1.02L4.12 4H2V2h3.43l.77 1.73L7.04 6H20v2H6.2Z" />
          </svg>
          {true && <div className="cartCornerMark">{cartList.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {totalPrice}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {false ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
<div className={`cartPanel ${popupShow ? 'visible' : ''}`}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={handleClear} >
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea ">
          {cartList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onPlus={()=>dispatch(increaseCount({id:item.id}))}
                    onMinus={()=>dispatch(decreaseCount({id:item.id}))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
