// Player.js
define ([], 
    function(){
        function Player(){
            var that = this;
            this.speed = {x: 10, y: 10};
            this.isShooting = false;
            this.isUsingSpecial = false;
            this.isMovingUp = false;
            this.isMovingDown = false;
            this.isMovingLeft = false;
            this.isMovingRight = false;
            $("body").keydown(function(event){
                console.log(event.which);
                that.isShooting = event.which == 17; // Control
                that.isUsingSpecial = event.which == 18; // Alt
                that.isMovingLeft = event.which == 37; // Arrow left
                that.isMovingUp = event.which == 38; // Arrow up
                that.isMovingRight = event.which == 39; // Arrow right
                that.isMovingDown = event.which == 40;  // Arrow down
                alert("Player pressed a key!");
            });
        }
        return Player;
    }
);