import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useState } from 'react';
import { createPost } from '../api/posts.js';
import { Recipe } from '../pages/Recipe.jsx';
import RecipeItem from './RecipeItem.jsx';

export function CreatePost() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [contents, setContents] = useState('');
  const [numberOfItems, setNumberOfItems] = useState(3);
  const [token] = useAuth();
  // REMOVE author
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: () =>
      createPost(token, {
        title,
        contents,
        imageUrl,
      }),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate();
  };

  if (!token) return <div>Please log in to create new posts.</div>;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        margin: '0',
        textAlign: 'left',
      }}
    >
      <div
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '12px',
        }}
      >
        <label htmlFor="recipe-card">Recipe Card</label>
      </div>
      <div>
        <input
          placeholder="Title"
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            border: '1px solid #888',
            borderRadius: '4px',
            padding: '4px 8px',
          }}
        />
      </div>
      <div>
        {/* <label htmlFor="image-url">Image URL: </label> */}
        <input
          placeholder="Image URL"
          type="text"
          name="image-url"
          id="image-url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{
            marginTop: '4px',
            border: '1px solid #888',
            borderRadius: '4px',
            padding: '4px 8px',
          }}
        />
      </div>
      {/* {Array.from({ length: numberOfItems }).map((_, index) => (
        <RecipeItem key={index} />
      ))} */}
      <br />
      <label htmlFor="create-contents">Ingredients List: </label>
      <textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        style={{
          marginTop: '4px',
          border: '1px solid #888',
          borderRadius: '4px',
          padding: '4px 8px',
          width: '100%',
          minHeight: '80px',
        }}
      />
      <br />
      <br />
      <input
        style={{
          fontSize: '20px',
          borderRadius: 6,
          borderWidth: 1,
          padding: 10,
          textAlign: 'center',
          justifyContent: 'center',
        }}
        type="submit"
        value={createPostMutation.isPending ? 'Creating...' : 'Create Recipe'}
        disabled={!title || !imageUrl || createPostMutation.isPending}
      />
      {createPostMutation.isSuccess ? (
        <>
          <br />
          Post created successfully!
        </>
      ) : null}
    </form>
  );
}
