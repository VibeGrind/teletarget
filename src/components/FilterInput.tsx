import React, { useState } from 'react';

interface FilterInputProps {
  label: string;
  placeholder: string;
  type?: 'text' | 'number';
  value?: string;
  onChange?: (value: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ 
  label, 
  placeholder, 
  type = 'text',
  value = '',
  onChange 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="filter-item">
      <label className="filter-label">{label}</label>
      <input
        type={type}
        className="filter-input"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterInput;