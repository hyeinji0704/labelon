import React, { useState, useRef, useEffect } from 'react';
import './Select.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = '선택하세요',
  disabled = false,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <div className={`select ${disabled ? 'is-disabled' : ''}`} ref={selectRef}>
      <div
        className={`select__control ${isOpen ? 'is-open' : ''}`}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleDropdown();
          if (e.key === 'Escape') setIsOpen(false);
        }}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <img
          src="/images/icons/icon-dropdown.svg"
          alt="dropdown"
          className="select__icon"
        />
      </div>

      {isOpen && (
        <ul className="select__menu" role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selected?.value === option.value}
              className={`select__option ${
                selected?.value === option.value ? 'is-selected' : ''
              }`}
              onClick={() => handleSelect(option)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
