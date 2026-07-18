import { createBrowserRouter } from "react-router";
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Index from '@/pages/Index'

const router = createBrowserRouter(
  [
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
    {
      path: "/login",
      element: <Login />
    }
  ]
);

export default router
