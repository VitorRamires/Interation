import { useContext, useEffect, useRef, useState } from "react";
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

  const bottomRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) loadMorePosts();
    });

    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [offset, hasMore]);

  return { loadMorePosts, hasMore, bottomRef };
}
