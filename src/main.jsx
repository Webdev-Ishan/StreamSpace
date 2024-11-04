import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Vedio from './Pages/Vedio/Vedio'
import App from './App'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './Store/store'
import Authentication from './Pages/Authentication/Authentication'
import Signup from './Pages/Signup/Signup'
import Aboutus from './Components/Aboutus/Aboutus'
const router = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[
{

  path:'/',
  element:<Home/>
}
,
{

  path:'/vedio/:categoryId/:vedioId',
  element:<Vedio/>
},
{
  path:'/Authentication',
  element:<Authentication/>
},
{
  path:'/signup',
  element:<Signup/>
},

{
  path:'/Aboutus',
  element:<Aboutus/>
}

  ]
}


])




createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
  </Provider>
)
