import { useContext, useState } from "react";
import { getPosts } from "../DATA.JS";
import { ListPostContext } from "../context/postslists";

export function usePagination() {
  const { offset, setOffset, setPostsList } = useContext(ListPostContext);

  const [hasMore, setHasMore] = useState(true);

  async function loadMorePosts() {
    const data = await getPosts(offset);
    setPostsList((prev) => [...prev, ...data.results]);
    setOffset((prev) => prev + 5);
    setHasMore(!!data.next);
  }

  return { loadMorePosts, hasMore };
}
