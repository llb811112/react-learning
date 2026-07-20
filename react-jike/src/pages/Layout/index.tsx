import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
 
import './index.css'
const Layout = () => {
  const navigate = useNavigate()
  const items = [
    {
      label: '首页',
      key: '/home',
    },
    {
      label: '文章',
      key: '/article',
    },
    {
      label: '发布文章',
      key: '/publish',
    }
  ]

  const handleClick = (key: string) => {
    // 跳转路由
    const path = key
    console.log('跳转路由', path)
    navigate(path)
  }
return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <header className="h-14 border-b flex items-center px-4">
        <h2>后台管理系统</h2>
      </header>

      <div className="flex flex-1">
        {/* 侧边菜单 */}
        <aside className="w-56 border-r">
          <ul>
            {items.map((item) => (
              <li key={item.key} className="pt-[10px] bg-gray-200 hover:bg-blue-500 align-middle" onClick={() => {
                // 跳转路由
                handleClick(item.key)
              }}>
                {item.label}
               
              </li>
            ))}
          </ul>
        </aside>

        {/* 二级路由页面插槽 = Next的children */}
        <main className="flex-1 p-6">
     
          <Outlet />
        </main>
      </div>
 
    </div>
  );
}

export default Layout
