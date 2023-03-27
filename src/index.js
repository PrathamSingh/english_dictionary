import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const hideDropdown = (e) => {
  if (
    e.target.classList.contains('dropDown') ||
    e.target.parentElement.classList.contains('dropDown')
  )
    return
  document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
}

document.getElementById('root').addEventListener('click', hideDropdown)