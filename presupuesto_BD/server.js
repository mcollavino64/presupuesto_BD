const express = require("express");
const db = require("./conexion");
const server = express();
server.use(express.json()); // parsear el body a un objeto
const PORT = process.env.APP_PORT ? process.env.APP_PORT : 3001;

const presupuesto = require('./models/presupuestos');
const operacion = require('./models/operaciones');

server.post("/presupuestos", async (request, response) => {

  const gastos  = JSON.parse(request.body.gastos)
  const { inicial, final } = request.body;
  const insertResult = presupuesto.build({ inicial, final });

  try {
    response.status(201).json(await insertResult.save());
    const presupuestoId = insertResult[0]; //aun no puedo recuperar el ultimo id insertado en la tabla presupuestos
    
    const insertPromises = gastos.map(gasto => {

      const cantidad = gasto.cantidad
      const tipoGasto = gasto.tipoGasto
      const ingresoEgreso = gasto.ingresoEgreso
      const fechaGasto = gasto.fechaGasto

      const insertGasto = operacion.build({ cantidad, tipoGasto, fechaGasto, ingresoEgreso, presupuestoId });  
      insertGasto.save();
    });

  } catch (e) {
    response.status(400).json({ error: e.message });
  }

  
});

// server.post("/presupuestos", async (request, response) => {

//   const gastos  = JSON.parse(request.body.gastos)

//   // const insertPromises = gastos.map(gasto => {
//   //   // console.log('entra al map')
//   //   const presupuestoId = 1
//   //   const cantidad = gasto.cantidad
//   //   const tipoGasto = gasto.tipoGasto
//   //   const ingresoEgreso = gasto.ingresoEgreso
//   //   const fechaGasto = gasto.fechaGasto
//   //   const insertGasto = operacion.build({ cantidad, tipoGasto, fechaGasto, ingresoEgreso, presupuestoId });  
//   //   insertGasto.save();
//   // });

// });





//5. levantar el servidor
server.listen(PORT, () => {
  console.log(`servidor iniciado en ${PORT}`);
});
