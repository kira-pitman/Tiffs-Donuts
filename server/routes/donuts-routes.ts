import express from 'express'
import * as db from '../db/donuts-db'

const router = express.Router()

// Get /api/v1/donuts/flavors
router.get('/flavors', async (req, res) => {
  try {
    const flavorNames = await db.getAllFlavorNames()
    res.json(flavorNames)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

// Get /api/v1/donuts/bases
router.get('/bases', async (req, res) => {
  try {
    const baseNames = await db.getAllBaseNames()
    res.json(baseNames)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

// Get /api/v1/donuts/bases/:name
router.get('/bases/:name', async (req, res) => {
  try {
    const bases = await db.getBaseByName(req.params.name)
    res.json(bases)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

// Get /api/v1/donuts/flavors/:name
router.get('/flavors/:name', async (req, res) => {
  try {
    const flavors = await db.getFlavorByName(req.params.name)
    res.json(flavors)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

export default router
