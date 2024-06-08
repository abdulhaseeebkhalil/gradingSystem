function calculateGrade() {
    var gradeEntry = +document.getElementById("marksInput").value;
    var resultText = "";

    if (gradeEntry >= 90) {
        resultText = "Your marks are " + gradeEntry + ", your grade is A+ and your GPA is 4.0";
    } else if (gradeEntry >= 85 && gradeEntry <= 89) {
        resultText = "Your marks are " + gradeEntry + ", your grade is A and your GPA is 4.0";
    } else if (gradeEntry >= 80 && gradeEntry <= 84) {
        resultText = "Your marks are " + gradeEntry + ", your grade is A- and your GPA is 3.8";
    } else if (gradeEntry >= 75 && gradeEntry <= 79) {
        resultText = "Your marks are " + gradeEntry + ", your grade is B+ and your GPA is 3.4";
    } else if (gradeEntry >= 71 && gradeEntry <= 74) {
        resultText = "Your marks are " + gradeEntry + ", your grade is B and your GPA is 3.0";
    } else if (gradeEntry >= 68 && gradeEntry <= 70) {
        resultText = "Your marks are " + gradeEntry + ", your grade is B- and your GPA is 2.8";
    } else if (gradeEntry >= 64 && gradeEntry <= 67) {
        resultText = "Your marks are " + gradeEntry + ", your grade is C+ and your GPA is 2.4";
    } else if (gradeEntry >= 61 && gradeEntry <= 63) {
        resultText = "Your marks are " + gradeEntry + ", your grade is C and your GPA is 2.0";
    } else if (gradeEntry >= 57 && gradeEntry <= 60) {
        resultText = "Your marks are " + gradeEntry + ", your grade is C- and your GPA is 1.8";
    } else if (gradeEntry >= 53 && gradeEntry <= 56) {
        resultText = "Your marks are " + gradeEntry + ", your grade is D+ and your GPA is 1.4";
    } else if (gradeEntry >= 50 && gradeEntry <= 52) {
        resultText = "Your marks are " + gradeEntry + ", your grade is D and your GPA is 1.0";
    } else {
        resultText = "Your marks are " + gradeEntry + ", you fail!";
    }

    document.getElementById("result").innerText = resultText;
}
