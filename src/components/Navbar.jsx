import {Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './styles/header.css';
import Home from "../pages/Home";
import Restaurants from "../pages/Restaurant";
function Navbar() {
    return (
        <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/Restaurants" >Restaurants</Link>
                <HashLink smooth to="#about" className="nav-link">About Us</HashLink>
                <HashLink smooth to="#getstart" className="nav-link">Get Started</HashLink>
                <HashLink smooth to="#terminal" className="nav-link">Airport Map</HashLink>
                <HashLink smooth to="#how" className="nav-link">How It Works</HashLink>
                <Link to="/SignIn">Sign In</Link>
                
            </nav>
    )
}

export default Navbar