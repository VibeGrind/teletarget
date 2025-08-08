import React, { useState } from 'react';
import './FilterSection.css';
import TechnicalFilters from './TechnicalFilters';
import UserFilters from './UserFilters';
import TextFormatFilters from './TextFormatFilters';

interface FilterSectionProps {
  filters: any;
  onFiltersChange: (filters: any) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, onFiltersChange }) => {
  const [technicalExpanded, setTechnicalExpanded] = useState(false);
  const [userExpanded, setUserExpanded] = useState(false);
  const [textFormatExpanded, setTextFormatExpanded] = useState(false);

  return (
    <div className="filter-section">
      <div className="filter-content">
        <TechnicalFilters 
          filters={filters} 
          onChange={onFiltersChange}
          expanded={technicalExpanded}
          onExpandToggle={() => setTechnicalExpanded(!technicalExpanded)}
        />
        <UserFilters 
          filters={filters} 
          onChange={onFiltersChange}
          expanded={userExpanded}
          onExpandToggle={() => setUserExpanded(!userExpanded)}
        />
        <TextFormatFilters 
          filters={filters} 
          onChange={onFiltersChange}
          expanded={textFormatExpanded}
          onExpandToggle={() => setTextFormatExpanded(!textFormatExpanded)}
        />
      </div>
    </div>
  );
};

export default FilterSection;