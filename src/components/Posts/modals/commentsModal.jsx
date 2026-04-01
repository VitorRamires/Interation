import { useUser } from "../../../context/username";
import { useState } from "react";

export function CommentsModal({ dialogRef, createComment, contentPost }) {
  const { username } = useUser();
  const [commentary, setCommentary] = useState("");


  function createNewCommentary({ target }) {
    setCommentary(target.value);
  }

  function sendCommentary() {
    createComment(commentary, username);
    dialogRef.current.close()
  }

  return (
    <dialog ref={dialogRef}>
      <p className="content-commentPost">{contentPost}</p>
      <div className="comments">
        <textarea
          onChange={createNewCommentary}
          type="text"
          placeholder="Reply Here!"
          value={commentary}
        />
        <button onClick={sendCommentary}>Reply</button>
      </div>
    </dialog>
  );
}
