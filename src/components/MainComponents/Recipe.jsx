import React from "react";
import ReactMarkdown from "react-markdown"; 
export default function Recipe(props) {
    return (
      <section className = "RecipeContainer">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </section>
    );
}
