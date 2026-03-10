import { formatDistanceToNow } from "date-fns";
import { useRef } from "react";
import { DeletePostModal } from "./modals/deleteModal";
import { EditPostModal } from "./modals/editModal";

export function PostCard({ username, datetime, title, content, id }) {
  const formattedDate = formatDistanceToNow(new Date(datetime), {
    addSuffix: true,
  }).replace("about ", "");

  const dialogDeleteRef = useRef();
  const dialogEditRef = useRef();

  function openDeleteModal() {
    dialogDeleteRef.current.showModal();
  }

  function openEditModal() {
    dialogEditRef.current.showModal();
  }

  return (
    <>
      <div className="postcard">
        <header>
          <h3>{title}</h3>
          <div className="actions">
            <span onClick={openDeleteModal}>Delete</span>
            <span onClick={openEditModal}>Edit</span>
          </div>
        </header>
        <div className="postcard-content">
          <div className="postcard-infos">
            <p className="author">{`@${username}`}</p>
            <p className="datetime">{formattedDate}</p>
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
