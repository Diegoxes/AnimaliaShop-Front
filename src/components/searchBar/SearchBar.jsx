import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterName } from "../../redux/actions";
// import style from "./SearchBar.module.css";

export const SearchBar = () => {
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (productId.trim() !== "") {
      dispatch(filterName(productId));
      setProductId("");
    }
  };
  return (
    <div className='mx-2 my-10 rounded-xl border bg-white px-4 py-5 max-w-lg mx-auto'>
      <form onSubmit={handleSearch} className='mb-2 flex'>
        <div className='mr-1 w-full'>
          <input
            type='text'
            value={productId}
            name='search'
            onChange={handleChange}
            id='search'
            placeholder='Buscar producto'
            className='w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-300'
          />
        </div>
        <button
          type='submit'
          className='shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

{
  /* 
<div class="mx-2 my-10 rounded-xl border bg-white px-4 py-8">
  <div class="mb-2 flex">
    <div class="mr-1 w-full">
      <input type="text" class="placeholder:text-gray-400 h-12 w-full rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Search for articles" />
    </div>



    <button class="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
      </svg>
    </button>
  </div>
</div> */
}
