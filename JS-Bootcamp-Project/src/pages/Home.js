import React from "react";
import concept from '../apple.svg'
import Search from '../Components/SearchComponent'
// import ImageCard from "../Components/RecipeCardComponent";


export default function Home(props) {
  
    return (
      <div className="home">
        <h1>Rev up those Fryers, Cause I am one hungry Big Chungus</h1>
        <img src={concept} className="App-logo" alt="logo" />
        <h2>Foodie</h2>
        {/* <ImageCard /> */}
        <h5>Search from Spoonacular Largest Recipe Database</h5>
        <Search />
      </div>
    );
}