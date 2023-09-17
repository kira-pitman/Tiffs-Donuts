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
    {
      id: 3,
      color: '#fffdf8',
      name: 'Milky'
    },
    {
      id: 4,
      color: '#eec9a0',
      name: 'Cinnamon'
    },
    {
      id: 5,
      color: '#f9f385',
      name: 'Lemon'
    },
    {
      id: 6,
      color: '#fc802d',
      name: 'Pumpkin'
    },
    {
      id: 7,
      color: '#c93d2a',
      name: 'Maple',
    },
    {
      id: 8,
      color: '#e38b96',
      name: 'Strawberry',
    },
    {
      id: 9,
      color: '#89d396',
      name: 'Matcha',
    },
    {
      id: 10,
      color: '#ad1a41',
      name: 'Red Velvet',
    },
    {
      id: 11,
      color: '#d5cec8',
      name: 'Oreo',
    },
    {
      id: 12,
      color: '#f0b46d',
      name: 'Salted Caramel',
    },
    {
      id: 13,
      color: '#a2583d',
      name: 'Pretzel'
    }
  ])
}
