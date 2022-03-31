
import { Route,  Routes } from 'react-router-dom'
import './App.css'


import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './components/CART/cartPage'
import { Home } from './components/landingPAge'
import { SignInSide } from './components/login'
import { ResponsiveAppBar } from './components/NavBar'
// import { NavBar } from './components/NavBar'
// import { Restaurent } from './components/Restaurentpage'
// import PrimarySearchAppBar from './components/search'
import { Restaurent } from "./components/RestaurantPage/Restaurentpage";

function App() {
  return (
    <div className="App">

     
        
      <Navbar/>
     
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurent" element={<Restaurent />} />
        <Route path="/login" element={<SignInSide />} />

      </Routes>
    </div>
  );
}

export default App;
