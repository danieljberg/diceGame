function rollDie(sides){
	let myRoll = Math.floor((Math.random() * sides) + 1);
	return myRoll
}
function rollDieDistance(min , max){
	let myRoll = Math.floor(Math.random() * (max - min + 1) ) + min;
	return myRoll
}
function teeShot(rough, fairway){
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
function secondShot(miss, green, myBall, missedShot){
	if (myBall === "Left Rough" || myBall === "Right Rough"){
		green = green - missedShot;
		let myRoll = rollDie(green);
		console.log(myRoll);
		if (myRoll <= miss){
			let ballLie = "Missed Green Left";
			return ballLie;
		}
		else if (myRoll >= green - miss){
			let ballLie = "Missed Green Right";
			return ballLie;
		}
		else {
			let ballLie = "Hit The Green";
			return ballLie;
		}
	}
	else{
		let myRoll = rollDie(green);
		console.log(myRoll);
		if (myRoll <= miss){
			let ballLie = "Missed The Green Left";
			return ballLie;
		}
		else if (myRoll >= green - miss){
			let ballLie = "Missed The Green Right";
			return ballLie;
		}
		else {
			let ballLie = "Hit The Green";
			return ballLie;
		}
	}
}
function puttBall(miss, dice){
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
	else {
		let ballLie = "In the Cup";
		return ballLie;
	}
}
function wedgeShot(miss, dice, wedgeMadeIt){
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
function playHole(hole, distance, par) {
	// what numbers are inside array [value to miss right of left, dice side value, min distance, max distance]
	let driver = [5,30,225,300];
	let shortApproach = [3,15,50,150];
	let longApproach = [4,20,100,225]
	let wedge = [1,5];
	let wedgeMadeIt = 3;
	let putter = [1,3];

	let holeShots = 0

	let missedShot = 2;
	let holeNumber = hole;

	let myBall = teeShot(driver[0], driver[1]);
	console.log("You hit the ball " + rollDieDistance(driver[2], driver[3]) + "yrds in the " + myBall);
	holeShots++;
	myBall = secondShot(longApproach[0], longApproach[1], myBall, missedShot);
	console.log("On your second hit you hit the ball " + rollDieDistance(longApproach[2], longApproach[3]) + "yrds and " + myBall);
	holeShots++;
	if (myBall === "Hit The Green"){
		myBall = puttBall(putter[0], putter[1])
		console.log("On your next shot you used your putter to hit the ball " + myBall);
		holeShots++;
		if (myBall === "In the Cup"){
			console.log("On to the Next Hole");
		}
		else{ 
			console.log("On your next shot you just tapped in your ball");
			holeShots++;
			console.log("On to the Next Hole");
		}
	}
	else{
		myBall = wedgeShot(wedge[0], wedge[1], wedgeMadeIt);
		console.log("On your next shot you used your wedge to hit the ball " + myBall);
		holeShots++;
		if (myBall === "In the Cup"){
			console.log("On to the Next Hole");
		}
		else if (myBall === "Short of Cup"){;
			myBall = puttBall(putter[0], putter[1]);
			console.log("On your next shot you used your putter to hit the ball " + myBall);
			holeShots++
				if (myBall === "Left of Hole" || myBall === "Right of Hole"){
					console.log("On your next shot you just tapped in your ball");
					holeShots++;
					console.log("On to the Next Hole");
				}
				else{
					console.log("On to the Next Hole");
				}
		}	
		else{
			console.log("On your next shot you just tapped in your ball");
			holeShots++;
			console.log("On to the Next Hole");
		}
	}
	//console.log("This is how many shots you took: " + holeShots);
	return holeShots;
	
}
function holeScore(par, shots){
	let myScore = shots - par;
	return myScore;
}
function playGame(){
	let hole = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	let holeDistance = [410, 433, 172, 510, 420, 437, 413, 579, 218]
	let par = [4, 4, 3, 5, 4, 4, 4, 5, 3];
	let score = 0;
	let numberOfHoles = prompt("Enter the number of holes you would like to play")
	for (var i = 0; i < numberOfHoles; i++) {
		alert("Welcome to Hole #" + hole[i] + "\nPar: " + par[i] + "     Distance: " + holeDistance[i] + "\nGrab your club and step up to the tee box");
		let holeShots = playHole(hole[i], holeDistance[i], par[i]);
		score += holeScore(par[i], holeShots);
		alert("After hole #" + hole[i] + "\nYou took " + holeShots + " shots on a par " + par[i] + "\nYour total score is: " + score);
	}
}

