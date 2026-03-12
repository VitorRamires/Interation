import { useState } from "react";
import { useUser } from "../../../context/username";

const ThumbUp = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

export function LikeButton({ id }) {
  const { username } = useUser();

  const storageKey = `liked-${id}-${username}`;

  const [liked, setLiked] = useState(() => {
    return localStorage.getItem(storageKey) === "true";
  });

  const [likes, setLikes] = useState(() => {
    return Number(localStorage.getItem(`likes-${id}`)) || 0;
  });

  async function handleLike() {
    const newLiked = !liked;
    const newLikes = newLiked ? likes + 1 : likes - 1;

    setLiked(newLiked);
    setLikes(newLikes);

    localStorage.setItem(storageKey, newLiked);
    localStorage.setItem(`likes-${id}`, newLikes);

    await fetch(`https://dev.codeleap.co.uk/careers/${id}/like/`, {
      method: "POST",
    });
  }

  return (
    <button onClick={handleLike} className={`like-btn ${liked ? "liked" : ""}`}>
      <ThumbUp filled={liked} /> {likes}
    </button>
  );
}
