import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MemberDetailPage } from '../pages/MemberDetailPage/MemberDetailPage';
import { MembersPage } from '../pages/MembersPage/MembersPage';
import { ROUTES } from './routes.constants';

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
