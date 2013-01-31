// main.js
require(["Game", "TitleScene", "Player"],
   function(Game, TitleScene, Player) {
        var player = new Player();
        // initialize game
        var game = new Game(player);
        // initialize scenes of the game
        var titleScene = new TitleScene(player);
        //titleScene.initialize();
        game.scenes.push(titleScene);
        // start game
        game.intervalId = setInterval(game.run, 1000/60); // 60fps max
   }
);
