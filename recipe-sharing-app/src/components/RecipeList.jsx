import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (!recipes.length) {
    return <p>No matching recipes. Try another search.</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card" style={{ marginBottom: '1rem' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div>
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>
              Edit
            </Link>
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
