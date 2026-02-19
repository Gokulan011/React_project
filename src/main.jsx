import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { DeviceProvider } from './context/DeviceContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DeviceProvider>
  <AuthProvider>
  <CartProvider>
    <App/>
  </CartProvider>
  </AuthProvider>
  </DeviceProvider>
  </BrowserRouter>
  
)
