import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { fetchUserInfo } from '@/store/modules/user';
import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import './index.css'
  import { toast } from "sonner"
import { Button } from "@/components/ui/button"
const Layout = () => {


function logoutToast() {
  toast("退出账号", {
    description: "确定要退出当前登录账号？",
    duration: Infinity, // 永久停留，必须手动点按钮关闭
    action: {
      label: "确认退出",
      onClick: () => handleLogout(),
    },
    cancel: {
      label: "取消",
      onClick: () => toast.dismiss(),
    },
  })
}
  //拿到当前路径;
  const location = useLocation()
  console.log('当前路径', location.pathname)
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


  //用户信息;
   const dispatch = useAppDispatch();
  useEffect(() => {
  const getUser = async () => {
    try {
      const res = await dispatch(fetchUserInfo()).unwrap();

      console.log('用户信息:', res);
 

    } catch (error) {
      console.log('获取用户信息失败', error);
    }
  };

  getUser();
}, [dispatch]);
const name = useSelector((state: RootState) => (state.user.userInfo?.mobile || '')); // 获取用户信息中的用户名


const handleLogout = () => {
  // 清除 token 和用户信息
  dispatch({ type: 'user/setToken', payload: '' });
  dispatch({ type: 'user/setUserInfo', payload: null });

  // 跳转到登录页
  navigate('/login');
};
// 项目是是直接在redux里面写退出登录逻辑的 redux里面写退出登录逻辑的 reducer


return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <header className="h-14 border-b flex items-center px-4">
        <h2>后台管理系统</h2>
        <div className="ml-auto flex items-center">
          <span className="mr-4">
            {name}
          </span>
          <Button 
          className="  "
          onClick={logoutToast}
          >
            退出登录
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* 侧边菜单 */}
        <aside className="w-56 border-r">
          <ul>
            {items.map((item) => (
              <li key={item.key} onClick={() => {
                // 跳转路由
                handleClick(item.key)
              }}
              className = {classNames({ 'select': location.pathname === item.key ,'pt-2 pb-2 pl-4 cursor-pointer hover:bg-gray-200': true  })}
              >
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
