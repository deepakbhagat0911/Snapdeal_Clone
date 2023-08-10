import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CartReducer } from "./reducer";
const Cart = createContext();

const Context = ({ children }) => {
  const [loding, setLoading] = useState(false);
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: [],
  });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        state.products = data.length > 0 ? data : [];
        dispatch(state);
        setLoading(false);
      } catch (err) {
        return;
      }
    })();
  }, []);
  const [productState] = useReducer(CartReducer, { searchQuery: "" });

  return (
    <Cart.Provider value={{ state, dispatch, loding, productState }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
