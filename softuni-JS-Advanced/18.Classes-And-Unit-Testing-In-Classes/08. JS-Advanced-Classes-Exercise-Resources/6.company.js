class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(name, salary, position, department) {
    if (!name || !position || !department || salary <= 0) {
      throw new Error(`Invalid input!`);
    }
    if (!this.departments[department]) {
      this.departments[department] = [];
    }
    this.departments[department].push({ name, salary, position });
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    let bestDepartent;
    let highestAvgSalary = 0;
    for (const [dep, employees] of Object.entries(this.departments)) {
      let averageSalary =
        employees.reduce((acc, employee) => acc + employee.salary, 0) /
        employees.length;
      if (averageSalary > highestAvgSalary) {
        highestAvgSalary = averageSalary;
        bestDepartent = dep;
      }
    }
    let result = [
      `Best Department is: ${bestDepartent}\nAverage salary: ${highestAvgSalary.toFixed(
        2
      )}`,
    ];
    Object.values(this.departments[bestDepartent])
      .sort((a, b) => {
        return b.salary - a.salary || a.name.localeCompare(b.name);
      })
      .forEach((employee) => {
        result.push(
          `\n${employee.name} ${employee.salary} ${employee.position}`
        );
      });
    return result.join(``);
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
