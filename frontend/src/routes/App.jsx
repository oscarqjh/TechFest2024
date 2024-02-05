import RecipeCard from "../components/Recipecard";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeText, setRecipeText] = useState("");

  useEffect(() => {
    if (recipeData) {
    }
  }, [recipeData]);

  async function onSubmit(data) {
    setRecipeText("");
    setRecipeData(data);
  }

  return (
    <>
      <RecipeCard />
    </>
  );
}
