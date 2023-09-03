import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/apiShop";
import CategoryCard from "./CategoryCard";
import Loading from "./Loading";

function Categories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategories(),
  });

  if (isLoading) return <Loading />;

  return (
    <div className="px-20 py-8">
      <h1 className=" font-semibold text-3xl text-indigo-500 mb-4">
        Categories
      </h1>
      <div className="flex-1 overflow-y-auto flex flex-col justify-between">
        <div className="grid grid-repeat gap-4 px-6 mb-2">
          {isLoading ? (
            <Loading />
          ) : (
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
