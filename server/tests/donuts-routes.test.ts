import { describe, expect, it, vi } from "vitest";
import request from "supertest";
import app from "../server";
import * as db from "../db/donuts-db";
import "./test-setup";
import { glazes, bases } from "../db/seedData.js";

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
