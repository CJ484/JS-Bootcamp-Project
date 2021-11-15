import React, { Component } from 'react';
import Search from './Components/First';
import Likes from './Components/Second';
import ImageCard from './Components/Third';
import './App.css';
import concept from './apple.svg'

export default class App extends Component {

  state = {
    recipe: {}
  }

  componentDidMount() {
    // this.recipeSearch('garlic');
    // this.ingredientList(4632);
  }

  ingredientList = (foodId) => {
    const apiUrl = `https://api.spoonacular.com/recipes/${foodId}/card`
    fetch(apiUrl)
    .then((result) => {
      console.log(result)
      this.setState({
        recipe: result
      })
    })
    .catch((error) => {
      console.log('error', error);
    })
  }

  recipeSearch = (searchIndex) => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=77ece5c1f850423c989b8d31311e036a&query=${searchIndex}&includeIngredients`
    fetch(apiUrl)
    .then((results) => {
      return results.json();
    })
    .then((parsedReponse) => {
      this.setState({
        recipe: parsedReponse
      }, () => {
        console.log(this.state.recipe);
      })
    })
    .catch((error) => {
      console.log('error', error);
    })
  }

  render() {
    return (
      <main className="p-1">
        <div className="App">
          <div className="App-header">
            <div className="d-flex">
              <Search />
              <Likes />
            </div>  
            <img src={concept} className="App-logo" alt="logo" />
            <h1>Foodie</h1>
            <ImageCard />
          </div>
        </div>
      </main>
    );
  } 
}


