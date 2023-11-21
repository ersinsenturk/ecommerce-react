import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import { cartActions } from "../store/cart";
import CartSummary from "../components/Header/CartSummary";
import Button from "@/components/UI/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  const handleGotoHomepage = () => {
    navigate("/");
  };
  return (
    <div className="md:container mx-auto mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {cart.items.length > 0 ? (
        <>
          <div className="col-span-1 lg:col-span-2 border shadow-sm">
            {cart.items.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                removeItem={() => handleRemoveItem(product.id)}
              >
                {product.title}
              </CartItem>
            ))}
          </div>
          <div className="col-span-1">
            <CartSummary cart={cart} />
          </div>
        </>
      ) : (
        <div className=" text-center col-span-3">
          <p className="font-bold mb-4">Add some product to cart</p>
          <Button onClick={handleGotoHomepage}>Go to Homepage</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
