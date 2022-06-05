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
                    src={logo}>
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
                    className="nav__avatar">    
                </img>
            </div>
            <button className="button nav__button">
                <Link to="/upload" className="button">UPLOAD</Link>
                </button>
            <img 
                src={require("../../assets/images/Mohan-muruge.jpg")} 
                className="nav__avatar nav__avatar--hidden">
            </img>
          </header>
    )
}

export default Nav;