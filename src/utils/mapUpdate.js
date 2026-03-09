function mapUpdateOrder(data) {

  const mapped = {}

  if (data.valorTotal !== undefined) {
    mapped.value = data.valorTotal
  }

  if (data.dataCriacao !== undefined) {
    mapped.creationDate = new Date(data.dataCriacao)
  }

  if (data.product !== undefined) {
    mapped.productId = Number(data.product)
  }

  if (data.quantity !== undefined) {
    mapped.quantity = data.quantity
  }

  if (data.price !== undefined) {
    mapped.price = data.price
  }

  return mapped
}

module.exports = mapUpdateOrder