
import {connectToDB} from "./db.js"
import {populateSampleProducts} from "./sample_products_manager.js"


const main = async () => {

  connectToDB();
  await populateSampleProducts()

  console.log("Data successfully inserted...")

}

await main()
