// Game.js
define ([], 
    function(){
        function Game(){
            var game = this;
            this.fps = 50;
            this.draw = function(){
                // draw entities
                console.log("draw");
            };
            this.update = function(){
                // update entities
                console.log("update");
            };
            this.run = (function(){
                var updateInterval = 1000 / game.fps;
                var nextInterval = (new Date).getTime() + updateInterval;

                return function(){
                    if((new Date).getTime() > nextInterval){
                        game.update();
                        nextInterval = (new Date).getTime() + updateInterval;
                    }
                    game.draw();
                }
            })();
        }
        return Game;
    }
);