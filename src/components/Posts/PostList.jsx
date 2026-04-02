import { PostCard } from "../Posts/PostCard";
import { getPosts } from "../../DATA.JS";
import { useContext, useEffect, useState } from "react";
import { ListPostContext } from "../../context/postslists";
import { usePagination } from "../../utilities/pagination";
import { Loading } from "../loading";
import { ErrorPage } from "../errorPage";

export function PostList() {
  const { postsList, setPostsList, setOffset } = useContext(ListPostContext);
  const { bottomRef } = usePagination();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function initialLoad() {
      setIsLoading(true);
      try {
        const data = await getPosts(0);
        setPostsList(data.results);
        setOffset(5);
      } catch (error) {
        setError({
          message: error.message || "Could not fetch posts, try later.",
        });
      } finally {
        setIsLoading(false);
      }
    }
    initialLoad();
  }, []);


  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {!isLoading && (
        <section className="postslist">
          {postsList.map(
            ({ username, created_datetime, title, content, id }) => (
              <PostCard
                author={username}
                datetime={created_datetime}
                title={title}
                content={content}
                id={id}
                key={id}
              />
            ),
          )}
          <div className="pagination-btns">
            <div ref={bottomRef}></div>
          </div>
        </section>
      )}

      {isLoading && <Loading />}
    </>
  );
}
