import './styles/header.css'
import Logo from "./Crayo-Logo.jsx";

function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <Logo />
            </div>
            <div className="navigation">
                <ul>
                    <li>Restaurants</li>
                    <li>Sign Up</li>
                    <li>Sign In</li>
                    <li>🛒</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;