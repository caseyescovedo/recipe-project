import PropTypes from 'prop-types';
import { User } from './User.jsx';

export function Post({ title, contents, author }) {
  return (
    <article
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>
      <div style={{ marginBottom: '0.5rem' }}>{contents}</div>
      {author && (
        <em style={{ color: '#555' }}>
          <br />
          Written by <User id={author} />
        </em>
      )}
    </article>
  );
}
Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
};
