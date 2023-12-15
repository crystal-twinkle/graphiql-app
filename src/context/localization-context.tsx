import React, { createContext, useState, PropsWithChildren, useContext } from 'react';
import { dataLang } from '../utils/dataLang';
import { ILocalizationContext, Language } from '../models/localizationt';

const LocalizationContext = createContext<ILocalizationContext>(null!);

export const LocalizationProvider = ({ children }: PropsWithChildren) => {
  const navigatorLang = navigator.language.slice(0, 2).toUpperCase();
  const [language, changeLanguage] = useState<Language>(
    (['EN', 'RU'].includes(navigatorLang) ? navigatorLang : 'EN') as Language
  );

  return (
    <LocalizationContext.Provider value={{ language, changeLanguage, dataLang }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  return useContext(LocalizationContext);
};
