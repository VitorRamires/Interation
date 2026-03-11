import { useContext } from "react";
import { deletePost } from "../../../DATA.JS";
import { ListPostContext } from "../../../context/postslists";

export function DeletePostModal({ id, dialogRef }) {
  const { setPostsList } = useContext(ListPostContext);

  function closeModal() {
    dialogRef.current.close();
  }

  async function handlerDeletePost() {
    await deletePost(id);
    setPostsList((prev) => prev.filter((post) => post.id !== id));
    dialogRef.current.close();
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <h3>Are you sure you want to delete this item?</h3>
        <div className="dialog-btns">
          <button onClick={closeModal}>Cancel</button>
          <button className="delete-btn" onClick={handlerDeletePost}>
            Delete
          </button>
        </div>
      </dialog>
    </>
  );
}
