const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc : "direccion para obtener clima",
        demand : true
    }
}).argv;


let getInfo = async(direccion)=>{

    let coors = await lugar.getLugarLatLng(direccion)
    let temp = await clima.getClima(coors.lat,coors.lng)
    return temp
}

getInfo(argv.direccion).then((temp)=>{
    console.log("temperatura",temp);
    
}).catch(err=>{
    console.log(err);
    
})


