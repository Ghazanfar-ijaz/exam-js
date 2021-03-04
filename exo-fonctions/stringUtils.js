const reverseStr = (str) => {
  let mot = str.split('').reverse().join('')
  return str
}
reverseStr('Hello!')

console.log(reverseStr('Hello!'))

const isPalindrome = (str) => {
  if (str === reverseStr(str)) {
    return true;
  } else {
    return false
  }
}

console.log(isPalindrome('salut'))
