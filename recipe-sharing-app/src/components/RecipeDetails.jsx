import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to recipes</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '1rem' }}>
        <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>
          Edit
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        {isFavorite ? (
          <button onClick={() => removeFavorite(recipe.id)}>💔 Remove Favorite</button>
        ) : (
          <button onClick={() => addFavorite(recipe.id)}>⭐ Add to Favorites</button>
        )}
      </div>

      <hr />
      <Link to="/">← Back to recipes</Link>
    </div>
  );
};

export default RecipeDetails;
