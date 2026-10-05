import './App.css'
import About from "./About"
import Home from "./Home"
import { Routes, Route, BrowserRouter} from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
