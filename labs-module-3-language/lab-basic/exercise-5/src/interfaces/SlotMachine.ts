export interface SlotMachine {
  coins: number;

  play(): void;
  game(): void;
  win(a: boolean, b: boolean, c: boolean): void;
  insertCoin(): void;
  burnCoin(): void;
}
