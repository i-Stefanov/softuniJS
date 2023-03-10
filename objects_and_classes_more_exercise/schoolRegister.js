function schoolRegister(input) {
  let students = [];
  input.forEach((line) => {
    line = line.split(`, `);
    let grade = Number(line[1].split(`: `)[1]) + 1;
    let name = line[0].split(`: `)[1];
    let score = Number(line[2].split(`: `)[1]);
    let student = {};
    student.name = name;
    student.grade = grade;
    student.score = score;
    if (score >= 3) {
      students.push(student);
    }
  });

  let sortedStudents = students.sort((studentA, studentB) => {
    return studentA.grade - studentB.grade;
  });

  let studentsInSameGrade = [];
  let count = 0;
  for (let i = 0; i < sortedStudents.length; i += count) {
    studentsInSameGrade = [];
    for (let j = i; j < sortedStudents.length; j++) {
      if (sortedStudents[i].grade === sortedStudents[j].grade) {
        studentsInSameGrade.push(sortedStudents[j]);
        count++;
      } else {
        break;
      }
    }
    i = 0;
    console.log(studentsInSameGrade);
  }
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
