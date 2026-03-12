import { PostCreated } from "../Posts/PostCreated";
import { PostList } from "../Posts/PostList";
import { useUser } from "../../context/username";

export function PostPanel() {
  const { logout } = useUser();

  return (
    <>
      <section className="post-page">
        <header>
          <h2>CodeLeap Network</h2>
          <button onClick={logout}>Logout</button>
        </header>
        <div className="content">
          <PostCreated />
          <PostList />
        </div>
      </section>
    </>
  );
}
