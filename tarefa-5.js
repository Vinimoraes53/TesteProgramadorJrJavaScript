const array1 = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 }
];

const array2 = [
  { id: 1, age: 26, email: 'alice@example.com' },
  { id: 3, name: 'Charlie', age: 22 }
];


function mergeArrays(array1Entrada, array2Entrada) {

  // Valor do array1Entrada para a variavel mergedArray
  const mergedArray = [...array1Entrada]

  // Faz o merge entre os 2 arrays
  array2Entrada.forEach(obj2 => {
    const index = mergedArray.findIndex(obj1 => obj1.id === obj2.id)
    
    if (index > -1) {
      mergedArray[index] = { ...mergedArray[index], ...obj2 }
    } else {
      mergedArray.push(obj2)
    }
  });

  // retorno dos marge dos arrays
  return mergedArray
}

console.log(mergeArrays(array1, array2))