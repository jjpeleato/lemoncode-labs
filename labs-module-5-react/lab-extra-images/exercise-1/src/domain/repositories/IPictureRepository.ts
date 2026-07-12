import type { Picture } from "../entities/Picture";

export type GalleryType = "kitties" | "puppies";

export interface IPictureRepository {
  getPictures(gallery: GalleryType): Promise<Picture[]>;
  getAllPictures(): Promise<Picture[]>;
}
