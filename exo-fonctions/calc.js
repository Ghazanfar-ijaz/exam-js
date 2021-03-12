// Addition

const add = (calc1, calc2) => {
  return calc1 + calc2
}
console.log(add(50, 43))

// Soustraction

const sub = (sub1, sub2) => {
  return sub1 - sub2
}
console.log(sub(100, 7))

// Multiplication

const mul = (mul1, mul2) => {
  return mul1 * mul2
}
console.log(mul(31, 3))

// Division

const div = (div1, div2) => {
  return div1 / div2
}
console.log(div(837, 9))

const calc = (op, num1, num2) => {
  if (op === add || op === sub || op === mul || op === div) {
    return op(num1, num2)
  }
}
console.log(calc(sub, 150, 57))

/*
Méthode switch:

const calc = (operator, nb1, nb2) => {
  switch (operator) {
    case '+':
      return add(nb1, nb2)
    case '-':
      return sub(nb1, nb2)
    case 'x':
      return mul(nb1, nb2)
    case '/':
      return div(nb1, nb2)
    default:
      return 'opérateur non connu'
  }
}

console.log(calc('-', 10, 2,))
console.log(calc('+', 10, 2,))
console.log(calc('x', 10, 2,))
console.log(calc('%', 10, 2,))

*/