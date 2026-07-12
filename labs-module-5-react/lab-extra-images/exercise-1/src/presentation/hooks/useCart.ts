import { useEffect, useMemo, useState } from "react";
import type { Picture } from "../../domain/entities/Picture";
import { MockPictureRepository } from "../../infrastructure/repositories/MockPictureRepository";
import { GetAllPicturesUseCase } from "../../application/use-cases/GetAllPicturesUseCase";
import { useCartContext } from "./useCartContext";

const pictureRepository = new MockPictureRepository();
const getAllPicturesUseCase = new GetAllPicturesUseCase(pictureRepository);

export const useCart = () => {
  const { cart, toggle, clear } = useCartContext();

  const [allPictures, setAllPictures] = useState<Picture[]>([]);

  useEffect(() => {
    let isActive = true;

    const fetchAllPictures = async () => {
      const result = await getAllPicturesUseCase.execute();
      if (isActive) setAllPictures(result);
    };

    fetchAllPictures();

    return () => {
      isActive = false;
    };
  }, []);

  const items: Picture[] = useMemo(
    () => allPictures.filter((picture) => cart.contains(picture.id)),
    [allPictures, cart],
  );

  return {
    items,
    size: cart.size,
    isEmpty: cart.isEmpty,
    toggle,
    clear,
  };
};
