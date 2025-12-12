import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurant";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MenuPage from "./components/MenuPage.jsx"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/MenuPage/:id/" element={<MenuPage />}></Route>
      </Routes>

      <Footer />
    </Router>
    
  );
}

export default App;
