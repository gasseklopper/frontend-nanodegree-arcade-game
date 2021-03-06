// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //this 'Enemy object' position x y
    this.x = 100;
    this.y = 100;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    //this 'player object' position x y
    this.x = 200;
    this.y = 400;
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.playerCtrlKey === 'left' ) {
        console.log(this.playerCtrlKey);
    } else if (this.playerCtrlKey === 'right' ) {
        console.log(this.playerCtrlKey);
    } else if (this.playerCtrlKey === 'up') {
        console.log(this.playerCtrlKey);
    } else if (this.playerCtrlKey === 'down' ) {
        console.log(this.playerCtrlKey);
    }
    // setting value of ctlKey to null will give player a hop movement
    // otherwise, player will continue to move in the one direction
    // unless, change its direction of movement
    // player will never come to a stop


    // reseting player location
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(inputKey){
    this.playerCtrlKey = inputKey;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// array allEnemies for storing all enemy objects
var allEnemies = [];
// var player that invokes an new Player object referenced by var player
var player = new Player();
// push property of enemy object to array allEnemies
allEnemies.push(new Enemy());

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
