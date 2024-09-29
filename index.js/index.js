// function to determine the grade of marks
function getGrade(marks) {
    if (marks > 79 && marks <=100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >=40 && marks <= 48) {
        return 'D';
    } else {
        return'Invalid input';
    }

    }


    //prompt fot input
    let score =("-20");
    let marks = parseInt(score,10); //convert string (number) to integer

    // get the grade and output it
    let grade =getGrade(marks);
    //example usage
    console.log("The grade for marks  $(marks) is: $(grade)");