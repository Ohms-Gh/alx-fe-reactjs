import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (!recommendations.length) {
    return <p>No recommendations yet. Try adding favorites ⭐</p>;
  }

  return (
    <div>
      <h2>🎯 Recommended For You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
