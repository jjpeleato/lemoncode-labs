import { useSearchParams } from "react-router-dom";

export const useCharactersUrlSync = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const nameFromUrl = searchParams.get("name") ?? "";
  const pageFromUrl = Number(searchParams.get("page") ?? "1");

  return { nameFromUrl, pageFromUrl, setSearchParams };
};
