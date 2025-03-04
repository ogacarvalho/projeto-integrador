const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Produto = require("../models/Produto");

router.get("/estoque-baixo", async (req, res) => {
    try {

        const limite = parseInt(req.query.limite, 10) || 10;

        const produtos = await Produto.findAll({
            where: {
                quantidade: {
                    [Op.lte]: limite,
                },
            },

            order: [["quantidade", "ASC"]],
        });

        return res.json(produtos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
