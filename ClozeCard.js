module.exports = ClozeCard;

var ClozeCard = function(fullText,cloze){
	this.fullText = fullText;
	this.cloze = cloze;
	var arb = fullText.indexOf(cloze)
	if (arb===-1){
		console.log("Oops, this doesn't work")
		this.partial = "Oops, this doesn't work"
	}
	else {
		this.partial = fullText.replace(cloze,"...");
	}
}

// var newCard = new ClozeCard("My name is George Washington and I was the 1st president of the United States.","George Washington")

// console.log(newCard.fullText)
// console.log(newCard.cloze)
// console.log(newCard.partial)