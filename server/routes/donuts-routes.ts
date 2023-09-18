import express from 'express'
import * as db from '../db/donuts-db'

const router = express.Router()

// Get /api/v1/donuts/flavors
router.get('/glazes', async (req, res) => {
    try {
        const flavorNames = await db.getAllGlazes()
        res.json(flavorNames)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

// Get /api/v1/donuts/bases
router.get('/bases', async (req, res) => {
    try {
        const baseNames = await db.getAllBases()
        res.json(baseNames)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

router.get('/bases/:id', async (req, res) => {
    try {
        const base = await db.getBase(req.params.id)
        res.json(base)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

router.get('/glazes/:id', async (req, res) => {
    try {
        const glaze = await db.getGlaze(req.params.id)
        res.json(glaze)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const donutId = Number(req.params.id)
        if (isNaN(donutId)) return res.status(400).json({message: 'Invalid Donut ID'})

        const donut = await db.getDonut(donutId)
        if (!donut) return res.status(404).json({message: `Donut with id ${donutId} does not exist`})

        else res.json(donut)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

router.post('/', async (req, res) => {
})

router.delete('/:id', async (req, res) => {

})

router.get('/me', async (req, res) => {

})

export default router
