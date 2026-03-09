const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()

const SECRET = "supersecret"

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autenticação do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT
 */
router.post("/login",(req,res)=>{

    const {user,password} = req.body

    if(user === "admin" && password === "123"){

        const token = jwt.sign({user},SECRET,{expiresIn:"1h"})

        return res.json({token})

    }

    res.status(401).json({message:"Invalid credentials"})
})

module.exports = router