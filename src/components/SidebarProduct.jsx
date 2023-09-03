import { useDispatch } from "react-redux";
import { deleteItem } from "../slices/cartSlice";

// eslint-disable-next-line react/prop-types
function SidebarProduct({ product }) {
  const dispatch = useDispatch();
  return (
    <div
      className="flex justify-between  bg-indigo-500 p-2 mb-4 rounded-sm"
      key={product.id}
    >
      <div className="flex flex-col gap-2">
        <p>{product.title}</p>
        <p>
          Quantity : <span className="font-bold">{product.quantity}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 items-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
          onClick={() => dispatch(deleteItem(product.id))}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <p className="text-yellow-500 font-bold text-lg">{product.price}$</p>
      </div>
    </div>
  );
}
export default SidebarProduct;
