import "./Comments.scss";

function Comments() {
    
    return (
        <section className="comments">
            <p className="comments__number">3 Comments</p>
            <div>
                <img className="comments__avatar"></img>
                <form className="comments__form">
                    <label className="comments__label">JOIN THE CONVERSATION
                        <textarea className="comments__input" placeholder="Add a new comment"></textarea>
                    </label>
                    <button className="button comments__button">COMMENT</button>
                </form>
            </div>
            <div className="comments__container">

            </div>
		</section>
    )
}

export default Comments;