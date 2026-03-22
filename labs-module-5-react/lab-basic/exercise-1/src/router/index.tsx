import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routes.constants';
import { MembersPage } from '../pages/MembersPage/MembersPage';
import { MemberDetailPage } from '../pages/MemberDetailPage/MemberDetailPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.MEMBERS} replace />} />
        <Route path={ROUTES.MEMBERS} element={<MembersPage />} />
        <Route path={ROUTES.MEMBER_DETAIL} element={<MemberDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
