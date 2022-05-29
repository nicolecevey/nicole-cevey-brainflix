import "./Nav.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg";

function Nav() {
    return (
        <header className="nav">
            <a>
                <img className="nav__logo" src={logo}></img>
            </a>
            <div className="nav__search">
                <form className="nav__form">
                    <label>
                        <input 
                            className="nav__input" 
                            placeholder="Search">
                        </input>
                    </label>
                </form>
                <img 
                    src={require("../../assets/images/Mohan-muruge.jpg")} 
                    className="nav__avatar">    
                </img>
            </div>
            <button className="button nav__button">UPLOAD</button>
            <img 
                src={require("../../assets/images/Mohan-muruge.jpg")} 
                className="nav__avatar nav__avatar--hidden">
            </img>
          </header>
    )
}

export default Nav;