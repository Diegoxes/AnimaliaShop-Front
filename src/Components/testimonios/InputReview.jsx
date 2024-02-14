import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../redux/actions';

const InputReview = () => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
  
    const [testimonio, setTestimonio] = useState('');
    const [puntuacion, setPuntuacion] = useState(0);
    const [errorMsg, setErrorMsg] = useState(''); // Agregamos el estado para el mensaje de error
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (testimonio.trim() === '') {
        setErrorMsg('El testimonio no puede estar vacío'); // Establecemos el mensaje de error
        return;
      }
  
      const newReview = {
        content: testimonio,
        score: puntuacion,
        userId: user?.sub, // Aquí se utiliza el ID del usuario autenticado de Auth0
      };
  
      try {
        await dispatch(postReview(newReview));
        setTestimonio('');
        setPuntuacion(0);
        setErrorMsg(''); // Limpiamos el mensaje de error después de un envío exitoso
      } catch (error) {
        setErrorMsg(`Error al enviar la revisión: ${error.message}`); // Establecemos el mensaje de error en caso de error
        console.error('Error al enviar la revisión:', error);
      }
    };

  return (
    <form className="max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <div className="mb-4">
        <label htmlFor="reviewContent" className="block text-gray-700 text-sm font-bold mb-2">
          Testimonio:
        </label>
        <textarea
          id="reviewContent"
          name="reviewContent"
          value={testimonio}
          onChange={(e) => setTestimonio(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
          placeholder="Escribe tu testimonio aquí..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reviewScore" className="block text-gray-700 text-sm font-bold mb-2">
          Puntuación:
        </label>
        <input
          type="number"
          id="reviewScore"
          name="reviewScore"
          value={puntuacion}
          onChange={(e) => setPuntuacion(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="0"
          max="5"
          placeholder="Ingresa la puntuación (1-5)"
        />
      </div>

      {isAuthenticated && user && (
        <div>
          <p>Foto del usuario:</p>
          <img src={user.picture} alt="Foto del usuario" />

          <p>Nombre del usuario: {user.name}</p>
        </div>
      )}

      <button
        type="submit"
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Enviar Testimonio
      </button>
    </form>
  );
};

export default InputReview;
