import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/ShoppingCartPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {

  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<LandingPage />} />        
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App