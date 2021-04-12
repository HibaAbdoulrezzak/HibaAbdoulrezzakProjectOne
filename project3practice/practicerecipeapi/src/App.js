import React from 'react';
import Axios from 'axios'
import './App.css';

 const App = () => {

  const APP_ID = `8fee8da7`;

  const APP_KEY = `16a7e42a4b78d22f958ab8d59c8b2e20`;
  
  const url = `https://api.edamam.com/search`;

  const getData = async () => { 
  const result = await Axios.get(url);

    console.log(result)
  } 
  
  return (
    <div className="App">
  <h1 onClick={getData}> food searching app </h1>


    </div>
  );
}

export default App;
