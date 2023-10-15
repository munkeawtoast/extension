import React from 'react'
import ReactDOM from 'react-dom/client'
import Options from './Options'
import 'virtual:uno.css'
import '/assets/quality-styles.css'

export default function initApp() {
  ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
      <Options />
    </React.StrictMode>
  )
}
