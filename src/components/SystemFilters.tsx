import React from 'react';
import FilterInput from './FilterInput';
import DateFilter from './DateFilter';

interface SystemFiltersProps {
  filters: any;
  onChange: (filters: any) => void;
  expanded: boolean;
  onExpandToggle: () => void;
}

const SystemFilters: React.FC<SystemFiltersProps> = ({ filters, onChange, expanded, onExpandToggle }) => {
  return (
    <div className="filter-category system-filters">
      <div className="expandable-header" onClick={onExpandToggle}>
        <h3 className="filter-category-title">⚙️ Системные-фильтры</h3>
        <div className="filter-status">
          <span className="filter-status-text">Не выбрано</span>
          <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>▼</span>
        </div>
      </div>
      
      {expanded && (
        <div className="expandable-content">
          <div className="filter-grid">
            <FilterInput
              label="Канал / Группа / Форум (ID)"
              placeholder="Введите числовой ID"
              type="number"
            />
            <FilterInput
              label="Номер сообщения (ID)"
              placeholder="Введите числовой ID"
              type="number"
            />
            <FilterInput
              label="Кто написал (ID)"
              placeholder="Введите числовой ID"
              type="number"
            />
            <DateFilter
              label="Дата создания"
              onChange={(value) => console.log('Date filter changed:', value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemFilters;