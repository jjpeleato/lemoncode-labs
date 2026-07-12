import type { Picture } from "../../domain/entities/Picture";
import type {
  GalleryType,
  IPictureRepository,
} from "../../domain/repositories/IPictureRepository";

const KITTIES: Picture[] = [
  {
    id: "cat-1",
    picUrl: "https://placecats.com/300/300",
    title: "Cool cat A",
  },
  {
    id: "cat-2",
    picUrl: "https://placecats.com/301/300",
    title: "Cool cat B",
  },
  {
    id: "cat-3",
    picUrl: "https://placecats.com/300/301",
    title: "Cool cat C",
  },
  {
    id: "cat-4",
    picUrl: "https://placecats.com/302/300",
    title: "Cool cat D",
  },
];

const PUPPIES: Picture[] = [
  {
    id: "dog-1",
    picUrl: "https://placedog.net/300/300?id=1",
    title: "Cool dog A",
  },
  {
    id: "dog-2",
    picUrl: "https://placedog.net/300/300?id=2",
    title: "Cool dog B",
  },
  {
    id: "dog-3",
    picUrl: "https://placedog.net/300/300?id=3",
    title: "Cool dog C",
  },
  {
    id: "dog-4",
    picUrl: "https://placedog.net/300/300?id=4",
    title: "Cool dog D",
  },
];

const GALLERIES: Record<GalleryType, Picture[]> = {
  kitties: KITTIES,
  puppies: PUPPIES,
};

export class MockPictureRepository implements IPictureRepository {
  async getPictures(gallery: GalleryType): Promise<Picture[]> {
    return Promise.resolve(GALLERIES[gallery]);
  }

  async getAllPictures(): Promise<Picture[]> {
    return Promise.resolve([...KITTIES, ...PUPPIES]);
  }
}
