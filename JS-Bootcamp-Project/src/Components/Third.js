import React from "react";

export default class ImageCard extends React.Component {

    state = {
        foodId: ''
    }

    componentDidMount() {
        this.ingredientList('4632')
    }

    ingredientList = (foodId) => {
        const apiUrl = `https://api.spoonacular.com/recipes/?apiKey=77ece5c1f850423c989b8d31311e036a&${foodId}/card`;
        fetch(apiUrl)
            .then((Response) => {
                console.log(Response)
                this.setState({
                    foodId: Response.url
                }, () => {
                    console.log(this.state.foodId);
                })
      
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    render() {
        return (
            <h1>hi</h1>
            // <img src={`${this.state.foodId}`} />             // <---This is What im having trouble with!!
        ) 
    }
}