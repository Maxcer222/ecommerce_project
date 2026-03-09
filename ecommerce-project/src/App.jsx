import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrakingPage } from './pages/TrakingPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index path="/" element={<HomePage/>} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path ="orders" element={<OrdersPage />} />
      <Route path ="traking" element={<TrakingPage />} />
      

    </Routes>
    
   
  )
}

export default App
