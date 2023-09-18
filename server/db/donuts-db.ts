import { Base, Donut, Glaze } from '../../models/donuts'
import db from './connection'

//Get all flavours
export function getAllGlazes(): Promise<Glaze[]> {
  const glazes = db('glazes').select()
  return glazes
}

//Get all base types
export function getAllBases(): Promise<Base[]> {
  const bases = db('bases').select()
  return bases
}

export const getBase = (id): Promise<Base> => {
  return db('bases').select().where({ id }).first()
}

export const getGlaze = (id): Promise<Glaze> => {
  return db('glazes').select().where({ id }).first()
}

export const getDonut = (id): Promise<Donut> => {
  return db('donuts').select().where({ id }).first()
}

export const getDonuts = (auth0Id): Promise<Donut[]> => {
  return db('donuts').select().where({ auth0_id: auth0Id })
}

export const insertDonut = (donut): Promise<Donut[]> => {
  return db('donuts').insert(donut).returning('*')
}

export const deleteDonut = (id): Promise<number> => {
  return db('donuts').delete().where({ id })
}
