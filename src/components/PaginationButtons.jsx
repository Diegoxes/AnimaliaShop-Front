import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { changePage } from "../redux/actions";

const PaginationButtons = () => {
  const totalPages = useSelector((state) => state.totalProductos);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const handlePageClick = (selected) => {
    dispatch(changePage(selected));
  };

  console.log();

  return (
    <div>
      <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-gray-400 rounded-md ml-4'>
            <BsChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-gray-400 rounded-md mr-4'>
            <BsChevronLeft />
          </span>
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        renderOnZeroPageCount={null}
        pageClassName='block border-solid hover:bg-gray-300 w-10 h-10 flex items-center justify-center rounded-md mr-4'
        activeClassName='bg-purple-700 text-white'
      />
    </div>
  );
};

export default PaginationButtons;
