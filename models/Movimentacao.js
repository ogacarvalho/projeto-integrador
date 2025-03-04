
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Produto = require("./Produto");

const Movimentacao = sequelize.define(
  "Movimentacao",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    idProduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING,
    },
    dataMovimentacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "movimentacoes"
  }
);


Movimentacao.belongsTo(Produto, {
  foreignKey: "idProduto"
});


Produto.hasMany(Movimentacao, {
  foreignKey: "idProduto"
});

module.exports = Movimentacao;