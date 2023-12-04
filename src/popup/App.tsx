import React from 'react'
import ReactDOM from 'react-dom/client'
import Popup from './Options'
import '/assets/main.css'

export default function initApp() {
  ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
  )
}
