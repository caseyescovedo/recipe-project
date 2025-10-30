import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '../api/posts.js';
export function PostList({ posts = [] }) {
  const [token] = useAuth();
  const queryClient = useQueryClient();
  const deletePostMutation = useMutation({
    mutationFn: (postId) => deletePost(token, postId),
    onSuccess: () =>
      queryClient.invalidateQueries(['posts', { author, sortBy, sortOrder }]),
  });
  const handleDelete = (postId) => {
    deletePostMutation.mutate(postId);
  };
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Post
            {...post}
            handleDelete={() => handleDelete(post._id)}
            id={post._id}
          />
          <hr />
        </Fragment>
      ))}
    </div>
  );
}
PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
};
