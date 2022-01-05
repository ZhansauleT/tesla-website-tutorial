var header = document.getElementById("header");
var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var modelName = document.getElementById("model");
var time = document.getElementById("time");
var speed = document.getElementById("speed");
var range = document.getElementById("range");

ms.onclick = function(){
  header.style.backgroundImage = "url(img/image-1.png)";
  modelName.innerHTML = "Model S";
  time.innerHTML = "1.9 s";
  speed.innerHTML = "200 mph";
  range.innerHTML = "396 mi";
}
m3.onclick = function(){
  header.style.backgroundImage = "url(img/image-2.png)";
  modelName.innerHTML = "Model 3";
  time.innerHTML = "1.7 s";
  speed.innerHTML = "220 mph";
  range.innerHTML = "415 mi";
}
mx.onclick = function(){
  header.style.backgroundImage = "url(img/image-3.png)";
  modelName.innerHTML = "Model X";
  time.innerHTML = "1.5 s";
  speed.innerHTML = "240 mph";
  range.innerHTML = "458 mi";
}
my.onclick = function(){
  header.style.backgroundImage = "url(img/image-4.png)";
  modelName.innerHTML = "Model Y";
  time.innerHTML = "1.3 s";
  speed.innerHTML = "250 mph";
  range.innerHTML = "510 mi";
}

