
// 1. Reverse a string
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


// 3. Find the largest number
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


// 4. Check palindrome
const checkPalindrome = (str) => {
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
}

// console.log(checkPalindrome("mim"))


// 5. Sum of array elements
const sumOfElements = (arr) => {
    return arr.reduce((acc, cur) => {
        return acc + cur
    }, 0)
}

// console.log(sumOfElements([3, 4, 4, 4]))


// 6. Count vowels

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

// 7. Factorial calculation

const calculateFactorial = (n) => {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result = result * i
    }
    return result
}

// console.log(calculateFactorial(5))


// 8. Even or odd list

const evenNumbers = (nums) => {
    return nums.filter(num => {
        return num % 2 === 0
    })
}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6]))


// 9. Fibonacci Sequence

const fibonacciSequence = (n) => {
    const result = [0, 1]
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result.slice(0, n)
}

// console.log(fibonacciSequence(8))


// 10. Find minimum in an array

const minimumNumber = (arr) => {
    let minNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    return minNum
}

// console.log(minimumNumber([3, 4, 67, 1, 43, 543, 23, 453, 343, 53]))


// 11. Multiplication table
const multiplicationTable = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

// multiplicationTable(55)


// 12. Check the prime number
const checkPrime = (n) => {
    if (n <= 1) return false

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// console.log(checkPrime(6))


// 13. Remove duplicates 
const removeDuplicates = (nums) => {
    const result = []
    nums.forEach(num => {
        if (!result.includes(num)) {
            result.push(num)
        }
    })
    return result
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))


// 14. Convert C to F

const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32
}

// console.log(celsiusToFahrenheit(33))


// 15. Count occurrences 
const countOccurrences = (str, char) => {
    let count = 0
    str.split("").forEach(c => {
        if (c === char) {
            count++
        }
    })
    return count
}

// console.log(countOccurrences("hello world", "l"))