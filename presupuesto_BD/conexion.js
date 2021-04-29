const sequalize = require('sequelize');
const user = process.env.DB_USER || 'root';

const conectionString = 'mysql://root@localhost:3306/presupuestos';
const sequelizeObject = new sequalize(conectionString);

sequelizeObject.authenticate().then(() =>{
    console.log('conexion exitosa..');
}).catch( e => {
    console.error(e.message)
});

module.exports = sequelizeObject;