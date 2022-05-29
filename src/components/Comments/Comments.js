import "./Comments.scss";

const Comments = ({selectedVideo, date}) => {


    return (
        <div className="comments">
                {selectedVideo.comments.map((comment, index) => {
                    return (
                        <div className="comment" key={index}>
                            <span className="comment__avatar"></span>
                            <div className="comment__container">
                                <div className="comment__details">
                                    <p className="comment__name">{comment.name}</p>
                                    <p className="comment__date">{date(comment.timestamp)}</p>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Comments;