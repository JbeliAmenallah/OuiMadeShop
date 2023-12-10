import { Routes, Route,Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Checkout from '../pages/Checkout'
import Contactform from '../pages/Contactform'

const Routers = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to='home'/>}/>
    <Route path='home' element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='shop/:id' element={<ProductDetails />} />
    <Route path='cart' element={<Cart />} />
    <Route path='contactform' element={<Contactform/>}/>
    <Route path='checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<Signup />} />
  </Routes>
  )
};

export default Routers