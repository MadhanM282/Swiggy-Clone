
import { Route,  Routes } from 'react-router-dom'
import './App.css'


// import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './components/CART/cartPage'
import { Home } from './components/landingPAge'
import { SignInSide } from './components/login'
import { ResponsiveAppBar } from './components/NavBar'
// import PrimarySearchAppBar from './components/search'
import { Restaurent } from "./components/RestaurantPage/Restaurentpage";
import { Landing } from './components/Landing/Landing';

function App() {
  return (
    <div className="App">

     
        
      <ResponsiveAppBar/>
     
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurent" element={<Restaurent />} />
        <Route path="/login" element={<SignInSide />} />
        

      </Routes>
     
    </div>
  );
}

export default App;
