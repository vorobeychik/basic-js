module.exports = function countCats( matrix ) {

  let sum = 0;
  for(let i of matrix){
    for(let b of i) {
      if (b === "^^") {
        sum += 1
      }
    }
    }

  return sum
}
