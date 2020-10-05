import axios from 'axios'

const api_url = 'http://localhost:3001/grade';

const grade_validation = [
  {
    id: 1,
    gradeType: 'Exercícios',
    minValue: 0,
    maxValue: 10,
  },
  {
    id: 2,
    gradeType: 'Trabalho Prático',
    minValue: 0,
    maxValue: 40,
  },
  {
    id: 3,
    gradeType: 'Desafio',
    minValue: 0,
    maxValue: 50,
  },
];

const getAllGrades = async () => {
  const res = await axios.get(api_url);
  return res;

}

const timeStamp = () => {
  //para ajustar a hora da máquina local
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

  const now = new Date()
  const timer = `${leftPad(now.getDate())}/${leftPad(now.getMonth() + 1)}/${leftPad(now.getFullYear())}`;
  const hours = leftPad(now.getHours());
  const minutes = leftPad(now.getMinutes());
  const seconds = leftPad(now.getSeconds());

  const formatter = `${hours}:${minutes}:${seconds}`;
  const tt = formatter.split(":");
  const sec = tt[0] * 3600 + tt[1] * 60 + tt[2] * 1;
  const display = `${timer} ${formatter}`

}


export { getAllGrades }
export { timeStamp }