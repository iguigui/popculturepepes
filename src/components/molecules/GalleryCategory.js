import React from "react";
import { TOKENS } from "../../configs/tokens";
import PhotoCard from "./PhotoCard";

const GalleryCategory = ({ category }) => {

    return <>
      <div className="ui container prints">
      <h2 className="ui header">{category.title}</h2>
      <h3 className="ui header">{category.subtitle}</h3>
      <p>Starting at {category.startingPrice}ETH</p>
      <ul className="images">
        {TOKENS
          .filter(category.filter)
          .map((token, idx) => <PhotoCard key={idx} token={token} unique={true} /> )}
      </ul>
    </div>
  </>;

};

export default GalleryCategory;