import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import Navreducer from './components/Navreducer.jsx'

// var store=createStore(Navreducer)
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
 {/* <Content store ={store}/> */}
  </StrictMode>,
)

{/* customer()
store.subscribe(customer) */}