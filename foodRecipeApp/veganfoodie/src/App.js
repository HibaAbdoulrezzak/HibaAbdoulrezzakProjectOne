import './App.css';
import './key.js';
import Axios from "axios";
import { useState} from "react";
import RecipeTile from "./RecipeTile";
import headerimg from "./assets/headerimg.png"
// import firebase from './firebase'


function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])
  const [healthLabel, setHealthLabel] = useState("vegan")

  const YOUR_APP_ID = "96a47f9c";
  const YOUR_APP_KEY = "1099caea269ff53fff0d467b2dbbe6a8";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
      <h1 onClick={getRecipes}></h1>
      <img className="headerImage" src={headerimg} alt="banner image" />

      <div className="textAreaWrapper">
      <p className="headerText">Hey! You don't have to go completely plant-based, but decreasing your meat consumption even once a week could change the world.</p>
      <p className="textArea"> Adopting a vegan diet decreases air pollution by saving carbon dioxide emissions. According to the Veganism Impact Report, the world would see a 70% decrease in CO2 food-related emissions if the current meat-eating population were to go vegan.</p>
      <input className="submitButton" type="submit" value="learn more" />
      </div>
      
      <form className="appSearchForm" onSubmit={onSubmit}>
        <input 
        type="text" 
        className="appInput"
        placeholder="enter ingredient..." 
        value={query}
         onChange={(e) => setQuery(e.target.value)} />
      <input className="submitButton" type="submit" value="search" />
   
   
     <select className="healthLabels"> 
     <option onClick={() => setHealthLabel("vegetarian")}>Vegetarian </option>
     <option onClick={() => setHealthLabel("vegan")}>Vegan </option>

      </select>

      </form>

       <div className="imageWrapper">
      {recipes.map((recipe) => {
      return <RecipeTile recipe={recipe}/>
      })}
       </div>
    </div>
  );
}

export default App;
