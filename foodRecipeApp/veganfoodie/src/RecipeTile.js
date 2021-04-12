import React from 'react'
import "./RecipeTile.css"

export default function RecipeTile({ recipe }) {
    return (
 
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)!=null && (
    <div className="recipeTile">
    <p className="label card__title">{recipe["recipe"]["label"]}</p>
    <img className="image" src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]}/>
    <button className="cardButton">view Recipe</button>
  </div> 
 
    )
  );
}