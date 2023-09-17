export async function seed(knex) {
  return await knex('glazes').insert([
    {
      id: 1,
      color: '#7a431e',
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
    {
      id: 5,
      color: '#fffbec',
      name: 'Vanilla',
      price: 5,
    },
    {
      id: 6,
      color: '#e5632d',
      name: 'Maple',
      price: 10,
    },
    {
      id: 7,
      color: '#e79c44',
      name: 'Caramel',
      price: 6.5,
    },
    {
      id: 8,
      color: '#e21864',
      name: 'Raspberry',
      price: 3,
    },
    {
      id: 9,
      color: '#567cec',
      name: 'Blueberry',
      price: 4,
    },
    {
      id: 10,
      color: '#a7d688',
      name: 'Pistachio',
      price: 15,
    },
    {
      id: 11,
      color: '#e7a97d',
      name: 'Chai',
      price: 11.5,
    },
    {
      id: 12,
      color: '#ffcf4c',
      name: 'Honey',
      price: 6,
    },
    {
      id: 13,
      color: '#ffcf4c',
      name: 'Honey',
      price: 6,
    },
    {
      id: 12,
      color: '#ffcf4c',
      name: 'Honey',
      price: 6,
    },
    {
      id: 12,
      color: '#ffcf4c',
      name: 'Honey',
      price: 6,
    }
  ])
}
