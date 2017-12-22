console.log('Looping pertama')
var dope = 1;
for(var dope = 1; dope <=100; dope++)
{ 
  if(dope %2===1){
  console.log('counter ke ' + dope + ' ganjil');
  }
  else{
  console.log('counter ke ' + dope + ' genap');}
}

console.log('looping kedua')
var dope = 1;
for( var dope =1; dope <=100; dope +=2)
{
  if(dope %3===0){
    console.log('counter ke' + dope +' kelipatan 3 ');
  }
  else{
    console.log('counter ke' + dope + ' ');
  }
}

console.log('looping ketiga')
var dope =1;
for(var dope = 1; dope <100; dope +=5)
{
  if(dope %6===0){
    console.log ('counter ke ' + dope + ' kelipatan 6');
  }
  else{
    console.log('counter ke' + dope + '')
  }
}

console.log('looping keempat')
var dope=1;
for(var dope=1; dope <=100; dope +=9)
{
  if(dope %10===0){
    console.log ('counter ke' + dope + ' kelipatan 10')
  }
  else{
    console.log('counter ke' + dope + '')
  }
}


