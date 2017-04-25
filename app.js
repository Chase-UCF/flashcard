function BasicCard(front, back) {
  this.front = front,
  this.back = back
};

var meBasic = new BasicCard("What is the name of the one who rarely understands?", "Chase");
console.log(meBasic.front);
console.log(meBasic.back);

function ClozeCard(text, cloze) {
  this.text = text,
  this.cloze = cloze
};

ClozeCard.prototype.showCloze = function () {
  console.log(this.cloze);
};

ClozeCard.prototype.showPartial = function () {
  if (this.text.indexOf(this.cloze) >= 0) {
    var newText = this.text.replace(this.cloze, "...");
    console.log(newText);
  }
};

ClozeCard.prototype.showText = function () {
  console.log(this.text);
};

var meCloze = new ClozeCard("Chase does not always understand", "Chase");
meCloze.showCloze();
meCloze.showPartial();
meCloze.showText();