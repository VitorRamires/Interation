import { useUser } from "../../../context/username";
import { useState } from "react";

export function CommentsModal({ dialogRef, createComment }) {
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
      <h2>Commentary</h2>
      <div className="comments">
        <textarea
          onChange={createNewCommentary}
          type="text"
          placeholder="comentario aqui"
          value={commentary}
        />
        <button onClick={sendCommentary}>Reply</button>
      </div>
    </dialog>
  );
}
