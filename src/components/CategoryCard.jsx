import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
function CategoryCard({ category }) {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { name, image, id } = category;

  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg  text-slate-700 transition-all duration-300 hover:shadow-md hover:bg-white hover:text-indigo-500">
      <img
        className=" rounded-md aspect-video w-full object-cover cursor-pointer"
        src={image}
        alt="category-image"
        loading="lazy"
        onClick={() => navigate(`/category/${id}`)}
      />
      <div className="mx-4 my-3 text-center font-extrabold text-xl tracking-wider">
        <h3
          className=" cursor-pointer inline"
          onClick={() => navigate(`/category/${id}`)}
        >
          {name}
        </h3>
      </div>
    </div>
  );
}

export default CategoryCard;
