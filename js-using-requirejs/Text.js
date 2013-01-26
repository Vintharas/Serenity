// Text.js
define([],
    function(){
        function Text(text, fillStyle, font, x, y){
            this.text = text;
            this.fillStyle = fillStyle;
            this.font = font;
            this.x = x;
            this.y = y;
            this.draw = function(){
                var canvas = document.getElementById("gamecanvas");
                var context = canvas.getContext("2d");
                context.fillStyle = this.fillStyle;
                context.font = this.font;
                context.fillText(this.text, this.x, this.y)
            };
        }
        return Text;
    }
);