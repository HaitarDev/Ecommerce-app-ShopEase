import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addNewCart } from "../slices/cartSlice";
// eslint-disable-next-line react/prop-types, no-unused-vars
function ProductModal({ onClose, product, isOpen }) {
  const [quantity, setQuantity] = useState(1);

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { description, images, price, title, id } = product;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (quantity === 1) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      id,
      title,
      image: images[0],
      price,
      quantity,
      subPrice: price * quantity,
    };
    dispatch(addNewCart(newItem));
    onClose();
  };

  return (
    <div className="relative max-w-xl rounded-lg bg-gray-100 p-6 shadow-sm w-80 md:w-screen">
      <button
        type="button"
        className="absolute -end-1 -top-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
        onClick={onClose}
      >
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <img
          alt="Laptop"
          src={images[0]}
          className="h-full w-full rounded-xl object-cover"
        />

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg text-slate-900">{title}</h2>
          <p className="text-slate-900 border-b pb-2 border-dashed overflow-y-auto overflow-x-hidden h-24 md:h-28">
            {description}
          </p>
          <h4 className="font-extrabold text-indigo-400 cursor-default border-b border-dashed border-indigo-500 pb-2">
            Price: &#36;{price}
          </h4>

          <div className="text-slate-900">
            <span className="mr-2 text-xl">Qty:</span>
            <button className="text-3xl mr-1" onClick={handleDecrement}>
              -
            </button>
            <span className="text-xl mr-1">{quantity}</span>
            <button className="text-2xl" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2 justify-center"
            onClick={handleAddToCart}
          >
            <span>
              <BsFillCartPlusFill />
            </span>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
