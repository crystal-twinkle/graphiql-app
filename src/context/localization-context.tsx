import React, { createContext, useState, PropsWithChildren, useContext } from 'react';
import { I18nContextType, i18n, Language } from '../models/i18n';

const LocalizationContext = createContext<I18nContextType>({
  language: 'EN',
  changeLanguage: () => {},
  i18n: i18n,
});

export const LocalizationProvider = ({ children }: PropsWithChildren) => {
  const navigatorLang = navigator.language.slice(0, 2).toUpperCase();
  const [language, changeLanguage] = useState<Language>(
    (['EN', 'RU'].includes(navigatorLang) ? navigatorLang : 'EN') as Language
  );

  return (
    <LocalizationContext.Provider value={{ language, changeLanguage, i18n }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  return useContext(LocalizationContext);
};
