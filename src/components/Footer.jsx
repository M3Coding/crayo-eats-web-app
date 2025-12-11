import Logo from "./Crayo-Logo"
import './styles/footer.css'
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <Logo />
            </div>
            <div className="navigation-footer">
                <ul>
                    <li>Restaurants</li>
                    <li>Sign Up</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer;