import React from "react";
import Categories from "./categories";
import SlideCard from "./SlideCard";
import Slider2 from "./slider-2";
import { Card } from "./card";

import { CartState } from "../context/context";
import Footer from "../Footer/Footer";
const Home = () => {
  const { state, loading } = CartState();

  const products = state.products;
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <div className="category-box-none">
            <Categories />
          </div>
          <div className="main-box">
            <SlideCard />
            <Slider2 />
          </div>
        </div>
        <Card products={products} title="Deal of the Day" />
        <Card products={products} title="Trending Offer" />
        <Card products={products} title="Discount for You" />
        <Card products={products} title="Suggesting Items" />
        <Card products={products} title="Top Selection" />
        <Card products={products} title="Recommended Item" />
        <Footer />
      </section>
    </>
  );
};

export default Home;
