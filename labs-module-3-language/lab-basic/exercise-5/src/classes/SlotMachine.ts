import type { SlotMachine as ISlotMachine } from "../interfaces";

export class SlotMachine implements ISlotMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }

  play = () => {
    console.log("Play, play, play. Coins: " + this.coins);
    this.coins++;
  };
}
