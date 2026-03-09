const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Orders API",
      version: "1.0.0",
      description: "API para gerenciamento de pedidos"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },

    security: [
      {
        bearerAuth: []
      }
    ],

    tags: [
      {
        name: "Auth",
        description: "Autenticação"
      },
      {
        name: "Orders",
        description: "Gerenciamento de pedidos"
      }
    ]
  },

  apis: ["./src/routes/*.js"]
}

const specs = swaggerJsdoc(options)

module.exports = { swaggerUi, specs }