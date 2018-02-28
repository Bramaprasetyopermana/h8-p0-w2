// soal 1
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(
	word +
		' ' +
		second +
		' ' +
		third +
		' ' +
		fourth +
		' ' +
		fifth +
		' ' +
		sixth +
		' ' +
		seventh
);
// output= JavaScript is awesome and I love it!

//soal 2
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord =
	word[4] +
	word[5] +
	word[6] +
	word[7] +
	word[8] +
	word[9] +
	word[10] +
	word[11] +
	word[12] +
	word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// output=
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

// soal3
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 15);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

// output=
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

// soal4
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length;
var secondWord33 = secondWord3.length;
var thirdWord34 = thirdWord3.length;
var fourthWord35 = fourthWord3.length;
var fifthWord36 = fifthWord3.length;

console.log(
	'First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength
);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWord33);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWord34);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWord35);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWord36);

// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4
