export async function seed(knex) {
    return await knex('flavors').insert([
        {
            id: 1,
            color: '0x7b3f00',
            name: 'Chocolate',
            price: 8,
        },
        {
            id: 2,
            color: '0xf57f8e',
            name: 'Strawberry',
            price: 9,
        },
        {
            id: 3,
            color: '0x74a12e',
            name: 'Green Tea',
            price: 7,
        },
        {
            id: 4,
            color: '0xf3f5ba',
            name: 'Lemon',
            price: 8,
        },
    ])
  }