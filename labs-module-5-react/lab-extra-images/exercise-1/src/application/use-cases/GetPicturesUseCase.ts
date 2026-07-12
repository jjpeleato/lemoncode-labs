import type { Picture } from "../../domain/entities/Picture";
import type {
  GalleryType,
  IPictureRepository,
} from "../../domain/repositories/IPictureRepository";

export class GetPicturesUseCase {
  private readonly pictureRepository: IPictureRepository;

  constructor(pictureRepository: IPictureRepository) {
    this.pictureRepository = pictureRepository;
  }

  async execute(gallery: GalleryType): Promise<Picture[]> {
    return this.pictureRepository.getPictures(gallery);
  }
}
