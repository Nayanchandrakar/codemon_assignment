import mongoose from 'mongoose'

const products = new mongoose.Schema({
      name: {
        type: String,
        requried: true,
      },
      description: {
        type: String,
        requried: true,
      },
      price: {
        type: Number,
        requried: true,
      },
      Date: {
        type: Date,
        default: Date.now,
      },
})


const productModel = mongoose.model('products',products)

export default productModel