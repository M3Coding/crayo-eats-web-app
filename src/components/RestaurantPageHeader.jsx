import {Link} from "react-router-dom";
import "./styles/restaurantpagesheader.css";

const RestaurantPageHeader = () => {
    return (
        <div className="restaurant-header-container">
            <div className="logo-section">
                <img src="/images/transporter.png" />
                <h2>Crayo Eats</h2>
            </div>
            <div className="middle-section-navigation">

                <Link to="" className="nav-link">Home</Link>
                <Link to="" className="nav-link">Restaurants</Link>
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