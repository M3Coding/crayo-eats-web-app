import RolesSection from "../components/Sign-Up-Roles.jsx";
import AboutUs from "../components/AboutUs.jsx"
import GetStarted from "../components/Get-Started.jsx"
import Terminal from "../components/Terminal.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div className="App">
      <div>
        <Header />
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
        <Footer />
      </div>

      
    </div>
  );
}

export default Home;
