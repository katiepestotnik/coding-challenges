function switcheroo(x){
    //Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
    const arr = x.split('')
    const mapper = arr.map((l) => {
        if (l === 'a') {
            return l = 'b'
        }
        if (l === 'b') {
            return l = 'a'
        }
        if (l === 'c') {
            return l = 'c'
        }
    })
    return mapper.join('')
}
console.log(switcheroo('abcbac'))

function arithmetic(a, b, operator){
    return operator === 'add' ? a + b
        : operator === 'multiply' ? a * b
        : operator === 'divide' ? a / b
        : a - b        
}
console.log(arithmetic(3, 5, 'subtract'))