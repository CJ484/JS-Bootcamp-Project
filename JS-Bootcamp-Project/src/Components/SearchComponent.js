import React from "react";
import db from "../config/firebase-setup";
import { addDoc, collection } from "firebase/firestore/lite";

//This entire document serves as the search box that will generate the results given by the API
//

const collectData = collection(db, 'favorites')

export default class Search extends React.Component {
  state = {
    input: "",
    recipe: [],
  }

  componentDidMount() {
    
  }

  recipeSearch = (searchIndex) => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=77ece5c1f850423c989b8d31311e036a&query=${searchIndex}&includeIngredients`;
    fetch(apiUrl)
      .then((results) => {
        return results.json();
      })
      .then((parsedReponse) => {
        this.setState(
          {
            recipe: parsedReponse.results,
          },
          () => {
            console.log(this.state.recipe);
          }
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  onChange = (text) => {
    this.setState({
      input: text.target.value,
    });
  }

  onSubmit = (text) => {
    text.preventDefault();
    this.componentDidMount(this.recipeSearch(this.state.input))
    this.setState({
        input: ''
    })
  }

  addToFavorites = async (object) => {
    await addDoc(collectData, {
      favFoodId: object.id 
    })
  }

  render() {
    const foodCard = this.state.recipe.map((object, i) => {
        return (
          <div key={object.id} className="card p-3 m-3 col-md-3">
            <img src={object.image} alt={object.id} />
            <h3>{object.title}</h3>
            <button><i class="fas fa-heart"></i></button>
          </div>
        );
    })
    
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                <input value={this.state.input} placeholder="Search..." className="form-control" onChange={this.onChange}></input>
                <div className="input-group-append">
                    <button className="btn btn-lg" type="submit"><i className="fas fa-search"></i></button>
                </div>
                </div>
            </form>
            <div className="row d-flex justify-content-md-center">{foodCard.length > 0 ? foodCard : ''}</div>
        </div>
    );
  }
}