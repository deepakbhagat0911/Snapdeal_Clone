import React from "react";
import { qrimg } from "./data";
import { Link } from "react-router-dom";
const Categories = () => {
  const data = [
    {
      id: 1,
      catImg: "./cat-Img/cat-1.png",
      catName: "Men's Fashion",
    },
    {
      id: 2,
      catImg: "./cat-Img/cat-2.png",
      catName: "Women's Fashion",
    },
    {
      id: 3,
      catImg: "./cat-Img/cat-3.jpg",
      catName: "Home & Kitchen",
    },
    {
      id: 4,
      catImg: "./cat-Img/cat-4.png",
      catName: "Toys, Kids' Fashion ",
    },
    {
      id: 5,
      catImg: "./cat-Img/cat-5.png",
      catName: "Beauty, Health ",
    },
  ];
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
                to={"/products"}
                style={{ textDecoration: "none", color: "#333" }}
              >
                <div className="box f_flex" key={data.id}>
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
                to={"/products"}
                style={{ textDecoration: "none", color: "#333" }}
              >
                <div className="box f_flex morecat" key={moreData.id}>
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
        <div className="qrimg">
          <img src={qrimg.qr} alt="" />
        </div>
      </div>
    </>
  );
};

export default Categories;
