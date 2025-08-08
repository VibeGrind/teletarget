import React from 'react';
import FilterInput from './FilterInput';
import FilterSelect from './FilterSelect';

interface TechnicalFiltersProps {
  filters: any;
  onChange: (filters: any) => void;
  expanded: boolean;
  onExpandToggle: () => void;
}

const TechnicalFilters: React.FC<TechnicalFiltersProps> = ({ filters, onChange, expanded, onExpandToggle }) => {
  const popularHashtags = ['#новости', '#технологии', '#криптовалюта', '#игры', '#кино'];
  const popularLinks = ['youtube.com', 'telegram.org', 'github.com', 'habr.com'];
  const dateOptions = ['Сегодня', 'Вчера', 'Неделя', 'Месяц', 'Год'];

  return (
    <div className="filter-category technical-filters">
      <div className="expandable-header" onClick={onExpandToggle}>
        <h3 className="filter-category-title">Технические параметры</h3>
        <div className="filter-status">
          <span className="filter-status-text">Не выбрано</span>
          <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>▼</span>
        </div>
      </div>
      
      {expanded && (
        <div className="expandable-content">
          <div className="filter-grid">
            <FilterInput
              label="ID записи"
              placeholder="Введите числовой ID"
              type="number"
            />
            <FilterInput
              label="ID сообщения"
              placeholder="Введите числовой ID"
              type="number"
            />
            <FilterInput
              label="ID аккаунта"
              placeholder="Введите числовой ID"
              type="number"
            />
            <FilterSelect
              label="Хэштеги"
              options={popularHashtags}
              allowCustom={true}
              placeholder="Выберите или введите хэштег"
            />
            <FilterInput
              label="Контакты"
              placeholder="Введите числовой ID"
              type="number"
            />
            <FilterSelect
              label="Ссылки"
              options={popularLinks}
              allowCustom={true}
              placeholder="Выберите или введите ссылку"
            />
            <FilterSelect
              label="Дата"
              options={dateOptions}
              allowCustom={true}
              placeholder="Выберите период или введите дату"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalFilters;