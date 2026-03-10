import { useState } from "react";
import { editPost } from "../../../DATA.JS";

export function EditPostModal({ dialogRef, id, title, content }) {
 const [editItem, setEditItem] = useState({
    title: title,   
    content: content 
  });

  const closeModal = () => {
    dialogRef.current.close();
  };

  // Posso reutilizar
  function changeEditValue(event) {
    const { id, value } = event.target;
    setEditItem((prev) => ({ ...prev, [id]: value }));
  }

  async function handlerEditPost(event) {
    event.preventDefault();
    dialogRef.current.close();

    const { title, content } = editItem;
    await editPost(id, title, content);
  }

  return (
    <>
      <dialog ref={dialogRef} className="edit-modal">
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
            <textarea id="content" value={editItem.content} onChange={changeEditValue} />
          </div>

          <div className="dialog-btns">
            <button onClick={closeModal}>Cancel</button>
            <button className="edit-btn" type="submit">Edit</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
