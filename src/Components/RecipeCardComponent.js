import React from "react";

//This Component will generate a jpg image that is created by the API and shows the ingredients and instruction

export default class ImageCard extends React.Component {

    state = {
        foodId: ''
    }

    componentDidMount() {
        this.recipeCard('4623')
    }

    recipeCard = (foodId) => {
        const apiUrl = `https://api.spoonacular.com/recipes/${foodId}/card?apiKey=77ece5c1f850423c989b8d31311e036a`;
        fetch(apiUrl)
            .then((Response) => {
                return Response.json();
            })
            .then((ParsedResponse) => {
                console.log(ParsedResponse)
                this.setState({
                    foodId: ParsedResponse.url
                })
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    render() {
        return (
            <div>
                <h2>This is a test of the Recipe card Component</h2>
                <img src={`${this.state.foodId}`} alt="Food item" />
            </div>
        ) 
    }
}