import React from "react";

function ToyCard({toy, onDelete, onLike}) {

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => onDelete(toy))
  }

  function handleLikes() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: ++toy.likes
      }),
    })
    .then(r => r.json())
    .then(toy => onLike(toy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

//when like is clicked, make a patch request to the db to update likes, and update dom to reflect change

//add onClick event listener to like button
//onClick makes a fetch patch request to toys/item.id
//body contains an obj with key value pair to update using ++likes
//in app pass down a cb that takes the patched item as an argument
//use fetch resp to pass patched item as argument to cb
//cb creates a new array that maps over toyList and setsToyList on the new array