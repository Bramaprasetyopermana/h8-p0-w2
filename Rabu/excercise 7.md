// Tugas ke 1
// // // SIMPAN angka pertama dan kedua
// // // HITUNG perkalian luas panjang dan lebar
// // // TULISKAN hasil perkalian panjang dan lebar

var panjang = 5;
var lebar= 7;
hitung = panjang * lebar;

console.log (panjang * lebar);

//Tugas ke 2
// SIMPAN masukan kalimat yang ingin di cari
// IF kondisi yang mau di cari sama atau tidak dengan 'Saya Belajar JavaScript!'
// TULISKAN hasil kalimat

var a = 'Saya Belajar JavaScript!'
var b = 'pasti bisa!'

if (b === 'pasti bisa!') {
  console.log ('Saat ini ' + a + ' selalu saya tanamkan prinsip ' + b);
}

// Tugas ke 3
// SIMPAN dan TULIS 'perulangan nilai dari 1-30'
// ULANGI 'lakukan perulangan nilai awal 1-30 dan pada  kelipatan 3 beri keterangan '3 kelipatan 3'
// TAMPILKAN 'tampilkan hasil'

console.log('looping kedua')
var dope = 1;
for( var dope =1; dope <=30; dope +=2)
{
  if(dope %3===0){
    console.log('counter ke' + dope +' kelipatan 3 ');
  }
  else{
    console.log('counter ke' + dope + ' ');
  }
}
