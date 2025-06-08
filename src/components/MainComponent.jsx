import React from "react";

export default function MainComponent() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientList = ingredients.map(function (ingredient) {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function addItem(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients(function (prevIngredientList) {
      return [...prevIngredientList, newIngredient];
    });
  }



  return (
    <main>
      <form className="FormDiv" onSubmit={addItem}>
        <input
          className="FormInput"
          type="text"
          placeholder="e.g. Chilli"
          aria-label="Add an ingredient"
          name="ingredient"
        />
        <button className="Button">+ Add Ingredient</button>
      </form>

      {ingredientList.length ? <section className = "Ing">
        <h2>Ingredients on Hand : </h2>
        <ul className = "ingredientList" aria-live = "polite">{ingredientList}</ul>
        {ingredientList.length > 4 ? <div className="RecipeReady">
          <div className="RecipeReadyText">
            <h3>Ready for a Recipe?</h3>
            <p>Generate a Recipe from your List of Ingredients</p>
          </div>
          <button>Get a Recipe</button>
        </div> : null}
      </section> : null}
    </main>
  );
}
