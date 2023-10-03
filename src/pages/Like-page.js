import React from "react";
import Likes from "../Components/LikesComponent";

export default function LikePage(props) {
    return (
      <div className="Like-Page">
        <h1>Welcome to your Favorites Page</h1>
        <Likes />
      </div>
    );
}