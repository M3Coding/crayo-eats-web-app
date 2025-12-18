import "./styles/getstarted.css";
import { useNavigate } from "react-router-dom";


function GetStarted() {
  const navigate = useNavigate();
  return (
    <div className="get-started-container">
      <div>
        <img src="/images/blacktraveler.jpg" />
      </div>
      <div classname="get-started-text">
        <div></div>
        <h1>What Are You Waiting On?</h1>
        <h2>Aren't You Tire But Hungry...</h2>
        <p style={{fontWeight:400}}>
          Click the Button below to start ordering from the restaurants in the
          Savannah Airport. Our Transporters are hear ready to serve you. You
          are one click away...
        </p>
        <div classname="get-started-button">
          <button onClick={() => navigate(`/Restaurants`)}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
