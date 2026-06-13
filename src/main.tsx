import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeContextData from './Context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeContextData>
  <App />
  </ThemeContextData>
  ,
)
