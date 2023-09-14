export async function seed(knex) {
  return await knex('bases').insert([
    {
      id: 1,
      color: '#e5e0cb',
      name: 'Original',
    },
    {
      id: 2,
      color: '#9e8a5d',
      name: 'Chocolate',
    },
  ])
}
