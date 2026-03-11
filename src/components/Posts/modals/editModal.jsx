import { useContext, useState } from "react";
import { editPost } from "../../../DATA.JS";
import { ListPostContext } from "../../../context/postslists";

export function EditPostModal({ dialogRef, id, title, content }) {
  const [editItem, setEditItem] = useState({
    title: title,
    content: content,
  });

    const { setPostsList } = useContext(ListPostContext);

  const closeModal = () => {
    dialogRef.current.close();
  };

  function changeEditValue(event) {
    const { id, value } = event.target;
    setEditItem((prev) => ({ ...prev, [id]: value }));
  }

  async function handlerEditPost(event) {
    event.preventDefault();
    dialogRef.current.close();

    const { title, content } = editItem;
    const postEdited = await editPost(id, title, content);
    setPostsList((prev) => prev.map((post) => post.id === id ? postEdited : post));
  }

  return (
    <>
      <dialog ref={dialogRef} className="edit-modal">
        <h3>Edit Item</h3>
        <form onSubmit={handlerEditPost}>
          <div className="title-post edit-item">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={editItem.title}
              onChange={changeEditValue}
            />
          </div>

          <div className="content-post edit-item">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={editItem.content}
              onChange={changeEditValue}
            />
          </div>

          <div className="dialog-btns">
            <button onClick={closeModal}>Cancel</button>
            <button className="edit-btn" type="submit">
              Edit
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
