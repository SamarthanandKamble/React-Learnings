import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decrementItemFromCart,
  emptyCart,
} from "../../utils/Redux/cartSlice";
import BillPage from "./BillPage";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cartSlice.items);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="empty-cart-btn" onClick={() => dispatch(emptyCart())}>
        Empty Cart
      </div>
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div key={item.name} className="cart-container">
            <span className="cart-items" id="item-name">
              {item.name}
            </span>
            <span className="cart-items" id="item-qty">
              Qty :
              <span
                className="item-qty-btn"
                onClick={() => dispatch(decrementItemFromCart(item))}
              >
                -
              </span>
              {item.qty}
              <span
                className="item-qty-btn"
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </span>
            </span>
            <span className="cart-items" id="item-price">
              {item.price}
            </span>
          </div>
        ))}
      <BillPage />
    </div>
  );
};

export default CartPage;
