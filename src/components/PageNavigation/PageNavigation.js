import "./PageNavigation.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Nav() {
  // Navbar component which allows users to go back to home page on click of logo or go to upload page on click of button

  return (
    <header className="nav">
      <Link to="/">
        <img className="nav__logo" src={logo} alt="BrainFlix logo"></img>
      </Link>
      <div className="nav__search">
        <form className="nav__form">
          <label>
            <input className="nav__input" placeholder="Search" required></input>
          </label>
        </form>
        <img
          src={avatar}
          className="nav__avatar"
          alt="Circular headshot of man"
        ></img>
      </div>
      <Link to="/upload" className="nav__upload-link">
        UPLOAD
      </Link>
      <img
        src={avatar}
        className="nav__avatar nav__avatar--hidden"
        alt="Circular headshot of man"
      ></img>
    </header>
  );
}

export default Nav;
