import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/ShoppingCartPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<LandingPage />} />        
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
