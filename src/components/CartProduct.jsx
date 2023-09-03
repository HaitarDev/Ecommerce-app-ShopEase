/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { decreaseQty, deleteItem, increaseQty } from "../slices/cartSlice";

function CartProduct({ cart }) {
  const dispatch = useDispatch();

  const handleIncreaseQty = () => {
    dispatch(increaseQty(cart.id));
  };
  const handleDecreaseQty = () => {
    dispatch(decreaseQty(cart.id));
  };
  const handleDeleteItem = () => {
    dispatch(deleteItem(cart.id));
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={cart.image}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{cart.title}</h2>
          <p className="mt-1 text-md text-gray-700 ">Price:&#36;{cart.price}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={handleDecreaseQty}
            >
              {" "}
              -{" "}
            </span>
            <div className="h-8 w-8 border bg-white text-xs outline-none flex items-center justify-center">
              {cart.quantity}
            </div>

            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={handleIncreaseQty}
            >
              {" "}
              +{" "}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{cart.subPrice} &#36;</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={handleDeleteItem}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
