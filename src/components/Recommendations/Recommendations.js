import { Link } from "react-router-dom";
import "./Recommendations.scss";

const Recommendations = ({videos}) => {
    // Renders recommended videos section

    return (
        <section className="recommendations">
            <h3 className="recommendations__title">NEXT VIDEOS</h3>
            <article className="recommendations__videos">
                {videos.map((video) => {
                    return (
                        <Link
                            to={`/videos/${video.id}`}
                            key={video.id}
                            className="video"
                        >
                            <img
                                src={video.image}
                                className="video__image"
                                alt={`Video of ${video.title}`}
                            >
                            </img>
                            <div className="video__details">
                                <h2 className="video__title">{video.title}</h2>
                                <p className="video__channel">{video.channel}</p>
                            </div>
                        </Link>
                    )                    
                })}
            </article>
        </section>
    )
}

export default Recommendations;