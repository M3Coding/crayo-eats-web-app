
function RestaurantsSection (props) {
    return (
        <div className="restaurant-section">
            
            <div className="restaurant-card">
                <div className="top">
                    <img src={props.img}/>
                    <h2>{props.name}</h2>
                </div>
                <div className="bottom">
                    <p>{props.description}</p>
                    <a><p>{props.order}</p></a>
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantsSection;