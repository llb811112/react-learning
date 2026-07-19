import { createBrowserRouter } from "react-router"
import Login from "@/pages/Login"
import Layout from "@/pages/Layout"
import Index from "@/pages/Index"
import App from "@/App"
import AuthRoute from "@/components/authRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
 
      {
        path: "/login",
        element: <Login />,
      },
      // 需要鉴权的路由（用 AuthGuard 包一层）
      {
        element: <AuthRoute />,
        children: [
          {
            path: "/",
            element: <Layout />,
            children: [
              {
                index: true,
                element: <Index />,
              },
            ],
          },
        ],
      },
    ],
  },
])

export default router

