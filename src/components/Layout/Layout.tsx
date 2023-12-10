import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-text">
      <Header />
      <main className="flex-grow px-5 bg-medium">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
