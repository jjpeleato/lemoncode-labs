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
    let slotAlpha = Math.random() >= 0.9;
    let slotBeta = Math.random() >= 0.9;
    let slotGamma = Math.random() >= 0.9;

    this.win(slotAlpha, slotBeta, slotGamma);
  };

  win = (slotAlpha: boolean, slotBeta: boolean, slotGamma: boolean): void => {
    let coins = 0;

    if (slotAlpha) {
      coins++;
    }

    if (slotBeta) {
      coins++;
    }

    if (slotGamma) {
      coins++;
    }

    if (coins > 0) {
      console.log(`Congratulations! You won ${coins} coins!`);
      this.coins += coins;
    } else {
      console.log("Ups! Good luck next time!");
    }
  };

  insertCoin = (): void => {
    console.log("Coin inserted");
    this.coins++;
  };

  burnCoin = (): void => {
    this.coins--;
  };
}
