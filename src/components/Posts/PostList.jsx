import { PostCard } from "../Posts/PostCard";
import { getPosts } from "../../DATA.JS";
import { useContext, useEffect } from "react";
import { ListPostContext } from "../../context/postslists";
import { usePagination } from "../../utilities/pagination";

export function PostList() {
  const { postsList, setPostsList, setOffset } = useContext(ListPostContext);
 const { bottomRef } = usePagination();

  useEffect(() => {
    async function initialLoad() {
      const data = await getPosts(0);
      setPostsList(data.results);
      setOffset(5);
    }
    initialLoad();
  }, []);

  return (
    <>
      <section className="postslist">
        {postsList.map(({ username, created_datetime, title, content, id }) => (
          <PostCard
            author={username}
            datetime={created_datetime}
            title={title}
            content={content}
            id={id}
            key={id + "title"}
          />
        ))}
        <div className="pagination-btns">
          <div ref={bottomRef}></div>
        </div>
      </section>
    </>
  );
}
