import RolesSection from "../components/Sign-Up-Roles.jsx";
import AboutUs from "../components/AboutUs.jsx"
import GetStarted from "../components/Get-Started.jsx"
import Terminal from "../components/Terminal.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./styles/home.css"
import HowItWorks from "../components/HowItWorks.jsx";

function Home() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="signUpRole">
        <RolesSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="getstart">
        <GetStarted />
      </div>
      <div id="terminal">
        <Terminal />
      </div>
      <div id="how">
        <HowItWorks />
      </div>
      <div>
        <Footer />
      </div>

      
    </div>
  );
}

export default Home;
