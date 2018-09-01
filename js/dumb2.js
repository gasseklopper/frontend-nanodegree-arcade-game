
// Enemies our player must avoid

// possible vlues of Y axis locations for bugs
//var valueOfY = [50, 130, 210];
//var counter = 0;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
var Enemy = function () {

};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // movement compatibility
    //this.x += this.speed * dt;

    // if enemy moves out of the frame, following code changes enemy's speed and Y location (row)


    // checks collision between player and enemy and increment counter
    //checkCollision(this, player);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    //ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// setting up player function properties
var Player = function() {

};

Player.prototype.update = function() {
     // moving player in the direction button is pressed

};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    //ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(){

};

// resetting Players location
Player.prototype.reset = function() {

};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var totalEnemies = 4;
var allEnemies = [];

for (var i = 0; i < totalEnemies; i++) {
    //allEnemies.push(new Enemy());
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
