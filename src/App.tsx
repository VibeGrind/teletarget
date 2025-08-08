import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import ResultsGrid from './components/ResultsGrid';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  return (
    <div className="App">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FilterSection filters={filters} onFiltersChange={setFilters} />
      <ResultsGrid />
    </div>
  );
}

export default App;