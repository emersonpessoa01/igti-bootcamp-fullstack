function changeColor() {
  let red = document.getElementById('rangeRed').value; //declara a variável no range vermelho
  let green = document.getElementById('rangeGreen').value; //declara a variável no range verde
  let blue = document.getElementById('rangeBlue').value; //declara a variável no range azul
  let color = `rgb(${red}, ${green}, ${blue})`; //declara a variável
  //document.body.style.backgroundColor = color; //atribui todas as cores ao corpo do documento
  let colorDiv = document.querySelector('#colorDiv');
  document.getElementById('colorOutput').innerHTML = `: ${color}`;//captura o elemento span e atribui todas cores
  document.querySelector("#textRed").textContent = red;
  document.querySelector("#textGreen").textContent = green;
  document.querySelector("#textBlue").textContent = blue;
  document.querySelector('#colorDiv').style.background = color;
  colorDiv.innerHTML = `${color}`;
  
}
//captura o elemento do range e coloca escutadores para o evento input para dispara sua funçao
document.getElementById('rangeRed').addEventListener('input',changeColor);
document.getElementById('rangeGreen').addEventListener('input',changeColor);
document.getElementById('rangeBlue').addEventListener('input',changeColor);



