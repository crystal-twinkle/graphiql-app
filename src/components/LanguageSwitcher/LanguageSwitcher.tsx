import React, { useState } from 'react';
import Button from '../UI/Button';
import localIcon from '../../assets/icons/local-icon.svg';
import { useLocalization } from '../../context/localization-context';
import { Language } from '../../models/localization';

const LanguageSwitcher = () => {
  const { translate, language, changeLanguage } = useLocalization();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguage = (languageCode: Language) => {
    changeLanguage(languageCode);
    toggleDropdown();
  };

  const languages = [
    { code: 'EN', label: translate.switchLang.en },
    { code: 'RU', label: translate.switchLang.ru },
    { code: 'BE', label: translate.switchLang.be },
  ];

  return (
    <div className="relative">
      <Button icon={localIcon} text={language} onclick={toggleDropdown} />
      {isDropdownOpen ? (
        <div className="absolute z-10 bg-light p-2 cursor-default">
          <ul className="flex flex-col items-start gap-2 max-w-[150px] overflow-hidden">
            {languages.map((language) => (
              <li
                className="cursor-pointer truncate w-full"
                key={language.code}
                onClick={() => handleLanguage(language.code as Language)}
              >
                {language.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default LanguageSwitcher;
