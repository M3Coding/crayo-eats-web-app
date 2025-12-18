import "./styles/roles-Section.css"

function RolesSection() {
    return (
        <div className="roles-section">
            <div className="transporter-card">
                <img src="/images/transporter.png"></img>
                <h2>Become a Transporter</h2>
                <p style={{fontWeight:400}}>Join our team of transporters, delivering to travelers awaiting flights. Sign up now!</p>
                <a><p >Start Earning →</p></a>
            </div>
            <div className="merchant-card">
                <img src="/images/merchant.png"></img>
                <h2>Become a Merchant</h2>
                <p style={{fontWeight:400}}>You want to be part of a network of airports that serve busy travelers. Join Crayo Eats! </p>
                <a><p>Join Now →</p></a>
            </div>
            <div className="traveler-card">
                <img src="/images/suitcase.png"></img>
                <h2>Traveler's Experience</h2>
                <p style={{fontWeight:400}}>You've been traveling all day, you have work to get done while awaiting for your filght? But your hungry? Join Crayo Eats and let us serve you. You do not have to move from your spot. We will get your order and bring it to you. Join now!</p>
                <a><p>Sign Up with Crayo Eats →</p></a>
            </div>
        </div>
    )

}

export default RolesSection;