import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SidebarProduct from "./SidebarProduct";

// eslint-disable-next-line react/prop-types
function Sidebar({ toggle, activeSidebar }) {
  const cartInfo = useSelector((state) => state.cart.cartInfo);

  const handleToggle = (e) => {
    if (e.target.closest("aside")) return;
    else toggle();
  };

  return (
    <div
      className={`${activeSidebar ? "overlay-sidebar" : null}  h-full`}
      onClick={handleToggle}
    >
      <aside
        className={` h-full fixed  top-0 z-50 gap-20 bg-gray-700 text-white p-4 w-72 drop-shadow-xl transition-all duration-300  ${
          activeSidebar ? "right-0" : "-right-full"
        } `}
      >
        <h3 className="text-lg text-indigo-500 font-bold mb-5">
          {cartInfo.length > 0
            ? cartInfo.length === 1
              ? "You have picked one product"
              : `You have picked ${cartInfo.length} products`
            : "You have picked no products"}
        </h3>

        {cartInfo.map((product) =>
          !cartInfo ? (
            <p className="text-red-500 text-lg" key={product.id}>
              There is no product in your card
            </p>
          ) : (
            <SidebarProduct product={product} key={product.id} />
          )
        )}

        <div className="flex justify-between">
          <button
            className="bg-gray-800 py-2 px-2 hover:shadow-lg hover:bg-gray-900 transition-all duration-150 rounded-md"
            onClick={toggle}
          >
            Return to Store
          </button>
          {cartInfo.length === 0 ? null : (
            <Link
              to={`/cart`}
              onClick={toggle}
              className="bg-yellow-500 text-white font-semibold py-2 px-2 hover:shadow-lg hover:bg-yellow-400 transition-all duration-150 rounded-md"
            >
              Go To Cashier$
            </Link>
          )}
        </div>
      </aside>
    </div>
  );
}
export default Sidebar;
