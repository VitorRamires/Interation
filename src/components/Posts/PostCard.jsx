import { formatDistanceToNow } from "date-fns";
import { DeletePost } from "../../DATA.JS";

export function PostCard({ username, datetime, title, content, id }) {
  const formattedDate = formatDistanceToNow(new Date(datetime), {
    addSuffix: true,
  }).replace("about ", "");

  async function handlerDeletePost () {
    await DeletePost(id)
  }

  

  return (
    <>
      <div className="postcard">
        <header>
          <h3>{title}</h3>
          <div className="actions">
            <span onClick={handlerDeletePost}>Delete</span>
            <span>Edit</span>
          </div>
        </header>
        <div className="postcard-content">
          <div className="postcard-infos">
            <p className="author">{`@${username}`}</p>
            <p className="datetime">{formattedDate}</p>
          </div>
          <p className="text-postcard">{content}</p>
        </div>
      </div>
    </>
  );
}
