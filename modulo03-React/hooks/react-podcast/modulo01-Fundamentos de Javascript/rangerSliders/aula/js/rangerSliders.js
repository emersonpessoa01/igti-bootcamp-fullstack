window.addEventListener("load", () => {
  const changeColor=()=>{
    let red = document.querySelector("#rangeRed").value; 
    let green = document.querySelector("#rangeGreen").value;
    let blue = document.querySelector("#rangeBlue").value;

    let colorOutPut = document.querySelector("#colorOutput")
    let textRed = document.querySelector("#textRed")
    let textGreen = document.querySelector("#textGreen")
    let textBlue = document.querySelector("#textBlue")

    let color = `RGB(${red}, ${green}, ${blue})`;
    // let colorDiv = document.querySelector("#colorDiv");
    colorOutPut.innerHTML = `: ${color}`; 
    textRed.innerHTML = red;
    textGreen.innerHTML = green;
    textBlue.innerHTML = blue;
    document.body.style.backgroundColor = color; //atribui todas as cores ao corpo do documento
    //colorDiv.innerHTML = `${color}`;
  }
  //captura o elemento do range e coloca escutadores para o evento input para dispara sua funçao
  document.querySelector("#rangeRed").addEventListener("input", changeColor);
  document.querySelector("#rangeGreen").addEventListener("input", changeColor);
  document.querySelector("#rangeBlue").addEventListener("input", changeColor);
});
