function is0dd(value) {
  if (value % 2 === 0)
    return true;
  else
    return false;
}
console.log(is0dd(1))

function isEven(value) {
  if (is0dd(value))
    return true;
  else
    return false;
}
console.log(isEven(2))