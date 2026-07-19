import { createBrowserRouter } from "react-router";
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Index from '@/pages/Index'
import App from '@/App'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<App/>,
      children: [
        {
      path: "/login",
      element: <Login />
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: 'index',
          element: <Index />
        }
      
      ]
    },
        
      ]
    },
    
  ]
);

export default router
