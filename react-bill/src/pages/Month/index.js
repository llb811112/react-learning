 import { NavBar , DatePicker } from 'antd-mobile'
import { useState , useMemo, useEffect  } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import classNames from 'classnames'
import dayjs from 'dayjs'
 import './index.scss'
import { getBillList } from '@/store/modules/billStore'

 function Month(){
  //控制弹窗的打开和关闭;
  const [show, setShow] = useState(false);
  const [billDate, setBillDate] = useState('2023 - 03')

  //按月做数据的分组;
  const billList = useSelector(state => state.bill.billList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])

  const monthGroup = useMemo(() => {
    // 根据选中的年月过滤账单数据
    const [year, month] = billDate.split('-')
    return billList.filter(item => {
      const itemDate = dayjs(item.date)
      return itemDate.year() === Number(year) && (itemDate.month() + 1) === Number(month)
    })
  }, [billList, billDate])

  // 计算当月收支统计
  const overview = useMemo(() => {
    // 支出
    const pay = monthGroup
      .filter(item => item.type === 'pay')
      .reduce((sum, item) => sum + Math.abs(item.money), 0)
      // 收入   --- reduce 累加器;
    const income = monthGroup
      .filter(item => item.type === 'income')
      .reduce((sum, item) => sum + item.money, 0)
    return { pay, income, balance: income - pay }
  }, [monthGroup])

  console.log("MONTHGROUP",monthGroup)
  console.log("overview",overview)

  const onConfirm = (date) => {
    setShow(false)
    //其他逻辑;
    console.log(date)
    const formattedDate = dayjs(date).format('YYYY - MM');
    setBillDate(formattedDate);
  }
  return(
    <>
 
    <div className='monthlyBill'>
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date"
           onClick={() => setShow(!show)}
          >
            <span className="text">
              {billDate}月账单
            </span>
            {/* 控制expand是否存在 */}
            <span className={classNames('arrow' ,show && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{overview.pay}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{overview.income}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{overview.balance}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
          className="kaDate"
          title="记账日期"
          precision="month"
          visible={show} 
          onCancel={()=>{setShow(false)}}
          onConfirm={onConfirm}  
          onClose={()=>{setShow(false)}}
          max={new Date()}
          />
        </div>
      </div>
 
    </div>
    </>
  )
}

export default Month