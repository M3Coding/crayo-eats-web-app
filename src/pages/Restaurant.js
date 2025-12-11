import RestaurantsSection from "../components/Restaurants-Section.jsx";
import restaurantsList from "../components/RestaurantsList.jsx";
import "../components/styles/restaurantssection.css";
function Restaurant() {
    return (
        <div className="restaurants">
        <h1>Airport Restaurants</h1>

        <div className="restaurant-section">
          {restaurantsList.map((r, index) => (
            <RestaurantsSection
              key={index}
              img={r.image}
              name={r.name}
              description={r.description}
              order={r.order}
            />
          ))}
        </div>
      </div>


    )
}


export default Restaurant;

