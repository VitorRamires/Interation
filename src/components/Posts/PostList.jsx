import { PostCard } from "../Posts/PostCard";
import { getPosts } from "../../DATA.JS";
import { useEffect, useState } from "react";

export function PostList() {
  const [postsList, setPostsList] = useState([]);
  const sortList = [...postsList].sort((a, b) => b.data - a.data);

  useEffect(() => {
    async function getPostsHandler() {
      const getPostsList = await getPosts();
      setPostsList(getPostsList);
    }
    getPostsHandler();
  }, []);

  return (
    <>
      <section className="postslist">
        {sortList.map(({ username, created_datetime, title, content, id }) => (
          <PostCard
            username={username}
            datetime={created_datetime}
            title={title}
            content={content}
            key={id}
          />
        ))}
      </section>
    </>
  );
}
