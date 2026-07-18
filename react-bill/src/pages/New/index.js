import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import Icon from '@/components/Icon'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '@/contant/billList'
import { useState } from 'react'
import { addBillList } from '@/store/modules/billStore'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
const New = () => {
  const navigate = useNavigate()
  // 修复：state 存储 dayjs 实例，不是字符串
  const [billDate, setBillDate] = useState(dayjs())
  //控制收入支出状态;
  const [billType, setBillType] = useState('pay')
  //收集账单类型;
  const [useFor, setUseFor] = useState('')
  //money;
  const [money, setMoney] = useState(0)

  const dispatch = useDispatch()
  const saveBill = () => {
    const date = {
      type: billType,
      money: billType === 'pay' ? -money : +money,
      // 实例直接 format
      date: billDate.format('YYYY-MM-DD'),
      useFor: useFor
    }
    console.log(date)
    dispatch(addBillList(date))
  }

  //日历是否展示;
  const [show, setShow] = useState(false)

  const onConfirm = (date) => {
    setShow(false)
    // date 是原生Date，包装成dayjs存入state
    setBillDate(dayjs(date))
  }

  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate('/')}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button shape="rounded"
            className={classNames(billType === 'pay' && "selected")}
            onClick={() => setBillType('pay')}
          >
            支出
          </Button>
          <Button shape="rounded"
            className={classNames(billType === 'income' && "selected")}
            onClick={() => setBillType('income')}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div
              className="date"
              onClick={() => setShow(!show)}
            >
              <Icon type="calendar" className="icon" />
              {/* billDate 是 dayjs 实例，可直接调用 format */}
              <span className="text">
                {billDate.format('YYYY-MM-DD')}
              </span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={show}
                onConfirm={onConfirm}
                onClose={() => { setShow(false) }}
          
                value={billDate.toDate()}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={String(money)}
                onChange={(value) => {
                  setMoney(Number(value))
                }}
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
                        useFor === item.type ? 'selected' : ''
                      )}
                      key={item.type}
                      onClick={() => setUseFor(item.type)}
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
        <Button
          className="btn save"
          onClick={() => { saveBill() }}
        >保 存</Button>
      </div>
    </div>
  )
}

export default New
