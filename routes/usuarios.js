
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");


router.post("/", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    
    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ message: "Nome, email e senha são obrigatórios" });
    }

    
    const jaExiste = await Usuario.findOne({ where: { email } });
    if (jaExiste) {
      return res.status(400).json({ message: "Email já está em uso" });
    }

    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senha, salt);

    
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: hash,
    });

    return res.status(201).json({
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      message: "Usuário criado com sucesso!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res
        .status(400)
        .json({ message: "Informe email e senha" });
    }

    
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res
        .status(401)
        .json({ message: "Usuário ou senha inválidos" });
    }

    
    const senhaValida = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaValida) {
      return res
        .status(401)
        .json({ message: "Usuário ou senha inválidos" });
    }

    
    
    return res.json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      message: "Login realizado com sucesso!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;