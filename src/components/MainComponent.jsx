export default function MainComponent() {
  return (
    <main>
      <form className = "FormDiv">
        <input
          className="FormInput"
          type="text"
          placeholder="e.g. Chilli"
          aria-label="Add an ingredient"
        />
        <button className="Button">
          + Add Ingredient
        </button>
      </form>
    </main>
  );
}
