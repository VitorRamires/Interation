const URL_BASE = "https://dev.codeleap.co.uk/careers/";

export async function getPosts() {
  const response = await fetch(URL_BASE);
  const data = await response.json();
  return data.results;
}

export async function createPost(username, title, content) {
  const response = await fetch(URL_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, title, content }),
  });

  const data = await response.json();
  return data;
}

export async function editPost(id, title, content) {
  const response = await fetch(`${URL_BASE}${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  const data = await response.json();
  return data;
}

export async function DeletePost(id) {
  await fetch(`${URL_BASE}${id}/`, {
    method: "DELETE",
  });
}
