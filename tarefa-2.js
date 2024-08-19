
async function fetchUserData() {    
    // Chamada a API GET e retorna para o response    
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    // Obter dados do response
    const data = await response.json()

    // Obter dados filtrados de acordo com a string passada no startsWith
    const filterData = data.filter((user) => user.username.toLowerCase().startsWith('C'))

    // Retorno dos dados filtrados
    return filterData
}

console.log(await fetchUserData())
