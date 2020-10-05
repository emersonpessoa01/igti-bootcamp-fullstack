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

// para converter em toLowerCase()
// const toLowerCase=(value)=>{
//   return value.toLowerCase()
// }

const getAllGrades = async () => {
  const res = await axios.get(api_url);

  const grades = res.data.grades.map(grade => {
    const { student, type, subject } = grade;
    return {
      ...grade,
      studentToLowerCase: student.toLowerCase(),
      subjectToLowerCase: subject.toLowerCase(),
      typeToLowerCase: type.toLowerCase(),
      isDeleted: false,

    }
  })
  let allStudents = new Set();
  grades.forEach(grade => allStudents.add(grade.student));
  allStudents = Array.from(allStudents);

  let allSubjects = new Set();
  grades.forEach(grade => allSubjects.add(grade.subject));
  allSubjects = Array.from(allSubjects);

  let allTypes = new Set();
  grades.forEach(grade => allTypes.add(grade.type));
  allTypes = Array.from(allTypes);

  let maxId = -1;
  grades.forEach(({ id }) => {
    if (id > maxId) {
      maxId = id
    };
  })
  let nextId = maxId + 1;
  const allCombinations = [];
  allStudents.forEach((student) => {
    allSubjects.forEach((subject) => {
      allTypes.forEach((type) => {
        allCombinations.push({
          student: student,
          subject: subject,
          type: type,
        });
      });
    });
  });

  allCombinations.forEach((combination) => {
    const { student, subject, type } = combination;
    // console.log(subject);
    // console.log(student);
    // console.log(type)

    const hasItem = grades.find(item => {
      //item.subject = subject &&
      return (
        item.subject === subject &&
        item.student === student &&
        item.type === type
      );
    });

    if (!hasItem) {
      grades.push({
        id: nextId++,
        student,
        studentToLowerCase: student.toLowerCase(),
        subject,
        subjectToLowerCase: subject.toLowerCase(),
        type,
        typeToLowerCase: type.toLowerCase(),
        value: 0,
        isDeleted: true,
      });
    }
  })

  grades.sort((a, b) => {
    a.typeToLowerCase.localeCompare(b.typeToLowerCase);
    a.studentToLowerCase.localeCompare(b.studentToLowerCase);
    a.subjectToLowerCase.localeCompare(b.subjectToLowerCase);
  })

  //return allCombinations;
  return grades;
}

export { getAllGrades }    