import { useEffect, useState } from "react";
import OpenAIService from "../api/service/openAIService";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jellyTriangle } from "ldrs";

import "./css/Recipecard.css";
import { Link } from "react-router-dom";

export default function RecipeCard() {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setmealType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexity, setComplexity] = useState("");
  const [recipe, setRecipe] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  jellyTriangle.register();

  const handleSubmit = async () => {
    setIsLoading(true);
    const recipeData = {
      ingredients,
      mealType,
      cuisine,
      cookingTime,
      complexity,
    };
    console.log(recipeData);
    try {
      const response = await OpenAIService.getRecipe(recipeData);
      setIsLoading(false);
      setRecipe(response.data.choices[0].message.content);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (
      ingredients === "" ||
      mealType === "" ||
      cuisine === "" ||
      cookingTime === "" ||
      complexity === ""
    ) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [ingredients, mealType, cuisine, cookingTime, complexity]);

  return (
    <>
      <div className="header">
        <Link to={"/"} className="back-button">
          <svg width="18px" height="18px" viewBox="0 0 24 24">
            <path
              vectorEffect="non-scaling-stroke"
              d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
            ></path>
          </svg>
          <div className="text">BACK</div>
        </Link>
      </div>
      <div className="footer">
        <span>
          made with 💓 by{" "}
          <a href="https://devpost.com/software/frai" target="_blank">
            Team BluTech
          </a>
        </span>
      </div>
      <div className="recipe-page-wrapper opacity-60">
        <Card className="w-[350px] bg-stone-800 opacity-80 rounded-xl">
          <CardHeader>
            <CardTitle>Recipe Generator</CardTitle>
            <CardDescription>Generate unique recipes!</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Ingredients</Label>
                  <Input
                    id="name"
                    placeholder="Enter ingredients..."
                    autoComplete="off"
                    onChange={(e) => setIngredients(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="mealType">Meal Type</Label>
                  <Select onValueChange={(value) => setmealType(value)}>
                    <SelectTrigger id="mealType">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="bg-stone-800 opacity-80"
                    >
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="lunch">Lunch</SelectItem>
                      <SelectItem value="dinner">Dinner</SelectItem>
                      <SelectItem value="snack">Snack</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Cuisine</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Chinese, Japanese..."
                    autoComplete="off"
                    onChange={(e) => setCuisine(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="cookingType">cookingTime</Label>
                  <Select onValueChange={(value) => setCookingTime(value)}>
                    <SelectTrigger id="cookingType">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="bg-stone-800 opacity-80"
                    >
                      <SelectItem value="lessThan30">
                        Less than 30 mins
                      </SelectItem>
                      <SelectItem value="lessThan1">
                        Less than 1 hour
                      </SelectItem>
                      <SelectItem value="lessThan2">
                        Less than 2 hours
                      </SelectItem>
                      <SelectItem value="moreThan2">
                        More than 2 hours
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="complexity">Complexity</Label>
                  <Select onValueChange={(value) => setComplexity(value)}>
                    <SelectTrigger id="complexity">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="bg-stone-800 opacity-80"
                    >
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={handleSubmit}
              variant="outline"
              disabled={buttonDisable}
            >
              Lets get cookin'
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[550px] min-h-[620px] max-h-[620px] bg-stone-800 opacity-80 rounded-xl m-10">
          <CardHeader>
            <CardTitle className="flex justify-center">Recipe</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center max-h-[500px] flex flex-col">
            {isLoading ? (
              <div className="h-[400px] flex flex-col justify-center items-center">
                <l-jelly-triangle
                  size="30"
                  speed="1.75"
                  color="white"
                ></l-jelly-triangle>
              </div>
            ) : recipe === "" ? (
              <div className="text-center">Recipe will be shown here...</div>
            ) : (
              <div className="whitespace-pre-line overflow-auto">{recipe}</div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
