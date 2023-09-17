import {Base, Glaze} from '../../models/donuts'
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

export const getBase = (id) => {
  return db('bases').select().where({id}).first()
}

export const getGlaze = (id) => {
    return db('glazes').select().where({id}).first()
}