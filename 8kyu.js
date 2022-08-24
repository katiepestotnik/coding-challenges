
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

function century(year) {
    // return the century as number
    if (year >= 1 && year <= 100) {
        return 1
    }
    if (year > 100) {
        return Math.ceil(year/100)
    }
}
console.log(century(89))

function bmi(weight, height) {
    //calculate BMI (bmi = weight / height2)
    //bmi <= 18.5 return "Underweight"
    //bmi <= 25.0 return "Normal"
    //bmi <= 30.0 return "Overweight"
    //bmi > 30 return "Obese"
    const bmi = weight / height ** 2
    if (bmi <= 18.5) {
        return 'Underweight'
    } else if (bmi <= 25.0) {
        return 'Normal'
    } else if (bmi <= 30) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}
console.log(bmi(80, 1.8))

function check(a, x) {
    return a.includes(x)
}
  
console.log(check(['t', 'e', 's', 't'], 'e'))

//Create a function with two arguments that will return an array of the first (n) multiples of (x).
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++){
        z.push(i * x)
    }
    return z;
}
console.log(countBy(2, 5))
//[2,4,6,8,10]
// 1*2, 2*2, 3*2, 4*2, 5*2


//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach((sheep) => {
        if (sheep === true) {
            count += 1
        } else {
            count += 0
        }
    })
    return count
}
  
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))