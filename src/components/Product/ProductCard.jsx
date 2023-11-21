import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favsActions } from "../../store/favorites";
import { currencyFormatter } from "@/util/api";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.favs);
  const isFav = items.includes(product.id) ? true : false;

  const handleFavorite = (event, id) => {
    event.preventDefault();
    if (isFav) {
      dispatch(favsActions.removeFromFavorites(id));
    } else {
      dispatch(favsActions.addToFavorites(id));
    }
  };

  return (
    <div className="bg-white border rounded-md overflow-hidden">
      <Link
        to={`product/${product.id}`}
        className="relative text-gray-700 no-underline group"
      >
        <button
          className="absolute right-4 top-4 z-10 bg-white hover:bg-gray-200 border rounded-full p-2 "
          onClick={(event) => handleFavorite(event, product.id)}
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
        <figure className="h-[300px] overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover object-center transition-all duration-200 group-hover:scale-110"
          />
        </figure>
        <article className="p-2 lg:p-4">
          <p className="font-bold text-sm lg:text-lg">{product.title}</p>
          <p className="text-sm lg:text-base">{product.brand}</p>
          <p className="font-bold text-base lg:text-xl">
            {currencyFormatter.format(product.price)}
          </p>
        </article>
      </Link>
    </div>
  );
};

export default ProductCard;
