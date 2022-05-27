import "./Comments.scss";

const Comments = ({selectedVideo}) => {


    return (
        <div className="comments">
                {selectedVideo.comments.map((comment) => {
                    return (
                        <div className="comment">
                            <span className="comment__avatar"></span>
                            <div>
                                <div className="comment__details">
                                    <p className="comment__name">{comment.name}</p>
                                    <p>{comment.timestamp}</p>
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