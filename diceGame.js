
// what numbers mean inside array [value to miss right of left, dice side value, min distance, max distance]
let driver = [5,30,225,300];
let approach = [3,15,100,200];
let wedge = [1,5]
let wedgeMadeIt = 3
let putter = [1,3]

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
function firstShot(rough , fairway){
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
function secondShot(miss , green){
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

function puttBall(miss , dice){
	let myRoll = rollDie(dice);
	console.log(myRoll);
	if (myRoll <= miss){
		let ballLie = "Left of Hole";
		return ballLie;
	}
	else if (myRoll >= dice - miss){
		let ballLie = "Right of Hole";
		return ballLie;
	}
	else {
		let ballLie = "In the Cup";
		return ballLie;
	}
}

function wedgeShot(miss,dice){
	let myRoll = rollDie(dice);
	console.log(myRoll);
	if (myRoll == miss){
		let ballLie = "Left of Hole";
		return ballLie;
	}
	else if (myRoll == dice){
		let ballLie = "Right of Hole";
		return ballLie;
	}
	else if (myRoll == wedgeMadeIt){
		let ballLie = "In the Cup";
		return ballLie
	}
	else {
		let ballLie = "Short of Cup";
		return ballLie;
	}
}


console.log("Welcome to Hole #" + holeNumber);
console.log("Grab your club and step up to the tee box");

let myBall = firstShot(driver[0],driver[1]);
console.log("You hit the ball " + rollDieDistance(driver[2], driver[3]) + "yrds in the " + myBall);

myBall = secondShot(approach[0],approach[1]);
console.log("On your second hit you hit the ball " + rollDieDistance(approach[2], approach[3]) + "yrds and " + myBall);

if (myBall === "Hit The Green"){
	myBall = puttBall(putter[0],putter[1])
	console.log("On your next shot you hit the ball " + myBall);
	if (myBall === "In the Cup"){
		console.log("On to the Next Hole")
	}
	else{
		console.log("On Your Next Shot You Just Tapped in Your Ball")
	}
}
else{
	myBall = wedgeShot(wedge[0], wedge[1]);
	console.log("On your next shot you hit the ball " + myBall);
	if (myBall === "In the Cup"){
		console.log("On to the Next Hole")
	}
	else{
		console.log("On Your Next Shot You Just Tapped in Your Ball")
	}
}



