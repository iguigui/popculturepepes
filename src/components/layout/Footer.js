import React from "react";
import { CONTRACT_URL } from "../../configs/contract.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="fullwidth footer">
      <div className="boxes">
        <div className="box">
          <h3 className="ui header">CONTACT</h3>
          <p>TIMOTHY WHITE PHOTOGRAPHY</p>
          <p>INFO@TWSTUDIO.COM</p>
        </div>
        <div className="box">
          <h3 className="ui header">LINKS</h3>
          <div className="links">
            <a href="https://timothywhite.com/" target="_blank">
              Timothy White
            </a>
            <a href="https://discord.gg/nRwE8rngHA">Discord</a>
            <a href={CONTRACT_URL}>View on OpenSea</a>
            <a href="https://blog.opensea.io/guides/non-fungible-tokens/">
              Guide: How to buy an NFT?
            </a>
            <a href="https://www.nftbible.io/">Guide: What are NFTs?</a>
          </div>
        </div>
        <div className="box">
          <h3 className="ui header">SOCIAL</h3>
          <div className="social">
            <a
              className="item social"
              href="https://discord.gg/nRwE8rngHA"
              target="_blank"
            >
              <i className="discord icon"></i>
            </a>
            <a
              className="item social"
              href="https://www.instagram.com/timothywhite/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="instagram icon"></i>
            </a>
            <a
              className="item social"
              href=" https://twitter.com/twhite_photo"
              target="_blank"
              rel="noreferrer"
            >
              <i className="twitter icon"></i>
            </a>
          </div>
        </div>
      </div>
      <p style={{ marginTop: "50px", fontSize: "14px" }}>
        Copyright © 2024 Timothy White. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
