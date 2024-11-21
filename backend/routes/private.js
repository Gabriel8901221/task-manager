import express from "express"

import { PrismaClient } from "@prisma/client"

const router = express.Router()
//const prisma = new PrismaClient()


router.get('/dashboard', (req, res) =>{
  try {
    console.log('User loged in server!')
  } catch (error) {
    res.status(500).json({message: "failed server!"})
  }
})

/*router.get('/dashboard', async (req, res) =>{
  try {
    
  } catch (error) {
    res.status(500).json({message: "failed server!"})
  }
})*/


export default router