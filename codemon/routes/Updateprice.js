import express from "express"
import productModel from "../Models/productSchema.js"
import { body, validationResult } from "express-validator"
const router = express.Router()

router.put(
  "/:id",
  body("price", "Enter a price").notEmpty(),
  async (req, res) => {
    const { price } = req.body
    const errors = validationResult(req)

    try {
      const id = req.params.id

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const updateproduct = await productModel.findByIdAndUpdate(
        id,
        { price: price },
        { new: true }
      )
      if (updateproduct) {
      await updateproduct?.save()
      return res.status(200).json({message:`Product with ID ${id} updated successfully`, product:updateproduct})
      } else {
        return res.status(401).json(`cannot find any product with ${id} associated id`)
      }
    } catch (error) {
      console.log(error)
    }
  }
)

export default router
