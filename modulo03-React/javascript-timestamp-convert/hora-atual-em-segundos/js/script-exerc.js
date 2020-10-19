let clickArray = [];

window.addEventListener("load", start);

function start() {
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleClickButton);
}

//para inserir zero à esquerda em números com 2 dígitos
const leftPad = (value, count = 2, char = "0") => {
  let stringValue = value.toString();
  let newValue = stringValue;

  if (stringValue.length < count || stringValue.length % 10 === 0) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
};

//conversão do JSON timestamp em data e hora normais
const handleClickButton = () => {
  const now = new Date();
  let formattedDate = `
    ${leftPad(now.getDate())}/ ${leftPad(
    now.getMonth() + 1
  )}/ ${now.getFullYear()}`;
  let hours = leftPad(now.getHours());
  let minutes = leftPad(now.getMinutes());
  let seconds = leftPad(now.getSeconds());
  let milliSeconds = leftPad(now.getMilliseconds(), 3);
  let formattedTime = `${hours}:${minutes}:${seconds}:${milliSeconds}`;

  let tt = formattedTime.split(":");
  let sec = tt[0] * 3600 + tt[1] * 60 + tt[2] * 1;
  let display = `${formattedDate} (<strong>${formattedTime} => <strong>${formaNumber(
    sec
  )}</strong></strong> segundos)`;

  clickArray.push(display);

  console.log(clickArray);
  render(display);
};

const render = (display) => {
  const ul = document.querySelector("#data");
  const li = document.createElement("li");

  li.innerHTML = display;
  ul.appendChild(li);
};

const formaNumber = (number) => {
  let formatter = Intl.NumberFormat("pt-BR");
  return formatter.format(number);
};
// function render() {
//   const ul = document.querySelector("#data");
//   ul.innerHTML = "";

//   let lis = "";

//   clickArray.map((item) => {
//     lis += `<li>${item}</li>`;
//   });

//   ul.innerHTML = lis;
// }
