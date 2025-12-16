
import "./styles/howitworks.css"
const HowItWorks = () => {
  const steps = [
    {
      icon: '/images/mobile-solid-full.svg',
      title: "Download & Order",
      description: "Open our app, browse airport restaurants, and place your order from your gate.",
      number: "01"
    },
    {
      icon: '/images/location-dot-solid-full.svg',
      title: "Share Location",
      description: "Tell us your terminal and gate number. Our runners know the airport like the back of their hand.",
      number: "02"
    },
    {
      icon: '/images/utensils-solid-full.svg',
      title: "We Pick It Up",
      description: "Our professional runners collect your fresh meal from your chosen restaurant.",
      number: "03"
    },
    {
      icon: '/images/stopwatch-solid-full.svg',
      title: "Delivered to You",
      description: "Sit back and relax while we bring your food directly to your gate in minutes.",
      number: "04"
    }
  ];

  return (
    <div className="how-container">
      <div className="how-title">
        <h2>How It</h2>
        <h2 className="second-how-title">Works</h2>
      </div>
      <div className="how-description">
        <h3>Getting your favorite airport meal delivered is easier than catching your flight</h3>
      </div>
      <div className="how-cards">
        {steps.map((step) => (
          <div key={step.number} className="how-card">
            <div className="top-how-card">
                <div className="step-img">
                    <img src={step.icon} alt={step.title} />
                </div>
                <div className="step-number">
                    <p>{step.number}</p>
                </div>
              
              
            </div>
            <div className="bottom-how-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

