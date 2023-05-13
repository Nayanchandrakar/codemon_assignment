import express from "express"
import productModel from "../Models/productSchema.js"
import { body, validationResult } from "express-validator"
const router = express.Router()

router.post(
  "/",
  body("name", "Enter min 3 words").isLength({ min: 3 }),
  body("description", "Enter Description minimum 16 words").isLength({
    min: 15,
  }),
  body("price", "Enter a price").notEmpty(),
  async (req, res) => {
    const { name, description, price } = req.body
    const errors = validationResult(req)

    try {
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const productExist = await productModel.findOne({ name: name })

      if (productExist) {
        return res.status(401).json({ message: "product already exists" })
      }

      const createproduct = await productModel.create({
        name,
        description,
        price,
      })

      if (createproduct) {
        await createproduct.save()
        return res.status(200).json(createproduct)
      } else {
        return res.status(402).json("an error occured")
      }
    } catch (error) {
      console.log(error)
    }
  }
)

export default router
