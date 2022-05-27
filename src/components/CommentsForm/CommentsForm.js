import "./CommentsForm.scss";

const CommentsForm = ({selectedVideo}) => {
    
    return (
        <section className="comments-form">
            <p className="comments-form__number">3 Comments</p>
            <div className="comments-form__add">
                <img src={require("../../assets/images/Mohan-muruge.jpg")} className="comments-form__avatar"></img>
                <form className="comments-form__form">
                    <label className="comments-form__label">JOIN THE CONVERSATION
                        <textarea className="comments-form__input" placeholder="Add a new comment"></textarea>
                    </label>
                    <button className="comments-form__button">COMMENT</button>
                </form>
            </div>
		</section>
    )
}

export default CommentsForm;