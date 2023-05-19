function generateReport() {
  const employeesDataChecBox = document.querySelectorAll(`th>input`);
  const employees = Array.from(document.querySelectorAll(`tr td:nth-child(1)`));
  const department = Array.from(
    document.querySelectorAll(`tr td:nth-child(2)`)
  );
  const status = Array.from(document.querySelectorAll(`tr td:nth-child(3)`));
  const dateHired = Array.from(document.querySelectorAll(`tr td:nth-child(4)`));
  const benefits = Array.from(document.querySelectorAll(`tr td:nth-child(5)`));
  const compensation = Array.from(
    document.querySelectorAll(`tr td:nth-child(6)`)
  );
  employeesDataChecBox.forEach((checkBox) => {
    if (checkBox.checked) {
      console.log(checkBox["name"]);
    }
  });
  const reting = Array.from(document.querySelectorAll(`tr td:nth-child(7)`));
  let employeesArr = Array.from(employees);
  //   arr.forEach((e) => {
  //     console.log(e.textContent);
  //   });
}
