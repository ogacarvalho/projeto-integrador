
const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto");
const Movimentacao = require("../models/Movimentacao");


router.post("/", async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

    await produto.update(req.body);
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

    await produto.update(req.body);
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

    await produto.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/:id/baixa", async (req, res) => {
  try {

    const { id } = req.params;
    const { quantidade, motivo } = req.body;


    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }


    const quantidadeAnterior = produto.quantidade;
    const quantidadeBaixada = parseInt(quantidade, 10);
    const quantidadeFinal = quantidadeAnterior - quantidadeBaixada;


    await produto.update({ quantidade: quantidadeFinal });


    const movimentacao = await Movimentacao.create({
      idProduto: produto.id,
      quantidade: quantidadeBaixada,
      motivo: motivo || null,

    });


    return res.status(201).json({
      idProduto: produto.id,
      quantidadeAnterior,
      quantidadeBaixada,
      quantidadeFinal,
      motivo: movimentacao.motivo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;