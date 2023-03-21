// Prompt user to enter student's marks
let marks = prompt("Please enter the student's marks (between 0 and 100):");
// Convert marks to a number
marks = Number(marks);

// Check if marks are within the valid range
if (marks < 0 || marks > 100) {
  console.log(window.alert("Invalid marks entered. Please enter a value between 0 and 100."));
} else {
  // Assign grade based on marks
  let grade;
  if (marks > 79) {
    grade =window.alert('Your grade is A');
  } else if (marks >= 60 && marks <= 79) {
    grade = window.alert('Your grade is B');
  } else if (marks >= 50 && marks <= 59) {
    grade = window.alert('Your grade is C');
  } else if (marks >= 40 && marks <= 49) {
    grade = window.alert('Your grade is D');
  } else {
    grade = window.alert('Your grade is E');
  }

  // Output the grade
  console.log(`The student's grade is ${grade}.`);
}
