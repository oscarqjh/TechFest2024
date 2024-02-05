import { useState } from "react";

export default function RecipeCard({ onSubmit }) {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setmealType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexity, setComplexity] = useState("");

  const handleSubmit = () => {
    const recipeData = {
      ingredients,
      mealType,
      cuisine,
      cookingTime,
      complexity,
    };
    console.log(recipeData);
  };

  return (
    <>
      <div>Wassup Nignogs</div>

      <input
        id="ingredients"
        type="text"
        placeholder="Enter ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <div></div>

      <select
        id="mealType"
        value={mealType}
        onChange={(e) => setmealType(e.target.value)}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>

      <div></div>

      <input
        id="cuisine"
        type="text"
        placeholder="e.g., Chinese, Japanese"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />

      <div></div>

      <select
        id="cookingTime"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      >
        <option value="Less than 30 mins">Less than 30 mins</option>
        <option value="Less than 1 hour">Less than 1 hour</option>
        <option value="Less than 2 hours">Less than 2 hours</option>
        <option value="More than 2 hours">More than 2 hours</option>
      </select>

      <div></div>

      <select
        id="complexity"
        value={complexity}
        onChange={(e) => setComplexity(e.target.value)}
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <div></div>

      <button type="button" onClick={handleSubmit}>
        Let's get cookin'
      </button>
    </>
  );
}
