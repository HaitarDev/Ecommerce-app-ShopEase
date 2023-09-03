// import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import Modal from "./Modal";
import ProductModal from "./ProductModal";

// eslint-disable-next-line react/prop-types, no-unused-vars
function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line react/prop-types
  const { title, images, price, category } = product;

  // const dispatch = useDispatch();
  // const showModal = useSelector((state) => state.cart.showModal);

  const image = images[0];
  // eslint-disable-next-line react/prop-types
  const catagoryName = category.name;

  const markBackground =
    catagoryName === "Others"
      ? "bg-gray-300"
      : catagoryName === "Shoes"
      ? "bg-blue-300"
      : catagoryName === "Electronics"
      ? "bg-green-300"
      : catagoryName === "Clothes"
      ? "bg-yellow-300"
      : catagoryName === "Furniture"
      ? "bg-rose-300"
      : "bg-white";

  // if (showModal) return <ProductModal />;

  return (
    <div className=" relative flex flex-col mx-auto max-w-md overflow-hidden rounded-lg  text-slate-700 transition-all duration-300 shadow bg-white">
      <div
        className={`${markBackground} font-semibold absolute right-2 top-1 rounded-full px-1 shadow-sm cursor-default text-black`}
      >
        {catagoryName}
      </div>
      <img
        className=" rounded-md aspect-video w-full object-cover cursor-pointer"
        src={image}
        alt="category-image"
        loading="lazy"
        onClick={() => setIsOpen(true)}
      />
      <div className="flex-1 mx-4 my-3 flex justify-between flex-col">
        <h3
          className=" font-bold text-lg tracking-wider cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {title}
        </h3>
        <h4 className="font-extrabold text-indigo-400 cursor-default">
          &#36;{price}
        </h4>
      </div>
      <Modal open={isOpen} onCLose={() => setIsOpen(false)}>
        <ProductModal
          product={product}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default ProductCard;
