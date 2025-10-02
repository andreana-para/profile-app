import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProfilesProvider } from './contexts/ProfilesContext.jsx'
import { ModeProvider } from './contexts/ModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfilesProvider>
      <ModeProvider>
      <App />
      </ModeProvider>
    </ProfilesProvider>
  </StrictMode>,
)
