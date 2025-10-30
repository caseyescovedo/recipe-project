export const getPosts = async (queryParams) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/posts?` +
      new URLSearchParams(queryParams)
  );
  return await res.json();
};

export const createPost = async (token, post) => {
  console.log('create post');
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/
posts`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    }
  );
  return await res.json();
};

export const deletePost = async (token, postId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await res.json();
};
