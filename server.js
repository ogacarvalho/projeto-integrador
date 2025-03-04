
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const produtosRoutes = require("./routes/produtos");
const relatoriosRoutes = require("./routes/relatorios");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/produtos", produtosRoutes);
app.use("/api/relatorios", relatoriosRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  console.log("Banco de dados (SQLite) conectado!");
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});