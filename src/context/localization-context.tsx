import React, { createContext, useState, PropsWithChildren, useContext } from 'react';
import { dataLang } from '../data/data-lang';
import { ILocalizationContext, Language } from '../models/localization';

const LANGUAGES: Array<Language> = ['EN', 'RU'];

const FALLBACK_LANGUAGE = 'EN';

const isLanguage = (candidate: unknown): candidate is Language =>
  typeof candidate === 'string' && LANGUAGES.some((it) => it === candidate);

const getInitialLanguage = (): Language => {
  const langFromNavigator = navigator.language.slice(0, 2).toUpperCase();

  return isLanguage(langFromNavigator) ? langFromNavigator : FALLBACK_LANGUAGE;
};

const LocalizationContext = createContext<ILocalizationContext>(null!);

export const LocalizationProvider = ({ children }: PropsWithChildren) => {
  const [language, changeLanguage] = useState<Language>(getInitialLanguage);

  const translate = dataLang[language];

  return (
    <LocalizationContext.Provider value={{ language, changeLanguage, translate, dataLang }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  return useContext(LocalizationContext);
};
