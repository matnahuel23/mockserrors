import express from 'express'
import usersRouter from './routes/users.js'
import productsRouter from './routes/products.js'


const app = express()
const PORT = 8080

app.use("/api/users", usersRouter)
app.use("/api/products", productsRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})