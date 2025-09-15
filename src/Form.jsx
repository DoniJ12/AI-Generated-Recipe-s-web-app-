import React from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import RecipeList from "./components/RecipeList";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipeShown, setRecipeShown] = React.useState(false);

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function getRecipe() {
    setRecipeShown((prevRecipe) => !prevRecipe);
  }

  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <RecipeList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
