import "./Nav.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

function Nav() {
    // Navbar component

    return (
        <header className="nav">
            <Link to="/">
                <img 
                    className="nav__logo" 
                    src={logo}
                    alt="BrainFlix logo"
                    >
                </img>
            </Link>
            <div className="nav__search">
                <form className="nav__form">
                    <label>
                        <input 
                            className="nav__input" 
                            placeholder="Search"
                            required>
                        </input>
                    </label>
                </form>
                <img 
                    src={require("../../assets/images/Mohan-muruge.jpg")} 
                    className="nav__avatar"
                    alt="Circular headshot of man"
                    >    
                </img>
            </div>
            <button className="nav__button">
                <Link 
                    to="/upload" 
                    className="nav__button-link"
                    >UPLOAD
                </Link>
                </button>
            <img 
                src={require("../../assets/images/Mohan-muruge.jpg")} 
                className="nav__avatar nav__avatar--hidden"
                alt="Circular headshot of man"
                >    
            </img>
          </header>
    )
}

export default Nav;