// Sprite.js
define([],
    function(){
        function Sprite(){
            this.draw = function(){
                var canvas = document.getElementById("gamecanvas");
                var context = canvas.getContext("2d");
                context.fillRect(50, 25, 150, 100);
            };
        }
        return Sprite;
    }
);