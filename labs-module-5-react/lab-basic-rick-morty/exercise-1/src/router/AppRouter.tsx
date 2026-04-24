import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharacterPage } from '../pages/CharacterPage/CharacterPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { ROUTES } from './routes.constants';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CHARACTER} element={<CharacterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
