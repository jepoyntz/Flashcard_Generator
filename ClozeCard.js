

var ClozeCard = function(text, cloze){
    //ONLY deleted portion of the text
    this.cloze = cloze;
    //ONLY partial text
    this.partial = text;
    //ONLY the full text
    this.fullText = text;


//var firstPresidentCloze = new ClozeCard(
    //(fulltext, partial text)
   // "George Washington was the first President of the United States.", "George Washington");

// //"George Washington"
// console.log(firstPresidentCloze.cloze);

// //"...was the first President of the United States."
// console.log(firstPresidentCloze.partial);

// //"George Washington was the first President of the United States"
// console.log(firstPresidentCloze.fullText);

//Should throw or log an error beacause "oops" doesnt appeear in "This doesnt work"
// var brokenCloze = new ClozeCard("This doesnt work", "oops");

};

//exporting ClozeCard constructor
module.exports = ClozeCard;