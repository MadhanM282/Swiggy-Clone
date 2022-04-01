
import { Route,  Routes } from 'react-router-dom'
import './App.css'


// import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './components/CART/cartPage'
import { Home } from './components/landingPAge'
import { SignInSide } from './components/login'
import { ResponsiveAppBar } from './components/NavBar'
// import { NavBar } from './components/NavBar'
// import { Restaurent } from './components/Restaurentpage'
// import PrimarySearchAppBar from './components/search'
import { Restaurent } from "./components/RestaurantPage/Restaurentpage";
import { Landing } from './components/Landing/Landing';

function App() {
  return (
    <div className="App">

     
        
      <ResponsiveAppBar/>
     
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurent" element={<Restaurent />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path='/land' element={<Landing/>} />

      </Routes>
    </div>
  );
}

export default App;
