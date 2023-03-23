function companyUsers(list) {
  let companies = {};
  list.forEach((line) => {
    let [company, employeeID] = line.split(` -> `);
    //if the company is not in the object create a key (the company name) with value of empty set
    if (!companies[company]) {
      companies[company] = new Set();
    }
    //push the employee id in the id's set (which is the value of the company key)in the companies object
    companies[company].add(employeeID);
  });
  let sortedCompanies = Object.entries(companies).sort((kvpA, kvpB) =>
    kvpA[0].localeCompare(kvpB[0])
  );
  for (let company of sortedCompanies) {
    let [comapnyName, emplyeeIDs] = company;
    console.log(comapnyName);
    for (let employeeID of emplyeeIDs) {
      console.log(`-- ${employeeID}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
