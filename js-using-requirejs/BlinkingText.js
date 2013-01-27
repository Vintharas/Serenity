// BlinkingText.js
define([],
    function(){
        function BlinkingText(text, fillStyle, font, x, y, blinkingPeriod){
            this.text = text;
            this.fillStyle = fillStyle;
            this.font = font;
            this.x = x;
            this.y = y;
            this.blinkingPeriod = blinkingPeriod;
            this.lastBlink = (new Date()).getTime();
            this.currentAlpha = 1;
            this.isFadingOut = true;
            this.update = function(){
                var currentTime = (new Date()).getTime();
                var timePassedSinceLastBlink = currentTime - this.lastBlink;
                if (timePassedSinceLastBlink >= this.blinkingPeriod){
                    this.lastBlink = currentTime;
                    if (this.isFadingOut) this.currentAlpha = 0;
                    else this.currentAlpha = 1;
                    this.isFadingOut = !this.isFadingOut;
                }
                else {
                    if (this.isFadingOut) this.currentAlpha = 1 - timePassedSinceLastBlink/this.blinkingPeriod;
                    else this.currentAlpha = timePassedSinceLastBlink/this.blinkingPeriod;
                }
            }
            this.draw = function(){
                var canvas = document.getElementById("gamecanvas");
                var context = canvas.getContext("2d");
                context.globalAlpha = this.currentAlpha;
                context.fillStyle = this.fillStyle;
                context.font = this.font;
                context.fillText(this.text, this.x, this.y)
                context.globalAlpha = 1;
            };
        }
        return BlinkingText;
    }
);