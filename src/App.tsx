import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/Pages/MainPage';
import WelcomePage from './components/Pages/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
