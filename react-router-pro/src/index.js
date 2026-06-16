import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path:'/login',
    element:<div>hello,登录页</div>
  },
    {
    path:'/index',
    element:<div>hello,首页</div>
  },
   {
    path:'/',
    element:<div>hello,默认页</div>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
