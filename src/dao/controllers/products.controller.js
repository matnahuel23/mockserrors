const { generateProduct } = require ("../../utils.js")
const ProductDTO = require ("../dtos/productsDTOS.js")

getProducts = async (req, res) => {
    let products = []
    for (let i = 0; i < 50; i++) {
        products.push(generateProduct())
    }

    res.send({ status: "success", payload: products })
}

createProduct = async (req, res) => {
        products = []
        try {
            let { title, description, price} = req.body;
            let product = new ProductDTO({title, description, price})
            if (!title || !description || !price) {
                return res.status(400).send({ status: "error", error: 'Todos los campos obligatorios deben ser proporcionados.' });
            }
            // Agregar el producto en la base de datos
            let result = products.push(product)
            res.send({ result: "success", payload: result });
        } catch (error) {
            res.status(500).send({ status: "error", error: 'Error al agregar el producto. Detalles: ' + error.message });
        }
}

module.exports = { getProducts, createProduct }