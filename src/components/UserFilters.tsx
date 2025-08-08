import React from 'react';
import FilterInput from './FilterInput';
import FilterSelect from './FilterSelect';
import FilterToggle from './FilterToggle';

interface UserFiltersProps {
  filters: any;
  onChange: (filters: any) => void;
  expanded: boolean;
  onExpandToggle: () => void;
}

const UserFilters: React.FC<UserFiltersProps> = ({ filters, onChange, expanded, onExpandToggle }) => {
  const lengthOptions = ['Короткие (до 100)', 'Средние (100-500)', 'Длинные (500+)'];
  const popularParagraphs = ['1-3', '4-10', '11-20', '20+'];
  const linksCountOptions = ['Нет ссылок', '1-2', '3-5', '5+'];
  const cleaningRatioOptions = ['Высокое (90%+)', 'Среднее (70-90%)', 'Низкое (<70%)'];
  const commentsOptions = ['Без комментариев', '1-10', '11-50', '50+'];
  const forwardsOptions = ['Без репостов', '1-10', '11-100', '100+'];
  const viewsOptions = ['До 1K', '1K-10K', '10K-100K', '100K+'];
  const ratioOptions = ['Высокое (10%+)', 'Среднее (5-10%)', 'Низкое (<5%)'];

  return (
    <div className="filter-category user-filters">
      <div className="expandable-header" onClick={onExpandToggle}>
        <h3 className="filter-category-title">Метаданные Telegram</h3>
        <div className="filter-status">
          <span className="filter-status-text">Не выбрано</span>
          <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>▼</span>
        </div>
      </div>
      
      {expanded && (
        <div className="expandable-content">
          <div className="filter-grid">
            <FilterSelect
              label="Длина текста"
              options={lengthOptions}
              allowCustom={true}
              placeholder="Выберите или введите длину"
            />
            <FilterSelect
              label="Всего абзацев"
              options={popularParagraphs}
              allowCustom={true}
              placeholder="Выберите количество"
            />
            <FilterSelect
              label="Чистых абзацев"
              options={popularParagraphs}
              allowCustom={true}
              placeholder="Выберите количество"
            />
            <FilterSelect
              label="Количество ссылок"
              options={linksCountOptions}
              allowCustom={true}
              placeholder="Выберите количество"
            />
            <FilterInput
              label="Количество хэштегов"
              placeholder="Введите число"
              type="number"
            />
            <FilterSelect
              label="Коэффициент очистки"
              options={cleaningRatioOptions}
              allowCustom={true}
              placeholder="Выберите коэффициент"
            />
            <FilterSelect
              label="Количество комментариев"
              options={commentsOptions}
              allowCustom={true}
              placeholder="Выберите количество"
            />
            <FilterSelect
              label="Репосты"
              options={forwardsOptions}
              allowCustom={true}
              placeholder="Выберите количество"
            />
            <FilterSelect
              label="Просмотры"
              options={viewsOptions}
              allowCustom={true}
              placeholder="Выберите диапазон"
            />
            <FilterToggle
              label="Есть медиа"
              value={false}
              onChange={(value) => {}}
            />
          </div>
          
          <div className="special-filters">
            <h4 className="special-filters-title">Специальные коэффициенты</h4>
            <div className="filter-grid special">
              <FilterSelect
                label="Просмотры к реакциям"
                options={ratioOptions}
                allowCustom={true}
                placeholder="Выберите соотношение"
              />
              <FilterSelect
                label="Просмотры к комментариям"
                options={ratioOptions}
                allowCustom={true}
                placeholder="Выберите соотношение"
              />
              <FilterSelect
                label="Просмотры к репостам"
                options={ratioOptions}
                allowCustom={true}
                placeholder="Выберите соотношение"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFilters;