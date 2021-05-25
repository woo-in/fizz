var ColorControler = { }; // 객체 이용


ColorControler.LinkSetColor = function(color) {
  var array = document.querySelectorAll('.notnow');

  var i=0;
  while(i<array.length){

    array[i].style.color = color;
    i=i+1;
  }
}

ColorControler.BodySetColor = function(color){
  document.querySelector('body').style.color = color;
}

ColorControler.BodySetBackColor = function(color)
{
  document.querySelector('body').style.backgroundColor = color;
}

ColorControler.TitleSetColor= function(color)
{
  document.querySelector('#title1').style.color = color;
}

function NightDayHander(InputB) {
  if(InputB.value === 'night'){
    ColorControler.BodySetBackColor('black');
    ColorControler.BodySetColor('white');
    ColorControler.TitleSetColor('white');
    ColorControler.LinkSetColor('orange');
    InputB.value = 'day';
}
  else{
    ColorControler.BodySetBackColor('white');
    ColorControler.BodySetColor('black');
    ColorControler.TitleSetColor('black');
    ColorControler.LinkSetColor('black');
    InputB.value = 'night';
}
}
