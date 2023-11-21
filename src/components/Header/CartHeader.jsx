import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const CartHeader = () => {
  return (
    <header className="relative py-4 border-b bg-gray-100">
      <div className="md:container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="w-12 lg:w-16">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
    </header>
  );
};

export default CartHeader;
