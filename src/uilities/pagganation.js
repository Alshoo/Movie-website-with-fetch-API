import React from "react";
import ReactPaginate from "react-paginate";

const Paination = ({ sendnum, numcount }) => {
  const handlePageClick = (data) => {
    sendnum(data.selected + 1);
  };

  return (
    <div id="paggemnationediting" className="d-flex justify-content-center">
      <ReactPaginate
        breakLabel=".."
        nextLabel="Next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2} //this is number which will show in the frist
        marginPagesDisplayed={1} //this is number which will show in the end and start when we transfer bettwen pages
        pageCount={numcount}
        previousLabel="<Previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination "}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active "}
      />
      <br />
      <br />
    </div>
  );
};

export default Paination;
