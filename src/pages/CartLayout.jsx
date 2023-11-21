import { Outlet } from "react-router-dom";
import CartHeader from "../components/Header/CartHeader";

const CartLayout = () => {
  return (
    <>
      <CartHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default CartLayout;
