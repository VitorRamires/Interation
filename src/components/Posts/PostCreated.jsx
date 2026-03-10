import { useCreatePost } from "./features/createPost";

export function PostCreated() {
  const { handlePostCreation, setPostContent } = useCreatePost();

  // Posso reutilizar
  function handleChangeForm(event) {
    const { id, value } = event.target;
    setPostContent((prev) => ({ ...prev, [id]: value }));
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

        <button type="submit">Create</button>
      </form>
    </section>
  );
}
