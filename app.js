
import express from "express";
import {connectToDB} from "./db.js"
import {populateSampleProducts} from "./sample_products_manager.js"
import {getAllProducts, getProduct, postProduct} from "./product_controller.js"


const app = express();
app.use(express.json());


app.get("/products", getAllProducts)
app.post("/products", postProduct)
app.get("/products/:id", getProduct)


const PORT = process.env.PORT || 80;
const server = app.listen(PORT, () => {

   const initHandler = async () => {

    connectToDB();
  }

  initHandler()
      .then((response) => {
        console.log(`Server started and running at port ${PORT}`);
      })
      .catch((error) => {
        console.log(error)
      })

})