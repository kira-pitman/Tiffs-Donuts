import { afterAll, beforeAll, beforeEach, vi } from "vitest";
import db from "../db/connection";
import {expressjwt as jwt} from "express-jwt";

beforeAll(() => {
  return db.migrate.latest();
})

// reseeds before each
beforeEach(() => {
  return db.seed.run();
});

afterAll(() => {
  db.destroy();
});

