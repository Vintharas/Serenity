// Sprite.js
define([],
    function(){
        function Sprite(imageSource, x, y, speed, opacity){
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.opacity = opacity;
            this.image = new Image();
            this.image.src = imageSource;
            this.update = function(){
                this.x = this.x + this.speed.x;
                this.y = this.y + this.speed.y;
            }
            this.draw = function(){
                var canvas = document.getElementById("gamecanvas");
                var context = canvas.getContext("2d");
                context.globalAlpha = this.opacity;
                context.drawImage(this.image, this.x, this.y);
                context.globalAlpha = 1;
            };
        }
        return Sprite;
    }
);