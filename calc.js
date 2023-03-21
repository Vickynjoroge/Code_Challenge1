//Calculate Net Salary

//Declare variables
let basicSalary, benefits, payee, NHIFDeductions, NSSFDeductions, grossSalary, netSalary;

//Prompt user to enter basic salary
basicSalary = parseFloat(prompt("Please enter your basic salary:"));

//Prompt user to enter benefits
benefits = parseFloat(prompt("Please enter your benefits:"));

//Calculate payee (i.e. Tax)
payee = Math.floor((basicSalary + benefits) * 0.25);

//Calculate NHIF deductions
NHIFDeductions = Math.floor(basicSalary * 0.03);

//Calculate NSSF deductions
NSSFDeductions = Math.floor(basicSalary * 0.05);

//Calculate gross salary
grossSalary = Math.floor(basicSalary + benefits);

//Calculate net salary
netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

//Display the net salary
console.log(window.alert( `Your P.A.Y.E is ${payee}`));
console.log(window.alert( `Your gross salary is ${grossSalary}`));
console.log(window.alert( `Your NHIF Deduction is ${NHIFDeductions}`));
console.log(window.alert( `Your NSSF Deduction is ${NSSFDeductions}`));
console.log(window.alert(`Your net salary is: Ksh. ${netSalary}`));