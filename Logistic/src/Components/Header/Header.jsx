import "./Header.css"
import logo from "../img/logo.png"
import instagram from "../img/Instagram.svg"
import linkdin from "../img/Linkdin.svg"
import twitter from "../img/Twitter.svg"
import vector from "../img/Vector.svg"


export default function Header() {
    return (
        <header className="header">
            <div className="container  header__container">
                <div className="header__container-contacts">
                    <div className="header__contacts-box">
                        <a href="#"><img className="logo" src={logo} alt="" /></a>
                        <ul className="header__contacts">
                            <li className="header__contact-item">Mon - Sat 9.00 - 18.00</li>
                            <li className="header__contact-item">Email contact@logistics.com</li>
                            <li className="header__contact-item">Call Us (375) 112 365 489</li>
                        </ul>
                    </div>
                </div>
                <div className="header__navigation">
                    <div className="header__nav-box">
                        <div className="nav__container">
                            <ul className="header__nav-items">
                                <li className="nav__items"><a href="#">Home</a></li>
                                <li className="nav__span"></li>
                                <li className="nav__items"><a href="#">About</a></li>
                                <li className="nav__span"></li>
                                <li className="nav__items"><a href="#">Pages</a></li>
                                <li className="nav__span"></li>
                                <li className="nav__items"><a href="#">Project</a></li>
                                <li className="nav__span"></li>
                                <li className="nav__items"><a href="#">Contact</a></li>
                            </ul>
                            <ul className="header__links">
                                <li className="header__link-item"><a href="#"><img src={instagram} alt="" /></a></li>
                                <li className="header__link-item"><a href="#"><img src={linkdin} alt="" /></a></li>
                                <li className="header__link-item"><a href="#"><img src={vector} alt="" /></a></li>
                                <li className="header__link-item"><a href="#"><img src={twitter} alt="" /></a></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="header__info">
                        <div className="header__info-box">
                            <h1 className="header__logo">Your Gateway to any Destination in the World</h1>
                            <p className="header__info-text">Logistics technology's future begins with us.</p>
                            <button className="button">Request Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}