import React from 'react';
import FilterToggle from './FilterToggle';
import FilterInput from './FilterInput';

interface TextFormatFiltersProps {
  filters: any;
  onChange: (filters: any) => void;
  expanded: boolean;
  onExpandToggle: () => void;
}

const TextFormatFilters: React.FC<TextFormatFiltersProps> = ({ 
  filters, 
  onChange, 
  expanded, 
  onExpandToggle 
}) => {
  return (
    <div className="filter-category text-format-filters">
      <div className="expandable-header" onClick={onExpandToggle}>
        <h3 className="filter-category-title">Форматирование текста</h3>
        <div className="filter-status">
          <span className="filter-status-text">Не выбрано</span>
          <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>▼</span>
        </div>
      </div>
      
      {expanded && (
        <div className="expandable-content">
          <div className="filter-grid">
            <FilterToggle
              label="Жирный текст"
              value={null}
              onChange={(value) => {}}
            />
            <FilterToggle
              label="Курсив"
              value={null}
              onChange={(value) => {}}
            />
            <FilterToggle
              label="Код"
              value={null}
              onChange={(value) => {}}
            />
            <FilterToggle
              label="Спойлер"
              value={null}
              onChange={(value) => {}}
            />
          </div>
          
          <div className="advanced-format-filters">
            <h4 className="advanced-filters-title">Расширенные параметры</h4>
            <div className="filter-grid advanced">
              <FilterInput
                label="Количество жирного текста"
                placeholder="Введите число"
                type="number"
              />
              <FilterInput
                label="Количество блоков кода"
                placeholder="Введите число"
                type="number"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextFormatFilters;