import './App.css';
import React from 'react';
import { SearchBar } from './components/searchBar/SearchBar';
import Cards  from './components/cards/Cards';

function App() {
  return (
    <div >
      <div>
        <SearchBar />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;