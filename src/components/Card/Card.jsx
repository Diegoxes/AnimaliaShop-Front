import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions";
import Carrito from "../Carrito/Carrito";

const Card = ({ id, title, price, image, category }) => {
  const dispatch = useDispatch();

  const carrito = useSelector((state) => state.carrito);

  const navigate = useNavigate();

  const isProductInCart = carrito.some((cart) => cart.id === id);

  return (
    <div
      key={id}
      className='group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
      <Link
        className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
        to={`/DetailProduct/${id}`}>
        <img
          className='peer absolute top-0 right-0 h-full w-full object-cover'
          src={image}
          alt='product image'
        />
      </Link>
      <div className='mt-4 px-5 pb-5'>
        <h5 className='text-xl tracking-tight text-slate-900'>{title}</h5>
        <p className='text-sm font-bold bg-amber-600 inline-block px-5 py-1 text-white rounded-lg'>
          {category}
        </p>

        <div className='mt-2 mb-5 flex items-center justify-between'>
          <p>
            <span className='text-3xl font-bold text-slate-900'>${price}</span>
          </p>
        </div>
        <Link
          to={`/DetailProduct/${id}`}
          className='flex items-center justify-center mb-2 rounded-md bg-amber-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-blue-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'>
            <path d='M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z' />

            <path d='M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z' />
          </svg>

          <span className='text-white'>Ver Detalles</span>
        </Link>
        <Link
          disabled={isProductInCart}
          onClick={() => dispatch(addToCart(id))}
          className='flex items-center justify-center rounded-md  px-5 py-2.5 text-center text-sm font-medium text-white bg-amber-900 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-blue-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          <span className='text-white'>
            {isProductInCart ? (
              <Link to={`/carrito`}>Ver Carrito</Link>
            ) : (
              "Agregar al carrito"
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
