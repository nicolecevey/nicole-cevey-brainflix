import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
    // Component for error handling page

    return(
        <section className="not-found">
            <h1 className="not-found__title">Oh no.. we can't find the page you're looking for.</h1>
            <h2>Click the link below to return to the home page.</h2>
            <button className="not-found__button">
                <Link 
                    to="/"
                    className="not-found__link"
                >HOME PAGE
                </Link>
            </button>
        </section>
    )
  }
  
export default NotFound;