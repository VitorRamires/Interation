import editIcon from "/src/assets/icons/edit-icon.svg";
import deleteIcon from "/src/assets/icons/delete-icon.svg";

export function PostActions({ onEdit, onDelete }) {

  

  return (
    <div className="actions">
      <span onClick={onEdit}>
        <img src={editIcon} alt="icon-edit" />
      </span>
      <span onClick={onDelete}>
        <img src={deleteIcon} alt="icon-delete" />
      </span>
    </div>
  );
}
