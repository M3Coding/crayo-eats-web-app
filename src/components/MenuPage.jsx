import { useParams } from "react-router-dom";
import restaurantsList from "../components/RestaurantsList.jsx";
import { useEffect, useState } from "react";

import "./styles/menu.css"

function MenuPage() {
  const { id } = useParams();
  const restaurant = restaurantsList.find(r => r.id === Number(id));

 if (!restaurant) return <h2>Restaurant Not Found</h2>
console.log("URL param id:", id);
console.log("Found restaurant:", restaurant);
  return (
    <div className="menu-container">
      <h1>{restaurant.name} Menu</h1>
      {restaurant.order.length > 0 ? (
      restaurant.order.map((item, index) => (
        <div key={index} className="menu-item">
            <h3>{item.meal}</h3>
        <p>Price: ${item.price}</p>
        </div>
      ))
    ): (
        <p>No menu items available</p>
    )}
    </div>
    
  );
}

export default MenuPage;
