import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './header/Header';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-text bg-medium">
      <Header />
      <main className="flex grow max-w-screen-xl py-2 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
