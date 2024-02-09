import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger
  } = useForm();

  const [category, setCategory] = useState('');
  const [formHasErrors, setFormHasErrors] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const URL = 'http://localhost:3001';

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${URL}/categories/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: data.category }),
      });
  
      if (response.ok) {
        setSuccessMessage('Categoría creada con éxito');
        setValue('category', ''); 
      } else {
        console.error('Error al crear la categoría:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud al backend:', error);
    }
  };

  const handleChange = async (e) => {
    setValue(e.target.name, e.target.value);
    setCategory(e.target.value);
    await trigger(e.target.name);
    setFormHasErrors(Object.keys(errors).length > 0);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Creación de Nueva Categoría</h2>
      {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="category">
            Nueva Categoría:
          </label>
          <input
            {...register('category', {
              required: 'La categoría es obligatoria',
              pattern: {
                value: /^[A-Za-z\s]+$/, 
                message: 'Ingresa un nombre de categoría válido con solo letras y espacios',
              },
            })}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`p-2 mt-4 w-full rounded ${
            formHasErrors
              ? 'button-error cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-700 cursor-pointer'
          }`}
          disabled={formHasErrors}
        >
          Crear Categoría
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;