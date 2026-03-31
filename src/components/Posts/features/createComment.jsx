import { useState } from "react";

export function useCreateComment() {
  const [commentList, setCommentList] = useState([]);

  function createCommentHandler(comment, commentAuthor) {
    const newComment = {
      comment,
      commentId: Date.now(),
      commentAuthor,
    };

    if (!comment) return;

    setCommentList((prev) => [...prev, newComment]);
  }

  return { commentList, createCommentHandler };
}
