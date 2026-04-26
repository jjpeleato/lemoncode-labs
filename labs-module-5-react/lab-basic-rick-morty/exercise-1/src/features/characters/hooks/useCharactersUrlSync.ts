import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

type CharactersUrlParams = { name?: string; page?: string };

export const useCharactersUrlSync = () => {
  const [searchParams, rawSetSearchParams] = useSearchParams();

  const nameFromUrl = searchParams.get("name") ?? "";
  const rawPage = Number(searchParams.get("page"));
  const pageFromUrl = Number.isInteger(rawPage) && rawPage >= 1 ? rawPage : 1;

  const setSearchParams = useCallback(
    (params: CharactersUrlParams) => rawSetSearchParams(params),
    [rawSetSearchParams],
  );

  return { nameFromUrl, pageFromUrl, setSearchParams };
};
