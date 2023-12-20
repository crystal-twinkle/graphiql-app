import { dataLang } from '../data/data-lang';

export type Language = 'EN' | 'RU' | 'BE';

export interface ILocalizationContext {
  language: Language;
  changeLanguage: (language: Language) => void;
  dataLang: {
    [key in Language]: {
      invalidEndpoint: string;
      ok: string;
      docs: string;
      noSuchPage: string;
      somethingWentWrong: string;
      passwordValidHint: string;
      passwordMustMatch: string;
      fieldRequired: string;
      fieldInvalid: string;
      invalidEmailOrPassword: string;
      submit: string;
      forgotPassword: string;
      password: string;
      passwordRepeat: string;
      email: string;
      firstName: string;
      lastName: string;
      enterFirstName: string;
      enterLastName: string;
      enterEmail: string;
      createPassword: string;
      repeatPassword: string;
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
      [localizationKey: string]: string | unknown;
    };
  };
  translate: (typeof dataLang)[Language];
}
