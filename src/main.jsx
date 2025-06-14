import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import QueReducer from './Redux/QueSlice';
import SortedQueReducer from './Redux/SortedQueSlice';
const rootReducer = combineReducers({
  QueReducer, SortedQueReducer
})

const store = configureStore({
  reducer: rootReducer
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  
    <App />
  
  </BrowserRouter>
  </Provider>
  </StrictMode>
)
