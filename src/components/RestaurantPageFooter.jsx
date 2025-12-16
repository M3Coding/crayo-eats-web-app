import {Link} from "react-router-dom";
import "./styles/restaurantpagefooter.css";

const RestaurantPageFooter = () => {
    return (
        <div className="restaurant-footer-container">
            <div className="logo-section">
                <img src="/images/transporter.png" />
                <h2>Crayo Eats</h2>
            </div>
            <div className="middle-section-navigation">

                <Link to="" className="nav-link">Home</Link>
                <Link to="" className="nav-link">Restaurants</Link>
                <Link to="" className="nav-link">Privacy Policy</Link>
                
                
            </div>
            <div className="end-section-navigation">
                <p>Follow Our Social Media </p>

                <Link to="" className="nav-link1 facebook"><img src="/images/facebook-brands-solid-full.svg"/></Link>
                <Link to="" className="nav-link1 tiktok"><img src="/images/tiktok-brands-solid-full.svg"/></Link>


                
            </div>
        </div>
    )
}

export default RestaurantPageFooter;