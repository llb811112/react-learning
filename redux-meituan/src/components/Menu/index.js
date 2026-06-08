import classNames from 'classnames'
import './index.scss'
 import { useSelector, useDispatch } from 'react-redux'
 import { useEffect } from 'react'
import {  setTable } from '../../store/modules/takeaway.js'

const Menu = () => {

const dispatch = useDispatch()  // 获取 dispatch 函数
useEffect(()=>{
    dispatch( setTable(0))
     },[dispatch])
const { takeawayList = [],tableIndex} = useSelector(state => state.takeaway)
console.log(takeawayList)
  const menus = takeawayList.map(item => ({ tag: item.tag, name: item.name }))

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            onClick = {()=>dispatch( setTable(index))}
            key={item.tag}
            className={classNames(
              'list-menu-item',
              tableIndex === index && 'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
