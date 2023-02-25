import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from '@context/NotificationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </CartContextProvider>
  </React.StrictMode>
)
