let tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = 0; i < tab.length; ++i) {
  console.log(tab[i])
  for (const elem of ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']) {
    console.log(`length: ${elem.length}`)
  }

}

for (const elem of ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']) {
  console.log(elem)
}

;['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'].forEach((elem) => {
  console.log(elem)
})