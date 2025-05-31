import './App.css'
import Home from './pages/home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Menu from './pages/Menu'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </Router>
  )
}

export default App