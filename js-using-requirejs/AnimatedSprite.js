// AnimatedSprite.js
// The animated sprite is contained in an image that contains a 1xN matrix of animated images
define([],
    function(){
        function AnimatedSprite(imageSource, position, speed, opacity, width, height, numberOfColumns, animationSpeed, firstSprite){
            this.x = position.x;
            this.y = position.y;
            this.speed = speed;
            this.opacity = opacity;
            this.image = new Image();
            this.image.src = imageSource;
            this.width = width;
            this.height = height;
            this.numberOfColumns = numberOfColumns;
            this.currentColumn = firstSprite === undefined ? 0 : firstSprite;
            if (animationSpeed) this.animationSpeed = animationSpeed;
            else this.animationSpeed = 1;
            this.animationCounterMax = 1/this.animationSpeed;
            this.animationCounter = 0;
            this.update = function(){
                // update position
                this.x = this.x + this.speed.x;
                this.y = this.y + this.speed.y;
                // update sprite animation
                this.animationCounter++;
                if (this.animationCounter >= this.animationCounterMax)
                {
                    this.animationCounter = 0;
                    this.currentColumn++;
                    if (this.currentColumn >= this.numberOfColumns) this.currentColumn = 0;
                }
            }
            this.draw = function(){
                // calculate sprite position
                var spriteX = this.width*this.currentColumn;
                var spriteY = 0; // because I am using only one row
                // draw image
                var canvas = document.getElementById("gamecanvas");
                var context = canvas.getContext("2d");
                context.globalAlpha = this.opacity;
                context.drawImage(this.image, spriteX, spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
                context.globalAlpha = 1;
            };
        }
        return AnimatedSprite;
    }
);