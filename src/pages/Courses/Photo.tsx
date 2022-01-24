import React from "react";
import PhotoHeader from "./PhotoHeader";

export default function Photo(props) {
  return (
    <div>
      <div>
        <PhotoHeader
          name={props.planetName}
          location={props.planetLoc}
        ></PhotoHeader>
        <img src={props.planetImg} width="300px"></img>
      </div>
    </div>
  );
}
