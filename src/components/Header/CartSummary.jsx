import { useState } from "react";
import { currencyFormatter } from "@/util/api";
const CartSummary = ({ cart }) => {
  const [shippingPrice, setShippingPrice] = useState(10);
  const handleChangeShipping = (e) => {
    setShippingPrice(e.target.value);
  };
  const totalPrice = Number(shippingPrice) + Number(cart.totalAmount);
  return (
    <div className="basis-full lg:basis-1/4 px-8 py-10 bg-slate-100">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          {cart.items.length} {cart.items.length > 1 ? "Items" : "Item"}
        </span>
        <span className="font-semibold text-sm">
          {currencyFormatter.format(cart.totalAmount)}
        </span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select
          className="block p-2 text-gray-600 w-full text-sm"
          onChange={handleChangeShipping}
        >
          <option value="10">Standard shipping - $10</option>
          <option value="20">Fast shipping - $20</option>
        </select>
      </div>

      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>{currencyFormatter.format(totalPrice)}</span>
        </div>
        <button className="btn-primary font-semibold py-3 text-sm uppercase w-full rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
