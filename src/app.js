const express = require("express")
const orderRoutes = require("./routes/order")
const authRoutes = require("./routes/auth")
const { swaggerUi, specs } = require("./docs/swagger")
require("dotenv").config()

const app = express()

app.use(express.json())

app.use(authRoutes)
app.use(orderRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

app.listen(3000, () => {
    console.log("API running on port 3000")
})

module.exports = app