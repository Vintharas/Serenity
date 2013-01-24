// main.js
require(["Game"],
   function(Game) {
        var game = new Game();
        game.intervalId = setInterval(game.run, 1000/60); // 60fps max
   }
);
