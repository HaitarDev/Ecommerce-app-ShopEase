import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";

function Cart() {
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const cartInfo = useSelector((state) => state.cart.cartInfo);
  // const total = useSelector((state) => state.cart.totalPrice);
  // console.log(total);

  const cartRender = cartInfo.map((cart) => (
    <CartProduct key={cart.id} cart={cart} />
  ));

  const isCartEmpty = cartInfo.length === 0;

  const total = cartInfo.reduce((prev, cur) => {
    return cur.subPrice + prev;
  }, 0);

  const shipping = 4.99;

  console.log(total);
  return (
    <div className=" bg-gray-100 pt-20 pb-10">
      <h1 className="mb-10 text-center text-3xl font-bold text-indigo-400">
        Cart Items
      </h1>
      <p
        className="m-6 text-gray-600 text-lg cursor-pointer hover:text-indigo-950"
        onClick={() => navigate(-1)}
      >
        ⤺ Back
      </p>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {isCartEmpty ? <CartEmpty /> : cartRender}
        </div>
        {/* Sub Total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">
              Selected {cartInfo.length} items(s) Price
            </p>
            <p className="text-gray-700">${total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${total + shipping} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 transition-all duration-100"
            // onClick={() => dispatch(calcTotalPrice())}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
