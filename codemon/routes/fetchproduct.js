import express from "express"
import productModel from "../Models/productSchema.js"
const router = express.Router()

router.get("/", async (req, res) => {
  const products = await productModel.find()
  return res.status(200).json(products)
})

export default router
