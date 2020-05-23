window.addEventListener('load', colorChange);
function colorChange(){
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;

  //var cor = "rgb("+red+","+green+","+blue+")";
  var color = `rgb(${red}, ${green}, ${blue})`
  document.getElementById("cor").style.background = color;
  document.getElementById("cor").innerHTML = color;

  document.getElementById("textRed").innerHTML = red;
  document.getElementById("textGreen").innerHTML = green;
  document.getElementById("textBlue").innerHTML = blue;
}