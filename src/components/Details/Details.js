import "./Details.scss";
import likeIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg"

const Details = ({selectedVideo, date}) => {
    // Renders details under each video, including title, channel name, date, likes and views

    return (
        <section className="details">
            <h1 className="details__title">{selectedVideo.title}</h1>
            <div className="details__box">
                <div className="details__info">
                    <h2 className="details__channel">By {selectedVideo.channel}</h2>
                    <h3>{date(selectedVideo.timestamp)}</h3>
                </div>
                <div className="details__info">
                    <div className="details__views">
                        <img src={viewsIcon} 
                            className="details__icon" 
                            alt="Heart icon">
                        </img>
                        <h3>{selectedVideo.views}</h3>
                    </div>
                    <div className="details__likes">
                        <img 
                            src={likeIcon} 
                            className="details__icon"
                            alt="Like icon"
                            >
                        </img>
                        <h3>{selectedVideo.likes}</h3>
                    </div>
                </div>
            </div>
            <p className="details__description">{selectedVideo.description}</p>
        </section>
    )
}

export default Details;
