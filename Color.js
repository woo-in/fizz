var ColorControler = { }; // 객체 이용


ColorControler.LinkSetColor = function(color) {
    $('.notnow').css('color',color);
}

ColorControler.BodySetColor = function(color){
    $('body').css('color',color);
}

ColorControler.BodySetBackColor = function(color)
{
  $('body').css('backgroundColor',color);
}

ColorControler.TitleSetColor= function(color)
{
  $('#title1').css('color',color);
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
