import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, setToyList, onDelete, onLike}) {

  const toyComps = toyList.map(toy => <ToyCard key={toy.id} toy={toy} toyList={toyList} setToyList={setToyList} onDelete={onDelete} onLike={onLike}/>)

  return (
    <div id="toy-collection">{toyComps}</div>
  );
}

export default ToyContainer;
