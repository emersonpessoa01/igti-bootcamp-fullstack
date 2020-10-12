import axios from "axios";

const API_URL = "http://localhost:3001/grade/";

const GRADE_VALIDATION = [
  {
    id: 1,
    gradeType: "Exercícios",
    minValue: 0,
    maxValue: 10,
  },
  {
    id: 2,
    gradeType: "Trabalho Prático",
    minValue: 0,
    maxValue: 40,
  },
  {
    id: 3,
    gradeType: "Desafio",
    minValue: 0,
    maxValue: 50,
  },
];

const getAllGrades = async () => {
  const res = await axios.get(API_URL);

  const grades = res.data.grades.map((grade) => {
    const { student, subject, type } = grade;

    return {
      ...grade,
      studentLowerCase: student.toLowerCase(),
      subjectLowerCase: subject.toLowerCase(),
      typeLowerCase: type.toLowerCase(),
      isDeleted: false,
    };
  });

  let allStudents = new Set();
  grades.forEach((grade) => allStudents.add(grade.student));
  allStudents = Array.from(allStudents);

  let allSubjects = new Set();
  grades.forEach((grade) => allSubjects.add(grade.subject));
  allSubjects = Array.from(allSubjects);

  let allGradeTypes = new Set();
  grades.forEach((grade) => allGradeTypes.add(grade.type));
  allGradeTypes = Array.from(allGradeTypes);

  let maxId = -1;
  grades.forEach(({ id }) => {
    if (id > maxId) {
      maxId = id;
    }
  });
  let nextId = maxId + 1;

  const allCombinations = [];
  allStudents.forEach((student) => {
    allSubjects.forEach((subject) => {
      allGradeTypes.forEach((type) => {
        allCombinations.push({
          student,
          subject,
          type,
        });
      });
    });
  });

  allCombinations.forEach(({ student, subject, type }) => {
    const hasItem = grades.find((grade) => {
      return (
        grade.subject === subject &&
        grade.student === student &&
        grade.type === type
      );
    });

    if (!hasItem) {
      grades.push({
        id: nextId++,
        student,
        studentLowerCase: student.toLowerCase(),
        subject,
        subjectLowerCase: student.toLowerCase(),
        type,
        typeLowerCase: type.toLowerCase(),
        value: 0,
        isDeleted: true,
      });
    }
  });

  grades.sort((a, b) => a.typeLowerCase.localeCompare(b.typeLowerCase));
  grades.sort((a, b) => a.subjectLowerCase.localeCompare(b.subjectLowerCase));
  grades.sort((a, b) => a.student.localeCompare(b.student));

  return grades;
};

const insertGrade = async (grade) => {
  const res = await axios.post(API_URL, grade);
  return res.data.id;
};

const updateGrade = async (grade) => {
  const res = await axios.put(API_URL, grade);
  return res.data;
};

const deleteGrade = async (grade) => {
  const res = await axios.delete(`${API_URL}/${grade.id}`);
  return res.data;
};

const getValidationFromGradeType = ((gradeType) => {
  const gradeValidation = GRADE_VALIDATION.find(
    (item) => item.gradeType === gradeType
  );

  const { minValue, maxValue } = gradeValidation;
  return {
    minValue,
    maxValue,
  };
});

export {
  getAllGrades,
  insertGrade,
  updateGrade,
  deleteGrade,
  getValidationFromGradeType,
};
