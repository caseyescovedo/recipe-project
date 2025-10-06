import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useState } from 'react';
import { createPost } from '../api/posts.js';

export function CreatePost() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [token] = useAuth();
  // REMOVE author
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: () => createPost(token, { title, contents }),
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
      <div>
        <label htmlFor="create-title">Title: </label>
        <input
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
      <br />
      <textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        style={{
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
        type="submit"
        value={createPostMutation.isPending ? 'Creating...' : 'Create'}
        disabled={!title || createPostMutation.isPending}
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
