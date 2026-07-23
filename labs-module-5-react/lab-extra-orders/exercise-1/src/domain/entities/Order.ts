import type { OrderHeader } from "./OrderHeader";
import type { OrderLine } from "./OrderLine";

export class Order {
  private readonly header: OrderHeader;
  private readonly lines: readonly OrderLine[];

  private constructor(header: OrderHeader, lines: readonly OrderLine[]) {
    this.header = header;
    this.lines = lines;
  }

  static create(header: OrderHeader, lines: OrderLine[]): Order {
    return new Order(header, lines);
  }

  getHeader(): OrderHeader {
    return this.header;
  }

  getLines(): readonly OrderLine[] {
    return this.lines;
  }

  get totalAmount(): number {
    return this.lines.reduce((sum, line) => sum + line.amount, 0);
  }

  get validatedPercentage(): number {
    if (this.lines.length === 0) return 0;
    const validatedCount = this.lines.filter((line) => line.isValidated).length;
    return Math.round((validatedCount / this.lines.length) * 100);
  }

  get canSend(): boolean {
    return this.validatedPercentage === 100;
  }

  updateLineAmount(lineId: string, amount: number): Order {
    const updatedLines = this.lines.map((line) =>
      line.id === lineId ? { ...line, amount } : line,
    );
    return new Order(this.header, updatedLines);
  }

  validateLines(lineIds: string[]): Order {
    return this.setLinesValidation(lineIds, true);
  }

  invalidateLines(lineIds: string[]): Order {
    return this.setLinesValidation(lineIds, false);
  }

  private setLinesValidation(lineIds: string[], isValidated: boolean): Order {
    const idsToUpdate = new Set(lineIds);
    const updatedLines = this.lines.map((line) =>
      idsToUpdate.has(line.id) ? { ...line, isValidated } : line,
    );
    return new Order(this.header, updatedLines);
  }
}
