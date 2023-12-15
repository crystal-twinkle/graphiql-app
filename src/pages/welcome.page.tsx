import DeveloperCard from '../components/DeveloperCard/DeveloperCard';
import avatar1 from '../assets/images/Avatar_1.jpg';
import avatar2 from '../assets/images/Avatar_2.jpg';
import avatar3 from '../assets/images/Avatar_3.jpg';
import signInIcon from '../assets/icons/sign-in-icon.svg';
import signUpIcon from '../assets/icons/sign-up-icon.svg';
import gqlIcon from '../assets/icons/graphql-icon.svg';
import { Link } from 'react-router-dom';
import { RouterPage } from '../router';
import { useLocalization } from '../context/localization-context';

export function WelcomePage() {
  const { i18n, language } = useLocalization();

  return (
    <div className="flex flex-col mx-auto p-5">
      <nav className="flex gap-5 self-end">
        <Link
          to={RouterPage.SIGN_IN}
          className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
        >
          <img src={signInIcon} alt="local-icon" className="w-8 h-8" />
          {i18n[language].signIn}
        </Link>
        <Link
          to={RouterPage.SIGN_UP}
          className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
        >
          <img src={signUpIcon} alt="local-icon" className="w-8 h-8" />
          {i18n[language].signUp}
        </Link>
        <Link
          to={RouterPage.GQL}
          className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
        >
          <img src={gqlIcon} alt="local-icon" className="w-8 h-8" />
          {i18n[language].mainPageText}
        </Link>
      </nav>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">{i18n[language].welcome.head}</h2>
        <p>{i18n[language].welcome.desc}</p>
      </section>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">{i18n[language].team.text}</h2>
        <div className="flex justify-evenly flex-wrap gap-5">
          <DeveloperCard
            name={i18n[language].team.Roman}
            avatarLink={avatar1}
            description={i18n[language].team.RomanDesc}
            url="https://github.com/gemer31"
            text="gemer31"
          ></DeveloperCard>
          <DeveloperCard
            name={i18n[language].team.Kristina}
            avatarLink={avatar2}
            description={i18n[language].team.KristinaDesc}
            url="https://github.com/crystal-twinkle"
            text="crystal-twinkle"
          ></DeveloperCard>
          <DeveloperCard
            name={i18n[language].team.Sergey}
            avatarLink={avatar3}
            description={i18n[language].team.SergeyDesc}
            url="https://github.com/SadJoeBright"
            text="sadJoeBright"
          ></DeveloperCard>
        </div>
      </section>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">{i18n[language].welcome.aboutHead}</h2>
        <p>{i18n[language].welcome.aboutDesc}</p>
      </section>
    </div>
  );
}
