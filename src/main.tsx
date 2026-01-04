import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.tsx'
import NavContext from './components/context/NavProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Stairs>
      <NavContext>
       <App />
      </NavContext>
    </Stairs>
    </BrowserRouter>
  </StrictMode>,
)
