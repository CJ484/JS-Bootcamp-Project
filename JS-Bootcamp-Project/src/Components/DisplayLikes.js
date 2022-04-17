import React, { useState } from "react";

const ListData = (props) => {
    // const activate = useState(true);
    const favFoodCard = props.dataReceived.map((object) => {
      console.log(object);
        // activate(false)
        return (
        <div key={object.key} className="flex card p-3 m-3 col-md-3">
            <img src={object.img} alt={object.id} />
            <h3>{object.title}</h3>
            <button>
            <i className="fas fa-heart"></i>
            </button>
        </div>
        );
    });

    return (
        favFoodCard
    );


}

export default ListData;