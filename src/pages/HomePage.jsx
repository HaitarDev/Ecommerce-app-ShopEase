import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
// import ProductModal from "../components/ProductModal";
import Products from "../components/Products";

function HomePage() {
  return (
    <div className="bg-slate-50 relative">
      <Carousel />
      <Categories />
      <Products />
    </div>
  );
}

export default HomePage;
