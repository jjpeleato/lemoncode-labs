import { useEffect, useMemo, useState } from "react";
import type { Picture } from "../../domain/entities/Picture";
import type { GalleryType } from "../../domain/repositories/IPictureRepository";
import { GetPicturesUseCase } from "../../application/use-cases/GetPicturesUseCase";
import { MockPictureRepository } from "../../infrastructure/repositories/MockPictureRepository";
import { useCartContext } from "./useCartContext";

const pictureRepository = new MockPictureRepository();
const getPicturesUseCase = new GetPicturesUseCase(pictureRepository);

export interface PictureViewModel extends Picture {
  selected: boolean;
}

export const useGalleryPictures = (gallery: GalleryType) => {
  const { cart, toggle } = useCartContext();

  const [pictures, setPictures] = useState<Picture[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const fetchPictures = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await getPicturesUseCase.execute(gallery);
        if (!isActive) return;
        setPictures(result);
      } catch (err) {
        if (!isActive) return;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (isActive) setIsLoading(false);
      }
    };

    fetchPictures();

    return () => {
      isActive = false;
    };
  }, [gallery]);

  const picturesWithSelection: PictureViewModel[] = useMemo(
    () =>
      pictures.map((picture) => ({
        ...picture,
        selected: cart.contains(picture.id),
      })),
    [pictures, cart],
  );

  return {
    pictures: picturesWithSelection,
    isLoading,
    error,
    toggle,
  };
};
