//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

const smallEnough = (arr, limit)=> {
  return arr.every((num)=>num <= limit)
}

console.log(smallEnough([66, 101], 200))