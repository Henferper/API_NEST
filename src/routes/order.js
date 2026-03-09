const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth")
const controller = require("../controllers/order")

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Order]
 *     security:
 *       - bearerAuth: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *               valorTotal:
 *                 type: number
 *               dataCriacao:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                     quantidadeItem:
 *                       type: number
 *                     valorItem:
 *                       type: number
 *     responses:
 *       201:
 *         description: Pedido criado
 */
router.post("/order",auth,controller.create)

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
router.get("/order/list",auth,controller.list)

/**
 * @swagger
 * /order/{orderId}:
 *   get:
 *     summary: Buscar pedido por ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido encontrado
 */
router.get("/order/:orderId",auth,controller.get)

/**
 * @swagger
 * /order/{orderId}:
 *   put:
 *     summary: Atualizar um pedido
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Pedido atualizado
 */
router.put("/order/:orderId",auth,controller.update)

/**
 * @swagger
 * /order/{orderId}:
 *   delete:
 *     summary: Deletar um pedido
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido deletado
 */
router.delete("/order/:orderId",auth,controller.delete)

module.exports = router