import React, { useState } from 'react';
import './DateFilter.css';

interface DateFilterProps {
  label: string;
  onChange?: (value: any) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ label, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'preset' | 'single' | 'range'>('preset');
  const [selectedPreset, setSelectedPreset] = useState('');
  const [singleDate, setSingleDate] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const presets = [
    { value: 'today', label: 'Сегодня' },
    { value: 'yesterday', label: 'Вчера' },
    { value: 'week', label: 'Последняя неделя' },
    { value: 'month', label: 'Последний месяц' },
    { value: 'quarter', label: 'Последние 3 месяца' },
    { value: 'year', label: 'Последний год' }
  ];

  const getCurrentDisplayValue = () => {
    if (selectedMode === 'preset' && selectedPreset) {
      const preset = presets.find(p => p.value === selectedPreset);
      return preset?.label || 'Выберите период';
    }
    if (selectedMode === 'single' && singleDate) {
      return new Date(singleDate).toLocaleDateString('ru-RU');
    }
    if (selectedMode === 'range' && dateFrom && dateTo) {
      return `${new Date(dateFrom).toLocaleDateString('ru-RU')} — ${new Date(dateTo).toLocaleDateString('ru-RU')}`;
    }
    return 'Выберите дату или период';
  };

  const handlePresetSelect = (presetValue: string) => {
    setSelectedPreset(presetValue);
    setSelectedMode('preset');
    onChange && onChange({ mode: 'preset', value: presetValue });
  };

  const handleSingleDateChange = (date: string) => {
    setSingleDate(date);
    setSelectedMode('single');
    onChange && onChange({ mode: 'single', value: date });
  };

  const handleRangeChange = () => {
    if (dateFrom && dateTo) {
      setSelectedMode('range');
      onChange && onChange({ mode: 'range', from: dateFrom, to: dateTo });
    }
  };

  return (
    <div className="date-filter">
      <label className="filter-label">{label}</label>
      <div className="date-filter-dropdown">
        <button 
          className="date-filter-trigger"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <span className="date-filter-value">{getCurrentDisplayValue()}</span>
          <span className={`date-filter-arrow ${isOpen ? 'open' : ''}`}>▼</span>
        </button>

        {isOpen && (
          <div className="date-filter-popup">
            <div className="date-filter-tabs">
              <button 
                className={`date-tab ${selectedMode === 'preset' ? 'active' : ''}`}
                onClick={() => setSelectedMode('preset')}
              >
                📅 Быстрый выбор
              </button>
              <button 
                className={`date-tab ${selectedMode === 'single' ? 'active' : ''}`}
                onClick={() => setSelectedMode('single')}
              >
                📆 Конкретная дата
              </button>
              <button 
                className={`date-tab ${selectedMode === 'range' ? 'active' : ''}`}
                onClick={() => setSelectedMode('range')}
              >
                📊 Интервал
              </button>
            </div>

            <div className="date-filter-content">
              {selectedMode === 'preset' && (
                <div className="preset-options">
                  {presets.map((preset) => (
                    <button
                      key={preset.value}
                      className={`preset-option ${selectedPreset === preset.value ? 'selected' : ''}`}
                      onClick={() => handlePresetSelect(preset.value)}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              )}

              {selectedMode === 'single' && (
                <div className="single-date-picker">
                  <input
                    type="date"
                    value={singleDate}
                    onChange={(e) => handleSingleDateChange(e.target.value)}
                    className="date-input"
                  />
                </div>
              )}

              {selectedMode === 'range' && (
                <div className="date-range-picker">
                  <div className="date-range-row">
                    <label>От:</label>
                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="date-input"
                    />
                  </div>
                  <div className="date-range-row">
                    <label>До:</label>
                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="date-input"
                    />
                  </div>
                  <button 
                    className="apply-range-btn"
                    onClick={handleRangeChange}
                    disabled={!dateFrom || !dateTo}
                  >
                    Применить интервал
                  </button>
                </div>
              )}
            </div>

            <div className="date-filter-actions">
              <button 
                className="date-action-btn clear"
                onClick={() => {
                  setSelectedPreset('');
                  setSingleDate('');
                  setDateFrom('');
                  setDateTo('');
                  onChange && onChange(null);
                }}
              >
                Очистить
              </button>
              <button 
                className="date-action-btn apply"
                onClick={() => setIsOpen(false)}
              >
                Готово
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateFilter;