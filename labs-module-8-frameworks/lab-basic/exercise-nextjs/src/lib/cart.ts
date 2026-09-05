export class Cart {
  private readonly houseIds: readonly string[];

  private constructor(houseIds: readonly string[]) {
    this.houseIds = houseIds;
  }

  static empty(): Cart {
    return new Cart([]);
  }

  getIds(): readonly string[] {
    return this.houseIds;
  }

  contains(id: string): boolean {
    return this.houseIds.includes(id);
  }

  add(id: string): Cart {
    if (this.contains(id)) return this;
    return new Cart([...this.houseIds, id]);
  }

  remove(id: string): Cart {
    return new Cart(this.houseIds.filter((houseId) => houseId !== id));
  }

  toggle(id: string): Cart {
    if (this.contains(id)) return this.remove(id);
    return this.add(id);
  }

  get size(): number {
    return this.houseIds.length;
  }

  get isEmpty(): boolean {
    return this.houseIds.length === 0;
  }
}
