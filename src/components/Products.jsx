import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiShop";
import { useState } from "react";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

import ReactPaginate from "react-paginate";

function Products() {
  const [pageNumber, setPageNumber] = useState(0);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const productsPerPage = 20;
  const pagesVisited = pageNumber * productsPerPage;

  if (isLoading) return <Loading />;

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });

  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="px-20 py-8">
      <h1 className=" font-semibold text-3xl text-indigo-500 mb-4">Products</h1>
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

export default Products;
