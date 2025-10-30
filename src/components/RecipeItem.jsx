import React from 'react';

const RecipeItem = () => {
  const [ingredient, setIngredient] = React.useState('');
  return (
    <div>
      <label htmlFor="recipe-item">Ingredient: </label>
      <input
        type="text"
        name="image-url"
        id="image-url"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        style={{
          marginTop: '4px',
          border: '1px solid #888',
          borderRadius: '4px',
          padding: '4px 8px',
        }}
      />
    </div>
  );
};

export default RecipeItem;
