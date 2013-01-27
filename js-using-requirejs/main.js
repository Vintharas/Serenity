// main.js
require(["Game", "TitleScene"],
   function(Game, TitleScene) {
        // initialize game
        var game = new Game();
        // initialize scenes of the game
        var titleScene = new TitleScene();
        //titleScene.initialize();
        game.scenes.push(titleScene);
        // start game
        game.intervalId = setInterval(game.run, 1000/60); // 60fps max
   }
);
