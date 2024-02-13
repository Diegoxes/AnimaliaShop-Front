import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import CartContext from "../../context/CartContext";
import { getCart } from "../../redux/actions";
import axios from "axios";
import CartItem from "../../Components/CartItem/CartItem";
import CartSummary from "../../Components/CartSummary/CartSummary";

const ShoppingCart = () => {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const {
    carrito,
    agregarAlCarrito,
    precioTotal,
    vaciarCarrito,
    eliminarDelCarrito,
    incremento,
    decremento,
    precioFinalIva,
  } = useContext(CartContext);
  const isCart = useSelector((state) => state.carrito);

  const URL = "http://localhost:3001";

  console.log(isCart);

  let cartItems = [];
  if (isAuthenticated && isCart && isCart.Products) {
    cartItems = isCart.Products;
  }

  console.log(cartItems);

  const productDetail = cartItems.map((producto) => {
    const { Cart, ...restoDelProducto } = producto;
    return { productDetail: restoDelProducto, quantity: Cart.quantity };
  });

  useEffect(() => {
    const itemsToAdd = productDetail.filter(
      (item) => !carrito.find((product) => product.id === item.productDetail.id)
    );
    itemsToAdd.forEach((item) =>
      agregarAlCarrito(item.productDetail, item.quantity, false)
    );
  }, [productDetail, agregarAlCarrito, carrito]);

  useEffect(() => {
    if (isAuthenticated && user && user.email) {
      const email = user.email;
      dispatch(getCart(email));
    }
  }, [dispatch, isAuthenticated, user]);

  const handleVaciar = async () => {
    if (isAuthenticated && user && user.email) {
      const { email } = user;
      const all = true;
      const emptyCart = {
        email,
        all,
      };
      await vaciarCarrito();
      await axios.put(`${URL}/cart`, emptyCart);
    } else {
      vaciarCarrito();
    }
  };

  const handleEliminar = async (id) => {
    if (isAuthenticated && user && user.email) {
      const { email } = user;
      const all = false;
      const deleteItem = {
        email,
        id,
        all,
      };
      await eliminarDelCarrito(id);
      await axios.delete(`${URL}/cart`, deleteItem);
    } else {
      eliminarDelCarrito(id);
    }
  };

  const handleIncrementar = async (id) => {
    incremento(id);
  };

  const handleDecrementar = async (id) => {
    decremento(id);
  };

  const subtotal = precioTotal();
  const total = precioFinalIva();

  return (
    <div className='h-auto bg-white py-10'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      <p
        className='justify-left mx-auto mb-2 max-w-5xl cursor-pointer px-6 text-xs text-gray-600 hover:text-red-600 md:flex md:space-x-6 xl:px-0'
        onClick={handleVaciar}>
        Remove All
      </p>
      <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        <div className='rounded-lg md:w-2/3'>
          {carrito?.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              image={product.image}
              price={product.price}
              stock={product.stock}
              quantity={product.quantity}
              handleEliminar={handleEliminar}
              handleIncrementar={handleIncrementar}
              handleDecrementar={handleDecrementar}
            />
          ))}
        </div>
        <CartSummary subtotal={subtotal} total={total} mostrarCheckout={true} />
      </div>
    </div>
  );
};

export default ShoppingCart;
