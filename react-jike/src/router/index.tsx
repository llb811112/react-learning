import { createBrowserRouter } from "react-router"
import Login from "@/pages/Login"
import Layout from "@/pages/Layout"
import Home from "@/pages/Home"
import App from "@/App"
import AuthRoute from "@/components/authRoute"
import Article from "@/pages/Article"
import Publish from "@/pages/Publish"
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
                element: <Home/>,
              },
              {
                path: "/home",
                element: <Home />,
              },
              {
                path: "/article",
                element: <Article />,
              },
              {
                path: "/publish",
                element: <Publish />,
              }
            ],
          },
        ],
      },
    ],
  },
])

export default router

