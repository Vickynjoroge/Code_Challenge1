// Prompt user to enter student's marks
let marks = prompt("Please enter the student's marks (between 0 and 100):");
// Convert marks to a number
marks = Number(marks);

// Check if marks are within the valid range
if (marks < 0 || marks > 100) {
  console.log("Invalid marks entered. Please enter a value between 0 and 100.");
} else {
  // Assign grade based on marks
  let grade;
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60 && marks <= 79) {
    grade = 'B';
  } else if (marks >= 50 && marks <= 59) {
    grade = 'C';
  } else if (marks >= 40 && marks <= 49) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  // Output the grade
  console.log(`The student's grade is ${grade}.`);
}
