// Scene.js
define([],
    function(){
        function Scene(){
            this.gameObjects = [];
            this.initialize = function()
            {
                // initialization logic
                // console.log("base initialize");
            }
            this.update = function(){
                for(go in this.gameObjects){
                    if (this.gameObjects[go].update) this.gameObjects[go].update();
                }
            };
            this.draw = function(){
                for(go in this.gameObjects){
                    if (this.gameObjects[go].draw) this.gameObjects[go].draw();
                }
            };
        }
        return Scene;
    }
);