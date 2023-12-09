import { Link } from 'react-router-dom';
import graphQLLogo from '../../assets/icons/graphql-icon.svg';
import signOutIcon from '../../assets/icons/sign-out-icon.svg';
import localIcon from '../../assets/icons/local-icon.svg';
import HeaderButton from '../UI/HeaderButton';
import { useEffect, useRef } from 'react';

function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > headerHeight) {
        headerRef.current.classList.add('bg-light');
      } else {
        headerRef.current.classList.remove('bg-light');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 left-0 flex justify-between items-center py-2 px-5 bg-dark transition-all duration-500 ease-in-out"
    >
      <div className="flex items-center gap-2">
        <img src={graphQLLogo} alt="App Logo" />
        <h1 className="font-semibold text-3xl align-middle">GrafiQL</h1>
      </div>
      <Link to="/welcome" className="hover:brightness-125 transition-all duration-200 ease-in-out">
        Welcome page
      </Link>
      <div className="flex gap-5">
        <HeaderButton icon={localIcon} text={'EN'} onclick={() => {}}></HeaderButton>
        <HeaderButton icon={signOutIcon} text="Sign out" onclick={() => {}}></HeaderButton>
      </div>
    </header>
  );
}

export default Header;
