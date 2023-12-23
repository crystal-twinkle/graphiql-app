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
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebaseModule';
import { Loader } from '../components/Loader/Loader';

export function WelcomePage() {
  const [user, loading] = useAuthState(auth);
  const { translate } = useLocalization();

  return (
    <div className="flex flex-col mx-auto p-5">
      <nav className="flex gap-5 self-end items-center">
        {loading ? (
          <Loader className="w-7 h-7" />
        ) : !loading && !user ? (
          <>
            <Link
              to={RouterPage.SIGN_IN}
              className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
            >
              <img src={signInIcon} alt="local-icon" className="w-8 h-8" />
              {translate.signIn}
            </Link>
            <Link
              to={RouterPage.SIGN_UP}
              className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
            >
              <img src={signUpIcon} alt="local-icon" className="w-8 h-8" />
              {translate.signUp}
            </Link>
          </>
        ) : (
          <Link
            to={RouterPage.GQL}
            className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
          >
            <img src={gqlIcon} alt="local-icon" className="w-8 h-8" />
            {translate.mainPageText}
          </Link>
        )}
      </nav>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">{translate.welcome.head}</h2>
        <p>{translate.welcome.desc}</p>
      </section>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">{translate.team.text}</h2>
        <div className="flex justify-evenly flex-wrap gap-5">
          <DeveloperCard
            name={translate.team.Roman}
            avatarLink={avatar1}
            description={translate.team.RomanDesc}
            url="https://github.com/gemer31"
            text="gemer31"
          ></DeveloperCard>
          <DeveloperCard
            name={translate.team.Kristina}
            avatarLink={avatar2}
            description={translate.team.KristinaDesc}
            url="https://github.com/crystal-twinkle"
            text="crystal-twinkle"
          ></DeveloperCard>
          <DeveloperCard
            name={translate.team.Sergey}
            avatarLink={avatar3}
            description={translate.team.SergeyDesc}
            url="https://github.com/SadJoeBright"
            text="SadJoeBright"
          ></DeveloperCard>
        </div>
      </section>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">{translate.welcome.aboutHead}</h2>
        <p>{translate.welcome.aboutDesc}</p>
      </section>
    </div>
  );
}
