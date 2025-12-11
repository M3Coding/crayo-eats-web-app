import './styles/header.css'
import Logo from "./Crayo-Logo.jsx";

import Navbar from "./Navbar";

function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <Logo />
            </div>
            <div>
                <Navbar />
            </div>
            

        </div>
        
    )
}

export default Header;