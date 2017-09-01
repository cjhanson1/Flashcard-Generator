var inquirer = require('inquirer');
var fs = require('fs')
var BasicCard=require("./BasicCard.js")
var ClozeCard=require("./ClozeCard.js")

inquirer.prompt([
{
	type:"list",
	name:"q1",
	message:"What would you like to do?",
	choices:["Add Flashcards","Use Flashcards"]
}
])
.then(function (answers) {
	if (answers.q1==="Add Flashcards") {
		inquirer.prompt([
			{
			type:"list",
			name:"q2",
			message:"What type of Flashcards do you want to add?",
			choices:["Basic","Cloze"]
			}
		])
		.then(function (answers) {
			if (answers.q2==="Basic") {
				inquirer.prompt([
					{
					type:"input",
					name:"question",
					message:"Please type out the question",
					},
					{
					type:"input",
					name:"answer",
					message:"Please type out the answer",
					}
				])
				.then(function (answers) {
					var tempArray = []
					tempArray.push(answers.question)
					tempArray.push(answers.answer)
					fs.appendFile("basic.txt",tempArray+",")
				});
			}
			else if (answers.q2==="Cloze"){
					inquirer.prompt([
					{
					type:"input",
					name:"fullText",
					message:"Please type out the full text",
					},
					{
					type:"input",
					name:"ommission",
					message:"Please type out the text to be ommitted",
					}
				])
				.then(function (answers) {
					var tempArray=[]
					tempArray.push(answers.fullText)
					tempArray.push(answers.ommission)
					fs.appendFile("cloze.txt",tempArray+",")
				});
			}
		});
	}
	else if (answers.q1==="Use Flashcards"){
		inquirer.prompt([
			{
			type:"list",
			name:"q2",
			message:"What type of Flashcards do you want to use?",
			choices:["Basic","Cloze"]
			}
		])
		.then(function (answers) {
			if (answers.q2==="Basic") {
				var arb = []
				fs.readFile('basic.txt',"utf8",function(err,data){
					arb=data
					arb=arb.split(",")
					for (i=0;i<arb.length;i+=2){
						function(nothing){
						var newCard = new BasicCard(arb[i],arb[i+1])
						console.log(newCard.front)
						inquirer.prompt([
							{
							type:"confirm",
							name:"flashBasicFront",
							message:"View Answer?"
							}
						])
						.then(function (answers) {
							console.log(newCard.back)
								inquirer.prompt([
									{
									type:"confirm",
									name:"flashBasicBack",
									message:"Continue?"
									}
								])
								.then(function (answers) {
								});
						});

						}
						
					}
				});
			}
			else if (answers.q2==="Cloze"){
			console.log("You chose Cloze")
			}
		});
	}
});