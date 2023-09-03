import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

function CartCount() {
  const productCount = useSelector((state) => state.cart.cartInfo.length);
  const [activeSidebar, setActiveSidebar] = useState(false);

  const toggleSideBar = () => {
    setActiveSidebar((prev) => !prev);
  };

  return (
    <div>
      <div
        className="flex items-center gap-1 cursor-pointer relative"
        onClick={() => setActiveSidebar((prev) => !prev)}
      >
        <BsCartCheck className=" text-2xl text-stone-100 " />
        <p className="text-stone-100 font-semibold text-lg">Cart</p>
        <div className="absolute top-0 -right-6 bg-amber-500 rounded-full px-2 ">
          {productCount}
        </div>
      </div>

      <Sidebar toggle={toggleSideBar} activeSidebar={activeSidebar} />
    </div>
  );
}

export default CartCount;
