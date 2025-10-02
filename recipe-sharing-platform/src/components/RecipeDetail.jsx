import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-indigo-600 hover:underline mb-6 inline-block">
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ingredients Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">📝 Ingredients</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Instructions Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">👩‍🍳 Instructions</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
