import Index from '../pages/Index'
import Login from '../pages/Login'

import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path:'/login',
    element:<Login />
  },
    {
    path:'/index',
    element:<Index/>
  },
   {
    path:'/',
    element:<div>hello,默认页</div>
  },
  
])