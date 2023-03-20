function schoolGrades(info) {
  let students = new Map();
  info.forEach((student) => {
    let studentInfo = student.split(` `);
    let name = studentInfo.shift();
    let grades = studentInfo.map((grade) => Number(grade));
    if (students.has(name)) {
      grades.push(...students.get(name));
    }
    students.set(name, grades);
  });

  let sortedStudents = new Map(
    [...students].sort((studentA, studentB) =>
      studentA[0].localeCompare(studentB)
    )
  );

  for (const [name, grades] of sortedStudents) {
    let averageGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
    console.log(`${name}: ${averageGrade.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
