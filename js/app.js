/*
 *  Enemies our player must avoid
 *  Enemies have random y-values and speeds from an array of possible values.
 *  As the player scores higher, the enemies move faster and more
 * enemies appear at once. They also cover more of the screen.
 */

//possible enemy spawn loacations
const valueOfY = [68, 151, 234];

var Enemy = function() {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
	//Setting the Enemy initial location
	this.x = 0;
	this.y = valueOfY[Math.floor(Math.random() * 3)]; //400 317 234 151 68
	// Setting the Enemy speed
	this.speed = Math.floor(100 + (Math.random() * 200));
};

/*
 *  Update the enemy's position
 *  Parameter: dt, a time delta between ticks. Ensures the
 *  game runs at the same speed for all computers.
 */
Enemy.prototype.update = function(dt) {
	this.x += (this.speed) * dt;
	/*
	 * Checks for collision between enemy and player.
	 * If any enemy touches with the player, the player is
	 * returned to the bottom of the screen.
	 */

	// if enemy moves out of the frame, following code changes enemy's speed and Y location
	if (this.x > 705) {
		this.x = -301;
		this.y = valueOfY[Math.floor(Math.random() * 3)];
		this.speed = Math.floor(100 + (Math.random() * 200));
	}

	// checks collision between player and enemy
	checkCollision(this, player);
};
/*
 *  Draw the enemy on the screen
 */

Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
	// The image/sprite for our player, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/char-boy.png';
	//this 'player object' position x y
	this.x = 200;
	this.y = 400;
};

// Update the player's position, required method for game
Player.prototype.update = function() {
	// reseting player location
	if (this.y < 60) {
		this.reset();
	}

};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(inputKey) {
	this.playerCtrlKey = inputKey;

	if (this.playerCtrlKey === 'left' && this.x !== 0) {
		this.x = this.x - 100;
		console.log(this.playerCtrlKey);
	} else if (this.playerCtrlKey === 'right' && this.x != 400) {
		this.x = this.x + 100;
		console.log(this.playerCtrlKey);
	} else if (this.playerCtrlKey === 'up' && this.y !== -15) {
		console.log(this.y);
		this.y = this.y - 83;
		console.log(this.playerCtrlKey);
	} else if (this.playerCtrlKey === 'down' && this.y != 400) {
		console.log(this.playerCtrlKey);
		this.y = this.y + 83;
	}
};

Player.prototype.reset = function() {
	setTimeout(() => {
		this.x = 200;
		this.y = 400;
	}, 280);
};

var checkCollision = function(enemyPosition, playerPosition) {
	// check for collision between enemy and player
	if (!(enemyPosition.y + 82 < playerPosition.y ||
			enemyPosition.y > playerPosition.y + 82 ||
			enemyPosition.x + 99 < playerPosition.x ||
			enemyPosition.x > playerPosition.x + 99)) {

		console.log('Game Over!');
		playerPosition.reset();
	}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// array allEnemies for storing all enemy objects
var totalEnemies = 3;
var allEnemies = [];

for (var i = 0; i < totalEnemies-1; i++) {
	allEnemies.push(new Enemy());
}
// var player that invokes an new Player object referenced by var player
player = new Player();
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
