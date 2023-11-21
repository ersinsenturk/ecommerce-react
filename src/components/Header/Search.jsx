import { useRef } from "react";
import { useLoadProducts } from "../../hooks/useLoadProducts";

const Search = () => {
  const input = useRef();
  const { fetchProducts } = useLoadProducts();

  const handleSearch = (event) => {
    event.preventDefault();
    fetchProducts(input.current.value);
    input.current.value = "";
  };
  return (
    <div className=" lg:basis-1/3 bg-gray-50 border border-gray-300 pr-2.5 rounded-lg overflow-hidden focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600">
      <form className="flex" onSubmit={handleSearch}>
        <input
          ref={input}
          type="text"
          id="search"
          className="bg-transparent text-gray-900 text-sm  block w-full p-2.5 outline-0 dark:placeholder-gray-400 dark:text-white"
        />
        <button className=" bg-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
