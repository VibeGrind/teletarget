import React from 'react';

interface FilterToggleProps {
  label: string;
  value: boolean | null;
  onChange: (value: boolean | null) => void;
}

const FilterToggle: React.FC<FilterToggleProps> = ({ label, value, onChange }) => {
  return (
    <div className="filter-item toggle-item">
      <label className="filter-label">{label}</label>
      <div className="toggle-container">
        <button 
          className={`toggle-btn ${value === true ? 'active' : ''}`}
          onClick={() => onChange(true)}
        >
          Да
        </button>
        <button 
          className={`toggle-btn ${value === false ? 'active' : ''}`}
          onClick={() => onChange(false)}
        >
          Нет
        </button>
        <button 
          className={`toggle-btn ${value === null ? 'active' : ''}`}
          onClick={() => onChange(null)}
        >
          Любое
        </button>
      </div>
    </div>
  );
};

export default FilterToggle;