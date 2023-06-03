import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/custom.scss';
import './index.css'
import { PlatosProvider } from "./context/platosProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlatosProvider>
        <App />
    </PlatosProvider>
  </React.StrictMode>,
)
