// Importar las dependencias necesarias
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer'; // El reducer raíz que combina los reducers de cada slice
import { thunk } from 'redux-thunk';

// Crear el enhancer usando compose, que combina varias funciones en una
const enhancer = compose(
  // Aplicar el middleware thunk
  applyMiddleware(thunk),
  // Integrar las devtools si están disponibles
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Crear el store usando createStore, pasando el reducer y el enhancer
const store = createStore(rootReducer, enhancer);

// Exportar el store
export default store;
