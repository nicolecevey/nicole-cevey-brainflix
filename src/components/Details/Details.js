import "./Details.scss";
import likeIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg"

const Details = ({selectedVideo, date}) => {

    return (
        <section className="details">
            <h1 className="details__title">{selectedVideo.title}</h1>
            <div className="details__box">
                <div className="details__info">
                    <h2 className="details__name">By {selectedVideo.channel}</h2>
                    <p className="details__date">{date(selectedVideo.timestamp)}</p>
                </div>
                <div className="details__info">
                    <div className="details__views">
                        <img src={viewsIcon} className="details__icon" alt="heart icon"/>
                        <p>{selectedVideo.views}</p>
                    </div>
                    <div className="details__likes">
                        <img src={likeIcon} className="details__icon"></img>
                        <p>{selectedVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p>{selectedVideo.description}</p>
        </section>
    )
}

export default Details;
