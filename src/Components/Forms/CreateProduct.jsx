import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    trigger,
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [formHasErrors, setFormHasErrors] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const response = await fetch('http://localhost:3001/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Error al obtener las categorías:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    obtenerCategorias();
  }, []);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      if (!data.image || !(data.image[0] instanceof File)) {
        console.error('El archivo de imagen no está especificado o no es válido');
        return;
      }

      formData.append('image', data.image[0]);

      const imageResponse = await fetch('http://localhost:3001/uploadImage', {
        method: 'POST',
        body: formData,
      });

      if (!imageResponse.ok) {
        const errorData = await imageResponse.json();
        console.error('Error al subir la imagen:', errorData.error);
        return;
      }

      const imageData = await imageResponse.json();

      const productData = {
        title: data.title,
        description: data.description,
        price: data.price,
        category: data.category,
        stock: data.stock,
        imageUrl: imageData.imageUrl,
      };

      const productResponse = await fetch('http://localhost:3001/createProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (productResponse.ok) {
        setSuccessMessage('Producto creado con éxito');
        setCategory('');
        reset();
      } else {
        console.error('Error al crear el producto:', productResponse.statusText);
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

  const handleImage = (e) => {
    const selectedImage = e.target.files;

    if (selectedImage.length > 0) {
      setValue('image', selectedImage);
    } else {
      setValue('image', []);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Creación de Nuevo Producto</h2>
      {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            {...register('title', {
              required: 'El titulo es obligatorio',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Ingresa un título válido con solo letras y espacios',
              },
            })}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <input
            {...register('description', {
              required: 'La descripción es obligatoria',
              minLength: {
                value: 10,
                message: 'La descripción debe tener al menos 10 caracteres',
              },
            })}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="price">
            Price:
          </label>
          <input
            {...register('price', {
              required: 'El precio es obligatorio',
              min: {
                value: 0.01,
                message: 'El precio debe ser mayor a 0',
              },
            })}
            onChange={handleChange}
            step="0.01"
            className="w-full px-3 py-2 border rounded"
          />
          {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="category">
            Categoría:
          </label>
          <select
            {...register('category', {
              required: 'La categoría es obligatoria',
            })}
            value={category}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="" disabled>
              Seleccione una categoría
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="image">
            Image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              console.log('Evento de cambio de input:', e);
              handleImage(e);
            }}
            {...register('image', {
              required: 'La imagen es obligatoria',
            })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="stock">
            Stock:
          </label>
          <input
            {...register('stock', {
              required: 'El Stock es obligatorio',
              min: {
                value: 0,
                message: 'El stock no puede ser negativo',
              },
            })}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.stock && <p className="text-red-500 text-xs mt-1">{errors.stock.message}</p>}
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
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CrearProducto;