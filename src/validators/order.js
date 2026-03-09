const { z } = require("zod")

const itemSchema = z.object({
  idItem: z.string(),
  quantidadeItem: z.number(),
  valorItem: z.number()
})

const orderSchema = z.object({
  numeroPedido: z.string(),
  valorTotal: z.number(),
  dataCriacao: z.string(),
  items: z.array(itemSchema)
})

module.exports = orderSchema