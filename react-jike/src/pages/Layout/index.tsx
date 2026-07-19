import { Outlet } from 'react-router'
 

 

const Layout = () => {
return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <header className="h-14 border-b flex items-center px-4">
        <h2>后台管理系统</h2>
      </header>

      <div className="flex flex-1">
        {/* 侧边菜单 */}
        <aside className="w-56 border-r p-4">侧边导航</aside>

        {/* 二级路由页面插槽 = Next的children */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
 
    </div>
  );
}

export default Layout
