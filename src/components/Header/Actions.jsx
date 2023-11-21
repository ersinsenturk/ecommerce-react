import { Link } from "react-router-dom";
import { authActions } from "@/store/auth";
import { useDispatch, useSelector } from "react-redux";

const Actions = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  const handleAuthShow = () => {
    dispatch(authActions.toggleShown());
  };
  return (
    <div className=" flex items-center">
      {isLoggedIn ? (
        <Link to="profile" className="bg-white rounded-full border mr-4 p-1.5">
          <img
            src={user?.image}
            className="max-h-[1rem] lg:max-h-[1.5rem] "
            alt=""
          />
        </Link>
      ) : (
        <button onClick={handleAuthShow} className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[1rem] lg:h-[1.5rem]"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </button>
      )}
      <Link to="cart" className="mr-4 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[1rem] lg:h-[1.5rem]"
          viewBox="0 0 576 512"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
        {items.length > 0 && (
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-indigo-500 border border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {items.length}
          </div>
        )}
      </Link>

      <button className="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[1rem] lg:h-[1.5rem]"
          viewBox="0 0 384 512"
          fill="yellow"
        >
          <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[1rem] lg:h-[1.5rem]"
          viewBox="0 0 384 512"
        >
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
        </svg>
      </button>
    </div>
  );
};

export default Actions;
