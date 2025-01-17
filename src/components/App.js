import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(list => setToyList(list))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onDelete(deletedItem) {
    const newToyList = toyList.filter(item => item.id !== deletedItem.id)
    setToyList(newToyList)
  }

  function onLike(likedItem) {
    const updatedList = toyList.map(toy => {
      if (toy.id === likedItem.id) {
        return likedItem
      } else {
        return toy
      }
    })
    setToyList(updatedList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toyList={toyList} setToyList={setToyList}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onDelete={onDelete} onLike={onLike}/>
    </>
  );
}

export default App;


/**
 * App
*    Header
*    Toy Form
*    Toy Container
*      Toy Cards
 */

//
//BACKUP DB
// {
//   "toys": [
//     {
//       "id": 1,
//       "name": "Woody",
//       "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//       "likes": 8
//     },
//     {
//       "id": 2,
//       "name": "Buzz Lightyear",
//       "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
//       "likes": 14
//     },
//     {
//       "id": 3,
//       "name": "Mr. Potato Head",
//       "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
//       "likes": 3
//     },
//     {
//       "id": 4,
//       "name": "Slinky Dog",
//       "image": "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
//       "likes": 4
//     },
//     {
//       "id": 5,
//       "name": "Rex",
//       "image": "data:image/jpeg;base64,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",
//       "likes": 1
//     },
//     {
//       "id": 6,
//       "name": "Bo Peep",
//       "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
//       "likes": 2
//     },
//     {
//       "id": 7,
//       "name": "Hamm",
//       "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
//       "likes": 0
//     },
//     {
//       "id": 8,
//       "name": "Little Green Men",
//       "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
//       "likes": -2
//     }
//   ]
// }