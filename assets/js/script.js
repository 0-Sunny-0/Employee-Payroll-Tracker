// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = []

// Collect employee data
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {

 let continueAsking = true;

  while(continueAsking){ 
  const firstName = prompt('First Name');
  const lastName = prompt('Last Name');
  const salary = Number(prompt('Salary'));
  console.log(firstName);
  console.log(lastName);
  console.log(salary);

  let employees = {firstName, lastName, salary};
  console.log(employees);

  employeesArray.push(employees);
  console.log(employeesArray);

  continueAsking = confirm('Do you want to add another entry?');
}
  
  return employeesArray;
  // Code will never reach this line due to the return

  // if (confirm('Do you want to add another entry?')) {
  // } else {
  //   continueAsking = false;
  // }     
} 


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;

  for (let i = 0; i < employeesArray.length; i++){
  sum += employeesArray[i].salary;
  // console.log(sum);
  // console.log(employeesArray[i].salary);
}  
  let average = sum / employeesArray.length;
  console.log(`The average employee salary between our employee(s) is ${average}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomElement = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations to ${randomElement.firstName} ${randomElement.lastName}, our random drawing winner!`);
  console.log(employeesArray);
}

// Don't forget you're a rockstar :) 

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
