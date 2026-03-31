import { useUser } from "../../../context/username";
import { useCreateComment } from "../features/createComment";
import { useState } from "react";

export function Comments() {
  const { username } = useUser();
  const [commentary, setCommentary] = useState("");
  const { createCommentHandler, commentList } = useCreateComment();

  function createNewCommentary({ target }) {
    setCommentary(target.value);
  }

  function sendCommentary() {
    createCommentHandler(commentary, username);
  }

  return (
    <div className="comments">
      <textarea
        onChange={createNewCommentary}
        type="text"
        placeholder="comentario aqui"
        value={commentary}
      />
      <button onClick={sendCommentary}>Reply</button>

      {commentList.map((commentObj, index) => (
        <div className="comments" key={index}>
          <p>
            {commentObj.commentAuthor}: {commentObj.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
