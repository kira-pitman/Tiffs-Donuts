import request from 'superagent'
import { Base, BaseName, Flavor, FlavorName } from '../../models/donuts'
const rootUrl = '/api/v1/donuts'

// GET /api/v1/donuts/flavors
export async function fetchFlavorNames(): Promise<FlavorName[]> {
  const dbFlavors = await request.get(`${rootUrl}/flavors`)

  return dbFlavors.body
}

// GET /api/v1/donuts/bases
export async function fetchBaseNames(): Promise<BaseName[]> {
  const dbBases = await request.get(`${rootUrl}/bases`)

  return dbBases.body
}
// GET api/v1/donuts/flavors/:name
export async function fetchFlavorByName(name: string): Promise<Flavor> {
  const dbFlavorName = await request.get(`${rootUrl}/flavors/${name}`)
  return dbFlavorName.body
}
// GET api/v1/donuts/bases/:name
export async function fetchBaseByName(name: string): Promise<Base> {
  const dbBaseName = await request.get(`${rootUrl}/bases/${name}`)
  return dbBaseName.body
}
