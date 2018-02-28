// SOAL 7 WEEK 2, ASTERISK

// *
// *
// *
// *
// *

var A = '';
for (var i = 0; i <= 5; i++) {
	console.log(A);
	A = '*';
}

// *****
// *****
// *****
// *****
// *****

var A = '';
var tampung = '';
for (var i = 0; i < 5; i++) {
	for (var j = A; j < 5; j++) {
		tampung += '*';
	}
	console.log(tampung);
	A = '';
	tampung = '';
}

// *
// **
// ***
// ****
// *****

var A = '';
for (var i = 0; i < 5; i++) {
	A += '*';
	console.log(A);
}
