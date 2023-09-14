export async function seed(knex) {
  await knex("flavors").del();
  await knex("base").del();
}
