import RolesSection from "../components/Sign-Up-Roles.jsx";
import AboutUs from "../components/AboutUs.jsx"
import GetStarted from "../components/Get-Started.jsx"
import Terminal from "../components/Terminal.jsx";

function Home() {
  return (
    <div className="App">
      <div>
        
      </div>
      <div className="signUpRole">
        <RolesSection />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <GetStarted />
      </div>
      <div>
        <Terminal />
      </div>
      <div className="featureRestaurants"></div>
      <div>
        
      </div>

      
    </div>
  );
}

export default Home;
