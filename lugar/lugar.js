const axios = require('axios')

const getLugarLatLng = async (direccion)=>{

    let encodedUrl = encodeURI(direccion)

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    
    if( respuesta.data.status == "ZERO_RESULTS" ){
        throw new Error(`No hay resultados para la direccion : ${direccion}`)
        
    }
    let location = respuesta.data.results[0]
    let coors = location.geometry.location
   
    

    return {
        direccion: direccion ,
        lat:  coors.lat,
        lng : coors.lng
    }

}

module.exports ={
    getLugarLatLng
}

