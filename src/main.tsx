import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './index.css';
import {BrowserRouter} from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material'
import { AuthProvider } from './context/AuthContext.tsx';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

// Configure axios for API requests
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;

// Remove Access-Control headers from client side as they should be set by the server
// These headers in requests can cause preflight issues

// Add request interceptor for debugging
axios.interceptors.request.use(function (config) {
  console.log('Request being sent:', {
    url: config.url,
    withCredentials: config.withCredentials,
    headers: config.headers
  });
  return config;
});

// Add response interceptor for debugging
axios.interceptors.response.use(function (response) {
  console.log('Response received:', {
    status: response.status,
    headers: response.headers,
    cookies: document.cookie ? 'Cookies present' : 'No cookies'
  });
  return response;
}, function (error) {
  console.error('Response error:', error);
  return Promise.reject(error);
});

// Log axios configuration
console.log("Axios configuration:", {
  baseURL: axios.defaults.baseURL,
  withCredentials: axios.defaults.withCredentials
});
const  theme = createTheme({
  typography: {
    fontFamily : "Roboto Slab,serif",
    allVariants: {color: "white"}, 
  }
})  
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Toaster position = "top-right"/>
    <App />
    </ThemeProvider>
    </BrowserRouter></AuthProvider>
  </React.StrictMode>
)
