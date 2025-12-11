import {Link} from "react-router-dom";
import './styles/header.css';
import Home from "../pages/Home";
import Restaurants from "../pages/Restaurant";
function Navbar() {
    return (
        <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/Restaurants" >Restaurants</Link>
                <Link to="/SignUp">Sign Up</Link>
                <Link to="/SignIn">Sign In</Link>
                <Link to="/Order">🛒</Link>
            </nav>
    )
}

export default Navbar