let driverRough = 3
let driverFairway = 15
let approachMiss = 1
let approachGreen = 6
let missedShot = 2
let holeNumber = 1

function rollDie(sides){
	let myRoll = Math.floor((Math.random() * sides) + 1);
	return myRoll
}
function rollDieDistance(min , max){
	let myRoll = Math.floor(Math.random() * (min - max) ) + min;
	return myRoll
}
console.log(rollDieDistance(225,300))

/*
let shotDirection = Math.floor((Math.random() * 5) + 1);
let shotDirectionPutter = Math.floor((Math.random() * 6) + 1);
let shotLengthDriver = Math.floor((Math.random() * 20) + 1);
let shotLengthApproachIron = Math.floor((Math.random() * 10) + 1);
let shotLengthWedge = Math.floor((Math.random() * 5) + 1);
let shotLengthPutter = Math.floor((Math.random() * 4) + 1);
*/


console.log("Welcome to Hole #" + holeNumber);
console.log("Grab your club and step up to the tee box");

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
}



function ballDistance(club){
	
	let myRoll = rollDie(club)
}



let myBall = ballLieFirstShot(driverRough,driverFairway);
console.log("You hit the ball in the " + myBall);

myBall = ballLieSecondShot(approachMiss,approachGreen);
console.log("On your second hit you " + myBall);

