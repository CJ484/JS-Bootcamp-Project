import React from "react";

export default class Likes extends React.Component {
    state = {
        liked: ''
    }

    render() {
        return (
            <div className="">
                <i class="fas fa-heart"></i>
            </div>
        )
    }


}