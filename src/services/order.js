const repository = require("../repositories/order")
const mapCreate = require("../utils/mapCreate")
const mapUpdate = require("../utils/mapUpdate")

const normalizeOrderNumber = (numeroPedido) => {
  return numeroPedido.split("-")[0]
}

exports.create = async (data) => {

  data.numeroPedido = normalizeOrderNumber(data.numeroPedido)

  const mapped = mapCreate(data)

  return repository.createOrder(mapped)

}

exports.get = async (orderId) => {

  return repository.getOrder(orderId)

}

exports.list = async () => {

  return repository.listOrders()

}

exports.update = async (orderId, data) => {

  const mapped = mapUpdate(data)

  return repository.updateOrder(orderId, mapped)

}

exports.delete = async (orderId) => {

  return repository.deleteOrder(orderId)

}