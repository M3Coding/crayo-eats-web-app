import RestaurantsSection from "../components/Restaurants-Section.jsx";
import restaurantsList from "../components/RestaurantsList.jsx";
import "../components/styles/restaurantssection.css";
import RestaurantPageHeader from "../components/RestaurantPageHeader.jsx";
import RestaurantPageFooter from "../components/RestaurantPageFooter.jsx";
import HowItWorks from "../components/HowItWorks.jsx"


function Restaurant() {
  
  
    return (
        <div className="restaurants">
          <RestaurantPageHeader />

          <div className="hero-section">
            <div className="hero-section-text">
              <p className="hero-section-airport-name">✈️Savannah-Hilton Head Airport · 9 Restaurants </p>
              <h1 className="top-h1">Order Food</h1>
              <h1 className="bottom-h1">To Your Gate</h1>
              <p className="hero-section-intro">Browse airport restaurants and get fresh meals delivered directly to your terminal in minutes</p>
            </div>
            <div className="hero-section-search">
              <h4>Search Restaurants</h4>
              <input type="search" placeholder="Burger King, Strabucks, Auntie Anne's..."></input>
            </div>
            <div className="hero-section-hours"></div>
          </div>
          <div className="restaurant-title-container" id="restaurant-section">
            <h1 className="restaurants-title1">Available</h1>
            <h1 className="restaurants-title2">Restaurants</h1>
          </div>
        <div className="restaurant-section" >
          {restaurantsList.map((r) => (
            <RestaurantsSection
              key={r.id}
              restaurant={r}
            />
          ))}
        </div>
        <div id="how" >
          <HowItWorks />
        </div>
        <div>
          <RestaurantPageFooter />
        </div>
      </div>


    )
}


export default Restaurant;

