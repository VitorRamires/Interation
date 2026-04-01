export function CommentaryList({ commentList }) {
  return (
    <>
      {commentList.map((commentObj, index) => (
        <div className="comments" key={index}>
          <p>
            <strong>{commentObj.commentAuthor}</strong>: {commentObj.comment}
          </p>
        </div>
      ))}
    </>
  );
}
