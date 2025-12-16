import { useParams } from "react-router-dom";
import restaurantsList from "../components/RestaurantsList.jsx";
import RestaurantPageHeader from "../components/RestaurantPageHeader.jsx";
import RestaurantPageFooter from "../components/RestaurantPageFooter.jsx";
import { useEffect, useState } from "react";

import "./styles/menu.css"

function MenuPage() {
  const { id } = useParams();
  const restaurant = restaurantsList.find(r => r.id === Number(id));

 if (!restaurant) return <h2>Restaurant Not Found</h2>
console.log("URL param id:", id);
console.log("Found restaurant:", restaurant);
  return (
    <div>
      <div>
        <RestaurantPageHeader />
      </div>
      <div className="back-link"><a href="/Restaurants" >← Back to Restaruants</a></div>
      <div className="restaurant-banner">
        <img key={restaurant.id} src={restaurant.image}/>
      </div>
      <div>
        <h1>{restaurant.name} Menu</h1>

      </div>
      <div className="menu-container">
      
      
      {restaurant.order.length > 0 ? (
      restaurant.order.map((item, index) => (
        <div key={index} className="menu-item">
          <div><img src={item.image} /></div>
          <div>
            <h3>{item.meal}</h3>
            <p>${item.price}</p>
          </div>
          <div>
            <button>🛒 Add to Cart</button>
          </div>
          
            
        </div>
      ))
    ): (
        <p>No menu items available</p>
    )}
    
    </div>
      <RestaurantPageFooter />
    </div>
    
    
  );
}

export default MenuPage;
