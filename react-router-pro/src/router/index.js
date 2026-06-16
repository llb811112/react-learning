import Index from '../pages/index/index'
import Login from '../pages/login/index'

import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path:'/login',
    element:<Login />
  },
    {
    path:'/index/:id',
    element:<Index/>
  },
   {
    path:'/',
    element:<div>hello,默认页</div>
  },
  
])