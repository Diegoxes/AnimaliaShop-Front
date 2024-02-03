import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions";

const Card = ({ id, title, price, image, category }) => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  console.log(carrito);

  return (
    <>
      <div className='relative'>
        <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
          <img src={image} alt={title} className='h-full w-full object-cover' />
        </div>
        <div className='mt-4 flex justify-between '>
          <div>
            <h3 className='text-sm text-gray-700'>
              <span aria-hidden='true' className='absolute inset-0' />
              {title}
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{category}</p>
          </div>
          <p className='text-sm font-medium text-gray-900'>${price}</p>
        </div>
      </div>
      <div>
        <button
          className='cursor-pointer bg-orange-600 border-none hover:border-none rounded-md px-4 py-2 hover:bg-orange-400 text-white'
          onClick={() => dispatch(addToCart(id))}>
          Probando
        </button>
      </div>
    </>
  );
};

export default Card;

// <Link
//   to={`/tienda/${id}`}
//   className=' block w-full py-3 text-center font-bold uppercase cursor-pointer text-white bg-orange-600'>
//   Comprar
// </Link>
