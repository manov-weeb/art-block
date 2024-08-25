import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import { WalletProvider } from './context/WalletContext.jsx'


createRoot(document.getElementById('root')).render(
  <WalletProvider>
     <DarkModeProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </DarkModeProvider>
  </WalletProvider>
 
  ,
)
