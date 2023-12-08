import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen text-text">
      <Header />
      <main className="flex-grow px-5 bg-medium">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
