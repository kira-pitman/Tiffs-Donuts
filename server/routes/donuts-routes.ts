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

export default router
