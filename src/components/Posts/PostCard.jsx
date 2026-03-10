import { formatDistanceToNow } from "date-fns";

export function PostCard({ username, datetime, title, content }) {
  const formattedDate = formatDistanceToNow(new Date(datetime), { addSuffix: true }).replace("about ", "");

  return (
    <>
      <div className="postcard">
        <header>
          <h3>{title}</h3>
          <div className="actions">
            <span>Delete</span>
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
