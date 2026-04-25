import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterPage } from "../pages/CharacterPage/CharacterPage";
import { CharactersPage } from "../pages/CharactersPage/CharactersPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { ROUTES } from "./routes.constants";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<CharactersPage />} />
        <Route path={ROUTES.CHARACTER} element={<CharacterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
