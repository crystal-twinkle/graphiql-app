import { Header } from './header/header';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
