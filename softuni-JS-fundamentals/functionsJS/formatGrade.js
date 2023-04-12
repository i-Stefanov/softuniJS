function formatGrades(grade) {
  let fixedGrade = grade.toFixed(2);
  if (grade < 3) {
    console.log(`Fail (2) `);
  } else if (grade < 3.5) {
    console.log(`Poor (${fixedGrade})`);
  } else if (grade < 4.5) {
    console.log(`Good (${fixedGrade})`);
  } else if (grade < 5.5) {
    console.log(`Very good (${fixedGrade})`);
  } else {
    console.log(`Excellent (${fixedGrade})`);
  }
}
