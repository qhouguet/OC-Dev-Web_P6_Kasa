import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Renting from './pages/Renting/Renting'
import Error from './pages/Error404/Error404'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/renting/:id" element={<Renting />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
