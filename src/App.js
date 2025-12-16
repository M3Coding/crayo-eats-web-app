import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurant";

import MenuPage from "./components/MenuPage.jsx"
import RestaurantPageHeader from "./components/RestaurantPageHeader.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/MenuPage/:id/" element={<MenuPage />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
