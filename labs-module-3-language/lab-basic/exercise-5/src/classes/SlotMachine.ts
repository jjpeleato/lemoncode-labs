import type { SlotMachine as ISlotMachine } from "../interfaces";

export class SlotMachine implements ISlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  public play = (): void => {
    if (this.coins === 0) {
      console.log("Ups! You have no more coins");
      return;
    }

    this.burnCoin();
    this.game();
  };

  private game = () => {
    let reelAlpha = Math.random() >= 0.7;
    let reelBeta = Math.random() >= 0.7;
    let reelGamma = Math.random() >= 0.7;

    this.checkWin(reelAlpha, reelBeta, reelGamma);
  };

  private checkWin = (reelAlpha: boolean, reelBeta: boolean, reelGamma: boolean): void => {
    if (reelAlpha && reelBeta && reelGamma) {
      this.coins += 3;
      console.log(`Congratulations! You won 3 coins! You have ${this.coins} coins!`);
    } else {
      console.log(`Ups! Good luck next time! You have ${this.coins} coins!`);
    }
  };

  public insertCoin = (): void => {
    this.coins++;
    console.log(`Coin inserted! You have ${this.coins} coins!`);
  };

  private burnCoin = (): void => {
    this.coins--;
  };
}
