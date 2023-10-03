import React from "react";
import db from "../config/firebase-setup";
import { collection, doc, deleteDoc } from "firebase/firestore/lite";

const ListData = (props) => {
  const deleteItem = async (id) => {
    console.log("Deleting Selected Food...");
    const collectData = collection(db, "favorites");
    const messageDoc = doc(collectData, id);
    await deleteDoc(messageDoc);
    window.location.reload(false)
  }

  const favFoodCard = props.dataReceived.map((object) => {
      return (
        <div key={object.key} className="favorites flex card p-3 m-3 col-md-3">
          <button onClick={() => {deleteItem(object.key)}} className="deleteButton">
            <i className="fa-solid fa-circle-xmark fa-2x"></i>
          </button>
          <img src={object.img} alt={object.title} />
          <h3>{object.title}</h3>
          <button className="shareButton">
            <i className="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      );
  });

    return (
        favFoodCard
    );


}

export default ListData;