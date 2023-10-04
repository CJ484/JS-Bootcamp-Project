import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import ListData from "./DisplayLikes";

//This Component will receive all data from the firebase marked for the recipes that the users have liked
const firebaseConfig = {
  apiKey: "AIzaSyBWZEOM4oRKshYkUiQs482Dea09NRYslQo",
  authDomain: "js914-final-project.firebaseapp.com",
  projectId: "js914-final-project",
  storageBucket: "js914-final-project.appspot.com",
  messagingSenderId: "942008992910",
  appId: "1:942008992910:web:e7598137e1e6162525f5df", 
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class Likes extends React.Component {
    state = {
        List: [],
        dataReceived: null
    }

    componentDidMount() {
        console.log(this)
        this.displayData();
    }
    
    async displayData () {
        const collectData = collection(db, 'favorites');
        const awaitData = await getDocs(collectData);
        const holdThat = [];

        awaitData.forEach((doc) => {
            const eachFavorite = {
                id: doc.id,
                foodId: doc.data().favFoodId
            }
            holdThat.push(eachFavorite);
        });
        holdThat.forEach((doc) => {
            const idNumber = doc.foodId;
            const apiUrl = `https://api.spoonacular.com/recipes/${idNumber}/information?apiKey=77ece5c1f850423c989b8d31311e036a`;
            fetch(apiUrl)
            .then((results) => {
                return results.json();
            })
            .then((parsedResponse) => {
                    const keyId = doc.id;
                    const eachIdFav = {
                        title: parsedResponse.title,
                        img: parsedResponse.image,
                        id: parsedResponse.id,
                        key: keyId
                    };
                    this.state.List.push(eachIdFav);
                })
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.dataReceived = false;
            }
        )
    }

    update = () => {
      this.forceUpdate();
    }

    render() {

        return (
          <div>
            <h2>This is a render of the Likes Component...</h2>
            <div className="listData d-flex justify-content-md-center">
                <ListData dataReceived={this.state.List}/>
            </div>
            <div></div>
            <button onClick={this.update}>Click!!</button>
          <div className="loader-wrapper">
            <span className="loader"><span className="loader-inner"></span></span>
          </div>
          </div>
        );
    }


}