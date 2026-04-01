import commentIcon from "../../assets/icons/chat.svg";
import { useUser } from "../../context/username";
import { PostActions } from "./PostActions";

export function Actions({
  author,
  deleteOpenModal,
  editOpenModal,
  commentOpenModal,
}) {
  const { username } = useUser();
  const isAuthor = username === author;

  const buttonsActionsVisible = isAuthor ? (
    <PostActions onEdit={editOpenModal} onDelete={deleteOpenModal} />
  ) : (
    ""
  );

  return (
    <div className="actions">
      {buttonsActionsVisible}
      <span onClick={commentOpenModal}>
        <img src={commentIcon} alt="icon-delete" />
      </span>
    </div>
  );
}
