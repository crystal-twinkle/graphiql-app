import React, { useState } from 'react';
import Button from '../UI/Button';
import localIcon from '../../assets/icons/local-icon.svg';
import { useLocalization } from '../../context/localization-context';
import { Language } from '../../models/i18n';

const LanguageSwitcher = () => {
  const { i18n, language, changeLanguage } = useLocalization();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguage = (languageCode: Language) => {
    changeLanguage(languageCode);
    toggleDropdown();
  };

  const languages = [
    { code: 'EN', label: i18n[language].switchLang.en },
    { code: 'RU', label: i18n[language].switchLang.ru },
    { code: 'BE', label: i18n[language].switchLang.be },
  ];

  return (
    <div className="relative">
      <Button icon={localIcon} text={language} onclick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="absolute bg-light p-2 cursor-default">
          <ul className="flex flex-col items-center gap-2">
            {languages.map((language) => (
              <li
                className="cursor-pointer"
                key={language.code}
                onClick={() => handleLanguage(language.code as Language)}
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
