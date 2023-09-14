import React from "react";
import { CartState } from "../context/context";
import "./GridProduct.css";
import { Link } from "react-router-dom";
const GridProducts = () => {
  const { state } = CartState();

  return (
    <>
      <div className="card-container">
        {state.products.map((item) => {
          return (
            <Link
              to={`${item.id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div class="card">
                <div class="card-content">
                  <div class="card-header">
                    <img src={item.image} alt="image" class="newsImg" />
                  </div>
                  <h3 class="news-title">{item.title}</h3>
                  <p class="news-desc">
                    Rating {item.rating.rate} & {item.rating.count} Reviews
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default GridProducts;
