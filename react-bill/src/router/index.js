import { createBrowserRouter } from "react-router";
import New from '@/pages/New'
import Month from '@/pages/Month'
import Year from '@/pages/Year'
import Layout from '@/pages/Layout'
const router = createBrowserRouter(
    [ 
        { path: "/", 
          element:<Layout/>,
          children:[
            {
                index:true,
                element:<Month/>
            },
           {        
    
            // index 路由不能有 path 索引路由不允许存在 path；仅当父路由精准匹配、且无其他子路由匹配时才渲染。

            path:'month',
            element:<Month/>,
    

           },
           {
            path:'year',
            element:<Year/>
           }
          ]
        },
        {
            path:"/new",
            element:<New/>
        }
]
);

export default router