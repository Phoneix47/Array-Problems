//1.Sum of Array Elements: Calculate the sum of all elements in an array
function problem1() {
  let array1 = [1, 3, 3, 10];
  let sum = 0;

  for (let i = 0; array1.length > i; i++) {
    sum = sum + array1[i];
  }
  return sum;
}

console.log(problem1(), "ans 1");

//2. Largest Number in Array: Find the largest number in an array.

function problem2() {
  let array2 = [3, 4, 42, 2, 4, 5, 5, 5];

  let change_array_2_increasing_order = array2.sort((a, b) => b - a);

  console.log(change_array_2_increasing_order[0], "ans 2");
}
problem2();

//3. Array Reversal: Reverse the elements of an array.

function problem3() {
  let array3 = [3, 4, 42, 2, 4, 5, 5, 5];

  return array3.reverse();
}

console.log(problem3(), "ans 3");

//4. Array Filtering (even numbers): Create a new array with only the even numbers from the original array

function problem4() {
  let array4 = [3, 4, 42, 2, 4, 5, 5, 5];

  let even_array = array4.filter(even_function);

  function even_function(i) {
    if (i % 2 == 0) {
      return i;
    }
  }

  console.log(even_array, "ans 4");
}
problem4();

//5. Array Sorting (alphabetical order): Sort an array of strings in alphabetical order.

function problem5() {
  let array5 = ["ajay", "rahul", "neha", "dk bose"];

  let ans5 = array5.sort();

  console.log(ans5, "ans 5");
}

problem5();

//6. Array Manipulation (concatenation with suffix): Create a new array by concatenating a specific suffix to each element of the original array.

function problem6() {
  let array6 = ["ajay", "rahul", "neha", "dk bose"];

  let ans6 = array6.map((i) => {
    return "Mr." + i;
  });

  console.log(ans6);
}

problem6();

//7. Duplicate Elements: Find and remove duplicate elements from an array.

function problem7() {
  let array7 = [2, 4, 6, 4, 4, 4, 5, 66, 7, 5, 4, 4, 5, 5];

  let newArray = [];

  array7.map((i) => {
    if (!newArray.includes(i)) {
      newArray.push(i);
    }
  });
  return newArray;
}
console.log(problem7());

//8. Array Intersection: Find the common elements between two arrays.

function problem8() {
  let array8 = [2, 21, 1, 323, 23, 2, 3];
  let array9 = [42, 4, 4, 4, 3, 23, 2, 5, 55, 5, 24, 12, 323];
  let ans = [];
  let ans_ = [];
  for (let a = 0; array8.length > a; a++) {
    for (let i = 0; array9.length > i; i++) {
      if (array9[i] === array8[a]) {
        ans.push(array9[i]);
      }
    }

    ans?.map((x) => {
      if (!ans_.includes(x)) {
        ans_.push(x);
      }
    });
  }
  return ans_;
}
console.log(problem8());

//9. Array Chunking: Divide an array into smaller arrays of a specified size.

function problem9(size) {
  let array9 = [2, 4, 6, 4, 2, 55, 5534, 232];

  for (let i = 0; array9.length > i; i += size) {

    console.log(i,size)
    const chunk = array9.slice(i, size + i);
    console.log(chunk, "--");
  }
}

problem9(2);

//10. Array Flattening: Flatten a nested array into a single-level array.


let nested = ['ajay', 'rahul' , 'sakshi', ['sneha','tanu', 'riya' , ['rupali', 'riya', 'khushi']]]

console.log(nested , "--")


let ans10 = nested.flat(2)

console.log(ans10)

//11. Array Intersection (Advanced, removing duplicates): Find the common elements between multiple arrays, removing any duplicates.

let array1 = [1,4,2,32,8,6,2,3232,324,5,42]
let array2 = [8,7,3,2,4,5,7,8,7,5,42,42,5,6,6,78,8,6,52,4,2,4]

let ans11 = [];

for(i = 0; array1.length > i; i++) {
  if(array2.includes(array1[i])) {
    
    ans11.push(array1[i])


  }
}
console.log(ans11)

//12. Array Rotation: Rotate the elements of an array to the right by a given number of positions.


let array3 = [2,4,6,4,2,32,6,7,7,5];

let position = 3;

let rotation = 'left';

let first_index = array3[3];


let ans_12 = [];

let first_array = [];
let second_array = [];

for(let i = 0; array3.length > i ; i++) {

 if( i > position) {

  first_array.push(array3[i])
  
 } else {
  second_array.push(array3[i])
 }

 if(rotation === 'left') {
  let a = ans_12.concat(first_array,second_array)

  
console.log(a, 'left')
 } else {

  let a = ans_12.concat(second_array,first_array)


  console.log('--12')

  console.log(a,'444')
  
 }
}


//13. Array Sum of Pairs: Find the first pair of numbers in an array that adds up to a target sum.

