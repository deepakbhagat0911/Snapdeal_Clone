import { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { CartState } from "../context/context";
import { List, ListItem } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const ListWrapper = styled(List)`
  position: absolute;
  margin-top: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 20000;
`;
const SearchImage = styled("img")`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const SearchBox = () => {
  const { state } = CartState();
  const [text, setText] = useState("");
  const products = state.products;
  const navigate = useNavigate();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(text.toLowerCase())
  );

  const handleInputChange = (text) => {
    setText(text);
  };
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      const inputWidth = inputRef.current.clientWidth;
      document.documentElement.style.setProperty(
        "--list-wrapper-width",
        `${inputWidth}px`
      );
    }
  }, [text]);
  const handlenavigate = () => {
    navigate(`product/${product.id}`);
    setText("");
  };

  return (
    <div className="search-box f_flex" style={{ padding: "0 5px" }}>
      <div className="search-box-input" style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Search product & brands"
          onChange={(e) => handleInputChange(e.target.value)}
          ref={inputRef}
        />
        <span className="serchBtn">
          <SearchIcon style={{ fontSize: 16 }} />

          <span className="sicon">Serach</span>
        </span>
      </div>
      <div className="search-List">
        {text && (
          <ListWrapper
            style={{
              width: "var(--list-wrapper-width)", // Set width dynamically
            }}
          >
            {filteredProducts.map((product) => (
              <Link
                to={`product/${product.id}`}
                style={{ textDecoration: "none" }}
                onClick={handlenavigate}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "2px 5px",
                  }}
                >
                  <SearchImage src={product.image} alt="" />
                  <ListItem
                    key={product.id}
                    style={{ color: "#333", cursor: "pointer" }}
                  >
                    {product.title}
                  </ListItem>
                </div>
              </Link>
            ))}
          </ListWrapper>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
