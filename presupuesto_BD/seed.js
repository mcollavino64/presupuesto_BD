const presupuesto = require('./models/presupuestos');
const operacion = require('./models/operaciones');

const presupuestoData = [
    {inicial:100,final:500},
    {inicial:500,final:300}
];

const operacionData = [
    {cantidad:50,tipoGasto:'lunch',fechaGasto:'2021-04-26',ingresoEgreso:'Egreso',presupuestos_id:14},
    {cantidad:150,tipoGasto:'dinner',fechaGasto:'2021-04-26',ingresoEgreso:'Egreso',presupuestos_id:14},
];

//prueba seed operaciones --> OK
// const data = operacionData.map(async operation =>{
//     try{
//         const tempOperation = await operacion.create(operation,{fields: ['cantidad','tipoGasto','fechaGasto','ingresoEgreso','presupuestos_id'] })
//     } catch(e){
//         console.log(e.message);
//     }
// });


//prueba seed presupuesto --> OK
// const data = presupuestoData.map(async budget =>{
//     try{
//         const tempBudget = await presupuesto.create(budget,{fields: ['inicial','final'] })
//     } catch(e){
//         console.log(e.message);
//     }
// });

