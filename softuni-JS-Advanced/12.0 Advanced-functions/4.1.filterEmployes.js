function filterEmployees(data, criteria) {
  let employees = JSON.parse(data);
  let [filterBy, value] = criteria.split(`-`);
  employees
    //when the criteria is all filterBy is all too.So x[filterBy]=undefined and value = undefined therefore the filter returns true for all employees
    .filter((x) => {
      return x[filterBy] === value;
    })
    .map((x, i) => {
      console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`);
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
  "all"
);
