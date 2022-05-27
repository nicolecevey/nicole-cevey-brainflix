import "./Details.scss";

const Details = ({selectedVideo}) => {

    return (
        <section className="details">
            <h1 className="details__title">{selectedVideo.title}</h1>
            <div className="details__box">
                <div className="details__info">
                    <h2 className="details__name">{selectedVideo.channel}</h2>
                    <p className="details__date">{selectedVideo.timestamp}</p>
                </div>
                <div className="details__info">
                    <div className="details__views">
                        <img src={require("../../assets/icons/views.svg")} className="details__icon-eye" alt="heart icon"/>
                        <p>{selectedVideo.views}</p>
                    </div>
                    <div className="details__likes">
                        <img src={require("../../assets/icons/likes.svg")} className="details__icon-heart"></img>
                        <p>{selectedVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p>{selectedVideo.description}</p>
        </section>
    )
}

export default Details;
