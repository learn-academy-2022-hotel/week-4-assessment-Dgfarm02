// // ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("mixedArray", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = [
      "purple", 
      "blue", 
      "green", 
      "yellow", 
      "pink"
    ]
  expect(mixedArray(colors1)).toEqual(["blue", "green", "yellow", "pink"])
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
  expect(mixedArray(colors2)).toEqual(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  })
})

// RED - Good Failure
// ReferenceError: voteTally is not defined

// b) Create the function that makes the test pass.

const colors1 = [
  "purple", 
  "blue", 
  "green", 
  "yellow", 
  "pink"
]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Create a functioned named mixedArray that takes in an array
const mixedArray = (array) => {
// remove the first index from the array
  array.shift()
// randomize the array
  array.sort((a, b) => 0.5 - Math.random());
// displays the new array
  return array
}

mixedArray(colors1)


// GREEN - SUCCESS
// PASS  ./code-challenges.test.js
// mixedArray
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//--I couldn't get my test to pass with it randomized so for the jest portion I commented out line 71 so I could get the PASS message.--


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("voteTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
  expect(voteTally(votes1)).toEqual(11)
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
  expect(voteTally(votes2)).toEqual(-31)
    // Expected output: -31
  })
})

// RED - Good Failure
// ReferenceError: mixedArray is not defined

// b) Create the function that makes the test pass.

const votes1 = { upVotes: 13, downVotes: 2 }
const votes2 = { upVotes: 2, downVotes: 33 }

// create a function named voteTally that takes in an object
const voteTally = (obj) => {
// create a new variable that takes the value from the upVotes key and subtracts it from the value of the downVotes key
  let sum = obj.upVotes - obj.downVotes
// displays the new variable
  return sum
}

voteTally(votes1)
voteTally(votes2)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("combinedArray", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
  expect(combinedArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
  })
})

// RED - GOOD FAILURE
// ReferenceError: combinedArray is not defined


// b) Create the function that makes the test pass.


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]


// create a function named combinedArray that takes in two arrays
const combinedArray = (array1, array2) => {
// create a new array that takes all of the unique values of array 1 and adds them to all of the unique values of array 2
  let newArray = [...new Set(array1.concat(array2))]
// displays the new array
  return newArray
}
console.log(combinedArray(dataArray1, dataArray2));

// GREEN - SUCCESS!
//  PASS  ./code-challenges.test.js
//   combinedArray
//   ✓ takes in a two arrays as arguments and returns one array with no duplicate values. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total