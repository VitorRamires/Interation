import { PostCreated } from "../Posts/PostCreated";
import { PostList } from "../Posts/PostList";
import { useUser } from "../../context/username";

export function PostPanel() {
  const { logout, username } = useUser();

  return (
    <>
      <section className="post-page">
        <header>
          <h2>CodeLeap Network</h2>
          <div className="account">
            <p>User: {username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        </header>
        <div className="content">
          <PostCreated />
          <PostList />
        </div>
      </section>
    </>
  );
}
