//Calculate Net Salary

//Declare variables
let basicSalary, benefits, payee, NHIFDeductions, NSSFDeductions, grossSalary, netSalary;

//Prompt user to enter basic salary
basicSalary = prompt("Please enter your basic salary:");

//Prompt user to enter benefits
benefits = prompt("Please enter your benefits:");

//Calculate payee (i.e. Tax)
payee = (basicSalary + benefits) * 0.25;

//Calculate NHIF deductions
NHIFDeductions = basicSalary * 0.03;

//Calculate NSSF deductions
NSSFDeductions = basicSalary * 0.05;

//Calculate gross salary
grossSalary = basicSalary + benefits;

//Calculate net salary
netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

//Display the net salary
console.log("Your net salary is: $" + netSalary);