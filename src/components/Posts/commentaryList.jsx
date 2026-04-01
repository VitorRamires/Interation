export function CommentaryList({ commentList }) {
  return (
    <>
      {commentList.map((commentObj, index) => (
        <div className="comments" key={index}>
          <p>
            {commentObj.commentAuthor}: {commentObj.comment}
          </p>
        </div>
      ))}
    </>
  );
}
