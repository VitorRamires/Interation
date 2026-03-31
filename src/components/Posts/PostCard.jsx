import { DeletePostModal } from "./modals/deleteModal";
import { EditPostModal } from "./modals/editModal";
import { useUser } from "../../context/username";
import { usePostModals } from "./modals/usePostModals";

import { PostActions } from "../Posts/PostActions";
import { formateDate } from "../../utilities/formatDate";
import { LikeButton } from "./features/likes";
import { Comments } from "./modals/comments.jsx";

export function PostCard({ author, datetime, title, content, id }) {
  const { username } = useUser();
  const { dialogDeleteRef, dialogEditRef, openDeleteModal, openEditModal } =
    usePostModals();

  const dateFormated = formateDate(datetime);

  const isAuthor = username === author;
  const buttonsActionsVisible = isAuthor ? (
    <PostActions onEdit={openEditModal} onDelete={openDeleteModal} />
  ) : (
    ""
  );
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
        <Comments />
      </div>
    </>
  );
}
