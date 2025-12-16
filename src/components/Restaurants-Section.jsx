import { useNavigate } from "react-router-dom";
function RestaurantsSection ({ restaurant }) {
    const navigate = useNavigate();
    return (
        <div className="restaurant-section" id="restaurants">
            
            <div className="restaurant-card">
                <img src={restaurant.image}/>

                <div>
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.description}</p>
                    <button onClick={()=> navigate(`/MenuPage/${restaurant.id}`)}>Order Now</button>
                </div>
                
                

                
            </div>
            
        </div>
    )
}

export default RestaurantsSection;