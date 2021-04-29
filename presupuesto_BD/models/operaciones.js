const { DataTypes } = require('sequelize');
const sequelize = require('../conexion');

const operaciones = sequelize.define('operaciones', {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipoGasto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaGasto: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ingresoEgreso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    presupuestos_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    tableName:'operaciones',
    timestamps: false
});

module.exports = operaciones;