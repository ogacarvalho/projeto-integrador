const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Produto = sequelize.define("Produto", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dataValidade: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cor: {
    type: DataTypes.STRING,
  },
  tamanho: {
    type: DataTypes.STRING,
  },
  localArmazenamento: {
    type: DataTypes.STRING,
  },
});

module.exports = Produto;