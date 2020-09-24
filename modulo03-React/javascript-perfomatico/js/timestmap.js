/**
 const getNewTimestamp=()=>{
     return 'timestamp';
 }
 * 
 */

const leftPad = (value, count = 2, char = "0") => {
  let stringValue = value.toString();
  let newValue = stringValue;

  if (stringValue.length < count) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
};

const getNewTimestamp = () => {
  console.log(leftPad("1"));
  console.log(leftPad("11", 3));
  console.log(leftPad("11", 3, "_"));
  console.log(leftPad("111", 4));

  const now = new Date();
  let result = "";

  result += leftPad(now.getDate());
  result += "/";
  result += leftPad(now.getMonth() + 1);
  result += "/";
  result += now.getFullYear();
  result += " ";
  result += leftPad(now.getHours());
  result += ":";
  result += leftPad(now.getMinutes());
  result += ":";
  result += leftPad(now.getSeconds());
  result += ".";
  result += leftPad(now.getMilliseconds(), 3);

//   var myDate = new Date("July 1, 1978 02:30:00"); // Your timezone!
//   var myEpoch = myDate.getTime() / 1000.0;

  /*
const now = new Date("August 28, 2020 22:14:00");
let result = '';

result += now.getTime()/1000.0; 
document.write(myEpoch);
*/

  return result;
};
