var ClozeCard = function(text, cloze) {
	this.fulltext = text;
	this.cloze = cloze;
	this.partial = this.fulltext.replace(this.cloze, "...");

	this.readStats = function(){
		console.log(this.fulltext);
		console.log(this.cloze);
		console.log(this.partial);
	}
}

module.exports = ClozeCard;

//test case
// var firstCloze = new ClozeCard("This is a test.", "test");

// firstCloze.readStats();

