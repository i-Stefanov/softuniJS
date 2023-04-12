function employees(employeesList) {
  class Employee {
    constructor(name, personalNumber) {
      (this.name = name), (this.personalNumber = personalNumber);
    }
    printInfo() {
      console.log(
        `Name: ${this.name} -- Personal Number: ${this.personalNumber} `
      );
    }
  }
  for (const employee of employeesList) {
    let personalNumber = employee.length;
    let employeeInfo = new Employee(employee, personalNumber);
    employeeInfo.printInfo();
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
