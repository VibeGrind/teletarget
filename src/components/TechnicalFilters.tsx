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
  const popularPhones = ['+7 (XXX) XXX-XX-XX', '+7XXXXXXXXXX', '8 (XXX) XXX-XX-XX', '+1 (XXX) XXX-XXXX', '+380 XX XXX XX XX'];
  const popularEmails = ['gmail.com', 'yandex.ru', 'mail.ru', 'outlook.com', 'yahoo.com'];
  const popularLinks = ['youtube.com', 'telegram.org', 'github.com', 'habr.com'];

  return (
    <div className="filter-category technical-filters">
      <div className="expandable-header" onClick={onExpandToggle}>
        <h3 className="filter-category-title">
          🔍 Контент - фильтр | Поиск точных данных из <span style={{textDecoration: 'underline', textDecorationStyle: 'dashed'}}>текста</span> в постах или сообщениях
        </h3>
        <div className="filter-status">
          <span className="filter-status-text">Не выбрано</span>
          <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>▼</span>
        </div>
      </div>
      
      {expanded && (
        <div className="expandable-content">
          <div className="filter-grid">
            <FilterSelect
              label="Хештеги в тексте"
              options={popularHashtags}
              allowCustom={true}
              placeholder="Выберите или введите хэштег"
            />
            <FilterSelect
              label="Телефоны в тексте"
              options={popularPhones}
              allowCustom={true}
              placeholder="Выберите или введите формат телефона"
            />
            <FilterSelect
              label="EMAIL в тексте"
              options={popularEmails}
              allowCustom={true}
              placeholder="Выберите или введите домен email"
            />
            <FilterSelect
              label="Ссылки в тексте"
              options={popularLinks}
              allowCustom={true}
              placeholder="Выберите или введите ссылку"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalFilters;