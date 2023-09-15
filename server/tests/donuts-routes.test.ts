import {describe, expect, it, vi} from "vitest";
import request from 'supertest'
import app from '../server'
import * as db from '../db/donuts-db'
import './test-setup'

describe('GET /glazes', () => {
    it('Should return an array containing all glazes', async () => {
        const res = await request(app).get('/api/v1/donuts/glazes')
            .expect(200).expect('Content-Type', /json/)

        expect(res.body).toStrictEqual([
                {id: 1, color: '#7b3f00', name: 'Chocolate', price: 8},
                {id: 2, color: '#f57f8e', name: 'Strawberry', price: 9},
                {id: 3, color: '#74a12e', name: 'Green Tea', price: 7},
                {id: 4, color: '#f3f5ba', name: 'Lemon', price: 8}
            ]
        )
    })

    it('Should return a 500 when the db is down', async () => {
        vi.spyOn(db, 'getAllGlazes').mockRejectedValueOnce('ERROR')
        await request(app).get('/api/v1/donuts/glazes').expect(500)
    })
})

describe('GET /bases', () => {
    it('Should return an array containing all bases', async () => {
        const res = await request(app).get('/api/v1/donuts/bases')
            .expect(200).expect('Content-Type', /json/)

        expect(res.body).toStrictEqual([
                { id: 1, color: '#e5e0cb', name: 'Original' },
                { id: 2, color: '#9e8a5d', name: 'Chocolate' }
            ]
        )
    })

    it('Should return a 500 when the db is down', async () => {
        vi.spyOn(db, 'getAllBases').mockRejectedValueOnce('ERROR')
        await request(app).get('/api/v1/donuts/bases').expect(500)
    })
})