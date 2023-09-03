import ReactPaginate from "react-paginate";

function PaginationButton() {
  return (
    <div className="flex justify-center gap-2">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        // pageCount={pageCount}
        // onPageChange={changePage}
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="pagintionActive"
      />
    </div>
  );
}

export default PaginationButton;
