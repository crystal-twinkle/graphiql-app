import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Popup } from './Popup';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-text bg-medium">
      <Popup />
      <Header />
      <main className="flex grow py-2 mx-auto w-screen-xl max-w-screen-xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
