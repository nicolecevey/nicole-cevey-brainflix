import "./Comments.scss";

const Comments = ({ comments, date, deleteComment, selectedVideoId }) => {
  // Individual comment component
  // Renders each comment with corresponding name and date

  return (
    <div className="comments">
      {comments.map((comment, index) => {
        return (
          <article className="comment" key={index}>
            <span className="comment__avatar"></span>
            <div className="comment__container">
              <div className="comment__details">
                <h2 className="comment__name">{comment.name}</h2>
                <h3 className="comment__date">{date(comment.timestamp)}</h3>
              </div>
              <p>{comment.comment}</p>
              <button
                className="comment__delete-button"
                onClick={(event) => {
                  deleteComment(event, selectedVideoId, comment.id);
                }}
              >
                DELETE
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Comments;
