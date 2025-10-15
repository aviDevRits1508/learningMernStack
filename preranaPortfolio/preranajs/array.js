// Count Even and Odd Numbers
function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log(`Even: ${even}, Odd: ${odd}`);
}


countEvenOdd([1, 2, 3, 4, 5, 6]); 

// Count Positive, Negative, and Zero Elements
function countNumbers(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let num of arr) {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log(`Positive: ${positive}, Negative: ${negative}, Zero: ${zero}`);
}
countNumbers([1, -2, 0, 4, -5, 0]);

//  Find Grade Based on Average Marks
function findGrade(marks) {
  let total = 0;

  for (let mark of marks) {
    total += mark;
  }

  let average = total / marks.length;
  let grade = '';

  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80) {
    grade = 'B';
  } else if (average >= 70) {
    grade = 'C';
  } else if (average >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(`Average: ${average} → Grade: ${grade}`);
}

findGrade([85, 78, 92, 88]);



// Compare Elements of Two Arrays
function compareArrays(A, B) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      console.log(`Index ${i}: Same`);
    } else {
      console.log(`Index ${i}: Different`);
    }
  }
}
const A = [1, 2, 3];
const B = [1, 4, 3];
compareArrays(A, B);


// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)
// Find Duplicate Number
// Remove Duplicates from Sorted Array
// Second Largest Element
