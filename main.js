let stars=document.getElementById('stars');
let mon=document.getElementById('mon');
let mountain3=document.getElementById('mountain3');
let mountain4=document.getElementById('mountain4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let mountain7=document.getElementById('mountain7');
let nouvil=document.querySelector('.nouvil');
window.onscroll = function(){
  let value = scrollY;
  stars.style.left = value + 'px';
  mon.style.top = value*6 + 'px';
  mountain3.style.top = value*2 + 'px';
  mountain4.style.top = value*1.5 + 'px';
  river.style.top = value + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value*3 + 'px';
  nouvil.style.fontSize = value + 'px';
  if(scrollY >= 156){
    nouvil.style.fontSize= 156 + 'px';
    nouvil.style.position = 'fixed';
    if(scrollY >= 123){
      nouvil.style.display = 'none';
    }else{
      nouvil.style.display = 'block';
    }
  }
}