import React from "react";
// import { Link } from "react-router-dom";

import Header from "../layout/Header";
import MintButton from "../atoms/MintButton";

import background from "../../img/backgroundpepes.jpg";
import peplogo from "../../img/peplogo.png";

const GalleryHero = ({}) => {
  return (
    <>
      <section
        className="fullwidth topbanner"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />
        <div className="ui container">
          <div
            style={{
              backgroundImage: `url(${peplogo})`,
              height: "200px",
              width: "300px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              margin: "0px auto 50px auto",
            }}
          ></div>
          <MintButton />
        </div>
      </section>
    </>
  );
};

export default GalleryHero;
