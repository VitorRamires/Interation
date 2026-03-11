import { DeletePostModal } from "./modals/deleteModal";
import { EditPostModal } from "./modals/editModal";
import { useUser } from "../../context/username";
import { usePostModals } from "./modals/usePostModals";
import { formateDate } from "../../utilities/formatDate";
import {PostActions} from "../Posts/PostActions"

export function PostCard({ author, datetime, title, content, id }) {
  const { username } = useUser();
  const { dialogDeleteRef, dialogEditRef, openDeleteModal, openEditModal } =
    usePostModals();

  const dateFormatted = formateDate(datetime);

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
            <p className="datetime">{dateFormatted}</p>
          </div>
          <p className="text-postcard">{content}</p>
        </div>
        <DeletePostModal id={id} dialogRef={dialogDeleteRef} />
      </div>
      <EditPostModal
        id={id}
        dialogRef={dialogEditRef}
        title={title}
        content={content}
      />
    </>
  );
}
