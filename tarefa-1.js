const users = [
  { id: 1, name: 'Alice', age: 25, isActive: true },
  { id: 2, name: 'Bob', age: 30,   isActive: false },
  { id: 3, name: 'Charlie', age: 22, isActive: true }
];


function transformData(usersEntrada) { 

  // Filtra Users ativos.
  const activeUsers = usersEntrada.filter(user => user.isActive)
  
  // Modifica Array de Users retornando apenas Id e Name
  const modifyActiveUsers = activeUsers.map(user => {
      return {
        id: user.id,
        name: user.name
      }
     
    })
    // Ordenar por Name
    .sort((array1, array2) => { 
      if (array1.name > array2.name) {
        return 1;
      }
      if (array1.name < array2.name) {
        return -1;
      }
      return 0;
    })

    // Retorno da função com Array de Users Modificado e Ordenado
    return modifyActiveUsers
}

console.log(transformData(users))