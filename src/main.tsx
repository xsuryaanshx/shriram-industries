import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import App from './App.tsx'
import { siteConfig } from '@/config/site'

// Apply theme from site config dynamically
document.documentElement.setAttribute('data-theme', siteConfig.theme || 'shriram');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
