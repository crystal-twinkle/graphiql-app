import { NavLink } from 'react-router-dom';
import classes from './header.module.scss';
import { RouterPage } from '../../router';
import { useAppSelector } from '../../store/store';

export function Header() {
  const user = useAppSelector((state) => state.user.data.current);

  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to={RouterPage.WELCOME} />
      <nav>
        {user ? (
          <div className="logo" />
        ) : (
          <>
            <NavLink to={RouterPage.SIGN_IN}>Sign In</NavLink>
            <NavLink to={RouterPage.SIGN_UP}>Sign UP</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
