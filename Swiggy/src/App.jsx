import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from './components/CART/cartPage';
import { ResponsiveAppBar } from "./components/NavBar";
import { Restaurent } from "./components/RestaurantPage/Restaurentpage";
import { Landing } from "./components/Landing/Landing";
import { Searchbar } from "./components/search/search";
import { OfferPage } from "./components/offer/offerpage";
import Confirmation from "./components/orderConfirm/orderConfirmation";
import LoginDrawer from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurent" element={<Restaurent />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/login" element={<LoginDrawer />} />
        <Route path="/offers" element={<OfferPage />} />
        <Route path="/success" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
