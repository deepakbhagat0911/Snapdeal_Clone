import React from "react";
import "./Header.css";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <span>Brand Waali Quality, Bazaar Waali Deal!</span>
          </div>
          <div className="right row Rtext">
            <label htmlFor="">Impact@Snapdeal</label>
            <label htmlFor="">Gift Cards</label>
            <label htmlFor="">Help Center</label>
            <label htmlFor="">Sell On Snapdeal</label>
            <label htmlFor="">Download App</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
