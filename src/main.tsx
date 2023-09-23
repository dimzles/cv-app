import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header title={"CV Generator"} />
  </React.StrictMode>,
)
