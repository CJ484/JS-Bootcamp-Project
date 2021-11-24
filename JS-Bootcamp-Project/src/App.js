import React, { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import db from './config/firebase-setup';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore/lite";
import './App.css';

//Components
// import Search from './Components/SearchComponent';
// import ImageCard from './Components/RecipeCardComponent';

//Pages
import LikePage from './pages/Like-page';
import Home from './pages/Home';
import Us from './pages/AboutUs';


export default class App extends Component {
  
  //This is will display the Food ID that has been saved in the Firebase Console under favorites
  showFavorites = async () => {
    const collectData = collection(db, 'favorites')
    const fetchingData = await getDocs(collectData)
    
    const favoritesData = [];
    
    favoritesData.forEach(doc => {
      fetchingData.push()
    })
  }

  removeFromFavorite = async foodID => {
    const collectData = collection(db, "favorites");
    const fetchingData = doc(collectData, foodID);
    await deleteDoc(fetchingData);
    this.showFavorites();
  }

  //This will render different routes that have been linked to its appropiate tabs
  render() {
    return (
      <main>
        <div className="App">
            <nav className="Heading">
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to ='/favorites'>Favorite</NavLink>
              <NavLink exact to='/about-us'>About us</NavLink>
            </nav>
          <div className="App-header">
            <div className="d-flex flex-column">
              <div>
                <Routes>
                  <Route exact path ='/' element={<Home />} />
                  <Route exact path='/favorites' element={<LikePage/>} />
                  <Route exact path='/about-us' element={<Us />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } 
}


