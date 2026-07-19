import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux' // 1. 导入 Provider
import store from './store' // 2. 导入 store
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
 
  </StrictMode>,
)
