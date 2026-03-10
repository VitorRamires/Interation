import { DeletePost } from "../../../DATA.JS";

export function DeletePostModal({ id, dialogRef }) {
  function closeModal() {
    dialogRef.current.close();
  }

  async function handlerDeletePost() {
    await DeletePost(id);
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
