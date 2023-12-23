import { Link } from 'react-router-dom';
import graphQLLogo from '../../assets/icons/graphql-icon.svg';
import signOutIcon from '../../assets/icons/sign-out-icon.svg';
import Button from '../UI/Button';
import { useEffect, useState } from 'react';
import { RouterPage } from '../../router';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useLocalization } from '../../context/localization-context';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebaseModule';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar } from '../Avatar';
import { Loader } from '../Loader/Loader';

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [user, loading] = useAuthState(auth);
  const { translate } = useLocalization();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsPageScrolled(true) : setIsPageScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <header
      className={`sticky top-0 left-0 z-20 py-2 px-5 bg-dark transition-all duration-500 ease-in-out ${
        isPageScrolled && 'bg-light'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={graphQLLogo} alt="App Logo" />
          <h1 className="font-semibold text-3xl align-middle">GraphiQL</h1>
        </div>
        <Link
          to={RouterPage.WELCOME}
          className="hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
        >
          {translate.welcomePageText}
        </Link>
        <div className="flex items-center gap-5">
          <LanguageSwitcher />
          {loading ? (
            <Loader className="w-8 h-8" />
          ) : user ? (
            <>
              <Avatar user={user} />
              <Button icon={signOutIcon} text={translate.signOut} onclick={logout} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
