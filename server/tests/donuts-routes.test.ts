import { describe, expect, it, vi } from "vitest";
import request from "supertest";
import app from "../server";
import * as db from "../db/donuts-db";
import "./test-setup";
import { bases, glazes } from "../db/seedData.js";

vi.mock("express-jwt", () => ({
  expressjwt: (_options: Params) => (req, res, next) => {
    if (req.headers.authorization) req.auth = { sub: "hello123" };
    else next(new Error("Unauthorized: No Token"));
    next();
  },
}));

describe("GET /glazes", () => {
  it("Should return an array containing all glazes", async () => {
    const res = await request(app)
      .get("/api/v1/donuts/glazes")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toStrictEqual(glazes);
  });

  it("Should return a 500 when the db is down", async () => {
    vi.spyOn(db, "getAllGlazes").mockRejectedValueOnce("ERROR");
    await request(app).get("/api/v1/donuts/glazes").expect(500);
  });
});

describe("GET /bases", () => {
  it("Should return an array containing all bases", async () => {
    const res = await request(app)
      .get("/api/v1/donuts/bases")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toStrictEqual(bases);
  });

  it("Should return a 500 when the db is down", async () => {
    vi.spyOn(db, "getAllBases").mockRejectedValueOnce("ERROR");
    await request(app).get("/api/v1/donuts/bases").expect(500);
  });
});

// some initial protected route tests :-) you can work off these #Nathalia
describe("GET /me", () => {
  it("Should return a 401 if no token is present", async () => {
    await request(app).get("/api/v1/donuts/me").expect(401);
  });

  it("Should return user values if token is present", async () => {
    const res = await request(app)
      .get("/api/v1/donuts/me")
      .set("Authorization", `Bearer 123`)
      .expect(200)
      .expect("Content-Type", /json/);
    expect(res.body).toStrictEqual([
      {
        id: 1,
        auth0_id: "hello123",
        glazeId: 1,
        baseId: 3,
        glazeName: "Chocolate",
        price: 8,
        glazeColor: "#7a4e3c",
        baseName: "Milky",
        baseColor: "#fffdf8",
      },
      {
        id: 2,
        auth0_id: "hello123",
        glazeId: 1,
        baseId: 1,
        glazeName: "Chocolate",
        price: 8,
        glazeColor: "#7a4e3c",
        baseName: "Original",
        baseColor: "#e5e0cb",
      },
      {
        id: 5,
        auth0_id: "hello123",
        glazeId: 3,
        baseId: 1,
        glazeName: "Green Tea",
        price: 7,
        glazeColor: "#74a12e",
        baseName: "Original",
        baseColor: "#e5e0cb",
      },
    ]);
  });
});
