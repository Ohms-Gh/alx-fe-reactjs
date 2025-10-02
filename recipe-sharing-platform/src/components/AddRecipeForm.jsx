import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients (comma separated)";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split("\n").map((step) => step.trim())
    };

    console.log("✅ New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">➕ Add New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 space-y-6 md:p-10"
      >
        {/* Title */}
        <div className="md:flex md:items-center md:space-x-4">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0 md:w-1/3">
            Recipe Title
          </label>
          <div className="w-full md:w-2/3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
        </div>

        {/* Ingredients */}
        <div className="md:flex md:items-start md:space-x-4">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0 md:w-1/3">
            Ingredients <span className="text-sm text-gray-500">(comma separated)</span>
          </label>
          <div className="w-full md:w-2/3">
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="3"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="md:flex md:items-start md:space-x-4">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0 md:w-1/3">
            Preparation Steps <span className="text-sm text-gray-500">(one per line)</span>
          </label>
          <div className="w-full md:w-2/3">
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="4"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.steps ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
