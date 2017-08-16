var ClozeCard = require("./ClozeCard");

var inquirer = require("inquirer");

var qOne = new ClozeCard("Most orange cats are male." , "male");
var qTwo = new ClozeCard("Cats have nine lives." , "nine");
var qThree = new ClozeCard("Catnip is a plant that cats are attracted to.", "Catnip");
var qFour = new ClozeCard("Cats are the best." , "best");

inquirer.prompt([
	{
		message: qOne.partial,
		name: "useranswer1"
	},
	{
		message: qTwo.partial,
		name: "useranswer2"
	},
	{
		message: qThree.partial,
		name: "useranswer3"
	},
	{
		message: qFour.partial,
		name: "useranswer4"
	}
]).then(function(data){
	var score = 0;
	if (data.useranswer1 === qOne.cloze){
		score++;
	}
	if (data.useranswer2 === qTwo.cloze){
		score++;
	}
	if (data.useranswer3 === qThree.cloze){
		score++;
	}
	if (data.useranswer4 === qFour.cloze){
		score++;
	}

	console.log("Awesome! Here is your score! " + score + "/4");
});


