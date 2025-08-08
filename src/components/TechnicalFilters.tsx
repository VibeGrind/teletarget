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
        <h3 className="filter-category-title">🔍 Контент-фильтры</h3>
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
            <FilterSelect
              label="Хештеги в тексте"
              options={popularHashtags}
              allowCustom={true}
              placeholder="Выберите или введите хэштег"
            />
            <FilterInput
              label="Контакты в тексте"
              placeholder="Введите числовой ID"
              type="number"
            />
            <FilterSelect
              label="Ссылки в тексте"
              options={popularLinks}
              allowCustom={true}
              placeholder="Выберите или введите ссылку"
            />
            <FilterSelect
              label="Дата создания"
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