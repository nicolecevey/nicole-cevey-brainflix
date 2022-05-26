import "./Nav.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg";

function Nav() {
    return (
        <header class="nav">
            <a>
                <img class="nav__logo" src={logo}></img>
            </a>
            <div class="nav__search">
                <form class="nav__form">
                    <label>
                        <input class="nav__input" placeholder="Search"></input>
                    </label>
                </form>
                <img src={require("../../assets/images/Mohan-muruge.jpg")} class="nav__avatar"></img>
            </div>
            <button class="button nav__button">UPLOAD</button>
            <img src={require("../../assets/images/Mohan-muruge.jpg")} class="nav__avatar nav__avatar--hidden"></img>
          </header>
    )
}

export default Nav;