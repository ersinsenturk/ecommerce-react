import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import Actions from "./Actions";
import { useSelector } from "react-redux";
import Auth from "@/pages/Auth";

const Header = () => {
  const isShown = useSelector((state) => state.auth.isShown);

  return (
    <header className="relative py-4 border-b bg-gray-100">
      <div className="md:container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="w-12 lg:w-16">
          <img src={Logo} alt="Logo" />
        </Link>
        <Search />
        {isShown && <Auth />}
        <Actions />
      </div>
    </header>
  );
};

export default Header;
