# Module 3 - Basic Laboratory - Exercise 5 - Slot machine

The objective of this exercise is to create a slot machine using classes where each time we play, we insert a coin. Each slot machine (instance) will have a coin counter that will automatically increase as we continue playing.

When the play method is called, the number of coins must automatically increase and it should generate three random booleans that will represent the state of the 3 reels. The user will have won if all three booleans are true, and therefore the following message should be displayed in the console:

```js
"Congratulations!!!. You won <número de monedas> coins!!";
```

And reset the stored coins, since we have won them and they have come out of the machine. Otherwise, it should display another message:

```js
"Good luck next time!!".
```

#### Example

```js
class SlotMachine {
  /* ... */
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
```

## Installation to develop

1. Install the Node.js dependencies:
   ```bash
   cd labs-module-3-language/lab-basic/exercise-5
   npm i --save-dev
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
4. End and happy coding!

## Finally

More info in the following commits. If required.

Grettings [**@jjpeleato**.](https://www.jjpeleato.com/)