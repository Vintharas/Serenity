// Game.js
define ([], 
    function(){
        function Game(){
            var game = this;
            this.fps = 50;
            this.draw = function(){
                // draw entities
                // alert("draw");
            };
            this.update = function(){
                // update entities
                // alert("update");
            };
            this.run = (function(){
                var loops = 0;
                var skipTicks = 1000 / game.fps;
                var maxFrameSkip = 10;
                var nextGameTick = (new Date).getTime();

                return function(){
                    loops = 0;
                    while((new Date).getTime() > nextGameTick && loops < maxFrameSkip){
                        game.update();
                        nextGameTick += skipTicks;
                        loops++;
                    }
                    if (loops) game.draw();
                }
            })();
        }
        return Game;
    }
);