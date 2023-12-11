import { Link } from 'react-router-dom';
import graphQLLogo from '../../assets/icons/graphql-icon.svg';
import signOutIcon from '../../assets/icons/sign-out-icon.svg';
import localIcon from '../../assets/icons/local-icon.svg';
import Button from '../UI/Button';
import { useEffect, useState } from 'react';

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsPageScrolled(true) : setIsPageScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0  py-2 px-5 bg-dark transition-all duration-500 ease-in-out ${
        isPageScrolled && 'bg-light'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={graphQLLogo} alt="App Logo" />
          <h1 className="font-semibold text-3xl align-middle">GraphiQL</h1>
        </div>
        <Link
          to="/welcome"
          className="hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
        >
          Welcome page
        </Link>
        <div className="flex gap-5">
          <Button icon={localIcon} text={'EN'} onclick={() => {}} />
          <Button icon={signOutIcon} text="Sign out" onclick={() => {}} />
        </div>
      </div>
    </header>
  );
}

export default Header;
