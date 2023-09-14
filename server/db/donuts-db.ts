import { Base, BaseName, FlavorName, Flavor } from '../../models/donuts'
import db from './connection'

//Get all flavours
export function getAllFlavorNames(): Promise<FlavorName[]> {
  const flavors = db('flavors').select()
  return flavors
}

//Get all base types
export function getAllBaseNames(): Promise<BaseName[]> {
  const bases = db('base').select()
  return bases
}

//Get flavour by name
export function getFlavorByName(name: string): Promise<Flavor> {
  const flavors = db('flavors').select('*').where('name', name).first()
  return flavors
}

//Get base by name
export function getBaseByName(name: string): Promise<Base> {
  const flavors = db('base').select('*').where('name', name).first()
  return flavors
}
