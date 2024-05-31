import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './context/CartContext';
import App from './App.jsx'
import './index.css'

// Definiera queryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <App />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
