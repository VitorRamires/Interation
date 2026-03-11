import { useContext, useState } from "react";
import { createPost } from "../../../DATA.JS";
import { useUser } from "../../../context/username";
import { ListPostContext } from "../../../context/postslists";

export function useCreatePost() {
  const { username } = useUser();
  const { setPostsList, setOffset } = useContext(ListPostContext);

  const [postContent, setPostContent] = useState({
    username: username,
    title: "",
    content: "",
  });

  async function handlePostCreation(event) {
    event.preventDefault();
    const { title, content } = postContent;
    const newPost = await createPost(username, title, content);
    setPostsList((prev) => [newPost, ...prev]);
    setOffset((prev) => prev + 1);
  }

  return { handlePostCreation, setPostContent, postContent };
}
