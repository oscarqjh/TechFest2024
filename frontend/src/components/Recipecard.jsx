export default function RecipeCard({onSubmit}){

    const [ingredients, setIngredients] =  useState ("");
    const [mealType, setmealType] =  useState ("");
    const [cuisine, setCuisine] =  useState ("")
    const [cookingTime, setCookingTime] =  useState ("")
    const [complexity, setComplexity] =  useState ("")


const handleSubmit = () => {
    const recipeData = {
        ingredients,
        mealType,
        cuisine,
        cookingTime,
        complextiy
    };
    onSubmit(recipeData);
};

return (
    <>
    <div>title</div>
    
    </>
)
}
