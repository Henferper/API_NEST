const service = require("../services/order")

const orderSchema = require("../validators/order")

exports.create = async (req,res)=>{

    try{

        const order = await service.create(req.body)

        res.status(201).json(order)

    }catch(error){

        res.status(500).json({error:error.message})

    }

}

exports.get = async (req,res)=>{

    const order = await service.get(req.params.orderId)

    res.json(order)

}

exports.list = async (req,res)=>{

    const orders = await service.list()

    res.json(orders)

}

exports.update = async (req,res)=>{

    const order = await service.update(req.params.orderId,req.body)

    res.json(order)

}

exports.delete = async (req,res)=>{

    await service.delete(req.params.orderId)

    res.json({message:"Order deleted"})

}