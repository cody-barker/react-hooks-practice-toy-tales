import React, {useState} from "react";

function ToyForm({toyList, setToyList}) {

    const [toyName, setToyName] = useState("")
    const [toyImage, setToyImage] = useState("")
    

    function handleNameChange(e) {
      setToyName(e.target.value)
    }

    function handleImageChange(e) {
      setToyImage(e.target.value)
    }

    function handleSubmit(e){
      e.preventDefault()
      const newToy = {
        name: toyName,
        image: toyImage,
        likes: 0
      }
      const updatedList = [...toyList, newToy]
      fetch('http://localhost:3001/toys', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newToy)
      })
      .then(r => r.json())
      .then(() => setToyList(updatedList))
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input onChange={handleImageChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

//create state variables for the form inputs
//on submit, use state to assign key value pairs to new obj
//make a post request to the db with the new obj
//call setToyList on a new array which is [...toyList, newToyObj] using a callback from App