import "./styles/aboutus.css"
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const navigate = useNavigate();
    return(
        <div className="about-us-container">
            <div classname="about-text">
                <div className="diamond"></div>
                <h1>Our Vibe...</h1><hr />
            <p style={{fontWeight:400}}>At Crayo Eats LLC, we make airport travel easier and more enjoyable by delivering food directly to travelers. Whether you’re working, resting, or rushing to your gate, we bring fresh meals, snacks, and beverages right to you. We partner with the best local and national vendors to ensure quality, convenience, and variety. No more crowded terminals or missed meals — just great food when you need it. Crayo Eats LLC — keeping travelers fueled, satisfied, and on the move.</p>
            <div className="about-button">
          <button onClick={() => navigate(`/About`)}>Learn More...</button>
        </div>
            
            </div>
            
            <div>
                <img src="/images/restaurants.jpg" />
            </div>
        </div>
        
    )
}

export default AboutUs;