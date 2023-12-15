import React, { useState } from 'react';
import Button from '../UI/Button';
import localIcon from '../../assets/icons/local-icon.svg';
import { useLocalization } from '../../context/localization-context';
import { Language } from '../../models/localizationt';

const LanguageSwitcher = () => {
  const { dataLang, language, changeLanguage } = useLocalization();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'LI') {
      const languageCode = target.dataset.code as Language;
      changeLanguage(languageCode);
      toggleDropdown();
    }
  };

  const languages = [
    { code: 'EN', label: dataLang[language].switchLang.en },
    { code: 'RU', label: dataLang[language].switchLang.ru },
    { code: 'BE', label: dataLang[language].switchLang.be },
  ];

  return (
    <div className="relative">
      <Button icon={localIcon} text={language} onclick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="absolute bg-light p-2 cursor-default">
          <ul className="flex flex-col items-center gap-2" onClick={handleLanguageClick}>
            {languages.map((language) => (
              <li className="cursor-pointer" key={language.code} data-code={language.code}>
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
