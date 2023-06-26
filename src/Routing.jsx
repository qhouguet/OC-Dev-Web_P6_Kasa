import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Renting from './pages/Renting/Renting'
import Error from './pages/Error404/Error404'

function Routing({ header }) {
  // On intègre le header dans notre router car il utilise les
  // balises NavLink qui ont besoin de la logique du router
  return (
    <Router>
      {header}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/renting" element={<Renting />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  )
}

export default Routing
