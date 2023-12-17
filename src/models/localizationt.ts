import { dataLang } from '../data/data-lang';

export type Language = 'EN' | 'RU' | 'BE';

export interface ILocalizationContext {
  language: Language;
  changeLanguage: (language: Language) => void;
  dataLang: {
    [key in Language]: {
      switchLang: {
        en: string;
        ru: string;
        be: string;
      };
      signIn: string;
      signUp: string;
      signOut: string;
      welcomePageText: string;
      mainPageText: string;
      welcome: {
        head: string;
        desc: string;
        aboutHead: string;
        aboutDesc: string;
      };
      team: {
        text: string;
        Roman: string;
        Kristina: string;
        Sergey: string;
        RomanDesc: string;
        KristinaDesc: string;
        SergeyDesc: string;
      };
    };
  };
  translate: (typeof dataLang)[Language];
}
