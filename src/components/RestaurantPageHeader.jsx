import {Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./styles/restaurantpagesheader.css";

const RestaurantPageHeader = () => {
    return (
        <div className="restaurant-header-container">
            <div className="logo-section">
                <img src="/images/transporter.png" />
                <h2>Crayo Eats</h2>
            </div>
            <div className="middle-section-navigation">

                <Link to="/" className="nav-link">Home</Link>
                <HashLink smooth to="/#restaurant-section" className="nav-link">Restaurants</HashLink>
                <Link to="" className="nav-link">How It Works</Link>
                
                
            </div>
            <div className="end-section-navigation">

                <Link to="" className="nav-link1 cart">🛒 Cart</Link>
                <Link to="" className="nav-link1 order">My Orders</Link>


                
            </div>
        </div>
    )
}

export default RestaurantPageHeader;