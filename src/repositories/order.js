const prisma = require("../database/prisma")

exports.createOrder = async (data) => {

    return prisma.order.create({
        data: {
            orderId: data.orderId,
            value: data.value,
            creationDate: data.creationDate,
            items: {
                create: data.items
            }
        },
        include: { items: true }
    })

}

exports.getOrder = async (orderId) => {

    return prisma.order.findUnique({
        where: { orderId },
        include: { items: true }
    })

}

exports.listOrders = async () => {

    return prisma.order.findMany({
        include: { items: true }
    })

}

exports.updateOrder = async (orderId, data) => {

    return prisma.order.update({
        where: { orderId },
        data: {
            value: data.value
        }
    })

}

exports.deleteOrder = async (orderId) => {

    return prisma.order.delete({
        where: { orderId }
    })

}