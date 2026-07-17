import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import Icon from '@/components/Icon'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '@/contant/billList'
import { useState } from 'react'
 


const New = () => {
  // 完全静态，无任何状态或逻辑
 const [billType,setBillType] = useState('pay')
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => {}}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button shape="rounded" 
          className={classNames(billType === 'pay' &&"selected")}
          onClick={()=>setBillType('pay')}
          >
            支出
          </Button>
          <Button shape="rounded" 
          className={classNames(billType === 'income' &&"selected")}
            onClick={()=>setBillType('income')}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text">今天</span>
              {/* DatePicker 保留但隐藏交互，仅作占位 */}
              <DatePicker
                className="kaDate"
                title="记账日期"
                visible={false}
                max={new Date()}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value="0.00"
                readOnly
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

         <div className="kaTypeList">
        {billListData[billType].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    <div
                      className={classNames(
                        'item',
                        billType === item.type ? 'selected' : ''
                      )}
                      key={item.type}
                      onClick={() => setBillType(item.type)}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save">保 存</Button>
      </div>
    </div>
  )
}

export default New
