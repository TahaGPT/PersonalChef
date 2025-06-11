export default function IngredientList(props) {
    const ingredientList = props.ingredients.map(function (ingredient) {
        return <li key={ingredient}>{ingredient}</li>;
      });
  return (
   <section className = "Ing">
        <h2>Ingredients on Hand : </h2>
        <ul className = "ingredientList" aria-live = "polite">{ingredientList}</ul>
        {props.ingredients.length > 3 ? <div className="RecipeReady">
        <div ref={props.ref} className="RecipeReadyText">
            <h3>Ready for a Recipe?</h3>
            <p>Generate a Recipe from your List of Ingredients</p>
          </div>
          <button onClick={props.getRecipe}>Get a Recipe</button>
        </div> : null}
      </section>
  );
}