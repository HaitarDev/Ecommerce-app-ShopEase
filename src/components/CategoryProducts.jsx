import { useQuery } from "@tanstack/react-query";
import { filterByCategory } from "../services/apiShop";
import Loading from "./Loading";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";

// eslint-disable-next-line react/prop-types, no-unused-vars
function CategoryProducts({ params }) {
  const [pageNumber, setPageNumber] = useState(0);

  const { data: products, isLoading } = useQuery({
    queryKey: ["categoryProducts", params],
    queryFn: () => filterByCategory(params),
  });

  const productsPerPage = 20;
  const pagesVisited = pageNumber * productsPerPage;

  if (isLoading) return console.log("Loading products");

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });

  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const category = products[0].category.name;
  return (
    <div className="px-20 py-8">
      <h1 className=" font-semibold text-3xl text-indigo-500 mb-4">
        {category} Products
      </h1>
      <div className="flex-1 overflow-y-auto flex flex-col justify-between">
        <div className="grid grid-repeat gap-4 px-6 mb-8">
          {isLoading ? <Loading /> : displayProducts}
        </div>
        <div className="m-auto">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBttns"
            previousLinkClassName="previousBttn"
            nextLinkClassName="nextBttn"
            disabledClassName="paginationDisabled"
            activeClassName="pagintionActive"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
