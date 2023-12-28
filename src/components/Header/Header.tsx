import { Link, useLocation } from 'react-router-dom';
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
import { BurgerButton } from '../UI/BurgerButton/BurgerButton';

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [user, loading] = useAuthState(auth);
  const { translate } = useLocalization();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsPageScrolled(true) : setIsPageScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsBurgerOpened(false);
  }, [user, location]);

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    if (isBurgerOpened) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isBurgerOpened]);

  return (
    <header
      className={`sticky top-0 left-0 z-20 py-2 px-5 bg-dark transition-all duration-500 ease-in-out ${
        isPageScrolled && 'bg-light'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center bg-inherit">
        <div className="flex items-center w-1/2 md:w-1/3 gap-2">
          <img src={graphQLLogo} alt="App Logo" className="w-8 sm:w-10 h-8 sm:h-10" />
          <h1 className="font-semibold text-2xl sm:text-3xl align-middle">GraphiQL</h1>
        </div>
        <BurgerButton
          onClick={() => setIsBurgerOpened(!isBurgerOpened)}
          isOpened={isBurgerOpened}
          className="flex relative z-20 md:hidden"
        />
        <div
          onClick={() => setIsBurgerOpened(false)}
          className={`w-1/2 md:w-0 fixed top-0 left-0 right-0 bottom-0 bg-dark-50 transition-all ease-in-out duration-500 ${
            isBurgerOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        ></div>

        <div
          className={`fixed ${
            isBurgerOpened ? 'right-0' : '-right-96'
          } top-0 py-14 md:py-0 md:static flex md:flex-row flex-col justify-start md:justify-between items-end md:items-center w-1/2 md:w-2/3 h-full px-3 md:px-0 bg-inherit transition-[right] ease-in-out duration-500`}
        >
          <Link
            to={RouterPage.WELCOME}
            className="w-full md:w-1/2 border-b-2 border-medium md:border-b-0 md:text-center px-1 py-2 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
          >
            {translate.welcomePageText}
          </Link>
          <div className="w-full md:w-1/2 flex md:flex-row flex-col items-start justify-end  md:items-center md:gap-5">
            {loading ? (
              <Loader className="w-8 h-8" />
            ) : user ? (
              <div className="w-full md:w-auto flex gap-1 border-b-2 border-medium md:border-b-0 py-2 md:py-0">
                <Avatar user={user} />
                <Button
                  icon={signOutIcon}
                  text={translate.signOut}
                  onclick={logout}
                  dataTestid="signOut-button"
                />
              </div>
            ) : (
              <></>
            )}
            <div className="py-2 md:py-0">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
