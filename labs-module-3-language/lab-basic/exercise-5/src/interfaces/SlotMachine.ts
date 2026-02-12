export interface SlotMachine {
  coins: number;

  play(): void;
  game(): void;
  win(alpha: boolean, beta: boolean, gamma: boolean): void;
  insertCoin(): void;
  burnCoin(): void;
}
