import "./CommentsForm.scss";

const CommentsForm = ({comments}) => {
    // Renders the comment form section to input a new comment

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="comments-form">
            <h2>{`${comments.length} Comments`}</h2>
            <div className="comments-form__container">
                <img 
                    src={require("../../assets/images/Mohan-muruge.jpg")} 
                    className="comments-form__avatar"
                    alt="Circular headshot of man"
                    >
                </img>
                <form 
                    className="comments-form__form"
                    onSubmit={handleSubmit}
                    >
                    <label 
                        className="comments-form__label"
                        id="input"
                        >
                        JOIN THE CONVERSATION
                        <textarea 
                            className="comments-form__input" 
                            placeholder="Add a new comment"
                            id="input"
                            required
                        >
                        </textarea>
                    </label>
                    <button className="comments-form__button">COMMENT</button>
                </form>
            </div>
		</section>
    )
}

export default CommentsForm;