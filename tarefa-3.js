const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

function countOccurrences(fruitsEntrada) {
  // Cria quantitativo de  acordo com cada elemento
  const resultCount = fruitsEntrada.reduce((acc, fruit) => {
    if (acc[fruit]) {
      acc[fruit]++
    } else {
      acc[fruit] = 1
    }

    return acc
  } , {})

  // Retorno dos elementos com o quantitativo
  return resultCount
}

console.log(countOccurrences(fruits))