// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/globals.scss' // 또는 '../styles/globals.scss'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)