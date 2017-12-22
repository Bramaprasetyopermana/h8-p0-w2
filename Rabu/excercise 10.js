// TENTUKAN `total` sama dengan 0
// FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100:
//     IF `index` adalah ganjil:
//         TAMBAHKAN `total` dengan `index`
//     ELSE IF `index` adalah genap:
//         KURANGI `total` dengan `index`
//     ENDIF
// ENDFOR
// TULISKAN "TOTAL: `total`"

var total = 0;
for(var i=1; i<=100;i++){
  if(i % 2 == 1){
    total = total + i;
  }else{
    total = total - i;
  }
}
console.log("TOTAL : "+total);
// }

// SIMPAN karakter kosong pada `pagar`
// FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
//     FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10:
//         TAMBAHKAN `pagar` dengan karakter "#"
//     ENDFOR
//     TULISKAN `pagar`
//     SIMPAN karakter kosong pada `pagar`
// ENDFOR

var pagar ='';
for(var i=1; i<=10;i++){
  for(var i2=1;i2<=10;i2++){
    pagar = pagar+'#';
  }
  console.log(pagar);
  pagar = '';
}

// SIMPAN karakter kosong pada `bintang`
// FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
//     FOR setiap pertambahan 1 pada `index2` dari 0 sampai `index1`:
//         TAMBAHKAN `bintang` dengan karakter "*"
//     ENDFOR
//     TULISKAN `bintang`
//     SIMPAN karakter kosong pada `bintang`
// ENDFOR

var bintang ='';
for(var i=1; i<=10;i++){
  for(var i2=1;i2<=10;i2++){
    bintang = bintang+'*';
  }
  console.log(bintang);
  bintang = '';
}
