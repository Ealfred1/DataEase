import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import { ScrollToTop } from './components/'
import 'primeicons/primeicons.css';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <ToastContainer
          position="top-center" // Set global toast position
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
       />
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>,
)
