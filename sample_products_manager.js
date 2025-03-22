import {Product} from "./product.js";

const sampleProducts = [
    { /*id: randomUUID(), */ name: 'Table', description: 'Blue Table', cost: 150 },
    { /*id: randomUUID(), */ name: 'Harry Potter DVD', description: '25th Ann Edition', cost: 750 },
    { /*id: randomUUID(), */ name: 'Intestellar Book', description: 'Science and Beyond', cost: 500 }
]


const populateSampleProducts = async () => {

    await createSampleProducts()
}


async function removeSampleProducts(){

    console.log("WITHIN removeSampleProducts METHOD")

    await Product.find({})
        .then( (products) => {

            if (products.length === 0) {
                console.log("No Products found for cleanup")
            }

            products.forEach( async (product) => {

                console.log(`removeSampleProducts: Fetched Product is ${product}`)

                 const res = await Product.deleteOne({_id: product._id})
                    .then( (response) => {
                        console.log(`removeSampleProducts: Product with id ${product._id} deleted successfully...`)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
        })
        .catch((error) => {
            console.log("Error loading the Sample Products")
            console.log(error);
        })

}

async function createSampleProducts() {

    console.log("WITHIN createSampleProducts METHOD")

    sampleProducts.forEach( (sampleProduct) => {

        Product.create(sampleProduct)
            .then( (result) => {
                console.log("createSampleProducts: Sample Product created successfully")
                console.log(result)
            })
            .catch( (err) => {
                console.log("Error creating Sample Product")
                console.log(err);
            })

    })

}

export {populateSampleProducts, removeSampleProducts, createSampleProducts}