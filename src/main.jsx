import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { fb_database, fb_app } from './backend/firebase'
import './index.css'
import App from './App'



createRoot(document.getElementById('root'), ).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
