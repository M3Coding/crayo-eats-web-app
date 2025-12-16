import RestaurantsSection from "../components/Restaurants-Section.jsx";
import restaurantsList from "../components/RestaurantsList.jsx";
import "../components/styles/restaurantssection.css";
import RestaurantPageHeader from "../components/RestaurantPageHeader.jsx";
import RestaurantPageFooter from "../components/RestaurantPageFooter.jsx";

function Restaurant() {
    return (
        <div className="restaurants">
          <RestaurantPageHeader />
        <h1>Airport Restaurants</h1>

        <div className="restaurant-section">
          {restaurantsList.map((r) => (
            <RestaurantsSection
              key={r.id}
              restaurant={r}
            />
          ))}
        </div>
      </div>


    )
}


export default Restaurant;

