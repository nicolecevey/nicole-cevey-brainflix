import "./Details.scss";

function Details() {

    return (
        <section className="details">
            <h1 className="details__title">BMX Rampage: 2021 Highlights</h1>
            <div className="details">
                <div className="details__info">
                    <h2 className="details__name">By Red Crow</h2>
                    <p className="details__date">07/11/2021</p>
                </div>
                    <div>
                        <img className="details__icon"></img>
                        <p className="details__views">1,001,023</p>
                    </div>
                    <div>
                        <img className="details__icon"></img>
                        <p className="details__likes">110,985</p>
                    </div>
                <div className="details__description">
                </div>
            </div>
        </section>
    )
}

export default Details;
