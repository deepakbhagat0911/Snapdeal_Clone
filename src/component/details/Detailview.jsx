import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/context";
import "./Detailpage.css";
const LeftBox = styled(Box)`
  padding: 40px 0;
`;
const Wrapper = styled(Box)`
  width: 90%;
  margin: 0 auto;
`;
const Image = styled("img")`
  padding: 15px;
  max-width: 350px;
  height: 400px;
  border: 1px solid #f0f0f0;
`;
const Container = styled(Grid)`
  background: #ffffff;
  display: flex;
  align-itme: center;
  justify-content: center;
`;
const Rightcontainer = styled(Grid)`
  margin-top: 40px;
`;
const Detailview = () => {
  const { state, dispatch } = CartState();
  const navigate = useNavigate();
  const { id } = useParams();

  const [productData, setproductData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error(`API Failed Status ${res.status}`);
        }
        const data = await res.json();
        setproductData(data);
        console.log(data);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, []);

  if (error) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "20%" }}>
        Something went Wrong
      </h1>
    );
  }
  if (productData.length === 0) {
    return <div style={{ textAlign: "center", marginTop: "150px" }}></div>;
  }

  const gotoCart = () => {
    if (state.cart.some((pro) => pro.id === productData.id)) {
      navigate(`/cart`);
    } else {
      dispatch({ type: "ADD_TO_CART", payload: productData });
      navigate(`/cart`);
    }
  };
  return (
    <>
      <Wrapper>
        <Container container>
          <LeftBox>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Image src={productData.image} alt="" />
            </Grid>
          </LeftBox>
          <Rightcontainer item lg={4} md={8} sm={12} xs={12}>
            <Typography>{productData.title}</Typography>
            <Typography
              style={{ marginTop: "5px", color: "#878787", fontSize: "14px" }}
            >
              Rating {productData.rating.rate} & {productData.rating.count}{" "}
              Reviews
            </Typography>
            <Typography>{productData.category}</Typography>
            <Typography
              style={{ color: "green", fontSize: "20px", margin: "10px 0" }}
            >
              Price ${productData.price}
            </Typography>
            <Typography style={{ margin: "10px 0" }}>
              {productData.description}
            </Typography>
            {state.cart.some((pro) => pro.id === productData.id) ? (
              <button
                className="addBtn"
                onClick={() =>
                  dispatch({ type: "REMOVE_TO_CART", payload: productData })
                }
              >
                Remove To Cart
              </button>
            ) : (
              <button
                className="addBtn"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: productData })
                }
              >
                Add To Cart
              </button>
            )}
            <button className="buyBtn" onClick={gotoCart}>
              Buy Now
            </button>
          </Rightcontainer>
        </Container>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
};

export default Detailview;
