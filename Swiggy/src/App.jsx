
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import { Cart } from './components/cartPage'
import { Home } from './components/landingPAge'
import { NavBar } from './components/NavBar'
import { Restaurent } from './components/Restaurentpage'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/restaurent" element={<Restaurent/>}/>
      </Routes>
    </div>
  )
}

export default App
