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
    page: 0
  }

  componentDidMount() {
    // this.recipeSearch('pasta', this.state.page);
  }

  //Receives the response from the Spoonacular API and puts it in the state.repice
  recipeSearch = (searchIndex, page = 0) => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=77ece5c1f850423c989b8d31311e036a&query=${searchIndex}&includeIngredients&number=9&offset=${page}`;
    fetch(apiUrl)
      .then((results) => {
        
        return results.json();
      })
      .then((parsedResponse) => {
        this.setState(
          {
            recipe: parsedResponse.results,
          },
          () => {
            console.log(parsedResponse);
            console.log(this.state.recipe);
          }
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  //Adds the users input from the search box into the api irl to return what the user wants
  onChange = (text) => {
    this.setState({
      input: text.target.value,
    });
  }

  onSubmit = (text) => {
    text.preventDefault();
    this.componentDidMount(this.recipeSearch(this.state.input, this.state.page))
    this.setState({
        input: ''
    })
  }

  nextResults = () => {
    this.setState({ page: this.state.page + 9 });
    this.recipeSearch('pasta', this.state.page);
    window.scrollTo(0, 0);
  }

  backResults = () => {
    this.setState({ page: this.state.page - 9});
    this.recipeSearch('pasta', this.state.page);
    window.scrollTo(0, 0);
  }

  addToFavorites = async (object) => {
    await addDoc(collectData, {
      favFoodId: object 
    })
    // console.log(object);
  }

  render() {
    const foodCard = this.state.recipe.map((object, i) => {
      console.log(object);
        return (
          <div key={object.id} className="card p-3 m-3 col-md-3">
            <img src={object.image} alt={object.id} />
            <h3>{object.title}</h3>
            <button onClick={() => {this.addToFavorites(object.id)}}><i className="fas fa-heart"></i></button>
          </div>
        );
    })
    
    return (
        <div id="searchBar">
            <form onSubmit={this.onSubmit}>
                <div className="input-group justify-content-center">
                  <input value={this.state.input} placeholder="Search..." className="form-control" onChange={this.onChange}></input>
                  <div className="input-group-append">
                      <button className="btn btn-lg" type="submit"><i className="fas fa-search"></i></button>
                  </div>
                </div>
            </form>
            <div className="row d-flex justify-content-md-center">
              {foodCard.length > 0 ? foodCard : ''}
              <div className="d-flex justify-content-around">
                {/* <a><button className="btn" onClick={this.nextResults}><h4>Back</h4></button></a>
                <a><button className="btn" onClick={this.nextResults}><h4>Next</h4></button></a> */}
              </div>
            </div>
        </div>
    );
  }
}