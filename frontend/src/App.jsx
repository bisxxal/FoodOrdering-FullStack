import { useState } from 'react' 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Fotter from './components/Fotter/Fotter'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/verify/Verify'
import MyOrder from './pages/MyOrder/MyOrder'
function App() { 
const [showlogin , setShowlogin] = useState(false)
  return (
    <div className=' bg-zinc-900 text-white min-h-screen' >
      {showlogin ?<LoginPopup setShowlogin={setShowlogin}/> :<></>}
      <Navbar setShowlogin={setShowlogin}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<PlaceOrder/>}/>
            <Route path='/verify' element={<Verify />}/>
            <Route path='/myorders' element={<MyOrder />}/>
          </Routes>
        <Fotter/>
    </div>
  )
}

export default App
