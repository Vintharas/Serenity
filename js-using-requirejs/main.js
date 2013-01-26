// main.js
require(["Game", "Scene", "SolidBackground", "Text"],
   function(Game, Scene, SolidBackground, Text) {
        // initialize game
        var game = new Game();
        // initialize scenes of the game
        var titleScene = new Scene();
        var background = new SolidBackground("#111", 0, 0, 460, 800);
        titleScene.gameObjects.push(background);
        var title = new Text("Serenity", "#FFF", "48px sans-serif", 150, 200);
        titleScene.gameObjects.push(title);
        var subtitle = new Text("a fanfic space shooter based on the Firefly universe", "#AAA", "12px sans-serif", 100, 225);
        titleScene.gameObjects.push(subtitle);
        game.scenes.push(titleScene);
        // start game
        game.intervalId = setInterval(game.run, 1000/60); // 60fps max
   }
);
