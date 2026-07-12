import type { Picture } from "../../domain/entities/Picture";
import type { IPictureRepository } from "../../domain/repositories/IPictureRepository";

export class GetAllPicturesUseCase {
  private readonly pictureRepository: IPictureRepository;

  constructor(pictureRepository: IPictureRepository) {
    this.pictureRepository = pictureRepository;
  }

  async execute(): Promise<Picture[]> {
    return this.pictureRepository.getAllPictures();
  }
}
