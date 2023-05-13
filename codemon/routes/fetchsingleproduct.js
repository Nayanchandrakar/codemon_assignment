import express from "express"
import productModel from "../Models/productSchema.js"
const router = express.Router()

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const findproduct = await productModel.findById(id)

    if (findproduct == null) {
      res.status(400).json({ message: "no product exist" })
    }

    return res.status(200).json(findproduct)
  } catch (error) {
    console.log(error)
  }
})

export default router
