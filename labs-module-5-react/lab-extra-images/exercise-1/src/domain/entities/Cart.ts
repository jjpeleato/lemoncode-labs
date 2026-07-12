export class Cart {
  private readonly pictureIds: readonly string[];

  private constructor(pictureIds: readonly string[]) {
    this.pictureIds = pictureIds;
  }

  static empty(): Cart {
    return new Cart([]);
  }

  static fromIds(ids: string[]): Cart {
    return new Cart([...new Set(ids)]);
  }

  getIds(): readonly string[] {
    return this.pictureIds;
  }

  contains(id: string): boolean {
    return this.pictureIds.includes(id);
  }

  add(id: string): Cart {
    if (this.contains(id)) return this;
    return new Cart([...this.pictureIds, id]);
  }

  remove(id: string): Cart {
    return new Cart(this.pictureIds.filter((pictureId) => pictureId !== id));
  }

  toggle(id: string): Cart {
    if (this.contains(id)) return this.remove(id);
    return this.add(id);
  }

  get size(): number {
    return this.pictureIds.length;
  }

  get isEmpty(): boolean {
    return this.pictureIds.length === 0;
  }
}
