import type { SlotMachine as ISlotMachine } from "../interfaces";

export class SlotMachine implements ISlotMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }

  play = (): void => {
    if (this.coins === 0) {
      console.log("Ups! You have no more coins");
      return;
    }

    this.burnCoin();
    this.game();
  };

  game = () => {
    let reelAlpha = Math.random() >= 0.7;
    let reelBeta = Math.random() >= 0.7;
    let reelGamma = Math.random() >= 0.7;

    this.win(reelAlpha, reelBeta, reelGamma);
  };

  win = (reelAlpha: boolean, reelBeta: boolean, reelGamma: boolean): void => {
    if (reelAlpha && reelBeta && reelGamma) {
      this.coins += 3;
      console.log(`Congratulations! You won 3 coins! You have ${this.coins} coins!`);
    } else {
      console.log(`Ups! Good luck next time! You have ${this.coins} coins!`);
    }
  };

  insertCoin = (): void => {
    this.coins++;
    console.log(`Coin inserted! You have ${this.coins} coins!`);
  };

  burnCoin = (): void => {
    this.coins--;
  };
}
