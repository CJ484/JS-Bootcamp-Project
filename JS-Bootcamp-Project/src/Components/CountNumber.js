import React from "react";
import db from "../config/firebase-setup";
import { collection, getDocs } from "firebase/firestore/lite";

//This Component will Up the Contribution Number every second by a random number

const collectData = collection(db, "personCount")
export default class ContributionCount extends React.Component {
    state = {
        count: []
    }

    componentDidMount() {
        this.showNumber()
    }
    
    showNumber = async () => {
        const ParsedNumber = await getDocs(collectData);
        console.log(ParsedNumber);
        ParsedNumber.forEach(doc => {
            console.log(doc);
            const eachDoc = {
                id: doc.id,
                number: doc.data().recipeNumber
            }
            console.log(eachDoc);
        })
        
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }

}