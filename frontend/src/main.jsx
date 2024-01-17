import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {Toaster} from 'react-hot-toast'
import {configureStore} from '@reduxjs/toolkit' 
import rootReducer from './reducer/index.js'

const store = configureStore({
  reducer: rootReducer
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <React.StrictMode>
    <App />
    <Toaster />
    </React.StrictMode>
  </Provider>
  </BrowserRouter>
)
