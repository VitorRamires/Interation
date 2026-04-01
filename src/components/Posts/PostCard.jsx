import { DeletePostModal } from "./modals/deleteModal";
import { EditPostModal } from "./modals/editModal";

import { usePostModals } from "./modals/usePostModals";
import { formateDate } from "../../utilities/formatDate";
import { LikeButton } from "./features/likes";
import { CommentsModal } from "./modals/commentsModal.jsx";
import { CommentaryList } from "./commentaryList.jsx";

import { useCreateComment } from "./features/createComment.jsx";
import { Actions } from "./actions.jsx";

export function PostCard({ author, datetime, title, content, id }) {
  const { createCommentHandler, commentList } = useCreateComment();

  const {
    dialogDeleteRef,
    dialogEditRef,
    dialogCommentRef,
    openDeleteModal,
    openEditModal,
    openCommentModal,
  } = usePostModals();

  const dateFormated = formateDate(datetime);

  return (
    <>
      <div className="postcard">
        <header>
          <h3>{title}</h3>
          <Actions
            author={author}
            deleteOpenModal={openDeleteModal}
            editOpenModal={openEditModal}
            commentOpenModal={openCommentModal}
          />
        </header>
        <div className="postcard-content">
          <div className="postcard-infos">
            <p className="author">{`@${author}`}</p>
            <p className="datetime">{dateFormated}</p>
          </div>
          <p className="text-postcard">{content}</p>
          <LikeButton id={id} />
        </div>
        <div className="commentary-list">
          <CommentaryList commentList={commentList} />
        </div>
        <DeletePostModal id={id} dialogRef={dialogDeleteRef} />
        <EditPostModal
          id={id}
          dialogRef={dialogEditRef}
          title={title}
          content={content}
        />
        <CommentsModal
          dialogRef={dialogCommentRef}
          createComment={createCommentHandler}
          contentPost={content}
        />
      </div>
    </>
  );
}
