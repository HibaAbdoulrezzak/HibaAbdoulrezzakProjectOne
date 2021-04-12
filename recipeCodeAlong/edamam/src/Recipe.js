import React from 'react';
import style from  "./recipe.module.css";

const Recipe = ({title, image, ingredients }) => {
    return (
        <div>
            <h1 className={style.recipe}>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
             </ul>
            <img className={`${image}` }src={image} style={{ width: 650 }}
alt="food" />
        </div>
    );
}

export default Recipe;