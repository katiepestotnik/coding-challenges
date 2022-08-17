function arrAdder(arr) {

}

arrAdder([
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
])
    
const array = [
['J', 'L', 'L', 'M'],
['u','i','i','a'],
['s','v','f','n'],
['t', 'e', 'e', '']
]
const empty = []
const zero = []
const one = []
const two = []
const three = []
let len = array.length
array.forEach((ele, index) => {
    console.log('top array', ele.length, index)

    ele.forEach((letter, idx) => {
        console.log('nested', letter, idx)


    })


})

console.log(array)



