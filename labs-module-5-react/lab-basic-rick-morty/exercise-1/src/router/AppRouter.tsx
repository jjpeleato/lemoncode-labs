import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterPage, CharactersPage, NotFoundPage } from "@pages";
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
