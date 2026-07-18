import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      我是Layout页
      <Outlet />
    </div>
  )
}

export default Layout
