import React from "react";
import Photo from "./Photo";

export default function Photos(props) {
  return (
    <div>
      <h2>{props.myName}</h2>
      <div style={{ display: "flex" }}>
        {props.pictures.map((item) => {
          return (
            <Photo
              planetName={item.name}
              planetLoc={item.location}
              planetImg={item.imgUrl}
            ></Photo>
          );
        })}
      </div>
    </div>
  );
}
