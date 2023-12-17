import { useSelector, useDispatch } from "react-redux";
import { cartTotal } from "../../utils/Redux/cartSlice";
const BillPage = () => {
  const cartBill = useSelector((state) => state.cartSlice.cartTotal);
  const dispatch = useDispatch();
  dispatch(cartTotal());
  return <div>Total : {cartBill}</div>;
};

export default BillPage;
