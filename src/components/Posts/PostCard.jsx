import { DeletePostModal } from "./modals/deleteModal";
import { EditPostModal } from "./modals/editModal";
import { useUser } from "../../context/username";
import { usePostModals } from "./modals/usePostModals";

import { PostActions } from "../Posts/PostActions";
import { formateDate } from "../../utilities/formatDate";
import { LikeButton } from "./features/likes";
import { useCreateComment } from "./features/createComment";
import { useState } from "react";

export function PostCard({ author, datetime, title, content, id }) {
  const { username } = useUser();
  const { dialogDeleteRef, dialogEditRef, openDeleteModal, openEditModal } =
    usePostModals();

  const [commentary, setCommentary] = useState("");

  const dateFormated = formateDate(datetime);
  const { createCommentHandler, commentList } = useCreateComment();

  const isAuthor = username === author;
  const buttonsActionsVisible = isAuthor ? (
    <PostActions onEdit={openEditModal} onDelete={openDeleteModal} />
  ) : (
    ""
  );

  function createNewCommentary({ target }) {
    setCommentary(target.value);
  }

  function sendCommentary() {
    createCommentHandler(commentary, username);
  }

  return (
    <>
      <div className="postcard">
        <header>
          <h3>{title}</h3>
          {buttonsActionsVisible}
        </header>
        <div className="postcard-content">
          <div className="postcard-infos">
            <p className="author">{`@${author}`}</p>
            <p className="datetime">{dateFormated}</p>
          </div>
          <p className="text-postcard">{content}</p>
          <LikeButton id={id} />
        </div>
        <DeletePostModal id={id} dialogRef={dialogDeleteRef} />
        <EditPostModal
          id={id}
          dialogRef={dialogEditRef}
          title={title}
          content={content}
        />
        <div className="comments">
          <p onClick={sendCommentary}>Comment</p>
          <input
            onChange={createNewCommentary}
            type="text"
            placeholder="comentario aqui"
            value={commentary}
          />

          {commentList.map((commentObj, index) => (
            <div key={index}>
              <p>
                <strong>{commentObj.commentAuthor}:</strong>{" "}
                {commentObj.comment}
              </p>
            </div>
          ))}

          
        </div>
      </div>
    </>
  );
}
