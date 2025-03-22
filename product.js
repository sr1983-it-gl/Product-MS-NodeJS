

import mongoose from 'mongoose';

import {randomUUID} from "crypto"

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
  }
});

const Product = mongoose.model("product", ProductSchema);
export {Product}

