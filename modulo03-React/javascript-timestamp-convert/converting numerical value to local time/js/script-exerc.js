window.addEventListener("load", start);

function start() {
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleClickButton);
}

//para inserir zero à esquerda em números com 2 dígitos
const leftPad = (value, count = 2, char = "0") => {
    let stringValue = value.toString();
    let newValue = stringValue;
  
    if (stringValue.length < count || stringValue.length % 10 ===0) {
      for (let i = 0; i < count - stringValue.length; i++) {
        newValue = char + stringValue;
      }
    }
    return newValue;
  };

  //conversão do JSON timestamp em datas e horas normais
const handleClickButton=()=>{
  // const now = new Date("2020-09-07T22:37:58.582077");
  const now = new Date(44075);
  let formattedDate =`
    ${leftPad(now.getDate())}/${leftPad(now.getMonth() + 1)}/${now.getFullYear()} às`;
  let hours = leftPad(now.getHours());
  let minutes = leftPad(now.getMinutes());
  let seconds = leftPad(now.getSeconds());
  let milliSeconds = leftPad(now.getMilliseconds(),3);
  let formattedTime = `${hours}:${minutes}:${seconds}:${milliSeconds}`;

  formatted = `${formattedDate} ${formattedTime}`;

  console.log(formatted);
}


