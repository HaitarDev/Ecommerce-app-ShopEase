import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import CategoryProducts from "../components/CategoryProducts";

function Category() {
  const params = Number(useParams().id);

  return (
    <div className="bg-slate-50">
      <Carousel />
      <CategoryProducts params={params} />
    </div>
  );
}

export default Category;
