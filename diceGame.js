
// what numbers mean inside array [value to miss right of left, dice side value, min distance, max distance]
let driver = [3,15,225,300];
let approach = [1,6,100,200];



let missedShot = 2;
let holeNumber = 1;

function rollDie(sides){
	let myRoll = Math.floor((Math.random() * sides) + 1);
	return myRoll
}
function rollDieDistance(min , max){
	let myRoll = Math.floor(Math.random() * (max - min + 1) ) + min;
	return myRoll
}
function ballLieFirstShot(rough , fairway){
	let myRoll = rollDie(fairway);
	console.log(myRoll);
	if (myRoll <= rough){
		let ballLie = "Left Rough";
		return ballLie;
	}
	else if (myRoll >= fairway - rough){
		let ballLie = "Right Rough";
		return ballLie;
	}
	else {
		let ballLie = "Fairway";
		return ballLie;
	}
}
function ballLieSecondShot(miss , green){
	if (myBall === "Left Rough" || myBall === "Right Rough"){
		green = green - missedShot;
		let myRoll = rollDie(green);
		console.log(myRoll);
		if (myRoll == miss){
			let ballLie = "Missed Green Left";
			return ballLie;
		}
		else if (myRoll == green){
			let ballLie = "Missed Green Right";
			return ballLie;
		}
		else {
			let ballLie = "Hit Green";
			return ballLie;
		}
	}
	else{
		let myRoll = rollDie(green);
		console.log(myRoll);
		if (myRoll == miss){
			let ballLie = "Missed The Green Left";
			return ballLie;
		}
		else if (myRoll == green){
			let ballLie = "Missed The Green Right";
			return ballLie;
		}
		else {
			let ballLie = "Hit The Green";
			return ballLie;
		}
	}
}
//function puttBall()

console.log("Welcome to Hole #" + holeNumber);
console.log("Grab your club and step up to the tee box");

let myBall = ballLieFirstShot(driver[0],driver[1]);
console.log("You hit the ball " + rollDieDistance(driver[2], driver[3]) + "yrds in the " + myBall);

myBall = ballLieSecondShot(approach[0],approach[1]);
console.log("On your second hit you hit the ball " + rollDieDistance(approach[2], approach[3]) + "yrds and " + myBall);

//if (myBall === "Hit Green"){



