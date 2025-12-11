import './styles/logo.css'

function Logo() {
    return(
        <div className="logo-container">
        <div className="circle-decor circle-1"></div>
        <div className="circle-decor circle-2"></div>
        
        <div className="logo-main">
            <div className="icon-container">
                <div className="fork"></div>
                <div className="spoon"></div>
            </div>
            
            <div className="logo-text">
                <span className="crayo">Crayo</span>
                <span className="eats">Eats</span>
            </div>
        </div>
        
        <div className="tagline">Delicious Delivered</div>
        <div className="plate"></div>
    </div>
    )
}

export default Logo;