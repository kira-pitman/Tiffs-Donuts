export async function seed(knex) {
  return await knex("base").insert([
    {
      id: 1,
      color: "0x7b3f00",
      name: "Chocolate",
    },
    {
      id: 2,
      color: "0xf57f8e",
      name: "Strawberry",
    },
  ]);
}
