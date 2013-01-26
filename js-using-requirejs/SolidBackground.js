// Sprite.js
define([],
    function(){
        function SolidBackground(fillStyle, x, y, width, height){
            this.fillStyle = fillStyle;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.draw = function(){
                var canvas = document.getElementById("gamecanvas");
                var context = canvas.getContext("2d");
                context.fillStyle = this.fillStyle;
                context.fillRect(this.x, this.y, this.width, this.height);
            };
        }
        return SolidBackground;
    }
);