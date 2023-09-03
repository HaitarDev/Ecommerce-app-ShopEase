import { Link } from "react-router-dom";
import CartCount from "./CartCount";
import InputSearch from "./InputSearch";
import Navigation from "./Navigation";

function NavBar() {
  return (
    <div className="fixed z-50 w-full top-0 left-0">
      <div className="flex justify-between  items-center bg-indigo-500 py-3 px-8 md:px-20 ">
        <Link to="/" className="title text-4xl text-stone-50">
          Shop<span className="text-yellow-300">Ease</span>
        </Link>
        <InputSearch />
        <CartCount />
      </div>
      <div className="  border-slate-100">
        <Navigation />
      </div>
    </div>
  );
}

export default NavBar;
