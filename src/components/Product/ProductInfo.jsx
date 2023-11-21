import { useDispatch, useSelector } from "react-redux";
import { favsActions } from "../../store/favorites";
import { currencyFormatter } from "@/util/api";

const ProductInfo = ({ product, addToCart, inCartItem }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favs);
  const isFav = items.includes(product.id) ? true : false;
  const handleAddToFavorites = (event) => {
    event.preventDefault();
    if (isFav) {
      dispatch(favsActions.removeFromFavorites(product.id));
    } else {
      dispatch(favsActions.addToFavorites(product.id));
    }
  };
  return (
    <div className=" lg:col-span-2 relative">
      <button
        className="absolute right-0 top-0 z-10 bg-white hover:bg-gray-200 border rounded-full p-2"
        onClick={handleAddToFavorites}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className={isFav ? "fill-red-500" : "fill-gray-500"}
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
      </button>
      <div className="flex items-center gap-1 mb-4">
        <h3>{product.title}</h3>
        <span>- {product.brand}</span>
      </div>
      <p className="mb-4">{product.description}</p>
      <p className="mb-4 font-bold text-2xl">
        {currencyFormatter.format(product.price)}
      </p>
      <button className="btn-primary" onClick={addToCart}>
        {inCartItem ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductInfo;
