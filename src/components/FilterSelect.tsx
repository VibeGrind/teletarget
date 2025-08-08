import React, { useState } from 'react';

interface FilterSelectProps {
  label: string;
  options: string[];
  allowCustom?: boolean;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ 
  label, 
  options, 
  allowCustom = false,
  placeholder,
  value = '',
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [customValue, setCustomValue] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    setShowCustomInput(false);
    onChange?.(option);
  };

  const handleCustomToggle = () => {
    setShowCustomInput(true);
    setIsOpen(false);
  };

  const handleCustomSubmit = () => {
    if (customValue.trim()) {
      setSelectedValue(customValue);
      setShowCustomInput(false);
      onChange?.(customValue);
    }
  };

  return (
    <div className="filter-item">
      <label className="filter-label">{label}</label>
      {showCustomInput ? (
        <div className="custom-input-container">
          <input
            type="text"
            className="filter-input"
            placeholder={`Введите ${label.toLowerCase()}`}
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
          />
          <div className="custom-actions">
            <button 
              className="custom-btn confirm"
              onClick={handleCustomSubmit}
            >
              ✓
            </button>
            <button 
              className="custom-btn cancel"
              onClick={() => setShowCustomInput(false)}
            >
              ✕
            </button>
          </div>
        </div>
      ) : (
        <div className="filter-select" onClick={() => setIsOpen(!isOpen)}>
          <div className="select-display">
            {selectedValue || placeholder}
            <span className={`select-arrow ${isOpen ? 'open' : ''}`}>▼</span>
          </div>
          {isOpen && (
            <div className="select-dropdown">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="select-option"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
              {allowCustom && (
                <div className="select-option custom" onClick={handleCustomToggle}>
                  <em>Ввести своё значение...</em>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;