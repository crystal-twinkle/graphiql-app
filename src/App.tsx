import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WelcomePage from './Pages/WelcomePage';
import GqlPage from './Pages/gql.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/gql" element={<GqlPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
