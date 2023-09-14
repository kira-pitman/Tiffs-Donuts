export async function seed(knex) {
  return await knex('glazes').insert([
    {
      id: 1,
      color: '#7b3f00',
      name: 'Chocolate',
      price: 8,
    },
    {
      id: 2,
      color: '#f57f8e',
      name: 'Strawberry',
      price: 9,
    },
    {
      id: 3,
      color: '#74a12e',
      name: 'Green Tea',
      price: 7,
    },
    {
      id: 4,
      color: '#f3f5ba',
      name: 'Lemon',
      price: 8,
    },
  ])
}
