import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  smartphone: {
    breakpoint: { max: 824, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Component = styled(Box)`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  border: 2px solid #eeeeee;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
`;
const Dealtext = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;

  @media (max-width: 500px) {
    font-size: 16px;
    font-weight: 600;
    margin-right: 15px;
  }
`;

const ViewAllbtn = styled(Button)`
  margin-left: auto;
  padding: 2px 5px;
  background: none;
  box-shadow: none;
  color: #2874f0;
  &:hover {
    color: #fff; /* Change the background color on hover */
  }

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 2px 2px;
  }
`;

const Image = styled("img")`
  width: auto;
  height: 150px;
  @media (max-width: 500px) {
    width: 100%;
    height: 100px;
  }
`;

const Text = styled(Typography)`
  font-size: 14px;
`;
const Card = ({ products, title }) => {
  return (
    <Component>
      <Deal>
        <Dealtext> {title}</Dealtext>
        <Link to={"/product"}>
          <ViewAllbtn variant="contained">view all</ViewAllbtn>
        </Link>
      </Deal>
      <Divider />
      <Box>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={2}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product) => {
            return (
              <Link
                to={`product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box textAlign="center" style={{ padding: "25px 15px" }}>
                  <Image src={product.image} alt="" />
                  <Text style={{ color: "#000" }}>{product.title}</Text>
                  <Text style={{ color: "green" }}>
                    offer price:{product.price}$
                  </Text>
                  <Text style={{ color: "#212121", opacity: ".6" }}>
                    Rating {product.rating.rate} & {product.rating.count}{" "}
                    Reviews
                  </Text>
                </Box>
              </Link>
            );
          })}
        </Carousel>
      </Box>
    </Component>
  );
};

export { Card };
