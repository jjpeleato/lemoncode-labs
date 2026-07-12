import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routes.constants';
import { MainLayout } from '../layouts/MainLayout';
import { KittiesPage } from '../pages/KittiesPage/KittiesPage';
import { PuppiesPage } from '../pages/PuppiesPage/PuppiesPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to={ROUTES.KITTIES} replace />} />
          <Route path={ROUTES.KITTIES} element={<KittiesPage />} />
          <Route path={ROUTES.PUPPIES} element={<PuppiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
