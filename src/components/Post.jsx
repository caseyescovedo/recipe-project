import PropTypes from 'prop-types';
import { User } from './User.jsx';
import { IoMdCloseCircle } from 'react-icons/io';

export function Post({ _id, title, imageUrl, contents, author, handleDelete }) {
  return (
    <article
      style={{
        border: '5px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        width: '300px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '0.5rem',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: 28 }}>{title}</h3>
        <IoMdCloseCircle style={{ fontSize: 28 }} onClick={handleDelete} />
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            maxWidth: '300px',
          }}
        />
      )}
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
  imageUrl: PropTypes.string,
  author: PropTypes.string,
};
