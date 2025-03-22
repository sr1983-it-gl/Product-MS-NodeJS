
import {Product} from "./product.js"

const getAllProducts = (req, res) => {

    Product.find()
        .then((products) => res.json(products))
        .catch((err) => res.status(404).json({ msg: "No Products found" }));
}

const postProduct = (req, res) => {

    const reqBody = req.body;
    console.log(`Request body without JSON.stringify is ${reqBody}`);
    console.log(`Request body with JSON.stringify  ${JSON.stringify(reqBody)}`);

    const productName = req.body.name;
    const productDescription = req.body.description;
    const productCost = req.body.cost;

    const newProductObject = {

        name: productName,
        description: productDescription,
        cost: productCost
    }

    Product.create(newProductObject)
        .then((createdProduct) => {

            res.status(201).send(createdProduct)
        })
        .catch((error) => {
            console.log("Error creating product", error)
        })

}

const getProduct = (req, res) => {

    console.log("Params -> " + JSON.stringify(req.params));
    const productId = req.params.id;

    console.log(`ID is ${productId}`);

    Product.findById(productId)
        .then((productObject) => {
            res.send(productObject);
        })
        .catch((error) => {
            console.log("Error getting product", error)

            const errorResponse = {
                message: `Product by id ${productId} not found`,
                technicalMessage: 'Check the request parameter value sent as part of the URL'
            }
            res.status(404).send(errorResponse);
        })
}


export {getAllProducts, postProduct, getProduct}