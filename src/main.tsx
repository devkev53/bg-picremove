import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { ImageContexProvider } from './context/imageContext'

// import './index.css'
import './reset.css'
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <ImageContexProvider>
      <App />
    </ImageContexProvider>
  // </React.StrictMode>,
)

