//The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

//The most frequently used key is "GA-DE-RY-PO-LU-KI".
// G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.


function encode(str) 
{
  let newArr = []
  const arr = [...str]
  arr.forEach((ele) => {
    switch (ele) {
      case 'A':
        newArr.push('G')
        break
      case 'a':
        newArr.push('g')
        break
      case 'G':
        newArr.push('A')
        break
      case 'g':
        newArr.push('a')
        break
      case 'D':
        newArr.push('E')
        break
      case 'd':
        newArr.push('e')
        break
      case 'E':
        newArr.push('D')
        break
      case 'e':
        newArr.push('d')
        break
      case 'R':
        newArr.push('Y')
        break
      case 'r':
        newArr.push('y')
        break
      case 'Y':
        newArr.push('R')
        break
      case 'y':
        newArr.push('r')
        break
      case 'P':
        newArr.push('O')
        break
      case 'p':
        newArr.push('o')
        break
      case 'O':
        newArr.push('P')
        break
      case 'o':
        newArr.push('p')
        break
      case 'L':
        newArr.push('U')
        break
      case 'l':
        newArr.push('u')
        break
      case 'U':
        newArr.push('L')
        break
      case 'u':
        newArr.push('l')
        break
      case 'K':
        newArr.push('I')
        break
      case 'k':
        newArr.push('i') 
        break
      case 'I':
        newArr.push('K')
        break
      case 'i':
        newArr.push('k') 
        break
      default:
        newArr.push(ele)
    } 
  })
  const newStr = newArr.join('')
  return newStr
}
function decode(str) 
{
  let newArr = []
  const arr = [...str]
  arr.forEach((ele) => {
    if (ele === 'A') newArr.push('G')
    else if (ele === 'a') newArr.push('g')
    else if (ele === 'G') newArr.push('A')
    else if (ele === 'g') newArr.push('a')  
    else if (ele === 'D') newArr.push('E')
    else if (ele === 'd') newArr.push('e')
    else if (ele === 'E') newArr.push('D') 
    else if (ele === 'e') newArr.push('d')
    else if (ele === 'R') newArr.push('Y')
    else if (ele === 'r') newArr.push('y')  
    else if (ele === 'Y') newArr.push('R')
    else if (ele === 'y') newArr.push('r')
    else if (ele === 'P') newArr.push('O')  
    else if (ele === 'p') newArr.push('o')
    else if (ele === 'O') newArr.push('P')
    else if (ele === 'o') newArr.push('p')  
    else if (ele === 'L') newArr.push('U')
    else if (ele === 'l') newArr.push('u')
    else if (ele === 'U') newArr.push('L')  
    else if (ele === 'u') newArr.push('l')
    else if (ele === 'K') newArr.push('I')
    else if (ele === 'k') newArr.push('i')  
    else if (ele === 'I') newArr.push('K')
    else if (ele ==='i') newArr.push('k')     
    else newArr.push(ele)
  })
  const newStr = newArr.join('')
  return newStr
  }