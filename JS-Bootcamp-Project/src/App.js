import React, { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import db from './config/firebase-setup';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore/lite";
import './App.css';
import $ from 'jquery'

//Components
// import Search from './Components/SearchComponent';
// import ImageCard from './Components/RecipeCardComponent';

//Pages
import LikePage from './pages/Like-page';
import Home from './pages/Home';
import Us from './pages/AboutUs';
import Clock from './pages/Clock';


export default class App extends Component {
  
  //This is will display the Food ID that has been saved in the Firebase Console under favorites
  showFavorites = async () => {
    const collectData = collection(db, 'favorites')
    const fetchingData = await getDocs(collectData)
    
    const favoritesData = [];
    
    favoritesData.forEach((doc) => {
      fetchingData.push()
    })
  }

  removeFromFavorite = async foodID => {
    const collectData = collection(db, "favorites");
    const fetchingData = doc(collectData, foodID);
    await deleteDoc(fetchingData);
    this.showFavorites();
  }

  darkModeToggle = () => {
    let targetBody = document.querySelector("#root");
    let targetApp = document.querySelector(".App-header");
    targetBody.classList.toggle("toggleDarkMode");
    targetApp.classList.toggle("appDark");

  }

  update = () => {
    this.forceUpdate();
  }

  viewFavorite= () => {
    console.log("test 1 is complete");
    setTimeout(() => {
      $(".loader-wrapper").fadeOut("slow");
      console.log("test loading");
    }, 3000);
  }

  //This will render different routes that have been linked to its appropiate tabs
  render() {
    return (
      <main>
        <div className="App">
            <nav className="Heading">
              <NavLink exact="true" to='/'>Home</NavLink>
              <NavLink onClick={() => this.viewFavorite()} id="favorite" exact="true" to='/favorites'>Favorite</NavLink>
              <NavLink exact="true" to='/about-us'>About us</NavLink>
              <NavLink exact="true" to='/clock'>Clock</NavLink>
              <div className='darkMode'>
                <label className='switch'>
                  <input defaultChecked={false} className="darkInput" type="checkbox" onChange={()=> {this.darkModeToggle()}}/>
                  <span className='slider round'></span>
                </label>
                <h5>Dark Mode</h5>
              </div>
            </nav>
          <div className="App-header">
            <div className="d-flex flex-column">
              <div>
                <Routes>
                  <Route exact="true" path='/' element={<Home />} />
                  <Route exact="true" path='/favorites' element={<LikePage />} />
                  <Route exact="true" path='/about-us' element={<Us />} />
                  <Route exact="true" path='/clock' element={<Clock />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } 
}


