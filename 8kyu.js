
  const between= (a, b) =>{
    // your code here
    let arr = [];
    while (a <= b) {
        arr.push(a++)
    };
    return arr;
};
console.log(between(-2, 4));

function usdcny(usd) {
    let CNY = usd * 6.75
    return `${CNY.toFixed(2)} Chinese Yuan`}

console.log(usdcny(15))
  
const lovefunc = (flower1, flower2) => {
    // moment of truth
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true;
    }
    if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true;
    } else {
        return false;
    };
};
console.log(lovefunc(4, 4))
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
//("1", "22") --> "1221"
//("22", "1") --> "1221"
const solution = (a, b) => {
    // your code h ere
    if (a.length < b.length) {
        return a + b + a;
    } else if
        (b.length < a.length) {
        return b + a + b;
    };
};

console.log(solution('133', ''))
//Convert Decimal Degrees to Degrees, Minutes, Seconds.
// Remember: 1 degree = 60 minutes; 1 minute = 60 seconds.
// Input: Positive number.
// Output: Array [degrees, minutes, seconds]. E.g [30, 25, 25]
// Trailing zeroes should be omitted in the output. E.g
//Round the seconds to the nearest integer.

const convert = (degrees) => {
    // your solution goes here
    let arr = [];
    degrees = Math.round(degrees)
    let minutes = degrees * 60;
    let seconds = Math.round(minutes * 60)
    if(degrees === 0){
        arr.push(degrees);
        return arr
    } else{
        arr.push(degrees, minutes, seconds);
    }
    return arr
};

console.log(convert(40.567))

const isPalidrome = (word) => {
    const lowercase = word.toLowerCase()
    const reversearr = lowercase.split('').reverse().join('')
    return(reversearr === lowercase) ? true:false

}

console.log(isPalidrome('bboobb'))


function positiveSum(arr) {
    let sum = 0
    arr.forEach((n)=>{
      if(n >= 0){
        sum += n
      }
    })
    return sum
}
console.log(positiveSum([1, 2, 3]))

function numberToString(num) {
    num = num.toString()
    return num
}
console.log(numberToString(5))

function countPositivesSumNegatives(arr) {
    if (arr === null) {
        return []
    }
    const both = []
    let counter= 0
    let negativesSum = 0
    let countPositives = 0
    arr.forEach((n) => {
        if (n > 0) {
            countPositives += 1
            counter += n
        } else if(n < 0) {
            negativesSum += n
            counter += (n * -1 )
        } else {
            counter += n
        }
    })
    if (counter === 0) {
        return []
    } else {
        both.push(countPositives, negativesSum)
        return both
    }
}
console.log(countPositivesSumNegatives([0, 0]))

function unusualFive() {
    //always return five without using numbers
    const five = 'fiver'.length
    return five
}
console.log(unusualFive())

function abbrevName(name){
    //return initails
    const nameArr = name.split(' ')
    const first = nameArr[0][0].toUpperCase()
    const last = nameArr[1][0].toUpperCase()
    return `${first}.${last}`
}
console.log(abbrevName('katie pestotnik'))

function invert(array) {
    //change positive to negative and vise verase, 0 to -0
    if (!array) return []
    const inverted = []
    array.forEach((n) => {
        if (n > 0 || n < 0) {
            n *= -1
            inverted.push(n)
        } else {
            n = -0
            inverted.push(n)
        }
    })
    return inverted
}
console.log(invert([]))