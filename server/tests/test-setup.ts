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

const verify = jest.spyOn(jwt, 'verify').mockImplementation(() => (req, res, next) => {
    console.log('OMG')
    if (req.headers.authorization) req.auth.sub = 'hello123'
    else return new Error('Unauthorized: No Token')
    next()
})
// verify.mockImplementation(() => () => ({ verified: 'true' }));
// vi.spyOn(auth, "jwt").mockImplementation((req, res, next) => {
//     console.log('OMG')
//     if (req.headers.authorization) req.auth.sub = 'hello123'
//     else return new Error('Unauthorized: No Token')
//     next()
// })

// checkJwt = vi.fn().mockImplementation((req, res, next) => {
//     console.log('OMG')
//     if (req.headers.authorization) req.auth.sub = 'hello123'
//     else return new Error('Unauthorized: No Token')
//     next()
// })

// vi.spyOn({checkJwt}, 'checkJwt').fn().mockImplementation((req, res, next) => {
//     console.log('OMG')
//     if (req.headers.authorization) req.auth.sub = 'hello123'
//   else return new Error('Unauthorized: No Token')
//   next()
// })
