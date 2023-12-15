export type Language = 'EN' | 'RU';

export interface I18nContextType {
  language: Language;
  changeLanguage: (language: Language) => void;
  i18n: {
    [key in Language]: {
      switchLang: {
        en: string;
        ru: string;
      };
      signIn: string;
      signUp: string;
      signOut: string;
      mainPageText: string;
      mainPage: {
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
}

export const i18n: I18nContextType['i18n'] = {
  EN: {
    switchLang: {
      en: 'English',
      ru: 'Russian',
    },
    signIn: 'Sign in',
    signUp: 'Sign up',
    signOut: 'Sign out',
    mainPageText: 'Main page',
    mainPage: {
      head: 'A query language for your API',
      desc: 'GraphiQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphiQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.',
      aboutHead: 'About the course',
      aboutDesc:
        "RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer community since 2013. Everyone can study at RS School, regardless of age, professional employment, or place of residence. The mentors and trainers of our school are front-end and javascript developers from different companies and countries. RS School operates 'Pay it forward' principle. We share our knowledge with students for free at the present time, hoping that in the future they will return to us as mentors and pass on their knowledge to the next generation of students in the same way.",
    },
    team: {
      text: 'Development Team',
      Roman: 'Roman',
      Kristina: 'Kristina',
      Sergey: 'Sergey',
      RomanDesc:
        "Roman is the driving force behind our product's technical excellence. His strategic thinking and leadership have been instrumental in shaping our success.",
      KristinaDesc:
        "Krystina's coding prowess is legendary within the team. Her deep technical insights and commitment to excellence have been instrumental in shaping our product's core functionality.",
      SergeyDesc:
        "Sergey's impressive skills and contributions are the key to our product's exceptional user experience. He dedication to crafting responsive, interactive, and aesthetically pleasing interfaces has a profound impact on our product's success.",
    },
  },
  RU: {
    switchLang: {
      en: 'Английский',
      ru: 'Русский',
    },
    signIn: 'Войти',
    signUp: 'Зарегистрироваться',
    signOut: 'Выход',
    mainPageText: 'Главная страница',
    mainPage: {
      head: 'Язык запросов для вашего API',
      desc: 'GraphiQL — это язык запросов для API и среда выполнения для выполнения этих запросов с существующими данными. GraphiQL обеспечивает полное и понятное описание данных в вашем API, дает клиентам возможность запрашивать именно то, что им нужно и не более, упрощает постепенное развитие API и предоставляет мощные инструменты разработчика',
      aboutHead: 'О курсе',
      aboutDesc:
        'RS School — это бесплатная общественная образовательная программа, проводимая сообществом разработчиков The Rolling Scopes с 2013 года. Учиться в RS School может каждый, независимо от возраста, профессиональной занятости и места жительства. Наставники и тренеры нашей школы — front-end и javascript-разработчики из разных компаний и стран. RS School действует по принципу «Заплати вперед». В настоящее время мы бесплатно делимся своими знаниями со студентами, надеясь, что в будущем они вернутся к нам в качестве наставников и таким же образом передадут свои знания следующему поколению студентов',
    },
    team: {
      text: 'Команда разработчиков',
      Roman: 'Роман',
      Kristina: 'Кристина',
      Sergey: 'Сергей',
      RomanDesc:
        'Роман — движущая сила технического превосходства нашего продукта. Его стратегическое мышление и лидерство сыграли важную роль в формировании нашего успеха',
      KristinaDesc:
        'О мастерстве Кристины в написании кода в команде ходят легенды. Ее глубокие технические знания и стремление к совершенству сыграли важную роль в формировании основной функциональности нашего продукта',
      SergeyDesc:
        'Впечатляющие навыки и вклад Сергея являются ключом к исключительному пользовательскому опыту нашего продукта. Его стремление создавать адаптивные, интерактивные и эстетически приятные интерфейсы оказывает большое влияние на успех нашего продукта',
    },
  },
};