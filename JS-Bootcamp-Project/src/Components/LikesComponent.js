import React from "react";
import db from "../config/firebase-setup";
import { collection, getDocs } from "firebase/firestore/lite";

//This Component will receive all data from the firebase marked for the recipes that the users have liked

export default class Likes extends React.Component {
    state = {
        recipe: []
    }

    componentDidMount() {
        
    }
    
    displayData = async () => {
        const collectData = collection(db, 'favorites');

        const awaitData = await getDocs(collectData);

        const favoriteRecipe =[];

        awaitData.forEach(doc => {
            const eachFavorite = {
                id: doc.id
            }
            favoriteRecipe.push(eachFavorite);
        });

        this.setState({
            favoriteRecipe: favoriteRecipe
        })

    }


    render() {
        // const foodCard = this.state.recipe.map((object, i) => {
        //     return (
        //     <div key={object.id} className="card p-3 m-3 col-md-3">
        //         <img src={object.image} alt={object.id} />
        //         <h3>{object.title}</h3>
        //         <button>
        //         <i class="fas fa-heart"></i>
        //         </button>
        //     </div>
        //     );
        // });

        return (
            <div>
                <h2>This is a render of the Likes Component</h2>
                
            </div>
        )
    }


}