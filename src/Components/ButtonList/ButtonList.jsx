import React from "react";

export const ButtonList = ({ categories, filterCategory }) => {
  return (
    <div className='mt-4'>
      {categories.map((category, i) => (
        <button
          type='button'
          onClick={() => filterCategory(category)}
          key={i}
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2 mb-2'>
          {category}
        </button>
      ))}
    </div>
  );
};
