const axios = require('axios');


const getClima = async (lat, lng) => {

    // let resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=56065d695ddbba06338fdc0fb3f30ebc`);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=2&lon=2&units=metric&appid=56065d695ddbba06338fdc0fb3f30ebc`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
