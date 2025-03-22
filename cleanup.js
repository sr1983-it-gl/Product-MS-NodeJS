

import {connectToDB} from "./db.js"
import {removeSampleProducts} from "./sample_products_manager.js"

await connectToDB();
await removeSampleProducts()

process.exit()