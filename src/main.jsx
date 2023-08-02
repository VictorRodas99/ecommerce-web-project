import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from '@context/NotificationContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <CartContextProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </CartContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
