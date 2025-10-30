import React from 'react';

const ItemInput = () => {
  return (
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
  );
};

export default ItemInput;
