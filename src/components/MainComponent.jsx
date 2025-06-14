import React from "react";
import IngredientList from "./MainComponents/IngredientList.jsx";
import Recipe from "./MainComponents/Recipe";
import { callRecipe } from "./API.jsx";
export default function MainComponent() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);


  React.useEffect(function(){

    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

  }, [recipe] )

  function addItem(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(function (prevIngredientList) {
      return [...prevIngredientList, newIngredient];
    });
  }

  async function getRecipe() {
    const myRecipe = await callRecipe(ingredients);
    setRecipe(myRecipe);
  }



  return (
    <main>
      <form className="FormDiv" action={addItem}>
        <input
          className="FormInput"
          type="text"
          placeholder="e.g. Chilli"
          aria-label="Add an ingredient"
          name="ingredient"
        />
        <button className="Button">+ Add Ingredient</button>
      </form>

      {ingredients.length > 0 && <IngredientList ref = {recipeSection} ingredients={ingredients} getRecipe={getRecipe} />}
      {recipe && <Recipe recipe = {recipe} />}
    </main>
  );
}
