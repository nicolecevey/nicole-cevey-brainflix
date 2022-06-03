import reactRouterDom from "react-router-dom";
import "./Recommendations.scss";

const Recommendations = ({videos, handleVideoChange}) => {
    return (
        <section className="recommendations">
            <h3 className="recommendations__title">NEXT VIDEOS</h3>
            <article className="recommendations__videos">
                {videos.map((video) => {
                    return (
                        <div 
                            onClick={() => {
                                handleVideoChange(video.id)
                            }} 
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
                        </div>
                    )                    
                })}
            </article>
        </section>
    )
}

export default Recommendations;