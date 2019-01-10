const axios = require('axios');


const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBs5gppd-Ju0YVRJLgtAmEI98RF8yPdQ3A`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados');
    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;


    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }

}

module.exports = {
    getLugarLatLng
}
