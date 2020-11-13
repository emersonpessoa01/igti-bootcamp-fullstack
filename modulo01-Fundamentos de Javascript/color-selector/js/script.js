window.addEventListener("load", start);

function start() {
  let red = document.querySelector("#range-red").value;
  let green = document.querySelector("#range-green").value;
  let blue = document.querySelector("#range-blue").value;

  document.querySelector("#text-r").value = red;
  document.querySelector("#text-g").value = green;
  document.querySelector("#text-b").value = blue;

  document.querySelector("#range-red").addEventListener("input", start);
  document.querySelector("#range-green").addEventListener("input", start);
  document.querySelector("#range-blue").addEventListener("input", start);
  changeColor(red, green, blue);
}

const changeColor = (red, green, blue) => {
  let color = `rgb(${red} ${green} ${blue})`;
  result.style.backgroundColor = color;
};
