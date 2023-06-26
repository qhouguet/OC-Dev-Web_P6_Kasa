import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Navbar from './components/ui/Navbar/Navbar'
import Footer from './components/ui/Footer/Footer'
import Routing from 'Routing'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <Routing header={<Navbar />} />
      <Footer />
    </>
  </React.StrictMode>
)
