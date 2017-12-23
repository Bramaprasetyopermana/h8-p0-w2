
function balikstring(sent){
  var total = sent.length;
  var hasil = '';
  for(var i =total-1; i>=0; i--){
    hasil = hasil+''+sent[i];
  }
  console.log(hasil);
}
balikstring('hello world!');
