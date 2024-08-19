const items = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' },
  { name: 'broccoli', category: 'vegetable' }
];


function groupByCategory(itemsEntrada) {  
  // Cria o grupo por categoria
  const resultGroupFruits = itemsEntrada.reduce((acc, item) => {
    if (acc[item.category]) {
      acc[item.category].push(item)
    } else {
      acc[item.category] = [item]
    }
  
    return acc
  }, {})

  // Retorna o resultado do Grupo com Categoria
  return resultGroupFruits;
}

console.log(groupByCategory(items))