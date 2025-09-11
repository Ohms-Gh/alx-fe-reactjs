import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!favorites.length) {
    return <p>No favorites yet. Add some ⭐</p>;
  }

  return (
    <div>
      <h2>⭐ My Favorites</h2>
      {favorites.map((recipe) =>
        recipe ? (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
          </div>
        ) : null
      )}
    </div>
  );
};

export default FavoritesList;
