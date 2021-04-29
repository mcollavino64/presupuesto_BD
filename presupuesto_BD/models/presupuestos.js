const { DataTypes } = require('sequelize');
const sequelize = require('../conexion');

const presupuestos = sequelize.define('presupuestos', {
    inicial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    final: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName:'presupuestos',
    timestamps: false
    // underscored: true
});

module.exports = presupuestos;