import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Brands from './Components/Brands/Brands'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
import Notfound from './Components/Notfound/Notfound'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProtectedAuth from './Components/ProtectedAuth/ProtectedAuth'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { Toaster } from 'react-hot-toast'
import Wishlist from './Components/wishlist/wishlist'
import ForgetPassword from './Components/User/ForgetPassword'
import RestPassword from './Components/User/RestPassword'
import CodeVerfiy from './Components/User/CodeVerfiy'

function App() {
  const [count, setCount] = useState(0)

  const router=createBrowserRouter([
    {path:"" ,element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
      {path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
      {path:"cart",element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:"wishlist",element:<ProtectedRoute><Wishlist/></ProtectedRoute>},
      {path:"products",element:<ProtectedRoute><Products/></ProtectedRoute>},
      {path:"productDetails/:id/:cId",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
      {path:"*",element:<Notfound/>},
      {path:"login",element:<ProtectedAuth><Login/></ProtectedAuth>},
      {path:"register",element:<ProtectedAuth><Register/></ProtectedAuth>},
      {path:"forgetpass",element:<ProtectedAuth><ForgetPassword/></ProtectedAuth>},
      {path:"restpass",element:<ProtectedAuth><RestPassword/></ProtectedAuth>},
      {path:"codeverify",element:<ProtectedAuth><CodeVerfiy/></ProtectedAuth>},
    ]}
  ])

  return (
    <>

   <Toaster/>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
