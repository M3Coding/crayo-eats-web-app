import "./styles/getstarted.css";

function GetStarted() {
  return (
    <div className="get-started-container">
      <div>
        <img src="/images/blacktraveler.jpg" />
      </div>
      <div classname="get-started-text">
        <div></div>
        <h1>What Are You Waiting On?</h1>
        <h2>Aren't You Tire But Hungry...</h2>
        <p>
          Click the Button below to start ordering from the restaurants in the
          Savannah Airport. Our Transporters are hear ready to serve you. You
          are one click away...
        </p>
        <div classname="get-started-button">
          <a>Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
