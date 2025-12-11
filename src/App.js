import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"
import RolesSection from "./components/Sign-Up-Roles.jsx"
import RestaurantsSection from "./components/Restaurants-Section.jsx"
import restaurants from "./components/RestaurantsList.jsx"
import "./components/styles/restaurantssection.css"

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="signUpRole">
        <RolesSection />
      </div>
      <div className="featureRestaurants"></div>
      <div className="restaurants">
  <h1>Airport Restaurants</h1>

  <div className="restaurant-section">
    {restaurants.map((r, index) => (
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
      
      <div>
        <Footer />
      </div>
      
      
    </div>
  );
}

export default App;
