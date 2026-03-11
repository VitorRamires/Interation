import { useState } from "react";
import { useCreatePost } from "./features/createPost";

export function PostCreated() {

  
  const { handlePostCreation, setPostContent, postContent } = useCreatePost();
  const [isDisabled, setIsDisabled] = useState(true);

  function handleChangeForm(event) {
    const { id, value } = event.target;
    const updatedContent = { ...postContent, [id]: value };

    setPostContent(updatedContent);
    setIsDisabled(!updatedContent.title || !updatedContent.content);
  }

  return (
    <section className="postCreated">
      <h2 className="">What’s on your mind?</h2>

      <form onSubmit={handlePostCreation}>
        <div className="postCreated-item title-post">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" onChange={handleChangeForm} />
        </div>

        <div className="postCreated-item content-post">
          <label htmlFor="content">Content</label>
          <textarea id="content" onChange={handleChangeForm} />
        </div>

        <button
          disabled={isDisabled}
          className={!isDisabled ? "" : "disabled"}
          type="submit"
        >
          Create
        </button>
      </form>
    </section>
  );
}
