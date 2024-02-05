import RecipeCard from "./components/Recipecard";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeText, setRecipeText] = useState("");

  let eventSourceRef = useRef(null);

  useEffect(() => {
    if (recipeData) {
    }
  }, [recipeData]);

  const initializeEvenStream = () => {
    const recipeInputs = { ...recipeData };

    const queryParams = new URLSearchParams(recipeInputs).toString();
    const url = `http://localhost:3001/recipeStream?${queryParams}`;
    eventSourceRef.current = new EventSource(url);
    eventSourceRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.action === "close") {
        closeEventStream();
      } else if (data.action === "chunk") {
        setRecipeText((prev) => prev + data.chunk);
      }
    };
  };

  async function onSubmit(data) {
    setRecipeText("");
    setRecipeData(data);
  }

  return (
    <>
      <RecipeCard />
      <div>Test</div>
    </>
  );
}
