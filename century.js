//DESCRIPTION:
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"
const findSuffix = (lastNum) => {
  let suffix = ''
  if (lastNum === 0) suffix = 'th'
  if (lastNum === 1) suffix = 'st'
  if (lastNum === 2) suffix = 'nd'
  if (lastNum === 3) suffix = 'rd'
  if (lastNum > 3) suffix = 'th'
  return suffix
}
const whatCentury = (year) =>
{
  const stringNum = String(year).substring(0, 2)
  let newNum = Number(stringNum)
  newNum += 1
  const stringLast = String(newNum).substring(1, 2)
  console.log(stringLast)
  const lastNum = Number(stringLast)
  console.log(lastNum)
  return year === '2000'?'20th':year >'2000' && year < '2100'?'21st': year < 2000?`${newNum}th`:`${newNum}${findSuffix(lastNum)}`
}

console.log(whatCentury(1254))
  // return year === '2000'?'20th':year > 2000 && year < 2100 ?'21st': year > 2100 && year < 2199 ?'22nd': year > 2199 && year < 2300?'23rd':`${newNum}th`