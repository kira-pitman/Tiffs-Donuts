export async function seed(knex) {
  await knex('glazes').del()
  await knex('bases').del()
}
