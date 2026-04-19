
// 1. Reverse a String
const reverseString = (str) => {
    return str.split("").reverse().join("")
}

// console.log(reverseString("Hello"))

// 2. FizzBuzz
const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if ((i % 5) === 0 && (i % 3) === 0) {
            console.log("FizzBuzz")
        }
        else if ((i % 3) === 0) {
            console.log("Fizz")
        }
        else if ((i % 5) === 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

// fizzBuzz(45)


// 3. Find the Largest Number in an Array
const largestNumber = (arr) => {
    let largeNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largeNum) {
            largeNum = arr[i]
        }
    }

    return largeNum
}

// console.log(largestNumber([3, 4, 67, 1, 43, 543, 23, 453, 343, 53]))


// 4. Check for Palindrome
const checkPalindrome = (str) => {
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
}

// console.log(checkPalindrome("mim"))


// 5. Sum of Array Elements
const sumOfElements = (arr) => {
    return arr.reduce((acc, cur) => {
        return acc + cur
    }, 0)
}

// console.log(sumOfElements([3, 4, 4, 4]))


// 6. Count Vowels

const countVowels = (str) => {
    let count = 0;
    str.split("").forEach(char => {
        if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
            count++
        }
    });
    return count;
}

// console.log(countVowels("next level web development"))

// 7. Factorial Calculation

const calculateFactorial = (n) => {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result = result * i
    }
    return result
}

// console.log(calculateFactorial(5))


// 8. Even or Odd List

const evenNumbers = (nums) => {
    return nums.filter(num => {
        return num % 2 === 0
    })
}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6]))

