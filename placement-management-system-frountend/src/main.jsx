import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <h1>Hello world</h1>
  // div
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
