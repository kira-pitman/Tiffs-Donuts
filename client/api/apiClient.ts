import request from "superagent";
import { Base, Glaze } from "../../models/donuts";
const rootUrl = "/api/v1/donuts";

// GET /api/v1/donuts/flavors
export async function fetchGlazes(): Promise<Glaze[]> {
  const dbFlavors = await request.get(`${rootUrl}/glazes`);

  return dbFlavors.body;
}

// GET /api/v1/donuts/bases
export async function fetchBases(): Promise<Base[]> {
  const dbBases = await request.get(`${rootUrl}/bases`);

  return dbBases.body;
}

export async function fetchBase(id: number): Promise<Base> {
  const dbBases = await request.get(`${rootUrl}/bases/${id}`);

  return dbBases.body;
}

export async function fetchGlaze(id: number): Promise<Glaze> {
  const dbBases = await request.get(`${rootUrl}/glazes/${id}`);

  return dbBases.body;
}
