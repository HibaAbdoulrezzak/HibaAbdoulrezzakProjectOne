import React, {useEffect, useState} from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => { 

  const APP_ID = "96a47f9c";
  const APP_KEY = "1099caea269ff53fff0d467b2dbbe6a8";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')


 useEffect(() => {
   getRecipes();
 }, [query]);

 //empty array is the second argument of the useEffect
 //makes the request to fetch data just once 

 const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

  };

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}


const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}

  return(
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} onChange={updateSearch}  />
        <button className="search-button" type="submit">
      Search
       </button>
     </form>

     <div className="recipes">
     {recipes.map(recipe => (
       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label} 
        image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
        />

     ))}
       </div>
    </div>
  );
};


export default App;
