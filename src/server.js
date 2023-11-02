const express = require ('express')
const usersRouter = require ('./routes/users.router.js')
const productsRouter = require ('./routes/products.router.js')


const app = express()
const PORT = 8080

app.use(express.json())
app.use("/mockingusers", usersRouter.router)
app.use("/mockingproducts", productsRouter.router)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})