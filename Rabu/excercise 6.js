//SOAL 6 WEEK 2,LOOPING

// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

console.log('======>LOOPING PERTAMA WHILE<=======');
var A = 1;
while (A <= 20) {
	console.log(A + ' - I Love coding');
	A++;
}
console.log('=======> LOOPING KEDUA WHILE<=======');
var B = 20;
while (B >= 1) {
	console.log(B + ' - I Will become fullstack developer');
	B--;
}

console.log('======> LOOPING PERTAMA FOR<=======');
var A = 1;
for (var i = 1; i <= 20; i++) {
	console.log(A + ' - I Love coding');
	A++;
}
console.log('=======> LOOPING KEDUA FOR<=======');
var B = 20;
for (var i = 20; i >= 1; i--) {
	console.log(B + ' - I Will become fullstack developer');
	B--;
}

// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3" dan seterusnya.
console.log('======>GANJIL/GENAP<======')
var A = 1;
for (var i = 1; i <= 100; i++) {
	if (i % 2 !== 0) {
		console.log(A + ' - bilangan ganjil');
	} else {
		console.log(A + ' - bilangan genap');
	}
	A++;
}
console.log('======>KELIPATAN 3<=======')
var A = 1;
for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log(A + ' kelipatan 3');
	}
	A++;
}
console.log('======>KELIPATAN 6<=====')
var A = 1;
for (var i = 1; i <= 100; i++) {
	if (i % 6 === 0) {
		console.log(A + ' kelipatan 6');
	}
	A++;
}
console.log('=====>KELIPATAN 10<=======')
var A = 1;
for (var i = 1; i <= 100; i++) {
	if (i % 10 === 0) {
		console.log(A + ' kelipatan 10');
	}
	A++;
}
