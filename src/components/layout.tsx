import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-text bg-medium">
      <Header />
      <main className="flex grow py-2 px-5 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
