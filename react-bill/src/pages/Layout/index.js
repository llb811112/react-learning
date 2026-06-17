import { Outlet } from 'react-router-dom'
const Layout = ()=>{
    return(
        <>
        我是layout组件
        <Outlet/>
        </>
    )
}
export default Layout