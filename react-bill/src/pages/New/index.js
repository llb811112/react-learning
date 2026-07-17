import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import Icon from '@/components/Icon'
import './index.scss'
import classNames from 'classnames'

// 静态示例数据（仅用于展示布局）
const staticBillList = [
  { type: 'food', name: '餐饮' },
  { type: 'transport', name: '交通' },
  { type: 'shopping', name: '购物' },
  { type: 'entertainment', name: '娱乐' },
]

const New = () => {
  // 完全静态，无任何状态或逻辑

  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => {}}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button shape="rounded" className="selected">
            支出
          </Button>
          <Button shape="rounded" className="">
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
        {/* 静态分类：支出 */}
        <div className="kaType">
          <div className="title">支出分类</div>
          <div className="list">
            {staticBillList.map(item => (
              <div
                className={classNames('item', item.type === 'food' ? 'selected' : '')}
                key={item.type}
              >
                <div className="icon">
                  <Icon type={item.type} />
                </div>
                <div className="text">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        {/* 静态分类：收入（示例） */}
        <div className="kaType">
          <div className="title">收入分类</div>
          <div className="list">
            {[
              { type: 'salary', name: '工资' },
              { type: 'bonus', name: '奖金' },
            ].map(item => (
              <div className="item" key={item.type}>
                <div className="icon">
                  <Icon type={item.type} />
                </div>
                <div className="text">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="btns">
        <Button className="btn save">保 存</Button>
      </div>
    </div>
  )
}

export default New
