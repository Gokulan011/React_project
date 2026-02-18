import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './Style.css'
import './cssfiles/Navbar.css'
import './cssfiles/Productcart.css'
import './cssfiles/Home.css'
import './cssfiles/Men.css'
import './cssfiles/Women.css'
import './cssfiles/Kids.css'
import './cssfiles/Login.css'
import './cssfiles/Searchpage.css'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './navpages/Register'
import Women from './navpages/Women'
import Kids from './navpages/kids'
import Men from './navpages/Men'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/register' element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
