function filterEmployees(data, criteria) {
  let employees = JSON.parse(data);
  employees.forEach((employee, i) => {
    if (criteria === `all`) {
      console.log(
        `${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
      );
    } else {
      let [filerBy, value] = criteria.split(`-`);
      if (employee[filerBy] === value) {
        console.log(
          `${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
        );
      }
    }
  });
}
filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
