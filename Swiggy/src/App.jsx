
import { Route,  Routes } from 'react-router-dom'
import './App.css'
// import { Cart } from './components/cartPage'
// import { Home } from './components/landingPAge'
// import { SignInSide } from './components/login'
// import { ResponsiveAppBar } from './components/NavBar'
import { Navbar } from './components/Navbar/Navbar';
// import { Restaurent } from './components/Restaurentpage'

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <ResponsiveAppBar/> */}
      <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/restaurent" element={<Restaurent/>}/>
        <Route path="/login" element={<SignInSide/>}/> */}
        {/* <Route path="/search" element={<Search/>}/> */}
        {/* <Route path="/login" element={<Login/>}/> */}
      </Routes>
    </div>
  )
}

export default App
