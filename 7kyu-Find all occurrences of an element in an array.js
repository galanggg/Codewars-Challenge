const findAll = (array, n) => {
  // your code here
  let simpan = []
  for(let i=0; i < array.length; i++) {
    if(array[i] === n) {
      simpan.push(i)
    }
  }
  return simpan
}

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3))