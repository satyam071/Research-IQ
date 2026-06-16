import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeContextData from './Context/ThemeContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import UploadContext from './Context/UploadContext.tsx'
import { UploadProvider } from './Context/UploadProviderContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeContextData>
      <UploadProvider>
        <UploadContext>
          <App />
        </UploadContext>
      </UploadProvider>
    </ThemeContextData>
  </BrowserRouter>
  ,
)
