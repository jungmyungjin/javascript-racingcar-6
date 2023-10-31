import Game from "./Game.js";

class App {
  async play() {
    const game = new Game();
    await game.start();
  }
}

// const app = new App();
// app.play();

export default App;
