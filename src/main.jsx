import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const div = <div>
    <h1>Welcome to the project</h1>
    <p>Learn today lead tomorow</p>
  </div>

createRoot(document.getElementById('root')).render(
  // <h1>Hello world</h1>
  // div
  <StrictMode>
    <App></App>
  </StrictMode>
)
