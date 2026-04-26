import { useCallback, useState } from "react";
import { useDebounce } from "@shared";

export const useCharactersSearch = (initialName: string) => {
  const [inputValue, setInputValue] = useState(initialName);
  const debouncedName = useDebounce(inputValue, 500);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  return { inputValue, setInputValue, debouncedName, handleInputChange };
};
