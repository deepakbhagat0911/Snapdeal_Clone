import React from "react";
import { bannerData } from "./data";
import { Link } from "react-router-dom";
import LoginCard from "./Logincard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import styled from "@emotion/styled";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Img = styled("img")`
  width: 100%;
  height: 280px;
`;
const SlideCard = () => {
  return (
    <>
      <div className="container p_flex ">
        <div className="slider">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {bannerData.map((image) => {
              return (
                <Link to={"/product"}>
                  <Img src={image.cover} alt="" />
                </Link>
              );
            })}
          </Carousel>
        </div>
        <div className="Login-banner">
          <LoginCard />
        </div>
      </div>
    </>
  );
};

export default SlideCard;
