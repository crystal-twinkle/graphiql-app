import React, { useState } from 'react';
import Button from '../UI/Button';
import localIcon from '../../assets/icons/local-icon.svg';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    toggleDropdown();
  };

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'RU', label: 'Russian' },
  ];

  return (
    <div className="relative">
      <Button icon={localIcon} text={currentLanguage} onclick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="absolute bg-light p-2 cursor-default">
          <ul className="flex flex-col items-center gap-2">
            {languages.map((language) => (
              <li
                className="cursor-pointer"
                key={language.code}
                onClick={() => handleLanguage(language.code)}
              >
                {language.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
