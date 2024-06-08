const form = document.getElementById('grade-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const gradeEntry = document.getElementById('gradeEntry').value;
  let grade, gpa;

  // Your existing grade calculation logic can be placed here
  if (gradeEntry >= 90) {
    grade = "A+";
    gpa = 4.0;
  } else if (gradeEntry >= 85 && gradeEntry <= 89) {
    grade = "A";
    gpa = 4.0;
  } 
  // ... (rest of the logic copied from your original code)

  // Display the result
  resultDiv.textContent = `Your marks is ${gradeEntry}, your grade is ${grade} and your GPA is ${gpa}`;
});
