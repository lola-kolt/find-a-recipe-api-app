import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './searchIcon.png';
import RecipesComponent from './RecipesComponent';

function App() {

  const MY_ID = "7744db00";
  const MY_KEY = "b3271e9a41f71f4eb4def1e75dd84a0b";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");


  useEffect(() => {
    const getAPI = async() => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
  }
    getAPI();
  }, [wordSubmitted]);


  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }


  return(
    <div className="App">
      <div className=" container bcImage"></div>
      <div className='container'>        
        <div className='heading flex'>
          <h1>Find a recipe</h1>
        </div>
        <div className='heading flex'>
          <p>Enter a product like "avocado" or "chicken" to see how it works. You can select multiple products.</p>
        </div>
        <form className='flex' onSubmit={ finalSearch }>
          <div className='flex'>
            <input type="text"
            placeholder='Search.....' 
            onChange={ myRecipeSearch }
            value={ mySearch }/>
          </div>
          <button>
            <img src={ searchIcon } alt="searchIcon" />
          </button>
        </form>
        <div>
          {myRecipes.map((element, index) => (
            <RecipesComponent 
            key={ index }
            label={ element.recipe.label }
            image={ element.recipe.image }
            calories={ element.recipe.calories }
            ingredients={ element.recipe.ingredientLines } />
          ))}
        </div>
      </div>
    </div>
  )
}




export default App;
