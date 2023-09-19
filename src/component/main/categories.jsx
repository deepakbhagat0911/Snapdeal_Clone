import React from "react";

import { Link } from "react-router-dom";
import { data } from "./data";
const Categories = () => {
  const moreData = [
    {
      id: 1,
      catName: "Automotives",
    },
    {
      id: 2,
      catName: "Mobile & Accessories",
    },
    {
      id: 2,
      catName: "Sports, Fitness & Outdoor",
    },
    {
      id: 3,
      catName: "Computers & Gaming",
    },
    {
      id: 4,
      catName: "Books, Media & Music",
    },
    {
      id: 5,
      catName: "Hobbies",
    },
    {
      id: 6,
      catName: "Automotives",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="cat-content">
          <div className="cat-heading">TOP CATEGORIES</div>
          {data.map((value) => {
            return (
              <Link
                to={`${value.path}`}
                style={{ textDecoration: "none", color: "#333" }}
                key={value.id}
              >
                <div className="cat-name">
                  <img src={value.catImg} alt="" />
                  <span>{value.catName}</span>
                </div>
              </Link>
            );
          })}
          <div className="cat-heading" style={{ marginTop: "10px" }}>
            MORE CATEGORIES
          </div>
          {moreData.map((value) => {
            return (
              <Link
                to={"/page"}
                style={{ textDecoration: "none", color: "#333" }}
                key={moreData.id}
              >
                <div className="box f_flex morecat">
                  <span>{value.catName}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="scanner">
        <div className="qrText">
          <h3>
            Enjoy Convenient
            <br /> Order Tracking
          </h3>
        </div>
      </div>
    </>
  );
};

export default Categories;
