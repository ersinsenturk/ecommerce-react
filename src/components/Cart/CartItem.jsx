import { currencyFormatter } from "@/util/api";
const CartItem = ({ product, removeItem }) => {
  return (
    <div className="border-b p-4 flex gap-6 items-center">
      <figure className="basis-[200px]">
        <img src={product.thumbnail} alt="" />
      </figure>
      <div className="mr-auto">
        <p className="font-bold">{product.title}</p>
        <p>{product.brand}</p>
        <p className="text-lg font-bold">
          {currencyFormatter.format(product.price)}
        </p>
      </div>
      <button onClick={removeItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 fill-gray-500 hover:fill-gray-700"
          viewBox="0 0 512 512"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
